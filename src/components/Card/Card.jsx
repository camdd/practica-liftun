import ActionButton from "../ActionButton";
import ActionSelector from "../ActionSelector";
import Calendar from "../Calendar";
import OptionSwitch from "../OptionSwitch";
import { TextField } from "@radix-ui/themes";

const Card = () => {
  return (
    <div className="container">
      <TextField.Input placeholder="Nombre de la acción" />
      <div className="calendar-container">
        <div className="calendar-icon"></div>
        <Calendar />
      </div>
      <div className="switch-question">
        <OptionSwitch />
      </div>

      <div className="action-type"></div>
      <ActionSelector />

      <div className="buttons">
        <ActionButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default Card;
