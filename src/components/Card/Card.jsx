/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({children}) => {
    return (<div className="form-container">
        {children}
    </div>);
};

export default Card;
