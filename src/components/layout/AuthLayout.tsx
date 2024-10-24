import { Outlet } from "react-router-dom";
import AuthHeader from "../static/AuthHeader";

const AuthLayout = () => {
  return (
    <div>
      <AuthHeader />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
