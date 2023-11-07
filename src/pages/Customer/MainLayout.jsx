import React from 'react'
import Topbar from '../../Components/Home/Topbar'
import Navbar from '../../Components/MainLayout/Navbar'
import '../../Styles/MainLayout.css'
import { Outlet } from 'react-router-dom'
import Products from '../../Components/Home/Products'


const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>

  )
}

export default MainLayout