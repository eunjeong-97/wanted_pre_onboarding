import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js'
import Toggle from './components/Toggle.js'
import Modal from './components/Modal'
import Tab from './components/Tab'
import Tag from './components/Tag'
import AutoComplete from './components/AutoComplete'
import ClickToEdit from './components/ClickToEdit'

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/toggle' element={<Toggle />} />
          <Route path='/modal' element={<Modal />} />
          <Route path='/tab' element={<Tab />} />
          <Route path='/tag' element={<Tag />} />
          <Route path='/autoComplete' element={<AutoComplete />} />
          <Route path='/clickToEdit' element={<ClickToEdit />} />
        </Routes>
      </Router>
    )
  }
}

export default App
