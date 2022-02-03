import React, { useState } from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import First from '../components/Tab/First'
import Second from '../components/Tab/Second'
import Third from '../components/Tab/Third'

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTab = id => {
    setActiveTab(id)
  }

  const tabObject = {
    1: <First />,
    2: <Second />,
    3: <Third />,
  }

  return (
    <WholeBox>
      <Title text='Tab' />
      <TabList>
        {['First Tab', 'Second Tab', 'Third Tab'].map((item, index) => {
          return (
            <TabItem
              key={index}
              className={activeTab === index + 1 ? 'is-active' : ''}
              onClick={() => handleTab(index + 1)}
            >
              {item}
            </TabItem>
          )
        })}
      </TabList>
      <TabContent>{tabObject[activeTab]}</TabContent>
    </WholeBox>
  )
}

const WholeBox = styled.div`
  padding: 10px;
`

const TabList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 40px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 auto;
`

const TabItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  border: 1px solid black;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:nth-child(2) {
    margin: 0 20px;
  }
  &.is-active {
    background-color: tomato;
  }
`

const TabContent = styled.div`
  height: 100px;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
`

export default Tab
