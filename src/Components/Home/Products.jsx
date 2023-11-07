import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styles/Home.css';
import veg from '../Assets/veg.jpg';
import dairy from '../Assets/dairy.jpg';
import fruits from '../Assets/fruits.jpg';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {
  const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8060/product/all')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    // Define a function or mapping for category images
    const getCategoryImage = (category) => {
        switch (category) {
            case 'Dairy':
                return dairy;
            case 'fruits':
                return fruits;
            case 'Veg':
                return veg;
            // Add more cases for other categories
            default:
                return '';
        }
    };

    // Group products by category
    const groupedProducts = {};
    products.forEach((product) => {
        if (!groupedProducts[product.category]) {
            groupedProducts[product.category] = [];
        }
        groupedProducts[product.category].push(product);
    });
    

    const handleAddToCart = () => {
      if (props.props === true) {
          // User is authenticated, redirect to the cart page
          navigate('/cart');
          console.log(props)

      
      } else {
          // User is not authenticated, redirect to the sign-in page
          navigate('/auth/customer/login');
          console.log(props)
      }
  };

    return (
        <div className='product-container'>
            {Object.keys(groupedProducts).map((category, index) => (
                <div key={index}>
                    <h2>{category} Products</h2>
                    <div className="product-list">
                        {groupedProducts[category].map((product, productIndex) => (
                            <div className="product" key={productIndex}>
                                <img src={getCategoryImage(product.category)} alt="Product" />
                                <p className='product-name'>{product.productName}</p>
                                <p className='product-description'>{product.description} - Rs. {product.price}</p>

                                <button 
                                className='add-to-cart' 
                                onClick={handleAddToCart}
                                >Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
