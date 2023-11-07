import React from 'react'
import Topbar from '../Components/Home/Topbar'
import Navbar from '../Components/MainLayout/Navbar'
import '../Styles/MainLayout.css'
import { Outlet } from 'react-router-dom'
import Delivery from './Delivery'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Delivery/>
    </div>

  )
}

export default MainLayout