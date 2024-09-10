import { NavLink, Outlet } from "react-router-dom";

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
} from "../../assets";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import classNames from "classnames";

const Index = () => {
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
            <li className="w-full" title="home">
              <NavLink
                to="/main/"
                className={({ isActive }) =>
                  classNames(
                    "flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]",
                    {
                      "border-solid border-r-[2px] border-[#CE57D0]": isActive,
                    }
                  )
                }
              >
                <img className="w-8 h-8" src={HomeIcon} alt="home" />
              </NavLink>
            </li>
            <li
              className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              title="dashboard"
            >
              <NavLink
                to="/main/dashboard"
                className={({ isActive }) =>
                  classNames(
                    "flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]",
                    {
                      "border-solid border-r-[2px] border-[#CE57D0]": isActive,
                    }
                  )
                }
              >
                <img className="w-8 h-8" src={DashboardIcon} alt="dashboard" />
              </NavLink>
            </li>

            <li className="w-full" title="wallet">
              <NavLink
                to="/main/wallet"
                className={({ isActive }) =>
                  classNames(
                    "flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]",
                    {
                      "border-solid border-r-[2px] border-[#CE57D0]": isActive,
                    }
                  )
                }
              >
                <img className="w-8 h-8" src={WalletIcon} alt="wallet" />
              </NavLink>
            </li>

            <li className="w-full" title="calender">
              <NavLink
                to="/main/calendar"
                className={({ isActive }) =>
                  classNames(
                    "flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]",
                    {
                      "border-solid border-r-[2px] border-[#CE57D0]": isActive,
                    }
                  )
                }
              >
                <img
                  className="w-8 h-8"
                  src={CalendarMenuIcon}
                  alt="calender"
                />
              </NavLink>
            </li>

            <li className="w-full" title="orders">
              <NavLink
                to="/main/orders"
                className={({ isActive }) =>
                  classNames(
                    "flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]",
                    {
                      "border-solid border-r-[2px] border-[#CE57D0]": isActive,
                    }
                  )
                }
              >
                <img className="w-8 h-8" src={OrdersIcon} alt="orders" />
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col items-center w-full gap-10">
            <li className="w-full" title="settings">
              <NavLink
                to="/main/settings"
                className={({ isActive }) =>
                  classNames(
                    "flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]",
                    {
                      "border-solid border-r-[2px] border-[#CE57D0]": isActive,
                    }
                  )
                }
              >
                <img className="w-8 h-8" src={SettingsIcon} alt="settings" />
              </NavLink>
            </li>
            <li className="w-full" title="logout">
              <NavLink
                to="/login"
                className="flex flex-col items-center justify-center w-full cursor-pointer h-[4rem]"
              >
                <img className="w-8 h-8" src={LogoutIcon} alt="logout" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <Outlet />
    </div>
  );
};

export default Index;
