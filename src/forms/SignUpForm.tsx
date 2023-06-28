import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import { languages } from "../utils/constants";
import { Calendar } from "../components/Calendar";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import { CheckMark } from "../assets";

const SignUpForm = () => {
  function onClick() {
    console.log("click");
  }
  return (
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
      <Dropdown
        name="preferredCodingLanguage"
        options={languages}
        placeholder="Preferred coding language"
      />
      <Calendar />
      <div className="flex items-center gap-4">
        <CheckBox label="AGREE TO TERMS?" name="agreeToTerms" />
        <Button border="circle" onClick={onClick} type="submit">
          <img className="w-[15px] h-[15px]" src={CheckMark} alt="check mark" />
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
