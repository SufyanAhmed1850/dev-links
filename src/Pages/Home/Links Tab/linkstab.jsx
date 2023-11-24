import Mockup from "../../../assets/images/mockup-border.svg";
import Button from "../../../Components/Button/index.jsx";
import Buttonsecondary from "../../../Components/Button Secondary/buttonsecondary.jsx";
import emptyLinks from "../../../assets/images/illustration-empty.svg";
import Linkscustomizationempty from "../../../Components/Links Customization Empty/linkscustomizationempty.jsx";
import Linkscustomization from "../../../Components/Links Customization/linkscustomization.jsx";

const Linkstab = () => {
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
                    {/* <Buttonsecondary buttonSecondaryText="+ Add new link" /> */}
                    {/* <Linkscustomizationempty /> */}
                    <Linkscustomization />
                </div>
            </div>
            <div className="links-customization-footer">
                <div className="links-customization-footer-btn">
                    <Button buttonText="Save" />
                </div>
            </div>
        </>
    );
};

export default Linkstab;
