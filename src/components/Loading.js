import React from 'react'
import Lottie from 'react-lottie'
import * as loading from '../style/loading.json'

const defaultOption = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  renderedSettings: {
    preserveAspectRation: 'xMidYmid slice'
  }
}

const Loading = () => {
  return (
    <>
      <Lottie options={defaultOption} height={500} width={500} ></Lottie>
    </>
  )
}

export default Loading
