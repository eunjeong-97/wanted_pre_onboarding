import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

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

const checkedColor = keyframes`
from {
    width: 0px;
    left: 11px;
    border-radius: 0;
  }
  to {
    width: 100%;
  }
`

const uncheckedColor = keyframes`
from {
    width: 50px;
  }
  to {
    width: 0;
    left: 11px;
    border-radius: 0;
  }
  `

const Label = styled.label`
  position: relative;
  display: block;
  width: 60px;
  height: 26px;
  border-radius: 50px;
  background-color: grey;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: tomato;
    border-radius: 50px;
    animation: ${props => (props.isChecked ? checkedColor : uncheckedColor)}
      0.2s linear forwards;
  }
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
  z-index: 3000;
`

const Text = styled.p`
  margin-top: 10px;
`

export default Toggle
