import { Form, Formik, FormikConfig } from "formik";
import FormikInput from "../components/Formik/FormikInput";
import Button from "../components/Button";
import { CheckMark, FacebookLogo, GoogleLogo } from "../assets";
import FormikToggle from "../components/Formik/FormikToggle";

type LoginFormikFormProps<T> = {
  initialValues: T;
  validationSchema: FormikConfig<T>["validationSchema"];
  onSubmit: (values: T) => void;
};

const LoginFormikForm = <T extends object>({
  initialValues,
  validationSchema,
  onSubmit,
}: LoginFormikFormProps<T>) => {
  function onClick() {
    console.log("click");
  }

  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col items-center gap-4 max-w-[600px] w-full">
        <FormikInput name="firstName" placeholder="Name" type="text" required />
        <FormikInput
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <div className="flex items-center gap-4">
          <FormikToggle label="REMEMBER ME?" name="rememberMe" />
          <Button border="circle" onClick={onClick} type="submit">
            <img
              className="w-[15px] h-[15px]"
              src={CheckMark}
              alt="check mark"
            />
          </Button>
        </div>

        <Button textColor="red" onClick={onClick} icon={GoogleLogo}>
          Login with Google
        </Button>
        <Button textColor="blue" onClick={onClick} icon={FacebookLogo}>
          Login with Facebook
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginFormikForm;
