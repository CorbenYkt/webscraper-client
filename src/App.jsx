import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/index.css'
import Home from './pages/Home';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App

//git add dist -f
//git commit -m "deploy"
//git subtree push --prefix dist origin gh-pages