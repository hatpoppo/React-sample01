import { render, screen } from '@testing-library/react'
import {
  NameContext,
  NameProvider,
  NameConsumer,
} from '../components/ReactContent'

/**
 * プロバイダーなしでデフォルト値の場合のコンテキストコンシューマをレンダリング
 */
test('NmaeConsumer shows default value', () => {
  render(<NameConsumer />)
  expect(screen.getByText(/^My Name Is : /)).toHaveTextContent(
    'My Name Is : Unknown'
  )
})

/**
 * プロバイダーでなくコンテキストコンシューマを使ったコンポーネントツリーのテスト
 */
test('NameConsyumer shows value from provider', () => {
  render(
    <NameContext.Provider value="C3PO">
      <NameConsumer />
    </NameContext.Provider>
  )
  expect(screen.getByText(/^My Name Is : C3PO/))
})

/**
 * コンテキストの値をプロバイドしたコンポーネントのテスト
 */
test('NameProvider composes full name from first , last', () => {
  render(
    <NameProvider first="Bob" last="Fett">
      <NameContext.Consumer>
        {(value) => <span>Received: {value}</span>}
      </NameContext.Consumer>
    </NameProvider>
  )
  expect(screen.getByText(/^Received:/).textContent).toBe('Received: Bob Fett')
})
