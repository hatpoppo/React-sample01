import { useCallback, useState } from 'react'
import Button from './Button'

const CountButton = () => {
  const label = 'Count Button'
  const max = 5
  const [count, setCount] = useState(0)
  const onClick = useCallback(() => {
    const newCount = count + 1
    setCount(newCount)
    if (newCount >= max) {
      console.log(`最大値${max}に到達`)
    }
  }, [count])
  const disabled = count >= max
  const text = disabled ? 'もうクリック出来ません' : `あなたは${count}回クリックしました`
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      coloer='red'
      label={label}
      text={text}></Button>
  )
}
export default CountButton
