import React, { useState } from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import Form from '../components/ClickToEdit/Form'

const ClickToEdit = () => {
  const [nameInputValue, setNameInputValue] = useState('김코딩')
  const [ageInputValue, setAgeInputValue] = useState(20)
  const [nameResult, setNameResult] = useState(nameInputValue)
  const [ageResult, setAgeResult] = useState(ageInputValue)

  const formArray = [
    {
      id: 'name',
      label: '이름',
      inputValue: nameInputValue,
      onChange: event => setNameInputValue(event.target.value),
      onfocus: event => event.target.select(),
      onblur: () => setNameResult(nameInputValue),
    },
    {
      id: 'age',
      label: '나이',
      inputValue: ageInputValue,
      onChange: event => setAgeInputValue(event.target.value),
      onfocus: event => event.target.select(),
      onblur: () => setAgeResult(ageInputValue),
    },
  ]

  return (
    <WholeBox>
      <Title text='ClickToEdit' />
      {formArray.map((formItem, formIndex) => {
        return <Form formItem={formItem} key={formIndex} />
      })}
      <TextBox>
        <Text>이름 {nameResult}</Text>
        <Text>나이 {ageResult}</Text>
      </TextBox>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

const TextBox = styled.div`
  text-align: center;
`

const Text = styled.span`
  &:first-child {
    margin-right: 10px;
  }
`

export default ClickToEdit
