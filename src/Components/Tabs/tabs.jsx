import "./tabs.css";
const Tabs = ({ imgSrc, altText, tabText }) => {
    return (
        <div className="tab-container">
            <div className="tab-img">
                <img src={imgSrc} alt={altText} />
            </div>
            <div className="tab-text">
                <h3>{tabText}</h3>
            </div>
        </div>
    );
};

export default Tabs;
