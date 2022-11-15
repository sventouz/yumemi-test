import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  populationdata: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}

const Charts = styled.div`
  padding: 12px;
`

const PopulationChart = ({ populationdata }: Props) => {
  const series: Highcharts.SeriesOptionsType[] = []
  const categories = []

  for (const p of populationdata) {
    const data = []

    for (const pData of p.data) {
      data.push(pData.value)
      categories.push(String(pData.year))
    }

    series.push({
      type: 'line',
      name: p.prefName,
      data: data,
    })
  }

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: '#eee',
    },
    title: {
      text: '総人口推移グラフ',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '総人口（万人）',
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return (
    <Charts>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Charts>
  )
}

export default PopulationChart
