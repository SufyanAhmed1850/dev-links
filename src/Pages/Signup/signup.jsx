import React from "react";
import "./signup.css";
import InputField from "../../Components/Input Field";
import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import Button from "../../Components/Button";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="logo">
                <img src={logoLarge} alt="Logo" />
            </div>
            <div className="signup-card">
                <div className="signup-head">
                    <h2>Create account</h2>
                    <p>Let’s get you started sharing your links!</p>
                </div>
                <div className="signup-fields">
                    <InputField
                        label="Email address"
                        iconSrc={emailIcon}
                        altText="Email"
                        placeholderText="e.g. alex@email.com"
                    />
                    <InputField
                        label="Create password"
                        iconSrc={passwordIcon}
                        altText="Password"
                        placeholderText="At least 8 characters"
                    />

                    <InputField
                        label="Confirm password"
                        iconSrc={passwordIcon}
                        altText="Confirm Password"
                        placeholderText="At least 8 characters"
                    />

                    <Button buttonText="Signup" />
                    <p>
                    Already have an account?{" "}
                        <span className="create-account">Login</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
