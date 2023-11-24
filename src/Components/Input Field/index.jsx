import { useRef, useState } from "react";
import "./index.css";

const InputField = ({ label, iconSrc, altText, placeholderText, imgYes }) => {
    const [value, setValue] = useState();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="input-field-parent">
            <span>{label}</span>
            <div
                style={
                    isFocused
                        ? {
                              border: "1px solid var(--purple-90-)",
                              boxShadow: "0 0 32px 0 #633cff40",
                          }
                        : {}
                }
                className="input-container"
            >
                {imgYes || (
                    <div>
                        <img src={iconSrc} alt={altText} />
                    </div>
                )}
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    type="text"
                    placeholder={placeholderText}
                />
            </div>
        </div>
    );
};

export default InputField;
