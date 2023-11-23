import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import linkIcon from "../../assets/images/icon-link.svg";
import profilIcon from "../../assets/images/icon-profile-details-header.svg";
import Tabs from "../Tabs/tabs";
import Buttonsecondary from "../Button Secondary/buttonsecondary";
import "./nav.css";
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-section">
                <div className="nav-logo">
                    <img src={logoLarge} alt="Logo" />
                </div>
                <div className="nav-links">
                    <Tabs imgSrc={linkIcon} altText="Link" tabText="Links" />
                    <Tabs
                        imgSrc={profilIcon}
                        altText="Profile"
                        tabText="Profile Details"
                    />
                </div>
                <Buttonsecondary buttonSecondaryText="Preview" />
            </div>
        </div>
    );
};

export default Nav;
