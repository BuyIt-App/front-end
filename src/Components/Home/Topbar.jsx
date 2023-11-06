import React from 'react'
import '../../Styles/Home.css'
import BuyIt from '../Assets/buyit_logo.png'

const Topbar = () => {
  return (
    <div className='topbar-container'>
      <div className="top-bar">
      <div className="top-left">
        <img src={BuyIt} alt='BuyIt' className='BuyIt'/>
      </div>
      <div className="top-middle">
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
      <div className="top-right">
        <button>Set my city</button>
      </div>
    </div>
    </div>
  )
  
}

export default Topbar