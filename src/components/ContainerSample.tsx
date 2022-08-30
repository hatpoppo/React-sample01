type ContainerProps = {
  title: string
  children: React.ReactNode
}
const Container = (props: ContainerProps) => {
  const { title, children } = props
  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div style={{ background: 'blue' }}>{children}</div>
    </div>
  )
}
const Parent = () => {
  return (
    <Container title='Hello'>
      <p>ここが子供要素</p>
    </Container>
  )
}
export default Parent
