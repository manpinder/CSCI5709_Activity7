import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Navbar({ isAuthenticated, handleLogout }) {
    const navigate = useNavigate();

    const handleProductsClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();
            navigate('/login', { state: { from: '/products' } });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">ProdManage</div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link 
                    to="/products" 
                    className="nav-link"
                    onClick={handleProductsClick}
                >
                    Products
                </Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="nav-link logout-button">
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login" className="nav-link login-button">
                            Login
                        </Link>
                        <Link to="/register" className="nav-link signup-button">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;