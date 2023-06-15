import InputField from "../components/InputField";
import Toggle from "../components/Toggle";
import Button from "../components/Button";
import { FacebookLogo, GoogleLogo, CheckMark } from "../assets";
import { useContext } from "react";
import TabsContext from "../context/tabs-context";

const Login = () => {
  const { setActiveTab } = useContext(TabsContext);

  const click = () => {
    console.log("Login to 3rd party");
  };

  return (
    <section className="flex flex-col flex-1 items-center gap-6 pt-20">
      <h2 className="text-4xl text-white">Welcome</h2>
      <form className="flex flex-col items-center gap-4 max-w-[600px] w-full">
        <InputField name="firstName" placeholder="Name" type="text" required />
        <InputField
          name="lastName"
          placeholder="Password"
          type="password"
          required
        />
        <div className="flex items-center gap-4">
          <Toggle label="REMEMBER ME?" name="rememberMe" />
          <Button border="circle" onClick={click} type="submit">
            <img className="w-[15px] h-[15px]" src={CheckMark} />
          </Button>
        </div>

        <Button textColor="red" onClick={click} icon={GoogleLogo}>
          Login with Google
        </Button>
        <Button textColor="blue" onClick={click} icon={FacebookLogo}>
          Login with Facebook
        </Button>
      </form>
      <div className="flex items-center justify-center gap-1 mt-auto border-t border-white max-w-[600px] w-full py-10">
        <p className="text-white opacity-50">NEW USER?</p>
        <p
          onClick={() => setActiveTab("signUp")}
          className="text-white underline cursor-pointer"
        >
          SIGN UP
        </p>
      </div>
    </section>
  );
};

export default Login;
