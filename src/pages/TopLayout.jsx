import React from 'react'
import Topbar from '../Components/Home/Topbar'
import Navbar from '../Components/MainLayout/Navbar'
import '../Styles/MainLayout.css'
import { Outlet } from 'react-router-dom'
import Products from '../Components/Home/Products'


const TopLayout = ({userRole}) => {
  return (
    <div>
      <Topbar props = {userRole} />
      <Outlet/>
    </div>

  )
}

export default TopLayout