import React from 'react'
import logo from './logo.svg'
import './App.css'
import './components/Hello'
import Hello from './components/Hello'
import Message from './components/Message'
import Parent from './components/ContainerSample'
import Page from './components/ContextSample'
import Counter from './components/Counter'
import CounterWithReducer from './components/CounterWithReducer'
import MemoSample from './components/MemoSample'
import Title from './components/UseEffectSample'
import RefSample from './components/RefSample'
import CountButton from './components/CountButton'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
        <Hello></Hello>
        <Message content='こんにちは'></Message>
        <Parent></Parent>
        <Page></Page>
        <Counter initialValue={1}></Counter>
        <CounterWithReducer initialValue={0}></CounterWithReducer>
        <MemoSample></MemoSample>
        <Title></Title>
        <RefSample></RefSample>
        <CountButton></CountButton>
      </header>
    </div>
  )
}

export default App
