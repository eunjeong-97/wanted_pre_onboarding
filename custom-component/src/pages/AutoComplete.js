import React from 'react'
import styled from 'styled-components'

import Title from '../components/Title'

const AutoComplete = () => {
  return (
    <WholeBox>
      <Title text='AutoComplete' />
      <NotReady>아직 준비중!</NotReady>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

const NotReady = styled.div``

export default AutoComplete
