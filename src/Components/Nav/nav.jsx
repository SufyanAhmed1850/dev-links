import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import linkIcon from "../../assets/images/icon-link.svg";
import profilIcon from "../../assets/images/icon-profile-details-header.svg";
import Tabs from "../Tabs/tabs";
import Buttonsecondary from "../Button Secondary/buttonsecondary";
import { useNavigate, useLocation } from "react-router-dom";
import IconLogout from "../../assets/images/IconLogout";
import { IconButton } from "@mui/material";
import { useState } from "react";
import Cookies from "js-cookie";
import "./nav.css";

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLogoutHovered, setIsLogoutHovered] = useState(false);
    const isProfileRoute = location.pathname === "/profile";
    const isHomeRoute = location.pathname === "/";
    const navigationHandler = (page) => {
        navigate(page);
    };

    return (
        <div className="nav-container">
            <div className="nav-section">
                <div className="nav-logo">
                    <img src={logoLarge} alt="Logo" />
                </div>
                <div className="nav-links">
                    <Tabs
                        clickHandler={navigationHandler}
                        clickProp="/"
                        imgSrc={linkIcon}
                        FD
                        altText="Link"
                        tabText="Links"
                        active={isHomeRoute}
                    />
                    <Tabs
                        clickHandler={navigationHandler}
                        clickProp="/profile"
                        imgSrc={profilIcon}
                        altText="Profile"
                        tabText="Profile Details"
                        active={isProfileRoute}
                    />
                </div>
                <div className="navbar-btn-container">
                    <Buttonsecondary
                        onClick={() => navigate("/preview")}
                        buttonSecondaryText="Preview"
                    />
                    <IconButton
                        onMouseEnter={() => setIsLogoutHovered(true)}
                        onMouseLeave={() => setIsLogoutHovered(false)}
                        onClick={() => {
                            Cookies.remove("jwt");
                            navigate("/");
                        }}
                    >
                        <IconLogout
                            fill={isLogoutHovered && "var(--red-90-)"}
                        />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Nav;
