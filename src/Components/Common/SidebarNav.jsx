import { NavLink } from "react-router-dom";

function SidebarNav() {
  return (
    <div className="w-full h-full bg-white p-[16px] flex flex-col gap-[30px]">
      <div className="w-[100%] flex flex-col gap-[15px]">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "is-Active" : "is-Active-hover"
          }
        >
          <i className="bi bi-house-door text-[#CC4848] text-[20px]"></i>
          <h2 className="text-[15px] font-medium">Dashboard</h2>
        </NavLink>
        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[14px] text-text2 font-medium">Operational</h4>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/metrics"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-graph-up-arrow text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Metrics</h2>
            </NavLink>
            <NavLink
              to={"/manage"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-file-earmark-text text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Manage</h2>
            </NavLink>
            <NavLink
              to={"/earnings"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-coin text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Earnings</h2>
            </NavLink>
            <NavLink
              to={"/resources"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-journal text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Resources</h2>
            </NavLink>
            <NavLink
              to={"/referahost"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-clipboard-pulse text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Refer a host</h2>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[14px] text-text2 font-medium">Settings</h4>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/team"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-person text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Team</h2>
            </NavLink>
            <NavLink
              to={"/backup"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-database text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Backup</h2>
            </NavLink>
            <NavLink
              to={"/privacy"}
              className={({ isActive }) =>
                isActive ? "is-Active" : "is-Active-hover"
              }
            >
              <i className="bi bi-bag text-[#CC4848] text-[20px]"></i>
              <h2 className="text-[15px] font-medium">Privacy</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;
