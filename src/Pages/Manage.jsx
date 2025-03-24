import AddProperty from "../Components/Layout/Manage/AddProperty";
import AddRoomProperty from "../Components/Layout/Manage/AddRoomProperty";
import BulkEdit from "../Components/Layout/Manage/BulkEdit";
import EditProperty from "../Components/Layout/Manage/EditProperty";
import HouseManual from "../Components/Layout/Manage/HouseManual";
import ManageEarning from "../Components/Layout/Manage/ManageEarning";
import Overview from "../Components/Layout/Manage/Overview";
import Promotions from "../Components/Layout/Manage/Promotions";
import Vehicles from "../Components/Layout/Manage/Vehicles";

function Manage() {
  return (
    <div className="p-[40px]">
      {/* <Overview /> */}
      {/* <BulkEdit /> */}
      {/* <HouseManual /> */}
      {/* <ManageEarning /> */}
      {/* <Vehicles /> */}
      {/* <Promotions /> */}
      {/* <AddRoomProperty /> */}
      {/* <AddProperty /> */}
      <EditProperty />
    </div>
  );
}

export default Manage;
