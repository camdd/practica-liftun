import * as Switch from "@radix-ui/react-switch";
import "./OptionSwitch.css";
import {Controller} from "react-hook-form";

const OptionSwitch = ({label, control, name}) => {

    return (<div className="switch-question">
        <label className="switch-question-title">
            {label}
        </label>
        <div className="switch-yes-no">
            <label
                className="Label"
                htmlFor="switch"
                style={{paddingRight: 15}}
            >
                No
            </label>
            <Controller
                control={control}
                name={name}
                render={({field}) => {
                    return (<Switch.Root
                            className="SwitchRoot" id="switch" name={name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            ref={field.ref}>
                            <Switch.Thumb className="SwitchThumb"/>
                        </Switch.Root>

                    );
                }}
            />

            <label
                className="Label"
                htmlFor="switch"
                style={{paddingLeft: 15}}
            >
                Si
            </label>
        </div>
    </div>);
};

export default OptionSwitch;
