import "./index.css";

const InputField = ({ label, iconSrc, altText, placeholderText }) => {
    return (
        <div className="input-field-parent">
            <span>{label}</span>
            <div className="input-container">
                <div>
                    <img src={iconSrc} alt={altText} />
                </div>
                <input type="text" placeholder={placeholderText} />
            </div>
        </div>
    );
};

export default InputField;
