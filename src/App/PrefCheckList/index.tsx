import styled from 'styled-components'

const PrefName = styled.label`
  display: block;
  cursor: pointer;
`

const PrefList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
`

const PrefItem = styled.div`
  display: flex;
  padding: 10px;
`

type Props = {
  prefectures: {
    prefCode: number
    prefName: string
  }[]
  onChange: (name: string, prefName: number, check: boolean) => void
}

// 都道府県一覧のチェックボックスを表示するコンポーネント
const PrefCheckList = ({ prefectures, onChange }: Props) => {
  return (
    <>
      <PrefList>
        {prefectures.map((prefecture) => (
          <PrefItem key={prefecture.prefName}>
            <input
              type='checkbox'
              name='Prefecture name'
              onChange={(event) =>
                onChange(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked,
                )
              }
              id={'checkbox' + prefecture.prefCode}
            />
            <PrefName htmlFor={'checkbox' + prefecture.prefCode}>
              {prefecture.prefName.length === 3
                ? '　' + prefecture.prefName
                : prefecture.prefName}
            </PrefName>
          </PrefItem>
        ))}
      </PrefList>
    </>
  )
}

export default PrefCheckList
