import { useContext } from "react";
import { useLocation } from "react-router-dom";
import TabsContext from "../context/tabs-context";
import SignUpForm from "../forms/SignUpForm";
import SignUpFormikForm from "../forms/SignUpFormikForm";
import { ISignUpForm } from "../types";
import { SignUpSchema } from "../utils/schemas";

const SignUp = () => {
  const { setActiveTab } = useContext(TabsContext);
  const location = useLocation();

  const initialValues: ISignUpForm = {
    firstName: "",
    password: "",
    confirmPassword: "",
    emailAddress: "",
    preferredCodingLanguage: "",
    dateOfBirth: "",
    agreeToTerms: false,
  };

  function handleSubmit(values: ISignUpForm) {
    window.alert(JSON.stringify(values));
  }

  return (
    <section className="flex flex-col items-center flex-1 gap-6 pt-20">
      <h2 className="text-4xl text-white">Join us</h2>
      {location.pathname === "/normal" ? (
        <SignUpForm />
      ) : (
        <SignUpFormikForm
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        />
      )}
      <div className="flex items-center justify-center gap-1 mt-auto border-t border-white max-w-[600px] w-full py-10">
        <p className="text-white opacity-50">ALREADY DID THIS?</p>
        <button
          type="button"
          onClick={() => setActiveTab("login")}
          className="text-white underline cursor-pointer"
        >
          LOGIN
        </button>
      </div>
    </section>
  );
};

export default SignUp;
