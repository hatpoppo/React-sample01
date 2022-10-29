import axios from 'axios'
import { useReducer, useState } from 'react'

type LoginState = {
  error: null | string
  login: null | string
}
type LoginAction = {
  type: 'SUCCESS' | 'ERROR'
  output: string
}
const initialState: LoginState = {
  error: null,
  login: null,
}
const LoginReduser = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        login: action.output,
      }
    }
    case 'ERROR': {
      return {
        error: action.output,
        login: null,
      }
    }
    default: {
      return state
    }
  }
}
const Login = () => {
  const [{ error, login }, dispatch] = useReducer(
    LoginReduser,
    initialState as never
  )
  const [buttonClicked, setButtonClicked] = useState(false)
  const fetchLogin = async () => {
    axios
      .get('/login')
      .then((response) => {
        const { data } = response
        const { output } = data
        dispatch({ type: 'SUCCESS', output })
        setButtonClicked(true)
      })
      .catch((error) => {
        const output = error
        dispatch({ type: 'ERROR', output })
      })
  }
  const buttonText = buttonClicked ? 'Login' : 'Not Login'

  return (
    <div>
      <button onClick={fetchLogin} disabled={buttonClicked}>
        {buttonText}
      </button>
      {login && <h1>{login}</h1>}
      {error && <p data-testid="alert">Oops, failed to fetch!</p>}
    </div>
  )
}
export default Login
