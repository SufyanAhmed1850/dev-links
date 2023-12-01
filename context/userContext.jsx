import { createContext, useState, useEffect } from "react";
import { axiosPrivate } from "../src/api/axios";

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await axiosPrivate("/profile");
                setUserData(res.data.user); // Corrected line to setUserData
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <userContext.Provider value={{ userData, setUserData }}>
            {children}
        </userContext.Provider>
    );
};

export default userContext;
