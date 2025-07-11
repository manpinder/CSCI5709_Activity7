import React from 'react'
import { useNavigate } from 'react-router-dom'
import './../../App.css'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="page-container home-page">
            <div className="home-content">
                <h2>Welcome to ProdManage</h2>
                <p>
                    Effortlessly manage your products with our all-in-one tool.
                    Create, view, edit, and delete products — fast, simple, and reliable.
                </p>
                <button
                    className="explore-button"
                    onClick={() => navigate('/products')}
                >
                    Explore Products
                </button>
            </div>
        </div>
    )
}

export default Home