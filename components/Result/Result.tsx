import React from 'react'
import { useRouter } from 'next/router'

import Head from '@components/Head'
import firebase from '@lib/FirebaseSDK'
import Share from '@components/Share/Share'

import * as S from './Result.style'
import Chart from 'echarts-for-react'
import ReactLoading from 'react-loading'

const ViewPoll: React.FC = () => {
  const Router = useRouter()
  const { id } = Router.query

  const [title, setTitle] = React.useState('Poll Title')
  const [options, setOptions] = React.useState<
    { name: string; value: number }[]
  >([])

  React.useEffect(() => {
    if (!Router.isReady) return

    firebaseRef
      .child('title')
      .once('value')
      .then((snap) => {
        setTitle(snap.val())
      })
    firebaseRef.child('options').on('child_added', (snap) => {
      setOptions((oldOptions) => [
        ...oldOptions,
        { name: snap.val().name, value: snap.val().value },
      ])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router.isReady])

  if (!Router.isReady)
    return (
      <S.LoadingWrapper>
        <ReactLoading type="spin" />
      </S.LoadingWrapper>
    )

  const firebaseRef = firebase.database().ref(`Oponion/Polls/${id}`)

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

  if (title !== null) {
    return (
      <S.Wrapper>
        <Head title={title} />
        <S.Title>{title}</S.Title>
        <S.ChartContainer>
          <Chart option={ChartOptions} />
        </S.ChartContainer>
        <Share title={title} id={id!.toString()} results={true} />
      </S.Wrapper>
    )
  } else {
    return (
      <S.LoadingWrapper>
        <ReactLoading type="spin" />
      </S.LoadingWrapper>
    )
  }
}

export default ViewPoll
