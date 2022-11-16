import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PrefCheckList from './PrefCheckList'
import PopulationChart from './PopulationChart'

const Subtitles = styled.h2`
  font-size: 18px;
  margin-left: 15px;
  border-left: 5px solid red;
  border-bottom: 1px solid red;
  padding-left: 5px;
`

const Main = () => {
  const [prefectures, setPreFectures] = useState<{
    message: null
    result: {
      prefCode: number
      prefName: string
    }[]
  } | null>(null)

  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([])

  useEffect(() => {
    // 都道府県一覧を取得する
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': import.meta.env.VITE_API_KEY },
      })
      .then((results) => {
        setPreFectures(results.data)
      })
      .catch((error) => {
        throw error
      })
  }, [])

  // チェックボックスをクリックした際の処理
  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean,
  ) => {
    const c_prefPopulation = prefPopulation.slice()

    // チェックをつけた処理
    if (check) {
      if (
        c_prefPopulation.findIndex((value) => value.prefName === prefName) !==
        -1
      )
        return

      axios
        .get(
          'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
            String(prefCode),
          {
            headers: {
              'X-API-KEY': import.meta.env.VITE_API_KEY,
            },
          },
        )
        .then((results) => {
          c_prefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[0].data,
          })

          setPrefPopulation(c_prefPopulation)
        })
        .catch((error) => {
          throw error
        })
    }
    // チェックを外した処理
    else {
      const deleteIndex = c_prefPopulation.findIndex(
        (value) => value.prefName === prefName,
      )
      if (deleteIndex === -1) return
      c_prefPopulation.splice(deleteIndex, 1)
      setPrefPopulation(c_prefPopulation)
    }
  }

  return (
    <main>
      <section>
        <Subtitles>都道府県</Subtitles>
        {prefectures && (
          <PrefCheckList
            prefectures={prefectures.result}
            onChange={handleClickCheck}
          />
        )}
      </section>
      <section>
        <Subtitles>人口推移グラフ</Subtitles>
        <PopulationChart populationdata={prefPopulation} />
      </section>
    </main>
  )
}

export default Main
