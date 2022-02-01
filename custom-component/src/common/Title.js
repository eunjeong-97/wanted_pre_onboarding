import React from 'react'
import styled from 'styled-components'

const Title = ({ text }) => {
  return <TitleBox>{text}</TitleBox>
}

const TitleBox = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`
export default Title
