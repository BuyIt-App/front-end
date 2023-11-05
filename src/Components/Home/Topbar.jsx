import React from 'react'
import '../../Styles/Home.css'

const Topbar = () => {

  return (
    <div className='topbar-container'>
     <div className="top-bar">
      <div className="top-right">
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

export default Topbar