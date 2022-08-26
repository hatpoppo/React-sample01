const Text = (props: { content: string }) => {
  const { content } = props
  return <p style={{ padding: '16px', backgroundColor: 'grey' }}>{content}</p>
}
export default Text
