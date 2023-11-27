import Button from "../../../Components/Button/index.jsx";
import Buttonsecondary from "../../../Components/Button Secondary/buttonsecondary.jsx";
import Linkscustomizationempty from "../../../Components/Links Customization Empty/linkscustomizationempty.jsx";
import Linkscustomization from "../../../Components/Links Customization/linkscustomization.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosPrivate } from "../../../api/axios.js";
import useAuth from "../../../../hooks/useAuth.jsx";
const saveUrl = "/link/save";

const Linkstab = () => {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    const [linksCount, setLinksCount] = useState([]);
    const [disableAddLink, setDisableAddLink] = useState(true);
    const [disableSaveLink, setDisableSaveLink] = useState(false);
    const [linkData, setlinkData] = useState({});

    const handleAddLinkClick = () => {
        setLinksCount([...linksCount, { order: linksCount.length + 1 }]);
        return;
    };

    useEffect(() => {
        setDisableAddLink(!disableAddLink);
    }, [linksCount]);

    useEffect(() => {
        linkData?.link ? setDisableSaveLink(false) : setDisableSaveLink(true);
    }, [linkData]);

    const handleLinkChange = async (data) => {
        try {
            setlinkData(data);
            return;
        } catch (e) {
            console.log(e);
        }
    };

    const saveToDatabase = async () => {
        try {
            if (!linkData || !linkData.link || !linkData.platform) {
                console.log("linkData Required");
                return;
            }
            const res = await axiosPrivate.post(saveUrl, linkData);
            console.log(res);
            return;
        } catch (e) {
            console.error(e);
            return;
        }
    };

    console.log(linkData);

    return (
        <>
            <div className="links-customization">
                <div className="links-customization-header">
                    <h2>Customize your links</h2>
                    <p>
                        Add/edit/remove links below and then share all your
                        profiles with the world!
                    </p>
                </div>
                <div className="links-customization-main">
                    <Buttonsecondary
                        disabled={disableAddLink}
                        buttonSecondaryText="+ Add new link"
                        onClick={handleAddLinkClick}
                    />
                    {linksCount?.length ? (
                        linksCount.map((link, index) => (
                            <Linkscustomization
                                handleChange={handleLinkChange}
                                key={index}
                                order={link.order}
                            />
                        ))
                    ) : (
                        <Linkscustomizationempty />
                    )}
                </div>
            </div>
            <div className="links-customization-footer">
                <div className="links-customization-footer-btn">
                    <Button
                        handleClick={saveToDatabase}
                        disabled={disableSaveLink}
                        buttonText="Save"
                    />
                </div>
            </div>
        </>
    );
};

export default Linkstab;
