import "../Preview/Preview.css";
import { useContext, useEffect, useState } from "react";
import RightArrow from "../../assets/images/icon-arrow-right.svg";
import userContext from "../../../context/userContext";
import { axiosPrivate } from "../../api/axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const transformations =
    "ar_1:1,c_fill,g_face,r_max,w_104,h_104/c_pad/co_rgb:633CFF,e_outline:outer:4:0/";

const Share = () => {
    const navigate = useNavigate();
    const params = useParams();
    const paramToSend = params.username.toLowerCase();
    const [userData, setUserData] = useState();
    const [linksData, setLinksData] = useState();

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
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <div className="preview-parent">
            <div className="preview-blob"></div>
            {userData?.profile && (
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
                                        src={link?.platform?.image?.replace(
                                            /(icon-[a-z]+)/,
                                            "$1-white",
                                        )}
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
            )}
        </div>
    );
};

export default Share;
