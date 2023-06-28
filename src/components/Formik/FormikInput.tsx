import { useField } from "formik";

type InputType = "text" | "tel" | "email" | "number" | "password" | "url";
type InputMode =
  | "text"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal"
  | "search";

interface FormikInputProps {
  name: string;
  placeholder: string;
  label?: string;
  type?: InputType;
  required?: boolean;
  disabled?: boolean;
  inputmode?: InputMode;
}

const FormikInput = ({
  name,
  placeholder,
  label,
  type = "text",
  inputmode = "text",
  required,
  disabled,
}: FormikInputProps) => {
  const [field] = useField(name);

  return (
    <div className="flex flex-col gap-1 w-full max-w-[320px]">
      {label && <label htmlFor={field.name}>{label}</label>}

      <input
        className="w-full h-[50px] bg-[rgba(255,255,255,0.15)] text-sm text-white placeholder:text-white px-4 border-[2px] border-solid border-white rounded-xl"
        id={field.name}
        type={type}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        inputMode={inputmode}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default FormikInput;
