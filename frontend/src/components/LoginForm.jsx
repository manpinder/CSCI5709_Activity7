import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        } else {
            newErrors.email = '';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else {
            newErrors.password = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    onLoginSuccess(data.token);
                    alert('Login successful!');
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during login');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
            
            <p className="auth-footer">
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </form>
    );
};

export default LoginForm;