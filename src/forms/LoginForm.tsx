import InputField from "../components/InputField";
import Toggle from "../components/Toggle";
import Button from "../components/Button";
import { CheckMark, FacebookLogo, GoogleLogo } from "../assets";

const LoginForm = () => {
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
      <div className="flex items-center gap-4">
        <Toggle label="REMEMBER ME?" name="rememberMe" />
        <Button border="circle" onClick={onClick} type="submit">
          <img className="w-[15px] h-[15px]" src={CheckMark} alt="check mark" />
        </Button>
      </div>

      <Button textColor="red" onClick={onClick} icon={GoogleLogo}>
        Login with Google
      </Button>
      <Button textColor="blue" onClick={onClick} icon={FacebookLogo}>
        Login with Facebook
      </Button>
    </form>
  );
};

export default LoginForm;
