import Downloads from "../Components/Layout/Metrics/Downloads";
import Listing from "../Components/Layout/Metrics/Listing";
import MembersRating from "../Components/Layout/Metrics/MembersRating";
import Occupancy from "../Components/Layout/Metrics/Occupancy";
import PendingRoom from "../Components/Layout/Metrics/PendingRoom";
import PropertyScores from "../Components/Layout/Metrics/PropertyScores";
import Tenure from "../Components/Layout/Metrics/Tenure";
import TimetoFlip from "../Components/Layout/Metrics/TimetoFlip";

function Metrics() {
  return (
    <div className="p-[40px]">
      {/* <PropertyScores /> */}
      {/* <MembersRating /> */}
      {/* <Occupancy /> */}
      {/* <Tenure /> */}
      {/* <TimetoFlip /> */}
      {/* <PendingRoom /> */}
      {/* <Listing /> */}
      <Downloads />
    </div>
  );
}

export default Metrics;
