import Button from "../../../Components/Button/index.jsx";
import Buttonsecondary from "../../../Components/Button Secondary/buttonsecondary.jsx";
import Linkscustomizationempty from "../../../Components/Links Customization Empty/linkscustomizationempty.jsx";
import Linkscustomization from "../../../Components/Links Customization/linkscustomization.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../../../api/axios.js";
import { useContext } from "react";
import linkContext from "../../../../context/linkContext.jsx";
import useAuth from "../../../../hooks/useAuth.jsx";

const getLinksEndpoint = "/link";
const saveLinksEndpoint = "/link/save";

const Linkstab = () => {
    const navigate = useNavigate();
    const isAuthenticated = useAuth();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);
    const { linksData, updateLinksData, setLinksData } =
        useContext(linkContext);
    const [order, setOrder] = useState(linksData.length + 1);
    console.log(linksData);
    useEffect(() => {
        (async () => {
            try {
                const res = await axiosPrivate(getLinksEndpoint);
                console.log(res);
                res?.data?.links && setLinksData(res.data.links);
                res?.data?.links && setOrder(res.data.links.length + 1);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleAddLinkClick = () => {
        updateLinksData(order);
        setOrder(order + 1);
    };

    const saveToDB = async () => {
        try {
            const res = await axiosPrivate.post(saveLinksEndpoint, linksData);
            console.log(res);
            return;
        } catch (error) {
            console.log(error);
            return;
        }
    };

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
                        buttonSecondaryText="+ Add new link"
                        onClick={handleAddLinkClick}
                    />
                    {linksData?.length ? (
                        linksData.map((link, index) => (
                            <Linkscustomization
                                key={index}
                                order={link.order}
                                index={index}
                                link={link.link || ""}
                                platform={link.platform.text || ""}
                            />
                        ))
                    ) : (
                        <Linkscustomizationempty />
                    )}
                </div>
            </div>
            <div className="links-customization-footer">
                <div className="links-customization-footer-btn">
                    <Button handleClick={saveToDB} buttonText="Save" />
                </div>
            </div>
        </>
    );
};

export default Linkstab;
