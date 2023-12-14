import ActionButton from "../ActionButton";
import ActionSelector from "../ActionSelector";
import Calendar from "../Calendar";
import OptionSwitch from "../OptionSwitch";
import { TextField } from "@radix-ui/themes";
import './Card.css'

const Card = () => {
  return (
    <div className="container">
      <div className="action-name-input">
      <TextField.Input placeholder="Nombre de la acción" />
      </div>
      
      <div className="calendar-container">
        <div className="calendar-icon"></div>
        <Calendar />
      </div>

      <div className="switch-question">
         ¿Su acción tiene un responsable?  
        <OptionSwitch />
      </div>

      <div className="switch-question">
         ¿Su acción tiene un objetivo?  
        <OptionSwitch />
      </div>


      <div className="action-type"><ActionSelector /></div>
      

      <div className="switch-question">
         ¿Su acción requiere calcular la huella de carbono?  
        <OptionSwitch />
      </div>

      <div className="switch-question">
         ¿Su acción es una obligación legal?  
        <OptionSwitch />
      </div>

      <div className="buttons">
        <ActionButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default Card;
