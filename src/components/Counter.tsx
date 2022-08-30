import { useState } from 'react'

type CounterProps = {
  initialValue: number
}
const Counter = (props: CounterProps) => {
  const { initialValue } = props
  const [count, setCount] = useState(initialValue)
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(initialValue)}>リセット</button>
      <button
        onClick={() => {
          setCount(count + 1)
        }}>
        +（値版）
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}>
        -
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1)
        }}>
        +（関数版）
      </button>
    </div>
  )
}
export default Counter
