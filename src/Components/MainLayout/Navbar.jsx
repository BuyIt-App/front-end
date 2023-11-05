import React from 'react'
import '../../Styles/MainLayout.css'
import BuyIt from '../Assets/BuyIt.jpg'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="nav-bar">
      <div className="nav-left">
        <img src={BuyIt} alt='BuyIt' className='BuyIt'/>
      </div>
      <div className="nav-middle">
        <select>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more categories as needed */}
        </select>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="nav-right">
        <button>Set my city</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar