import { createContext, useState, useEffect } from "react";
import { axiosPrivate } from "../src/api/axios";
import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const isAuthenticated = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (
            location.pathname == "/" ||
            location.pathname == "/profile" ||
            location.pathname == "/preview"
        ) {
            (async () => {
                try {
                    if (!isAuthenticated) {
                        navigate("/login");
                        return;
                    }
                    if (Object.keys(userData).length === 0) {
                        const res = await axiosPrivate("/profile");
                        console.log(res.data.user);
                        setUserData(res.data.user);
                        setIsLoading(false);
                    }
                } catch (error) {
                    setIsLoading(false);
                    const errorMessage = error.response.data.message;
                    console.error(error);
                    if (errorMessage == "jwt malformed") {
                        Cookies.remove("jwt");
                        navigate("/");
                    }
                }
            })();
        }
    }, [location.pathname]);
    return (
        <userContext.Provider value={{ userData, setUserData, isLoading }}>
            {children}
        </userContext.Provider>
    );
};

export default userContext;
