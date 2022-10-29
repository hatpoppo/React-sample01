import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../components/Login'

const server = setupServer(
  rest.get('/login', (req, res, ctx) => {
    return res(ctx.json({ output: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<Login />)

  userEvent.click(screen.getByText('Not Login'))

  await screen.findByRole('heading', { name: 'hello there' })

  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test('handles server errer', async () => {
  server.use(
    rest.get('/login', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<Login />)

  userEvent.click(screen.getByText('Not Login'))

  await waitFor(() => {
    expect(screen.getByTestId('alert').innerHTML).toBe('Oops, failed to fetch!')
  })

  await waitFor(() => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
  })
})
