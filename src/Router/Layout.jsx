import { Outlet } from "react-router-dom";
import SidebarNav from "../Components/Common/SidebarNav";
import Header from "../Components/Common/Header";

function Layout() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar (Fixed at the top) */}
      <div className="w-full h-[8%] fixed top-0 left-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="flex w-full h-full">
        {/* Sidebar (Fixed on the left) */}
        <div className="w-[15%] h-full fixed left-0 top-[8%] bg-white shadow-md">
          <SidebarNav />
        </div>

        {/* Main Content (Adjusted for Sidebar) */}
        <div className="w-[85%] h-full ml-[15%] py-[6%] px-[20px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

