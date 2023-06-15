import { useMultiStep } from "./hooks/use-multi-step";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";

function App() {
  const { step, next, back } = useMultiStep([
    <Splash onNext={() => next()} />,
    <Onboarding onNext={() => next()} onBack={() => back()} />,
  ]);
  return <>{step}</>;
}

export default App;
