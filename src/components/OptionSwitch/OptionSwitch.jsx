import * as Switch from "@radix-ui/react-switch";
import './OptionSwitch.css'

const OptionSwitch = () => {
  return (
    <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        No
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingLeft: 15 }}>
        Si
      </label>
    </div>
  </form>
  );
};

export default OptionSwitch;
