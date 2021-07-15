import React from 'react'

import Result from '@components/Result/Result'
import global from '@css/global.style'

import Footer from '@components/Footer/Footer'

const ViewPoll = () => {
  global()

  return (
    <>
      <Result />
      <Footer />
    </>
  )
}

export default ViewPoll
