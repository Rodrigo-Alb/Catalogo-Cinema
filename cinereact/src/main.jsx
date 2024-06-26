import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import Movies from './Pages/Movies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='movie/:id' element={<Movies/>} />
          <Route path='search' element={<Search/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
