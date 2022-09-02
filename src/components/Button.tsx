type ButtonProps = {
  label: string
  text: string
  coloer: string
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
const Button = (props: ButtonProps) => {
  const { label, text, coloer, disabled, onClick } = props
  return (
    <div>
      <span>{label} </span>
      <button
        style={{ backgroundColor: coloer }}
        disabled={disabled}
        onClick={onClick}>
        {text}
      </button>
    </div>
  )
}
export default Button
