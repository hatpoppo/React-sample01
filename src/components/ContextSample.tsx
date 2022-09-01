import React, { useContext } from 'react'
const TitleContext = React.createContext('')
const Title = () => {
  const title = useContext(TitleContext)
  return <h1>{title}</h1>
}
const Header = () => {
  return <Title></Title>
}
const Page = () => {
  const title = 'Hello World'
  return (
    <TitleContext.Provider value={title}>
      <Header></Header>
    </TitleContext.Provider>
  )
}
export default Page
