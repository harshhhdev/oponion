import React from 'react'
import Router from 'next/router'

import * as S from './Chart.style'
import * as Icons from 'react-feather'

import firebase from '@components/FirebaseSDK'
import Chart from 'echarts-for-react'

const ChartComponent: React.FC = () => {
  const [title, setTitle] = React.useState('Untitled Poll')
  const inputRef = React.useRef<HTMLInputElement>(null)

  let firebaseRef = firebase.database().ref('Oponion/Polls')

  const optionInputRef = React.useRef<HTMLInputElement>(null)
  const [options, updateOptions] = React.useState<
    { name: string; value: number }[]
  >([])

  const UpdateTitle = () => {
    setTitle(inputRef.current!.value)
  }

  const AddOption = () => {
    if (options.length < 25 && optionInputRef.current!.value !== '') {
      updateOptions([
        ...options,
        { name: optionInputRef.current!.value, value: 1 },
      ])
      optionInputRef.current!.value = ''
    }
  }

  const DeleteOption: React.MouseEventHandler<HTMLElement> = (e) => {
    if (options.length > 2) {
      const name = e.currentTarget.getAttribute('id')
      updateOptions(options.filter((options) => options.name !== name))
    }
  }

  const CreatePoll = () => {
    if (title !== '') {
      firebaseRef
        .push({
          title: title,
          options: options,
          totalVotes: 0,
        })
        .then((snap) => {
          Router.push(snap.key!)
          console.log(snap)
        })
    }
  }

  React.useEffect(() => {
    updateOptions([
      {
        name: 'Option One',
        value: 1,
      },
      {
        name: 'Option Two',
        value: 1,
      },
    ])
  }, [])

  const ChartOptions = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: title,
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        data: options,
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function () {
          return Math.random() * 200
        },
      },
    ],
  }

  return (
    <S.Wrapper>
      <S.Input placeholder="Poll Title" ref={inputRef} onChange={UpdateTitle} />
      <S.OptionsBox>
        <S.OptionsName placeholder="Option Name" ref={optionInputRef} />
        <S.CreateOption onClick={AddOption}>
          <Icons.Plus />
        </S.CreateOption>
      </S.OptionsBox>
      {options.map((option, index) => (
        <S.ViewOption key={index} id={option.name} onClick={DeleteOption}>
          {option.name}
          <Icons.Trash />
        </S.ViewOption>
      ))}
      <S.ChartContainer>
        <Chart option={ChartOptions} />
      </S.ChartContainer>
      <S.CreatePollButton onClick={CreatePoll}>Create Poll</S.CreatePollButton>
    </S.Wrapper>
  )
}

export default ChartComponent
