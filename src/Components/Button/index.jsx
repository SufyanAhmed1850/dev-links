import "./index.css";

const Button = ({ buttonText, handleClick, disabled }) => {
    return (
        <button
            disabled={disabled && disabled}
            onClick={handleClick || null}
            className="button"
        >
            <h3>{buttonText}</h3>
        </button>
    );
};
export default Button;
