import React from 'react'
import styled from 'styled-components'

import Title from '../components/Title'

const ClickToEdit = () => {
  return (
    <WholeBox>
      <Title text='ClickToEdit' />
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

export default ClickToEdit
