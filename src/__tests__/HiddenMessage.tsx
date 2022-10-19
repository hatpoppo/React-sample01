import { render, fireEvent, screen } from '@testing-library/react'
import HiddenMessage from '../components/HiddenMessage'

test('shows the children the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<HiddenMessage>{testMessage}</HiddenMessage>)

  expect(screen.queryByText(testMessage)).toBeNull()

  fireEvent.click(screen.getByLabelText(/show/i))
  expect(screen.queryByText(testMessage)).toBeInTheDocument()
})
