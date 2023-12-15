import ActionButton from "../ActionButton";
import ActionSelector from "../ActionSelector";
import Calendar from "../Calendar";
import OptionSwitch from "../OptionSwitch";
import { TextField } from "@radix-ui/themes";
import CalendarImg from "../../assets/Calendar.png"
import './Card.css'
import { useState } from "react";

const Card = () => {
  const [activeButton, setActiveButton] = useState(null);
  
  return (
    <div className="container">
      <div className="action-name-input">
      <TextField.Input className="placeholder-text" placeholder="Nombre de la acción" />
      </div>
      
      <div className="switch-question-title">Seleccionar fecha</div>
      <div className="calendar-container">
        <div className="calendar-icon"> <img src={CalendarImg} alt="" /></div>
        <Calendar className="calendar" />
      </div>

      <div className="switch-question">
         <div className="switch-question-title">¿Su acción tiene un responsable?  
        </div>
        <OptionSwitch className="switch-question-text"/>
      </div>

      <div className="switch-question">
      <div className="switch-question-title">¿Su acción tiene un objetivo?  
        </div>
         
        <OptionSwitch />
      </div>


      <div className="action-type"><ActionSelector /></div>
      

      <div className="switch-question">
      <div className="switch-question-title">¿Su acción requiere calcular la huella de carbono?    
        </div>
        
        <OptionSwitch />
      </div>

      <div className="switch-question">
      <div className="switch-question-title">¿Su acción es una obligación legal? 
        </div>
           
        <OptionSwitch />
      </div>

      <div className="buttons">
                <ActionButton
                    buttonText="Cancelar"
                    borderColor="#58D5BA"
                    shadowColor="#277F70"
                    isActive={activeButton === "Cancelar"}
                    setActiveButton={setActiveButton}
                    onClick={() => console.log("Cancelar clicked")}
                />
                <ActionButton
                    buttonText="Guardar"
                    borderColor="#58D5BA"
                    shadowColor="#05a9a9"
                    isActive={activeButton === "Guardar"}
                    setActiveButton={setActiveButton}
                    onClick={() => console.log("Guardar clicked")}
                />
            </div>
    </div>
  );
};

export default Card;
