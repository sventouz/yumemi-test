import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
)

type Props = {
  populationdata: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}

const PopulationChart = ({ populationdata }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'グラフタイトル',
      },
    },
  }

  const dataAll = []
  const categories = []

  for (const p of populationdata) {
    const data = []
    for (const pData of p.data) {
      data.push(pData.value)
      categories.push(String(pData.year))
    }
    dataAll.push({
      label: p.prefName,
      data: data,
    })
  }

  const labels = [
    '1960',
    '1965',
    '1970',
    '1975',
    '1980',
    '1985',
    '1990',
    '1995',
    '2000',
    '2005',
    '2010',
    '2015',
    '2020',
    '2025',
    '2030',
    '2035',
    '2040',
    '2045',
  ]

  const data = {
    labels,
    datasets: dataAll,
  }

  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default PopulationChart
