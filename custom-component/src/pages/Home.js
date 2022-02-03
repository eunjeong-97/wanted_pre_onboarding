import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Title from '../components/Title'

const Home = () => {
  const navigate = useNavigate()

  const changePage = path => {
    navigate(`/${path}`)
  }

  return (
    <WholeBox>
      <Title text='Wanted Pre Onboarding' />
      <PageLink onClick={() => changePage('toggle')}>Toggle</PageLink>
      <PageLink onClick={() => changePage('modal')}>Modal</PageLink>
      <PageLink onClick={() => changePage('tab')}>Tab</PageLink>
      <PageLink onClick={() => changePage('tag')}>Tag</PageLink>
      <PageLink onClick={() => changePage('autoComplete')}>
        AutoComplete
      </PageLink>
      <PageLink onClick={() => changePage('clickToEdit')}>ClickToEdit</PageLink>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

const PageLink = styled.button`
  padding: 10px;
  font-size: 18px;
  border: 1px solid black;
  margin: 0 5px;
  cursor: pointer;
`

export default Home
