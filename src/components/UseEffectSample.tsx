import { useState, useEffect } from 'react'
const Title = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Youre clicked ${count} times`
  }, [count])
  return (
    <div>
      <p> ${count} 回クリックしました。 </p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}>
        クリック
      </button>
    </div>
  )
}
export default Title
