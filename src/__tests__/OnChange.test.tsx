import { MouseEvent, useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const UpperInput = () => {
  const [upper, setUpper] = useState('')
  const handleChange = (e: { target: HTMLInputElement }) => {
    setUpper(e.target.value.toUpperCase())
  }
  return (
    <div>
      <label htmlFor="upper">Upper</label>
      <input id="upper" value={upper} onChange={handleChange} />
    </div>
  )
}

test('sets the value to the upper version of the value', () => {
  render(<UpperInput />)
  const upperInput = screen.getByLabelText(/upper/i) as HTMLInputElement
  const text = 'staff'
  userEvent.type(upperInput, text)
  expect(upperInput.value).toEqual(text.toUpperCase())
})

test('checkboxes (and radio) must use click', () => {
  const handleChange = jest.fn()
  const { container } = render(
    <input type="checkbox" onChange={handleChange} />
  )
  const checkbox = container.firstChild as HTMLInputElement
  //checkboxにとって、クリックイベントが発火するとchangeイベントハンドラーが呼ばれる
  // learn more: https://github.com/testing-library/react-testing-library/issues/156
  userEvent.click(checkbox)
  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(checkbox.checked).toBe(true)
})
