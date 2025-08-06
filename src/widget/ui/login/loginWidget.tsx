import LoginImage from './loginImage';
import LoginLogo from './loginLogo';
import LoginForm from './loginForm';
import { LinkAsButton } from './loginButton'
import ForgotPassword from './forgotPassword';
import './../../../shared/styles/global/login.css';

export default function LoginWidget() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Imagen izquierda */}
        <LoginImage />
        <div className="login-form-section">
            <div className="logo-container">
                <LoginLogo />
            </div>
          <div className="form-container">
            <LoginForm />
            <LinkAsButton />
            <ForgotPassword />
          </div>
        </div>
      </div>
    </div>
  );
}
