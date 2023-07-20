import React from 'react'
import Home from './Home'
import Menu from '@/Components/Navbar'
import Footer from '@/Components/Footer'

const MainPage = () => {
  return (
    <div>
      <Menu/>
         <Home/>   
        <Footer/>
      
    </div>
  )
}

export default MainPage