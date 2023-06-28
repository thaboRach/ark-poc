import { useContext } from "react";
import { useLocation } from "react-router-dom";
import TabsContext from "../context/tabs-context";
import LoginForm from "../forms/LoginForm";
import LoginFormikForm from "../forms/LoginFormikForm";
import { ILoginForm } from "../types";
import { LoginSchema } from "../utils/schemas";

const Login = () => {
  const { setActiveTab } = useContext(TabsContext);
  const location = useLocation();

  const initialValues: ILoginForm = {
    firstName: "",
    password: "",
    rememberMe: false,
  };

  function handleSubmit(values: ILoginForm) {
    window.alert(JSON.stringify(values));
  }

  return (
    <section className="flex flex-col flex-1 items-center gap-6 pt-20">
      <h2 className="text-4xl text-white">Welcome</h2>
      {location.pathname === "/normal" ? (
        <LoginForm />
      ) : (
        <LoginFormikForm
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        />
      )}
      <div className="flex items-center justify-center gap-1 mt-auto border-t border-white max-w-[600px] w-full py-10">
        <p className="text-white opacity-50">NEW USER?</p>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
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
