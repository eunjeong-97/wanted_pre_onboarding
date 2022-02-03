import React from 'react'
import styled from 'styled-components'

import Title from '../components/Title'

const ClickToEdit = () => {
  return (
    <WholeBox>
      <Title text='ClickToEdit' />
      <NotReady>아직 준비중!</NotReady>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

const NotReady = styled.div``

export default ClickToEdit
