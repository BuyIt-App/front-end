import React from 'react'
import '../../Styles/MainLayout.css'
import BuyIt from '../Assets/buyit_logo.png'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="nav-bar">
      <div className="nav-left">
        <img src={BuyIt} alt='BuyIt' className='BuyIt'/>
      </div>
      <div className="nav-middle">
        <select>
          <option value="" disabled selected>Select Category</option>
          <option value="category1">Vegtables</option>
          <option value="category2">Fruits</option>
          <option value="category1">Frozen Food</option>
          <option value="category2">Meat</option>
          <option value="category1">Fish</option>
          <option value="category2">Beverages</option>
          <option value="category1">Grocery</option>
          <option value="category2">Chilled</option>
          <option value="category2">Household</option>
          <option value="category2">Homeware</option>
          <option value="category2">Daily Products</option>
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