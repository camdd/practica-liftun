import { Button } from "@radix-ui/themes";
import './ActionButton.css';

const ActionButton = ({onClick, buttonText, buttonColor}) => {
    return(

        <Button className="btn_back" role="buttonElement" onClick={onClick} style={{ backgroundColor: buttonColor }}>
          {buttonText}
        </Button>

    )
}

export default ActionButton

/* 
luego cuando lo quiera importar en mis cards:

import React from 'react';
import ActionButton from './ActionButton';

const Card = () => {
    const handleSave = () => {
        // Lógica para guardar los datos
    };

    const handleCancel = () => {
        // Lógica para cancelar
    };

    return (
        <>
            <ActionButton onClick={handleSave} buttonText="Guardar" />
            <ActionButton onClick={handleCancel} buttonText="Cancelar" />
            {O cualquier otra lógica}
        </>
    );
}

export default Card; */