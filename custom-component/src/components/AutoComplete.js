import React from 'react'
import styled from 'styled-components'

import Title from '../common/Title'

const AutoComplete = () => {
  return (
    <WholeBox>
      <Title text='AutoComplete' />
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

export default AutoComplete
