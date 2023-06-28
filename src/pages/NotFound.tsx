import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-y-2 items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-white text-3xl text-medium">Ooops!</h1>
      <p className="text-white">Sorry, that page does not exist</p>
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </main>
  );
};

export default NotFound;
