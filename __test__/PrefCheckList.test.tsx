import React from 'react'
import { describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PrefCheckList from '../src/App/PrefCheckList/'
import { prefectures } from './mockData/prefectureData'

const mockHandleClickCheck = () => {
  return ''
}

describe('test PrefCheckList', () => {
  test('loads and displays PrefCheckList', () => {
    render(
      <PrefCheckList
        prefectures={prefectures}
        onChange={mockHandleClickCheck}
      />,
    )
  })

  test('prefectures props', () => {
    render(
      <PrefCheckList
        prefectures={prefectures}
        onChange={mockHandleClickCheck}
      />,
    )
    const dummyCheckBox = screen.getAllByTestId('dummyCheckBox')
    expect(dummyCheckBox).toHaveLength(47)
  })
})
