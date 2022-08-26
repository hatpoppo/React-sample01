const Hello = () => {
  const onClick = () => {
    console.log('Hello')
  }
  const text = 'Hello, React'
  return <div onClick={onClick}>{text}</div>
}
export default Hello
