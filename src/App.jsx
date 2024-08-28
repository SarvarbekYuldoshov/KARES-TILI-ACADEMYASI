import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Home from './Components/Home/Home'
import Model from './Components/Model/Model'
import Wrapper from './Components/Wrapper/Wrapper'
import Hover from './Components/Hover/Hover'

function App() {

  return (
    <>
      <div className='App'>
          <Header/>
          {/* <Hero/> */}
          <Home/>
          <Model/>
          <Wrapper/>
          <Hover/>
      </div>
    </>
  )
}

export default App
