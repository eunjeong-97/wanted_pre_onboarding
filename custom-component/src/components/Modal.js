import React from 'react'
import styled from 'styled-components'

import Title from '../common/Title'

const Modal = () => {
  return (
    <WholeBox>
      <Title text='Modal' />
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

export default Modal
