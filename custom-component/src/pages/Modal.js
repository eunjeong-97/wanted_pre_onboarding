import React, { useState } from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import Portal from '../components/Portal'
import ModalPage from '../components/ModalPage'

const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const showModalPage = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <WholeBox>
      <Title text='Modal' />
      <Button onClick={showModalPage}>Open Modal</Button>
      <Portal>{isOpenModal && <ModalPage onClose={showModalPage} />}</Portal>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  background-color: tomato;
  color: white;
`

export default Modal
