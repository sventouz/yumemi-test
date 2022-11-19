import { colors } from '../Data/colorData'
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

type Data = {
  label: string
  data: number[]
  borderColor: string
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

  const dataAll: Data[] = []
  const labels: string[] = []

  populationdata.forEach((p, i) => {
    const data = []
    for (const pData of p.data) {
      data.push(pData.value)
      labels.push(String(pData.year))
    }
    dataAll.push({
      label: p.prefName,
      data: data,
      borderColor: colors[i],
    })
  })

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
