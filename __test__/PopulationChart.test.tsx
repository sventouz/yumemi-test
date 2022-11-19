import React from 'react'
import { describe } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopulationChart from '../src/App/PopulationChart/'
import { populationData } from './mockData/populationData'

describe('PopulationChart', () => {
  test('props to ChartJS', () => {
    render(<PopulationChart populationdata={populationData} />)
  })
})
