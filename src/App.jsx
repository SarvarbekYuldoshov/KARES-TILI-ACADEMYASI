import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Home from './Components/Home/Home'
import Model from './Components/Model/Model'
import Wrapper from './Components/Wrapper/Wrapper'

function App() {

  return (
    <>
      <div className='App'>
          <Header/>
          {/* <Hero/> */}
          <Home/>
          <Model/>
          <Wrapper/>
      </div>
    </>
  )
}

export default App
