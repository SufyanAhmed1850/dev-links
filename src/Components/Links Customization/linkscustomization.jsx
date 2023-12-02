import "./linkscustomization.css";
import handle from "../../assets/images/icon-drag-and-drop.svg";
import InputField from "../Input Field";
import LinkIcon from "../../assets/images/icon-link.svg";
import DropDown from "../DropDown/DropDown";
import { useState, useEffect, useContext } from "react";
import linkContext from "../../../context/linkContext";

const Linkscustomization = ({ order, index, link, onRemove }) => {
    const { linksData, updateLinksData, setLinksData } =
        useContext(linkContext);
    const [url, setUrl] = useState();
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const handlePlatformChange = (newPlatform) => {
        setSelectedPlatform(newPlatform);
    };

    return (
        <div className="link-customization-not-empty-container">
            <div className="link-header">
                <div className="link-handle">
                    <div className="link-handle-img">
                        <img src={handle} alt="Drag and Drop Handle" />
                    </div>
                    <h3>Link #{order}</h3>
                </div>
                <div onClick={() => onRemove(index)} className="link-remove">
                    <p>Remove</p>
                </div>
            </div>
            <div className="links-dropdown">
                <span>Platform</span>
                <DropDown
                    index={index}
                    onSelectPlatform={handlePlatformChange}
                />
            </div>
            <div className="link-url">
                <InputField
                    index={index}
                    disabled={selectedPlatform ? false : true}
                    value={link || ""}
                    label={"Link"}
                    iconSrc={LinkIcon}
                    altText={"Link"}
                    onInputChange={(urlVal) => setUrl(urlVal)}
                    placeholderText={
                        selectedPlatform
                            ? selectedPlatform.placeholder
                            : "Select an option from dropdown"
                    }
                />
            </div>
        </div>
    );
};

export default Linkscustomization;
