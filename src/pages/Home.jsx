import React from 'react'
import '../Styles/Home.css'
import Topbar from '../Components/Home/Topbar'
import Products from '../Components/Home/Products'

const Home = () => {
  return (
    <div className='home-container'>
      <Topbar/>
      <Products/>
    </div>
  )
}

export default Home