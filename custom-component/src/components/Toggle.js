import React from 'react'
import styled from 'styled-components'

import Title from '../common/Title'

const Toggle = () => {
  return (
    <WholeBox>
      <Title text='Toggle' />
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

export default Toggle
