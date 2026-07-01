import React from 'react'
// If you are using the latest packages, import from 'react-router' instead of 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router' 
import Feed from '../pages/Feed'
import CreatePost from '../pages/CreatePost'


import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App