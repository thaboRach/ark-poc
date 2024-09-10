import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-y-2 bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-3xl text-white text-medium">Choose an option</h1>
      <div className="flex gap-2 max-w-[400px] w-full">
        <Button onClick={() => navigate("/normal")}>Normal</Button>
        <Button onClick={() => navigate("/formik")}>Formik</Button>
      </div>
    </main>
  );
};

export default HomePage;
