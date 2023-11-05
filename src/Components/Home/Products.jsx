import React from 'react'

const Products = () => {
  const products = [
    { name: 'Product 1', price: '$10', imageSrc: '/path/to/product1.jpg' },
    { name: 'Product 2', price: '$15', imageSrc: '/path/to/product2.jpg' },
    // Add more products as needed
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