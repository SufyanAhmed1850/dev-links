import Mockup from "../../../assets/images/mockup-border.svg";
import Button from "../../../Components/Button/index.jsx";
import Buttonsecondary from "../../../Components/Button Secondary/buttonsecondary.jsx";
import emptyLinks from "../../../assets/images/illustration-empty.svg";
import Linkscustomizationempty from "../../../Components/Links Customization Empty/linkscustomizationempty.jsx";
import Linkscustomization from "../../../Components/Links Customization/linkscustomization.jsx";
import uploadImageIcon from "../../../assets/images/icon-upload-image.svg";
import InputField from "../../../Components/Input Field/index.jsx";
import "./profiletab.css";

const Profiletab = () => {
    return (
        <>
            <div className="profile-details">
                <div className="profile-details-header">
                    <h2>Profile Details</h2>
                    <p>
                        Add your details to create a personal touch to your
                        profile.
                    </p>
                </div>
                <div className="profile-details-main">
                    <div className="profile-details-picture">
                        <div className="profile-picture-text">
                            <p>Profile picture</p>
                        </div>
                        <div className="upload-profile-image-main">
                            <div className="upload-image">
                                <img
                                    src={uploadImageIcon}
                                    alt="Upload Profile Image"
                                />
                            </div>
                            <h3>+ Upload Image</h3>
                        </div>
                        <div className="profile-picture-instructions">
                            <p>
                                Suggestion: Use image dimensions as 1024x1024px or less. Use PNG or JPG
                                format.
                            </p>
                        </div>
                    </div>
                    <div className="profile-details-data">
                        <div className="profile-first-name">
                            <p>First name*</p>
                            <InputField placeholderText="e.g. John" imgYes={true} />
                        </div>
                        <div className="profile-last-name">
                            <p>Last name*</p>
                            <InputField placeholderText="e.g. Appleseed" imgYes={true} />
                        </div>
                        <div className="profile-email">
                            <p>Email</p>
                            <InputField placeholderText="e.g. email@example.com" imgYes={true} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-details-footer">
                <div className="profile-details-footer-btn">
                    <Button buttonText="Save" />
                </div>
            </div>
        </>
    );
};

export default Profiletab;
