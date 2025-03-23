import { Outlet } from "react-router-dom";
import SidebarNav from "../Components/Common/SidebarNav";
import Header from "../Components/Common/Header";

function Layout() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[8%]">
        <Header />
      </div>
      <div className="w-full h-[92%] flex">
        <div className="w-[15%] h-full">
          <SidebarNav />
        </div>
        <div className="w-[85%] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
