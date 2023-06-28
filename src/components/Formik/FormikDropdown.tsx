import { useState, useEffect } from "react";
import { useField, useFormikContext } from "formik";

import {
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
  Portal,
} from "@ark-ui/react";

type InnerDropdownProps = {
  options: { value: string; label: string }[];
  selectedOption: { label: string };
  placeholder: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const InnerDropdown = ({
  options,
  selectedOption,
  placeholder,
  setSelectedValue,
}: InnerDropdownProps) => {
  useEffect(() => {
    setSelectedValue(selectedOption?.label);
  }, [selectedOption]);

  return (
    <div className="flex flex-col gap-1 w-full max-w-[320px]">
      <SelectTrigger className="w-full h-[50px] bg-[rgba(255,255,255,0.15)] text-left text-sm text-white placeholder:text-white px-4 border-[2px] border-solid border-white rounded-xl">
        {selectedOption?.label ?? placeholder}
      </SelectTrigger>
      <Portal>
        <SelectPositioner className="w-full max-w-[320px] bg-[rgb(232,73,159)] rounded">
          <SelectContent className="w-full p-2 text-white border-[2px] border-solid border-white rounded">
            {options.map(({ label, value }, index) => (
              <SelectOption
                key={`${value}${index}`}
                className="h-8 hover:bg-[rgba(233,128,184,0.5)]  p-2 cursor-pointer"
                value={value}
                label={label}
              />
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </div>
  );
};

interface FormikDropdownProps {
  name: string;
  options: { value: string; label: string }[];
  placeholder: string;
  disabled?: boolean;
}

const FormikDropdown = ({
  name,
  options,
  placeholder,
  disabled = false,
}: FormikDropdownProps) => {
  const [field] = useField(name);
  const formikProps = useFormikContext();
  const [selectedValue, setSelectedValue] = useState<string>();

  useEffect(() => {
    formikProps.setFieldValue(field.name, selectedValue);
  }, [selectedValue]);

  return (
    <Select id={field.name} name={field.name} disabled={disabled}>
      {({ selectedOption }) => (
        <InnerDropdown
          selectedOption={selectedOption}
          options={options}
          placeholder={placeholder}
          setSelectedValue={setSelectedValue}
        />
      )}
    </Select>
  );
};

export default FormikDropdown;
