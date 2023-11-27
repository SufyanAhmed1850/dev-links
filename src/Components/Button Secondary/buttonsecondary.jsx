import "./buttonsecondary.css";

const Buttonsecondary = ({ buttonSecondaryText, onClick, disabled }) => {
    return (
        <button
            disabled={disabled && disabled}
            className="button-secondary"
            onClick={onClick}
        >
            <h3>{buttonSecondaryText}</h3>
        </button>
    );
};

export default Buttonsecondary;
