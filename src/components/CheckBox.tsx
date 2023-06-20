import { useState } from "react";
import {
  Checkbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxControl,
} from "@ark-ui/react";
import type { CheckedState } from "@ark-ui/react";
import CheckMark from "../assets/check mark.svg";

interface CheckBoxProps {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
}

const CheckBox = ({
  label,
  name,
  required,
  disabled,
  defaultChecked = false,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState<CheckedState>(defaultChecked);
  return (
    <Checkbox
      name={name}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={(e) => setChecked(e.checked)}
      className="cursor-pointer flex gap-2"
    >
      <CheckboxInput />
      <CheckboxControl className="flex items-center bg-transparent rounded-md border-[1px] h-5 w-5 justify-center data-[checked]:bg-white data-[checked]:text-white">
        {checked && <img className="w-3 h-3" src={CheckMark} alt="check" />}
      </CheckboxControl>
      <CheckboxLabel className="inline-flex flex-col gap-[0.5] text-white">
        {label}
      </CheckboxLabel>
    </Checkbox>
  );
};

export default CheckBox;
