import "./home.css";
import Nav from "../../Components/Nav/nav.jsx";
import Mockup from "../../assets/images/mockup-border.svg";
import Button from "../../Components/Button/index.jsx";
import Buttonsecondary from "../../Components/Button Secondary/buttonsecondary.jsx";
import emptyLinks from "../../assets/images/illustration-empty.svg";
import Linkscustomizationempty from "../../Components/Links Customization Empty/linkscustomizationempty.jsx";
import Linkscustomizationnotempty from "../../Components/Linkscustomization!empty/Linkscustomization!empty.jsx";

const Home = () => {
    return (
        <div className="home-wrapper">
            <Nav />
            <div className="home-main">
                <div className="mockup-container">
                    <div className="mockup">
                        <div className="mockup-divs-container">
                            <div className="mockup-head">
                                <div className="mockup-head-img"></div>
                                <div className="mockup-head-title">
                                    <div className="mockup-head-name"></div>
                                    <div className="mockup-head-email"></div>
                                </div>
                            </div>
                            <div className="mockup-links-parent">
                                <div className="mockup-link"></div>
                                <div className="mockup-link"></div>
                                <div className="mockup-link"></div>
                                <div className="mockup-link"></div>
                                <div className="mockup-link"></div>
                                <div className="mockup-link"></div>
                                <div className="mockup-link"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="links-customization-parent">
                    <div className="links-customization">
                        <div className="links-customization-header">
                            <h2>Customize your links</h2>
                            <p>
                                Add/edit/remove links below and then share all
                                your profiles with the world!
                            </p>
                        </div>
                        <div className="links-customization-main">
                            <Buttonsecondary buttonSecondaryText="+ Add new link" />
                            {/* <Linkscustomizationempty /> */}
                            <Linkscustomizationnotempty />
                        </div>
                    </div>
                    <div className="links-customization-footer">
                        <div className="links-customization-footer-btn">
                            <Button buttonText="Save" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
