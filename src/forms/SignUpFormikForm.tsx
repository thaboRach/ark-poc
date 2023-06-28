import { Form, Formik, FormikConfig } from "formik";
import FormikInput from "../components/Formik/FormikInput";
import Button from "../components/Button";
import { languages } from "../utils/constants";
import { CheckMark } from "../assets";
import FormikDropdown from "../components/Formik/FormikDropdown";
import FormikCheckBox from "../components/Formik/FormikCheckBox";
import FormikDatePicker from "../components/Formik/FormikDatePicker";

type SignUpFormikFormProps<T> = {
  initialValues: T;
  validationSchema: FormikConfig<T>["validationSchema"];
  onSubmit: (values: T) => void;
};

const SignUpFormikForm = <T extends object>({
  initialValues,
  validationSchema,
  onSubmit,
}: SignUpFormikFormProps<T>) => {
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
        <FormikInput
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          required
        />
        <FormikInput
          name="emailAddress"
          placeholder="Email Address"
          type="email"
          required
        />
        <FormikDropdown
          name="preferredCodingLanguage"
          options={languages}
          placeholder="Preferred coding language"
        />
        <FormikDatePicker name="dateOfBirth" required />
        <div className="flex items-center gap-4">
          <FormikCheckBox
            label="AGREE TO TERMS?"
            name="agreeToTerms"
            required
          />
          <Button border="circle" onClick={onClick} type="submit">
            <img
              className="w-[15px] h-[15px]"
              src={CheckMark}
              alt="check mark"
            />
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormikForm;
