import classNames from "classnames";

type InputType = "text" | "tel" | "email" | "number" | "password" | "url";
type InputMode =
  | "text"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal"
  | "search";

interface InputFieldProps {
  name: string;
  placeholder: string;
  label?: string;
  type?: InputType;
  required?: boolean;
  disabled?: boolean;
  inputmode?: InputMode;
}

const InputField = ({
  name,
  placeholder,
  label,
  type = "text",
  inputmode = "text",
  required,
  disabled,
}: InputFieldProps) => {
  const inputClass = classNames("w-full h-[50px] outline-none", {
    "bg-[rgba(255,255,255,0.15)] text-sm text-white placeholder:text-white px-4 border-[2px] border-solid border-white rounded-xl":
      inputmode !== "search",
    "bg-[#333333] max-w-[670px] border-solid border-b-[1px] border-[#555555] px-4 text-white":
      inputmode === "search",
  });

  return (
    <div className="flex flex-col gap-1 w-full max-w-[320px]">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        className={inputClass}
        id={name}
        type={type}
        inputMode={inputmode}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
