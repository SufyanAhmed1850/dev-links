import "./buttonsecondary.css";

const Buttonsecondary = ({ buttonSecondaryText }) => {
    return (
        <button className="button-secondary">
            <h3>{buttonSecondaryText}</h3>
        </button>
    );
};

export default Buttonsecondary;
