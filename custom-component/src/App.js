import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.js'
import Toggle from './pages/Toggle.js'
import Modal from './pages/Modal'
import Tab from './pages/Tab'
import Tag from './pages/Tag'
import AutoComplete from './pages/AutoComplete'
import ClickToEdit from './pages/ClickToEdit'

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
