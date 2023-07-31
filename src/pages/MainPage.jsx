import React from 'react'
import Home from './Home'
import Menu from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import  MobileMenu  from '@/Components/MobileMenu';
const MainPage = () => {
  return (
    <div>
      <Menu/>
      <MobileMenu />
         <Home/>   
        <Footer/>
      
    </div>
  )
}

export default MainPage