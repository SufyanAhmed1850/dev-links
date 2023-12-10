import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import linkIcon from "../../assets/images/icon-link.svg";
import profilIcon from "../../assets/images/icon-profile-details-header.svg";
import linkContext from "../../../context/linkContext";
import Tabs from "../Tabs/tabs";
import Buttonsecondary from "../Button Secondary/buttonsecondary";
import { useNavigate, useLocation } from "react-router-dom";
import IconLogout from "../../assets/images/IconLogout";
import { IconButton } from "@mui/material";
import { useState, useContext } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { WarningTwoTone } from "@ant-design/icons";
import "./nav.css";

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { linksData } = useContext(linkContext);
    const [isLogoutHovered, setIsLogoutHovered] = useState(false);
    const isProfileRoute = location.pathname === "/profile";
    const isHomeRoute = location.pathname === "/";
    const navigationHandler = (page) => {
        navigate(page);
    };

    const navigateToPreview = () => {
        linksData.some((link) => link.link !== "")
            ? navigate("/preview")
            : toast.error("Add links to preview", {
                  icon: (
                      <WarningTwoTone
                          style={{ fontSize: 20 }}
                          twoToneColor="#FFD700"
                      />
                  ),
                  duration: 2000,
                  position: "bottom-center",
                  style: {
                      backgroundColor: "var(--black-90-)",
                      color: "var(--white-90-)",
                  },
              });
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
                        onClick={navigateToPreview}
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
