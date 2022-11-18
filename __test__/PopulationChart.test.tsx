import React from 'react'
import { describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopulationChart from '../src/App/PopulationChart/'
import { populationData } from './mockData/populationData'

describe('PopulationChart', () => {
  test('props to ChartJS', () => {
    render(<PopulationChart populationdata={populationData} />)

    expect(screen.getByTestId('dummyHighchartsReactOptions')).toHaveTextContent(
      '人口遷移グラフ:選択した都道府県のデータが表示されます。',
    )
  })
})
