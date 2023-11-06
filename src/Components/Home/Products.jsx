import React from 'react'
import beet from '../Assets/beet.jpg'
import beans from'../Assets/beans.jpg'
import bitteGuard from'../Assets/bitter guard.jpeg'
import brinjol from'../Assets/brinjol.jpg'
import capsicum from'../Assets/capsicum.jpg'
import carrot from'../Assets/carrot.jpg'
import cauliFlower from'../Assets/cauliflower.jpg'
import cocunut from'../Assets/cocunut.jpg'
import '../../Styles/Home.css'


const Products = () => {
    const products = [
      { name: 'Beet', price: '1Kg - Rs.150', imageSrc: beet },
      { name: 'Beans', price: '1Kg - Rs.50', imageSrc:beans },
      { name: 'Bitter guard', price: '1Kg - Rs.250', imageSrc:bitteGuard },
      { name: 'Brinjol', price: '1Kg - Rs.100', imageSrc: brinjol},
      { name: 'Capsicum', price: '1Kg - Rs.125', imageSrc: capsicum},
      { name: 'Carrot', price: '1Kg - Rs.50', imageSrc:carrot },
      { name: 'Cauliflower', price: '1Kg - Rs.130', imageSrc:cauliFlower },
      { name: 'Cocunut', price: '1 - Rs.80', imageSrc:cocunut},
    ];
  
    return (
      <div className='product-container'>
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.imageSrc} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
  


export default Products