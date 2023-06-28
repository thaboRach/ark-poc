import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Stepper from "../pages/Stepper";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} />
      <Route path="/normal" element={<Stepper />} />
      <Route path="/formik" element={<Stepper />} />
      <Route path="*" element={<Stepper />} />
    </Route>
  ),
  {
    basename: "/ark-poc",
  }
);

export default Router;
