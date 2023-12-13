/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, {useState} from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./ActionSelector.css";

const ActionSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOpenChange = (open) => {
    setIsOpen(open);
  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false); // Cierra el menú al seleccionar un ítem
  };


  return (
    <Select.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Select.Trigger className="SelectTrigger" aria-label="Action-type">
        <Select.Value placeholder="Tipo de acción" />
        <Select.Icon className="SelectIcon">
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
          <Select.Group>
              <Select.Label className="SelectLabel"></Select.Label>
              <SelectItem
                value="ambiental"
                onSelect={() => handleValueChange("Accion Ambiental")}
              >
                Ambiental (Better World 🌍)
              </SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel"></Select.Label>
              <SelectItem value="social"
              onSelect={() => handleValueChange("Accion Social")}>Social (Better Place 🤝)</SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel"></Select.Label>
              <SelectItem value="gobernabilidad" onSelect={() => handleValueChange("Accion Gobernabilidad")} > Gobernabilidad (Better Company 🏛 )</SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel"></Select.Label>
              <SelectItem value="economica" onSelect={() => handleValueChange("Accion Economica")}> Económica (Better Profit 💰)</SelectItem>
            </Select.Group>

          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default ActionSelector;
