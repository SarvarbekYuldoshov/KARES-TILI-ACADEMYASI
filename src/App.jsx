import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Home from './Components/Home/Home'

function App() {

  return (
    <>
      <div className='App'>
          <Header/>
          <Hero/>
          <Home/>
      </div>
    </>
  )
}

export default App
