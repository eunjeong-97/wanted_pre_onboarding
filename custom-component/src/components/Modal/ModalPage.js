import React from 'react'
import styled from 'styled-components'

const ModalPage = ({ onClose }) => {
  return (
    <WholeBox>
      <ModalBox>
        <ModalHeader>
          <CloseButton onClick={onClose}>X</CloseButton>
          <ModalTitle>Modal Title</ModalTitle>
        </ModalHeader>
        <ModalContent>Hello! Wanted Pre Onboarding!</ModalContent>
      </ModalBox>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 3000;
`

const ModalBox = styled.div`
  width: 250px;
  height: 200px;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  font-weight: 700;
`

const CloseButton = styled.div``

const ModalTitle = styled.div`
  margin: 0 auto;
`

const ModalContent = styled.div`
  text-align: center;
`

export default ModalPage
