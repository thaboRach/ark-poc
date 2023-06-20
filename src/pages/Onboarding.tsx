import Logo from "../components/Logo";
import Arrow from "../assets/arrow.svg";
import Login from "./Login";
import SignUp from "./SignUp";
import Tabbed from "../components/Tabbed";
import { TabsContextProvider } from "../context/tabs-context";

interface OnboardingProps {
  onNext: () => void;
  onBack: () => void;
}

const options = [
  { value: "login", component: <Login /> },
  { value: "signUp", component: <SignUp /> },
];

const Onboarding = ({ onBack }: OnboardingProps) => {
  return (
    <main className="w-full h-screen flex flex-col items-center gap-10 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-full flex justify-center pt-10 relative">
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          className="w-[30px] h-[30px] cursor-pointer absolute left-6"
          src={Arrow}
          alt="back arrow"
          onClick={onBack}
        />
        <Logo size="small" />
      </div>

      <TabsContextProvider>
        <Tabbed options={options} />
      </TabsContextProvider>
    </main>
  );
};

export default Onboarding;
