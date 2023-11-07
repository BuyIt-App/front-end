import React from 'react'
import '../../Styles/Home.css'
import Topbar from '../../Components/Home/Topbar'
import Products from '../../Components/Home/Products'

const Home = ({is,userRole}) => {
  return (
    <div className='home-container'>
      <Topbar props = {userRole} />
      <Products props = {is}/>
    </div>
  )
}

export default Home