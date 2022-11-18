import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App/App'

describe('PrefectureFieldset', () => {
  it('no props contents', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('prefectureTitle')).toHaveTextContent('都道府県')
  })
})
