import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Products from './pages/Products/Products.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import './App.css'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsAuthenticated(true)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
    }

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />
    }

    return (
        <Router>
            <div className="app">
                <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/register" element={<Register />} />
                    <Route 
                        path="/products" 
                        element={
                            <PrivateRoute>
                                <Products />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="/products" 
                        element={
                            isAuthenticated ? (
                                <Products />
                            ) : (
                                <Navigate to="/login" state={{ from: '/products' }} replace />
                            )
                        } 
                    />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App