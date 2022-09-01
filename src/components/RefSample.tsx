import { useRef, useState } from 'react'
const RefSample = () => {
  const num = useRef(100)
  const inputEL = useRef<HTMLInputElement | null>(null)
  const [text, setText] = useState('')
  const increment = () => {
    num.current += 1
  }
  const handleClick = () => {
    if (inputEL.current !== null) {
      setText(inputEL.current.value)
    }
  }
  return (
    <div>
      <h2>値参照</h2>
      <p onClick={increment}>num : {num.current} </p>
      <h2>DOM参照</h2>
      <input
        ref={inputEL}
        type='text'></input>
      <button onClick={handleClick}>テキスト表示</button>
      <p>入力した値は： {text} </p>
    </div>
  )
}
export default RefSample
