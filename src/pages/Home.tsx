import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-y-2 items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-white text-3xl text-medium">Choose an option</h1>
      <div className="flex gap-2 max-w-[400px] w-full">
        <Button onClick={() => navigate("/normal")}>Normal</Button>
        <Button onClick={() => navigate("/formik")}>Formik</Button>
      </div>
    </main>
  );
};

export default Home;
