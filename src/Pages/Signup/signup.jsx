import { useState } from "react";
import "./signup.css";
import InputField from "../../Components/Input Field";
import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import userIcon from "../../assets/images/icon-username.svg";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState("");
    const [repeatError, setRepeatError] = useState(false);

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            userSignUp();
        }
    };

    const userSignUp = async () => {
        try {
            !email ? setEmailError(true) : setEmailError(false);
            !userName ? setUserNameError(true) : setUserNameError(false);
            !password ? setPasswordError(true) : setPasswordError(false);
            !repeatPassword ? setRepeatError(true) : setRepeatError(false);
            if (!email || !userName || !password || !repeatPassword) {
                toast.error("All fiels are required", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
                return;
            }
            const res = await axios.post(`${import.meta.env.VITE_URL}/signup`, {
                email,
                userName,
                password,
                repeatPassword,
            });
            setEmail("");
            setUserName("");
            setPassword("");
            setRepeatPassword("");
            console.log("res", res);
            toast.success("Registration successful. You can now Login.", {
                duration: 2000,
                position: "bottom-center",
                style: {
                    backgroundColor: "var(--black-90-)",
                    color: "var(--white-90-)",
                    minWidth: "397px",
                },
            });
        } catch (error) {
            console.log(error);
            const message = error.response.data.message;
            console.log(message);
            if (
                message.includes("fails to match the required pattern") &&
                message.includes("email")
            ) {
                toast.error("Invalid email address", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
            } else if (
                message.includes("length must be at least 6 characters long") &&
                message.includes("userName")
            ) {
                toast.error("Username must be at least 6 characters long", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
            } else if (
                message.includes("length must be at least 8 characters long") &&
                message.includes("password")
            ) {
                toast.error("Password must be at least 8 characters long", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
            } else if (
                message.includes("fails to match the required pattern") &&
                message.includes("password")
            ) {
                toast.error("Password does not match the requirements", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
            } else if (
                message.includes("duplicate") &&
                message.includes("email")
            ) {
                toast.error("Email already exists", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
            } else if (
                message.includes("duplicate") &&
                message.includes("userName")
            ) {
                toast.error("Username already exists", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
            } else if (message.includes("repeatPassword")) {
                toast.error("Passwords do not match", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
            }
        }
    };

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
                        value={email}
                        error={emailError || false}
                        label="Email address"
                        iconSrc={emailIcon}
                        altText="Email"
                        placeholderText="e.g. alex@email.com"
                        onInputChange={(emailVal) => setEmail(emailVal)}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <InputField
                        value={userName}
                        error={userNameError || false}
                        label="User name"
                        iconSrc={userIcon}
                        altText="user name"
                        placeholderText="At least 6 characters"
                        onInputChange={(userVal) => setUserName(userVal)}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <InputField
                        value={password}
                        error={passwordError || false}
                        label="Create password"
                        type="password"
                        iconSrc={passwordIcon}
                        altText="Password"
                        placeholderText="At least 8 characters"
                        onInputChange={(passVal) => setPassword(passVal)}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <InputField
                        value={repeatPassword}
                        error={repeatError || false}
                        label="Confirm password"
                        type="password"
                        iconSrc={passwordIcon}
                        altText="Confirm Password"
                        placeholderText="At least 8 characters"
                        onInputChange={(repPassVal) =>
                            setRepeatPassword(repPassVal)
                        }
                        onKeyPress={handleEnterKeyPress}
                    />

                    <Button handleClick={userSignUp} buttonText="Signup" />
                    <p>
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="create-account"
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
