import React from "react";
import "./login.css"
import InputField from "../../Components/Input Field";
import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import Button from "../../Components/Button";

const Login = () => {
    return (
        <div className="login-container">
            <div className="logo">
                <img src={logoLarge} alt="Logo" />
            </div>
            <div className="login-card">
                <div className="login-head">
                    <h2>Login</h2>
                    <p>Add your details below to get back into the app</p>
                </div>
                <div className="login-fields">
                    <InputField
                        label="Email address"
                        iconSrc={emailIcon}
                        altText="Email"
                        placeholderText="e.g. alex@email.com"
                    />
                    <InputField
                        label="Password"
                        iconSrc={passwordIcon}
                        altText="Password"
                        placeholderText="Enter your password"
                    />

                    <Button buttonText="Login" />
                    <p>
                        Don’t have an account? <span className="create-account">Create account</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
