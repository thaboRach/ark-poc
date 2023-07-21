import {
  Activity,
  AddIcon,
  CalendarMenuIcon,
  DashboardIcon,
  HomeIcon,
  LogoutIcon,
  Messages,
  OrdersIcon,
  SettingsIcon,
  WalletIcon,
} from "../assets";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("click");
  }
  return (
    <div className="grid w-full h-screen grid-cols-[6.5rem_1fr] grid-rows-[100px_1fr] ">
      <header className="flex items-center justify-between col-span-2 w-full h-[100px] bg-[#333333] font-[#666666] pl-0 md:pl-[6.5rem] ">
        <InputField
          name="search"
          placeholder="search for a number..."
          inputmode="search"
        />

        <nav className="flex items-center gap-10 pr-10">
          <ul className="flex gap-6">
            <li className="cursor-pointer">
              <img className="w-6 h-6" src={Messages} alt="messages" />
            </li>
            <li className="cursor-pointer">
              <img className="w-6 h-6" src={Activity} alt="activity" />
            </li>
          </ul>
          <Button onClick={handleClick} border="circle" tertiary>
            <img className="w-[15px] h-[15px]" src={AddIcon} alt="add" />
          </Button>
        </nav>
      </header>

      <aside className="bg-[#131313] flex flex-col gap-4 items-center py-8">
        <nav className="flex flex-col items-center justify-between w-full h-full gap-4">
          <ul className="flex flex-col items-center w-full gap-10">
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem] border-solid border-r-[2px] border-[#CE57D0]"
              title="home"
            >
              <img className="w-8 h-8" src={HomeIcon} alt="home" />
            </li>
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              title="dashboard"
            >
              <img className="w-8 h-8" src={DashboardIcon} alt="dashboard" />
            </li>
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              title="wallet"
            >
              <img className="w-8 h-8" src={WalletIcon} alt="wallet" />
            </li>
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              title="calender"
            >
              <img className="w-8 h-8" src={CalendarMenuIcon} alt="calender" />
            </li>
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              title="orders"
            >
              <img className="w-8 h-8" src={OrdersIcon} alt="orders" />
            </li>
          </ul>

          <ul className="flex flex-col items-center w-full gap-10">
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              title="settings"
            >
              <img className="w-8 h-8" src={SettingsIcon} alt="settings" />
            </li>
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              title="logout"
              onClick={() => navigate("/login")}
            >
              <img className="w-8 h-8" src={LogoutIcon} alt="logout" />
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 w-full bg-[#222] p-10">
        <h1 className="text-2xl text-white">Welcome to the Dashboard</h1>
      </main>
    </div>
  );
};

export default Dashboard;
