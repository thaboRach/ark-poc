import {
  Switch,
  SwitchInput,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
} from "@ark-ui/react";
import { useField } from "formik";

interface FormikToggleProps {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}

const FormikToggle = ({
  label,
  name,
  required,
  disabled,
}: FormikToggleProps) => {
  const [field] = useField(name);

  return (
    <Switch
      id={field.name}
      name={field.name}
      checked={field.value}
      required={required}
      disabled={disabled}
      className="flex items-center relative gap-2 w-fit"
    >
      <SwitchInput onChange={field.onChange} onBlur={field.onBlur} />
      <SwitchControl className="inline-flex items-center justify-start flex-shrink-0 cursor-pointer rounded p-2 w-10 h-4 bg-gray-200 data-[checked]:bg-[rgb(232,73,159)]">
        <SwitchThumb className="bg-white w-6 h-6 relative rounded-full transition-[transform] duration-200 translate-x-[-50%] data-[checked]:translate-x-[50%]" />
      </SwitchControl>
      <SwitchLabel className="text-white">{label}</SwitchLabel>
    </Switch>
  );
};

export default FormikToggle;
