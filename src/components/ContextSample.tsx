import React from 'react'
const TitleContext = React.createContext('')
const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
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
