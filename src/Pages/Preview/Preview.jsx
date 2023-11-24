import Button from "../../Components/Button";
import Buttonsecondary from "../../Components/Button Secondary/buttonsecondary";
import "./Preview.css";
import GithubIcon from "../../assets/images/icon-github-white.svg";
import RightArrow from "../../assets/images/icon-arrow-right.svg";
import UserImage from "../../assets/images/preview-user.jpg";

const links = [
    {
        text: "Github",
        img: GithubIcon,
        backgroundColor: "#1A1A1A",
        url: "https://github.com",
    },
    {
        text: "Github",
        img: GithubIcon,
        backgroundColor: "#1A1A1A",
        url: "https://github.com",
    },
    {
        text: "Github",
        img: GithubIcon,
        backgroundColor: "#1A1A1A",
        url: "https://github.com",
    },
    {
        text: "Github",
        img: GithubIcon,
        backgroundColor: "#1A1A1A",
        url: "https://github.com",
    },
];

const Preview = () => {
    return (
        <div className="preview-parent">
            <div className="preview-blob"></div>
            <div className="preview-header">
                <Buttonsecondary buttonSecondaryText="Back to Editor" />
                <Button buttonText="Share Link" />
            </div>
            <div className="preview-card">
                <div className="preview-card-header">
                    <div className="preview-card-header-img">
                        <img src={UserImage} alt="User" />
                    </div>
                    <div className="preview-card-header-text">
                        <h2>Ben Wright</h2>
                        <p>ben@example.com</p>
                    </div>
                </div>
                <div className="preview-card-links-parent">
                    {links.map((link) => (
                        <div className="preview-card-link">
                            <div>
                                <img src={link.img} alt={link.text} />
                            </div>
                            <p>{link.text}</p>
                            <div>
                                <img src={RightArrow} alt="Arrow" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Preview;
