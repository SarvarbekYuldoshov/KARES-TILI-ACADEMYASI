import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Home from './Components/Home/Home'
import Model from './Components/Model/Model'
import Wrapper from './Components/Wrapper/Wrapper'
import Hover from './Components/Hover/Hover'
import Number from './Components/Number/Number'
import Close from './Components/Close/Close'

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
          <Number/>
          <Close/>
      </div>
    </>
  )
}

export default App
