import React from 'react'
import { useRouter } from 'next/router'

import Head from '@components/Head'
import firebase from '@lib/FirebaseSDK'
import Share from '@components/Share/Share'

import * as S from './ViewPoll.style'
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
        { name: snap.val().name, value: snap.val().name },
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

  const Vote: React.MouseEventHandler<HTMLElement> = (e) => {
    const index = e.currentTarget.getAttribute('id')
    firebaseRef
      .child('options')
      .child(index!)
      .child('value')
      .once('value')
      .then((snap) => {
        firebaseRef
          .child('options')
          .child(index!)
          .child('value')
          .set(parseInt(snap.val() + 1))

        Router.push(`/result/${id}`)
      })
  }

  if (title !== null) {
    return (
      <S.Wrapper>
        <Head title={title} />
        <S.Title>{title}</S.Title>
        <S.OptionsWrapper>
          {options.map((option, index) => (
            <S.OptionsBox key={index} id={index.toString()} onClick={Vote}>
              {option.name}
            </S.OptionsBox>
          ))}
        </S.OptionsWrapper>
        <Share title={title} id={id!.toString()} results={false} />
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
