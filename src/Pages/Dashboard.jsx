import MetricsManage from "../Components/Layout/Dashboard/MetricsManage";
import MyGoogleMap from "../Components/Layout/Dashboard/MyGoogleMap";

function Dashboard() {
  return (
    <div className="flex justify-between px-[20px] pt-[50px]">
      <div className="w-[70%] h-full bg-red-10">
        <MyGoogleMap />
      </div>
      <div className="w-[29%] h-full">
        <MetricsManage />
      </div>
    </div>
  );
}

export default Dashboard;
