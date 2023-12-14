/* eslint-disable react/prop-types */
import { Button } from "@radix-ui/themes";
import './ActionButton.css';

const ActionButton = ({ buttonText, borderColor, shadowColor, onClick, isActive, setActiveButton }) => {


const handleClick = () => {
    setActiveButton(buttonText);
    onClick();
};

    return(

        <Button
            className="btn_back"
            onClick={handleClick}
            style={{
                backgroundColor: isActive ? borderColor : "transparent",
                borderColor,
                boxShadow: isActive ? `0 0 5px ${shadowColor}` : "none",
            }}
        >
          {buttonText}
        </Button>

    )
}

export default ActionButton