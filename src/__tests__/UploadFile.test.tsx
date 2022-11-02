import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const UploadFile = () => {
  const [UploadFileName, setUploadFileName] = useState('')
  const handleUploadFile = (e: { target: HTMLInputElement }) => {
    if (e.target.files !== null) {
      const files = e.target.files as FileList
      setUploadFileName(files[0].name)
    }
  }
  return (
    <div>
      <label htmlFor="upload-file">Upload File</label>
      <input id="upload-file" onChange={handleUploadFile} type="file" />
      {UploadFileName && (
        <div>You have uploaded a file named {UploadFileName}</div>
      )}
    </div>
  )
}

test('Show the upload file name after the user upload a file', () => {
  render(<UploadFile />)
  const inputEl = screen.getByLabelText(/upload file/i)
  const file = new File(['a'], 'foobar.png', { type: 'image/png' })
  userEvent.upload(inputEl, file)
  expect(screen.getByText(/foobar\.png/)).toBeInTheDocument()
})
