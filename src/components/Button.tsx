import React from "react";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  textColor?: "pink" | "red" | "blue";
  secondary?: boolean;
  tertiary?: boolean;
  onClick: () => void;
  border?: "standard" | "circle";
  type?: "submit" | "button";
  icon?: string;
}

const Button = ({
  children,
  textColor = "red",
  secondary,
  tertiary,
  onClick,
  border = "standard",
  type = "button",
  icon,
}: ButtonProps) => {
  const btnClass = classNames({
    "w-[320px] h-[50px] rounded": border === "standard",
    "w-[50px] h-[50px] rounded-full flex justify-center items-center":
      border === "circle",
    "text-[#E23595]": textColor === "pink",
    "text-[#C25457]": textColor === "red",
    "text-[#3D64C3]": textColor === "blue",
    "bg-white shadow-3xl": !secondary,
    "bg-transparent text-white border-[1px] border-solid border-[rgba(238,238,238,0.5)]":
      secondary,
    "bg-gradient-to-r from-[#FA4A6F] from-0% via-[#EF5395] via-30% via-[#DE4DCB] via-75% to-[#CE4CE6] to-100%":
      tertiary,
  });

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {icon && <img className="absolute w-5 h-5 ml-4" src={icon} alt="icon" />}

      {children}
    </button>
  );
};

export default Button;
// background: linear-gradient(0deg, #AAAAAA, #AAAAAA),
// linear-gradient(225deg, #FA4A6F 0%, #EF5395 30.91%, #DE4DCB 75.85%, #CE4CE6 100%);
