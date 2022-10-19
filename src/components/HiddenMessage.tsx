import { useState } from 'react'

type HiddenMessageProps = {
  children: React.ReactNode
}

const HiddenMessage = (props: HiddenMessageProps) => {
  const { children } = props
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  )
}
export default HiddenMessage
