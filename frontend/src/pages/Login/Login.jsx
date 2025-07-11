import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm.jsx';
import '../../App.css';

const Login = ({ setIsAuthenticated }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const handleLoginSuccess = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        navigate(from, { replace: true });
    };

    return (
        <div className="auth-page-container">
            <div className="auth-container">
                <div className="auth-header">
                    <h2>Welcome Back</h2>
                    <p>Please login to access {from !== '/' ? 'Products' : 'your account'}</p>
                </div>
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            </div>
        </div>
    );
};

export default Login;