import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  

  return (
    <>
       <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
    </>
  )
}

export default App