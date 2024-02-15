import { Outlet } from "react-router-dom";
import CustomNavBar from "../../components/CustomNavBar";

export default function NavBarLayout() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <CustomNavBar />
      <Outlet />
    </div>
  );
}
