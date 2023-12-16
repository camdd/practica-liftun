/* eslint-disable react/prop-types */
import {Button} from "@radix-ui/themes";
import './ActionButton.css';

const ActionButton = ({buttonText, onClick, type, buttonStyle,disabled}) => {
    return (

        <Button
            className={buttonStyle !=="secondary" ? "btn_back btn_primary" : "btn_back btn_secondary"}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {buttonText}
        </Button>

    )
}

export default ActionButton