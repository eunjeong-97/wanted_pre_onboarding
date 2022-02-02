import React, { useState } from 'react'
import styled from 'styled-components'

import Title from '../common/Title'

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }
  return (
    <WholeBox>
      <Title text='Toggle' />
      <Input
        type='checkbox'
        id='switch-input'
        className='switch-checkbox'
        checked={isChecked}
        onChange={handleToggle}
      />
      <Label
        isChecked={isChecked}
        className='switch-label'
        htmlFor='switch-input'
      >
        <Ball className='ball' />
      </Label>
      <Text>Toggle Switch {isChecked ? 'ON' : 'OFF'}</Text>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

const Input = styled.input`
  display: none;
  & {
    :checked + .switch-label .ball {
      transform: translateX(30px);
    }
  }
`

const Label = styled.label`
  position: relative;
  display: block;
  width: 60px;
  height: 26px;
  border-radius: 50px;
  transition: background-color 0.2s linear;
  background-color: ${props => (props.isChecked ? 'tomato' : 'grey')};
`

const Ball = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 3px;
  left: 5px;
  transition: transform 0.2s linear;
  background-color: white;
`

const Text = styled.p`
  margin-top: 10px;
`

export default Toggle
