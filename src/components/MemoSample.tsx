import React, { memo, useState } from 'react'
type FizzProps = {
  isFizz: boolean
}
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizzが再描画されました。isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}
type BazzProps = {
  isBazz: boolean
}
const Bazz = memo<BazzProps>((props) => {
  const { isBazz } = props

  console.log(`Bazzが再描画されました。isFizz=${isBazz}`)
  return <span>{isBazz ? 'Bazz' : ''}</span>
})
const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBazz = count % 5 === 0
  console.log(`Parentが再描画されました。count=${count}`)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p> {`現在のカウント：${count}`} </p>
      <p>
        <Fizz isFizz={isFizz}></Fizz>
        <Bazz isBazz={isBazz}></Bazz>
      </p>
    </div>
  )
}
export default Parent
