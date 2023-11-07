import React from "react";
import "../../Styles/Home.css";
import BuyIt from "../Assets/buyit_logo.png";

const Topbar = (props) => {

  return (
<div className="topbar-container" style={props.props === "CUSTOMER" ? { top: "50px" } : {}}>
      <div className="top-left">
        <img src={BuyIt} alt="BuyIt" className="BuyIt" />
        {props.props === "ADMIN" && (
        <p>Admin</p>
        )}
         {props.props === "DELIVERY PERSON" && (
        <p>Delivery Person</p>
        )}
         {props.props === "STORE KEEPER" && (
        <p>Store Keeper</p>
        )}
      </div>

      {props.props === "CUSTOMER" && (
        <div className="top-middle">
          <select>
            <option value="" disabled selected>
              Select Category
            </option>
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

          <input type="text" placeholder="Search Products..." />
          <button>Search</button>
        </div>
      )}

      <div className="top-right">
        {props.props === "CUSTOMER" && (
          <a href="#">Set my city</a>
        )}
        {props.props === "STORE KEEPER" && (
          <div>          
            <a href="#">Products</a>
            <a href="#">+ Add Products</a>
          </div>

        )}
        {props.props === "DELIVERY PERSON" && (
           <div>
           <a href="#">Available Deliveries</a>
           <a href="#">My Deliveries</a>
           </div>
        )}
        {props.props === "ADMIN" && (
          <div>
          <a href="#">Store Keepers</a>
          <a href="#">delivery persons</a>
          <a href="#">Customers</a>
          <a href="#">Orders</a>
          </div>

        )}
      </div>
    </div>
  );
};

export default Topbar;
