import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Stepper from "../pages/Stepper";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/main/Index";
import Dashboard from "../pages/main/Dashboard";
import Wallet from "../pages/main/Wallet";
import HomePage from "../pages/HomePage";
import Home from "../pages/main/Home";
import Calendar from "../pages/main/Calendar";
import Orders from "../pages/main/Orders";
import Settings from "../pages/main/Settings";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route path="" element={<HomePage />} />
      <Route path="normal" element={<Stepper />} />
      <Route path="formik" element={<Stepper />} />
      <Route path="main" element={<Index />}>
        <Route path="" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Stepper />} />
    </Route>
  ),
  {
    basename: "/ark-poc",
  }
);

export default Router;
