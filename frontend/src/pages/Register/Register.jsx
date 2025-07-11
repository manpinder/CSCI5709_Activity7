import RegistrationForm from '../../components/RegistrationForm.jsx';
import '../../App.css';

const Register = () => {
    return (
        <div className="auth-page-container">
            <div className="auth-container">
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Get started with your free account</p>
                </div>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default Register;