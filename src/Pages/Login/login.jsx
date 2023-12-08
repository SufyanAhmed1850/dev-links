import { useState, useEffect } from "react";
import "./login.css";
import InputField from "../../Components/Input Field";
import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import emailIcon from "../../assets/images/icon-email.svg";
import passwordIcon from "../../assets/images/icon-password.svg";
import Button from "../../Components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosPrivate } from "../../api/axios";
import Cookies from "js-cookie";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
const LOGIN_URL = "/login";

const Login = () => {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const userLogin = async () => {
        try {
            !email ? setEmailError(true) : setEmailError(false);
            !password ? setPasswordError(true) : setEmailError(false);
            if (!email || !password) {
                return;
            }
            const res = await axiosPrivate.post(LOGIN_URL, { email, password });
            console.log("res", res);
            Cookies.set("jwt", res.data.token, { expires: 7 });
            setEmail("");
            setPassword("");
            navigate(from, { replace: true });
        } catch (err) {
            console.log(err);
            if (!err?.response) {
                toast.error("No response from server", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
                console.error("No Server Response", err.response.data);
            } else {
                toast.error("Invalid email or password", {
                    duration: 2000,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "var(--black-90-)",
                        color: "var(--white-90-)",
                    },
                });
                console.error("Login Failed", err.response.data);
            }
        }
    };

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
                        value={email}
                        error={emailError}
                        onInputChange={(emailVal) => setEmail(emailVal)}
                        label="Email address"
                        iconSrc={emailIcon}
                        altText="Email"
                        placeholderText="e.g. alex@email.com"
                    />
                    <InputField
                        value={password}
                        error={passwordError}
                        onInputChange={(passVal) => setPassword(passVal)}
                        label="Password"
                        type="password"
                        iconSrc={passwordIcon}
                        altText="Password"
                        placeholderText="Enter your password"
                    />

                    <Button handleClick={userLogin} buttonText="Login" />
                    <p>
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate("/signup")}
                            className="create-account"
                        >
                            Create account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
