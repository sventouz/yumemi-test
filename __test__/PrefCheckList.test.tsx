import React from 'react'
import { describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PrefCheckList from '../src/App/PrefCheckList/'
import { prefectures } from './mockData/prefectureData'

const handleClickCheck = () => {
  return ''
}

describe('test PrefCheckList', () => {
  test('loads and displays PrefCheckList', () => {
    render(
      <PrefCheckList prefectures={prefectures} onChange={handleClickCheck} />,
    )
  })

  test('prefectures props', () => {
    render(
      <PrefCheckList prefectures={prefectures} onChange={handleClickCheck} />,
    )
    const dummyCheckBox = screen.getAllByTestId('dummyCheckBox')
    expect(dummyCheckBox).toHaveLength(47)
  })

  // test('props to checkBox', () => {
  //   render(
  //     <PrefCheckList prefectures={prefectures} onChange={handleClickCheck} />,
  //   )
  //   const dummyCheckBox = screen.getAllByTestId('dummyCheckBox')
  //   expect(
  //     dummyCheckBox.forEach((d, i) => {
  //       expect(d).toHaveTextContent(prefectures[i].prefName)
  //       fireEvent.click(d.getElementsByClassName('dummyOnChange')[0])
  //       expect(handleClickCheck).toHaveBeenCalledTimes(i + 1)
  //     }),
  //   )
  // })
})
