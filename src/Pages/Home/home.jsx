import "./home.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/nav.jsx";
import linkContext from "../../../context/linkContext.jsx";
import githubIcon from "../../assets/images/icon-github.svg";
import MouseScroll from "../../assets/images/icon-mouse-scroll.svg";
import rightArrowIcon from "../../assets/images/icon-arrow-right.svg";
import userContext from "../../../context/userContext.jsx";

const transformations = "ar_1:1,c_fill,g_face,r_max,w_96,h_96/c_pad/";

const Home = ({ children }) => {
    const { userData, setUserData } = useContext(userContext);
    const { linksData, updateLinksData, setLinksData } =
        useContext(linkContext);
    console.log(userData);
    return (
        <div className="home-wrapper">
            <Nav />
            <div className="home-main">
                <div className="mockup-container">
                    <div className="mockup">
                        <div className="mockup-divs-container">
                            <div className="mockup-head">
                                <div className="mockup-head-img">
                                    {userData?.profile && (
                                        <img
                                            src={`${userData?.profile.replace(
                                                "/upload/",
                                                `/upload/${transformations}`,
                                            )}`}
                                            alt="profile"
                                        />
                                    )}
                                </div>
                                <div className="mockup-head-title">
                                    <div className="mockup-head-name">
                                        <p>{`${userData?.firstName} ${userData?.lastName}`}</p>
                                    </div>
                                    <div className="mockup-head-email">
                                        {userData?.displayEmail}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mockup-links-parent">
                                    {linksData && linksData[0]?.link
                                        ? linksData.map((link, ind) => (
                                              <Link
                                                  key={ind}
                                                  className="mockup-link-redirect"
                                                  to={link.link}
                                                  target="_blank"
                                              >
                                                  <div
                                                      key={ind}
                                                      className="mockup-link"
                                                      style={{
                                                          backgroundColor:
                                                              link.platform
                                                                  .backgroundColor,
                                                          cursor: "pointer",
                                                      }}
                                                  >
                                                      <div>
                                                          <img
                                                              src={
                                                                  link.platform
                                                                      .image
                                                              }
                                                              alt={
                                                                  link.platform
                                                                      .text
                                                              }
                                                          />
                                                      </div>
                                                      <p
                                                          style={{
                                                              color: link
                                                                  .platform
                                                                  .color,
                                                              flex: 1,
                                                          }}
                                                      >
                                                          {link.platform.text}
                                                      </p>
                                                      <div>
                                                          <img
                                                              src={
                                                                  rightArrowIcon
                                                              }
                                                              alt="right arrow"
                                                          />
                                                      </div>
                                                  </div>
                                              </Link>
                                          ))
                                        : [0, 1, 2, 3, 4].map((map, index) => (
                                              <div
                                                  key={index}
                                                  className="mockup-link"
                                                  style={{
                                                      backgroundColor:
                                                          "#EEEEEE",
                                                  }}
                                              ></div>
                                          ))}
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
