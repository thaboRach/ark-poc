import {
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
  Portal,
} from "@ark-ui/react";

interface DropdownProps {
  options: { value: string; label: string }[];
  placeholder: string;
}

const Dropdown = ({ options, placeholder }: DropdownProps) => {
  return (
    <Select>
      {({ selectedOption }) => (
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <SelectTrigger className="w-full h-[50px] bg-[rgba(255,255,255,0.15)] text-left text-sm text-white placeholder:text-white px-4 border-[2px] border-solid border-white rounded-xl">
            {selectedOption?.label ?? placeholder}
          </SelectTrigger>
          <Portal>
            <SelectPositioner className="w-full max-w-[320px] bg-[rgb(232,73,159)] rounded">
              <SelectContent className="w-full p-2 text-white border-[2px] border-solid border-white rounded">
                {options.map(({ label, value }, index) => (
                  <SelectOption
                    key={index}
                    className="h-8 hover:bg-[rgba(233,128,184,0.5)]  p-2 cursor-pointer"
                    value={value}
                    label={label}
                  />
                ))}
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </div>
      )}
    </Select>
  );
};

export default Dropdown;
