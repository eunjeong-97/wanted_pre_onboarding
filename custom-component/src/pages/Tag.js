import React from 'react'
import styled from 'styled-components'

import Title from '../components/Title'

const Tag = () => {
  return (
    <WholeBox>
      <Title text='Tag' />
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

export default Tag
