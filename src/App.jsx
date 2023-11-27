import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Signup/signup";
import Linkstab from "./Pages/Home/Links Tab/linkstab";
import Profiletab from "./Pages/Home/Profile tab/profiletab";

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home>  
                                <Linkstab />
                            </Home>
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<h1>404</h1>} />
                <Route
                    path="/profile"
                    element={
                        <>
                            <Home>
                                <Profiletab />
                            </Home>
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
