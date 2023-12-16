/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, {useState} from "react";
import * as Select from "@radix-ui/react-select";
import {CheckIcon, ChevronDownIcon, ChevronUpIcon,} from "@radix-ui/react-icons";
import "./ActionSelector.css";
import {Controller} from "react-hook-form";
import classnames from "classnames";

const options = [{label: 'Ambiental (Better World 🌍)', value: 'better_world'}, {
    label: 'Social (Better Place 🤝)',
    value: 'better_place'
}, {label: 'Gobernabilidad (Better Company 🏛)', value: 'better_company'}, {
    label: 'Económica (Better Profit 💰)',
    value: 'better_profit'
},]

const ActionSelector = ({control, name}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenChange = (open) => {
        setIsOpen(open);
    };

    return (<Controller
        name={name}
        control={control}
        render={({field}) => {
            return (<Select.Root
                open={isOpen}
                value={field.value}
                onOpenChange={handleOpenChange}
                onValueChange={(newValue) => {
                    setIsOpen(false); // Cierra el menú al seleccionar un ítem
                    field.onChange(newValue);
                }}>
                <Select.Trigger className="SelectTrigger" aria-label="Action-type">
                    <Select.Value placeholder="Tipo de acción"/>
                    <Select.Icon className="SelectIcon">
                        {isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="SelectContent">
                        <Select.ScrollUpButton className="SelectScrollButton">
                            <ChevronUpIcon/>
                        </Select.ScrollUpButton>
                        <Select.Viewport className="SelectViewport">
                            {options.map((option, index) => <React.Fragment key={option.value}>
                                <Select.Group>
                                    <Select.Label className="SelectLabel"></Select.Label>
                                    <SelectItem value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                </Select.Group>
                                {options.length - 1 !== index && <Select.Separator className="SelectSeparator"/>}
                            </React.Fragment>)}
                        </Select.Viewport>
                        <Select.ScrollDownButton className="SelectScrollButton">
                            <ChevronDownIcon/>
                        </Select.ScrollDownButton>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>)
        }}
    />);
}

const SelectItem = React.forwardRef(({children, className, ...props}, forwardedRef) => {
    return (<Select.Item
            className={classnames("SelectItem", className)}
            {...props}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon/>
            </Select.ItemIndicator>
        </Select.Item>);
})

export default ActionSelector;
