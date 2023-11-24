import "./DropDown.css";
import { useEffect, useState, useRef } from "react";
import downArrow from "../../assets/images/icon-chevron-down.svg";
import githubIcon from "../../assets/images/icon-github.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import linkedInIcon from "../../assets/images/icon-linkedin.svg";
import youtubeIcon from "../../assets/images/icon-youtube.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitchIcon from "../../assets/images/icon-twitch.svg";
import devToIcon from "../../assets/images/icon-devto.svg";
import codeWarsIcon from "../../assets/images/icon-codewars.svg";
import codePenIcon from "../../assets/images/icon-codepen.svg";
import freeCodeCampIcon from "../../assets/images/icon-freecodecamp.svg";
import gitLabIcon from "../../assets/images/icon-gitlab.svg";
import hashNodeIcon from "../../assets/images/icon-hashnode.svg";
import stackOverFlowIcon from "../../assets/images/icon-stack-overflow.svg";
import frontendMentorIcon from "../../assets/images/icon-frontend-mentor.svg";

const linkOptions = [
    {
        text: "GitHub",
        image: githubIcon,
        placeholder: "e.g. https://www.github.com/johnappleseed",
    },
    {
        text: "Twitter",
        image: twitterIcon,
        placeholder: "e.g. https://www.twitter.com/johnappleseed",
    },
    {
        text: "LinkedIn",
        image: linkedInIcon,
        placeholder: "e.g. https://www.linkedin.com/in/johnappleseed",
    },
    {
        text: "YouTube",
        image: youtubeIcon,
        placeholder: "e.g. https://www.youtube.com/user/johnappleseed",
    },
    {
        text: "Facebook",
        image: facebookIcon,
        placeholder: "e.g. https://www.facebook.com/johnappleseed",
    },
    {
        text: "Twitch",
        image: twitchIcon,
        placeholder: "e.g. https://www.twitch.tv/johnappleseed",
    },
    {
        text: "Dev.to",
        image: devToIcon,
        placeholder: "e.g. https://dev.to/johnappleseed",
    },
    {
        text: "CodeWars",
        image: codeWarsIcon,
        placeholder: "e.g. https://www.codewars.com/users/johnappleseed",
    },
    {
        text: "CodePen",
        image: codePenIcon,
        placeholder: "e.g. https://codepen.io/johnappleseed",
    },
    {
        text: "freeCodeCamp",
        image: freeCodeCampIcon,
        placeholder: "e.g. https://www.freecodecamp.org/johnappleseed",
    },
    {
        text: "GitLab",
        image: gitLabIcon,
        placeholder: "e.g. https://gitlab.com/johnappleseed",
    },
    {
        text: "Hashnode",
        image: hashNodeIcon,
        placeholder: "e.g. https://hashnode.com/@johnappleseed",
    },
    {
        text: "Stack Overflow",
        image: stackOverFlowIcon,
        placeholder: "e.g. https://stackoverflow.com/users/johnappleseed",
    },
    {
        text: "Frontend Mentor",
        image: frontendMentorIcon,
        placeholder: "e.g. https://www.frontendmentor.io/profile/johnappleseed",
    },
];

const DropDown = ({ onSelectPlatform }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const [isOptionHovered, setIsOptionHovered] = useState(null);
    const handleMouseEnter = (index) => {
        setIsOptionHovered(index);
    };
    const handleMouseLeave = () => {
        setIsOptionHovered(null);
    };

    const dropdownRef = useRef(null);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };
    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setShowDropDown(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const selectOption = (platform) => {
        onSelectPlatform(platform);
        setSelectedPlatform(platform);
        showDropDown ? setShowDropDown(false) : setShowDropDown(true);
    };

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div
                className={`dropbtn${
                    selectedPlatform ? " select-dropdown" : ""
                }`}
                style={
                    showDropDown
                        ? {
                              boxShadow: "0 0 32px 0 #633cff40",
                              border: "1px solid var(--purple-90-)",
                          }
                        : {}
                }
                onClick={toggleDropDown}
            >
                {selectedPlatform ? (
                    <>
                        <div className="dropdown-option-img">
                            <img
                                src={selectedPlatform.image}
                                alt={selectedPlatform.text}
                            />
                        </div>
                        <p className="dropdown-option-text">
                            {selectedPlatform.text}
                        </p>
                    </>
                ) : (
                    <>
                        <p>Select an option</p>
                        <div>
                            <img src={downArrow} alt="Down" />
                        </div>
                    </>
                )}
            </div>
            {showDropDown && (
                <div className="dropdown-options-container">
                    {linkOptions.map((option, ind) => (
                        <div
                            key={ind}
                            onClick={() => selectOption(option)}
                            onMouseEnter={() => handleMouseEnter(ind)}
                            onMouseLeave={handleMouseLeave}
                            className={`dropdown-option ${
                                isOptionHovered === ind ? "hovered" : ""
                            }`}
                        >
                            <div className="dropdown-option-img">
                                <img src={option.image} alt={option.text} />
                            </div>
                            <p className="dropdown-option-text">
                                {option.text}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
