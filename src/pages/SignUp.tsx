import { useContext } from "react";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import InputField from "../components/InputField";
import Checkmark from "../assets/check mark.svg";
import TabsContext from "../context/tabs-context";
import Dropdown from "../components/Dropdown";
import { languages } from "../utils/constants";

const SignUp = () => {
  const { setActiveTab } = useContext(TabsContext);

  function click() {
    console.log("lgo");
  }
  return (
    <section className="flex flex-col flex-1 items-center gap-6 pt-20">
      <h2 className="text-4xl text-white">Join us</h2>
      <form className="flex flex-col items-center gap-4 max-w-[600px] w-full">
        <InputField name="firstName" placeholder="Name" type="text" required />
        <InputField
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <InputField
          name="repeatPassword"
          placeholder="Confirm Password"
          type="password"
          required
        />
        <InputField
          name="email"
          placeholder="Email Address"
          type="email"
          required
        />
        <Dropdown options={languages} placeholder="Preferred coding language" />
        <div className="flex items-center gap-4">
          <CheckBox label="AGREE TO TERMS?" name="agreeToTerms" />
          <Button border="circle" onClick={click} type="submit">
            <img
              className="w-[15px] h-[15px]"
              src={Checkmark}
              alt="check mark"
            />
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-1 mt-auto border-t border-white max-w-[600px] w-full py-10">
        <p className="text-white opacity-50">ALREADY DID THIS?</p>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <p
          onClick={() => setActiveTab("login")}
          className="text-white underline cursor-pointer"
        >
          LOGIN
        </p>
      </div>
    </section>
  );
};

export default SignUp;
