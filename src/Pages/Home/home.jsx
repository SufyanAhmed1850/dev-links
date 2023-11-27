import "./home.css";
import Nav from "../../Components/Nav/nav.jsx";
import MouseScroll from "../../assets/images/icon-mouse-scroll.svg";

const Home = ({ children }) => {
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
                            <div>
                                <div className="mockup-links-parent">
                                    <div className="mockup-link"></div>
                                    <div className="mockup-link"></div>
                                    <div className="mockup-link"></div>
                                    <div className="mockup-link"></div>
                                    <div className="mockup-link"></div>
                                    <div className="mockup-link"></div>
                                    <div className="mockup-link"></div>
                                </div>
                                <div className="scroll-indicator">
                                    <img
                                        src={MouseScroll}
                                        alt="Scroll Indicator"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="links-customization-parent">{children}</div>
            </div>
        </div>
    );
};

export default Home;
