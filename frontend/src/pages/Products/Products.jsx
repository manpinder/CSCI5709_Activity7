import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Pages.css'
import headphonesImg from '../../assets/wireless_headphone.png';
import smartwatchImg from '../../assets/smart_watch.png';
import laptopImg from '../../assets/laptop.png';

function Products() {
    useNavigate();
    return (
        <div className="page-container products-page">
            <div className="products-header">
                <h1>Products</h1>
                <button
                    className="add-product-button"
                >
                    Add Product
                </button>
            </div>

            <div className="product-list">
                {productData.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                        </div>
                        <div className="product-card-content">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="price">{product.price}</p>
                            <span className="availability">In Stock</span>
                            <div className="product-actions">
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const productData = [
    {
        name: "Wireless Headphones",
        description: "Noise canceling over-ear headphones",
        price: "$120",
        image: headphonesImg
    },
    {
        name: "Smart Watch",
        description: "Smart wearable with health tracking",
        price: "$80",
        image: smartwatchImg
    },
    {
        name: "Laptop",
        description: "Hi-tech Full HD display, 256GB",
        price: "$600",
        image: laptopImg
    }
]

export default Products