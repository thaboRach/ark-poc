import {
  Checkbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxControl,
} from "@ark-ui/react";
import { useField } from "formik";
import { CheckMark } from "../../assets";

interface FormikCheckBoxProps {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}

const FormikCheckBox = ({
  label,
  name,
  required,
  disabled,
}: FormikCheckBoxProps) => {
  const [field] = useField(name);

  return (
    <Checkbox
      name={field.name}
      required={required}
      disabled={disabled}
      checked={field.value}
      className="cursor-pointer flex gap-2"
    >
      <CheckboxInput onChange={field.onChange} onBlur={field.onBlur} />
      <CheckboxControl className="flex items-center bg-transparent rounded-md border-[1px] h-5 w-5 justify-center data-[checked]:bg-white data-[checked]:text-white">
        {field.value && <img className="w-3 h-3" src={CheckMark} alt="check" />}
      </CheckboxControl>
      <CheckboxLabel className="inline-flex flex-col gap-[0.5] text-white">
        {label}
      </CheckboxLabel>
    </Checkbox>
  );
};

export default FormikCheckBox;
