import "../Preview/Preview.css";
import { useContext, useEffect, useState } from "react";
import RightArrow from "../../assets/images/icon-arrow-right.svg";
import userContext from "../../../context/userContext";
import { axiosPrivate } from "../../api/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import githubIcon from "../../assets/images/icon-github-white.svg";
import twitterIcon from "../../assets/images/icon-twitter-white.svg";
import linkedInIcon from "../../assets/images/icon-linkedin-white.svg";
import youtubeIcon from "../../assets/images/icon-youtube-white.svg";
import facebookIcon from "../../assets/images/icon-facebook-white.svg";
import twitchIcon from "../../assets/images/icon-twitch-white.svg";
import devToIcon from "../../assets/images/icon-devto-white.svg";
import codeWarsIcon from "../../assets/images/icon-codewars-white.svg";
import codePenIcon from "../../assets/images/icon-codepen-white.svg";
import freeCodeCampIcon from "../../assets/images/icon-freecodecamp-white.svg";
import gitLabIcon from "../../assets/images/icon-gitlab-white.svg";
import hashNodeIcon from "../../assets/images/icon-hashnode-white.svg";
import stackOverFlowIcon from "../../assets/images/icon-stack-white-overflow.svg";
import frontendMentorIcon from "../../assets/images/icon-frontend-white-mentor.svg";
import PreviewHeaderSkeleton from "../../Components/Skeleton/PreviewHeaderSkeleton/PreviewHeaderSkeleton";
import { Skeleton } from "antd";
import error404Icon from "../../assets/images/404.svg";

const transformations =
    "ar_1:1,c_fill,g_face,r_max,w_104,h_104/c_pad/co_rgb:633CFF,e_outline:outer:4:0/";

const Share = () => {
    const navigate = useNavigate();
    const params = useParams();
    const paramToSend = params.username.toLowerCase();
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [linksData, setLinksData] = useState();
    const [is404, setIs404] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await axiosPrivate("/share", {
                    params: {
                        userName: paramToSend,
                    },
                });
                setUserData(res.data.user);
                setLinksData(res.data.links);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                console.log(error.response.data.code);
                if (error.response.data.code === 404) {
                    setIsLoading(false);
                    setIs404(true);
                }
            }
        })();
    }, []);

    return (
        <div className="preview-parent">
            {is404 || <div className="preview-blob"></div>}

            {isLoading ? (
                <div className="preview-card">
                    <PreviewHeaderSkeleton />
                    <div className="preview-card-links-parent">
                        {[0, 1, 2, 3, 4].map((map, index) => (
                            <Skeleton.Button
                                active={isLoading}
                                key={index}
                                style={{
                                    width: 281,
                                    height: 56,
                                    borderRadius: 8,
                                }}
                            />
                        ))}
                    </div>
                </div>
            ) : is404 ? (
                <div className="error-card">
                    <img src={error404Icon} alt="404 Error" />
                </div>
            ) : (
                userData?.profile && (
                    <div className="preview-card">
                        <div className="preview-card-header">
                            <div className="preview-card-header-img">
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
                            <div className="preview-card-header-text">
                                {userData?.firstName && (
                                    <h2>{`${userData?.firstName} ${userData?.lastName}`}</h2>
                                )}
                                {userData?.displayEmail && (
                                    <p>{userData?.displayEmail}</p>
                                )}
                            </div>
                        </div>
                        <div className="preview-card-links-parent">
                            {linksData.map((link, ind) => (
                                <Link
                                    key={ind}
                                    to={link.link}
                                    target="_blank"
                                    className="preview-card-link"
                                    style={{
                                        backgroundColor:
                                            link.platform.backgroundColor,
                                        cursor: "pointer",
                                        textDecoration: "none",
                                    }}
                                >
                                    <div>
                                        <img
                                            src={(() => {
                                                const platformText =
                                                    linksData[ind]?.platform
                                                        ?.text;
                                                const platformIcon = {
                                                    GitHub: githubIcon,
                                                    Twitter: twitterIcon,
                                                    LinkedIn: linkedInIcon,
                                                    YouTube: youtubeIcon,
                                                    Facebook: facebookIcon,
                                                    Twitch: twitchIcon,
                                                    DevTo: devToIcon,
                                                    CodeWars: codeWarsIcon,
                                                    CodePen: codePenIcon,
                                                    FreeCodeCamp:
                                                        freeCodeCampIcon,
                                                    GitLab: gitLabIcon,
                                                    Hashnode: hashNodeIcon,
                                                    StackOverflow:
                                                        stackOverFlowIcon,
                                                    FrontendMentor:
                                                        frontendMentorIcon,
                                                }[platformText];
                                                return platformIcon || null;
                                            })()}
                                            alt={link.platform.text}
                                        />
                                    </div>
                                    <p>{link.platform.text}</p>
                                    <div>
                                        <img src={RightArrow} alt="Arrow" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Share;
