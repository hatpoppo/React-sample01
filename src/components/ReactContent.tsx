import { createContext } from 'react'

const NameContext = createContext('Unknown')
type NameProviderProps = {
  first: string
  last: string
  children: React.ReactNode
}

const NameProvider = (props: NameProviderProps) => {
  const fullName = `${props.first} ${props.last}`
  return (
    <NameContext.Provider value={fullName}>
      {' '}
      {props.children}{' '}
    </NameContext.Provider>
  )
}

const NameConsumer = () => (
  <NameContext.Consumer>
    {(value) => <div>My Name Is : {value}</div>}
  </NameContext.Consumer>
)
export { NameContext, NameProvider, NameConsumer }
