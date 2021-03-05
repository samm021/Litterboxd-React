import React from 'react'
import Lottie from 'react-lottie'
import * as empty from '../style/empty.json'

const defaultOption = {
  loop: true,
  autoplay: true,
  animationData: empty.default,
  renderedSettings: {
    preserveAspectRation: 'xMidYmid slice'
  }
}

const Empty = () => {
  return (
    <>
      <Lottie options={defaultOption} height={800} width={800} ></Lottie>
    </>
  )
}

export default Empty
