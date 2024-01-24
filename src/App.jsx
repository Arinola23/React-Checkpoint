// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className='body'>
        <Header/>
        <Navbar/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
