import React from 'react'
import '../../Styles/MainLayout.css'
//import BuyIt from '../Assets/buyit_logo.png'


const Navbar = () => {
  return (
    <div className='navbar-container'>
     <div className="nav-bar">
      <div className="nav-right">
        <a href="#">My Orders</a>
        <a href="#">Track Orders</a>
        <a href="#">Cart <i className="fa fa-shopping-cart"></i></a>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </div>
    </div>
    </div>
  )
}

export default Navbar


