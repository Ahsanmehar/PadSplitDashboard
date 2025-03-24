import ManageMenu from "../../Common/ManageMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ManageStatCard from "../Manage/ManageStatCard";

const images = [
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1740&auto=format&fit=crop",
];

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white w-[45px] max10:w-[38px] h-[45px] max10:h-[38px] rounded-full shadow-lg hover:bg-gray-200 transition"
    >
      <i className="bi bi-arrow-right-circle-fill text-2xl max10:text-[23px] text-[#16457E]"></i>
    </button>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-white w-[45px] max10:w-[38px] h-[45px] max10:h-[38px] rounded-full shadow-lg hover:bg-gray-200 transition"
    >
      <i className="bi bi-arrow-left-circle-fill text-2xl max10:text-[23px] text-[#16457E]"></i>
    </button>
  );
};

function ManageEarning() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="w-full flex justify-between items-center  py-[10px] px-[20px] bg-white rounded-[5px] shadow-[0px 0px 4.7px 0px #0000004D]">
        <div className="flex items-center gap-[20px]">
          <h2 className="text-[20px] text-[#596574] font-medium border-r-[5px] border-[#CC4848] pr-[20px]">
            77 Sparkes Road
          </h2>
          <h2 className="text-[20px] text-[#596574] font-medium">
            Bray Park QLD 4500
          </h2>

          <div className="px-[8px] text-[14px] bg-[#12B76A] text-white rounded-[6px] w-fit flex items-center justify-center">
            <i className="bi bi-dot text-[25px] text-white"></i>8.0
          </div>
        </div>

        <button className="w-fit bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
          Add Room
        </button>

        <div className="flex items-center gap-[10px]">
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[6px]">
            <i className="bi bi-house-fill text-[18px] text-[#CC4848]"></i>
            House
          </h3>
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[6px]">
            <i className="bi bi-house-door text-[18px] text-[#CC4848]"></i>3
            beds
          </h3>
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[6px]">
            <i className="bi bi-droplet text-[18px] text-[#CC4848]"></i>2 baths
          </h3>
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[6px]">
            <i className="bi bi-car-front text-[18px] text-[#CC4848]"></i>0 cars
          </h3>
        </div>
      </div>
      <ManageMenu />

      <div className="flex h-[460px] items-center justify-between">
        <div className="w-[58%] h-full relative">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div className="w-full h-[460px]" key={index}>
                <img
                  src={src}
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>

          <div className="flex items-center justify-between w-[70%] absolute top-[5%] left-[50%] transform translate-x-[-50%] bg-[#596574] p-[10px] shadow-[0px 5px 15px 0px #FFC13B17] rounded-[5px]">
            <h3 className="text-[14px] text-[#16457E] border-r-[1px] border-[#16457E] font-medium pr-[10px]">
              House Manual
            </h3>
            <h3 className="text-[14px] text-white border-r-[1px] border-[#16457E] font-medium pr-[10px]">
              Property Photos
            </h3>
            <h3 className="text-[14px] text-white font-medium pr-[10px]">
              Renter Photos
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-[22px] w-[41%] h-full p-[20px] bg-white rounded-[10px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px]">
              <ManageStatCard
                title="Monthly Earnings"
                value="20"
                moutian="#EEFAFD"
                stroke="#57CAEB"
              />
              <ManageStatCard
                title="Expense"
                value="50"
                moutian="#FFF2F1"
                stroke="#FA7976"
              />
            </div>
            <div className="flex gap-[20px]">
              <ManageStatCard
                title="Income"
                value="$2000"
                moutian="#F0E8F9"
                stroke="#6418C3"
              />
              <ManageStatCard
                title="Adjustments"
                value="$425"
                moutian="#EFFBF8"
                stroke="#5DDAB4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between p-[10px] bg-white rounded-[5px] px-[30px]">
        <h2 className="text-[16px] font-medium">Generate a Report</h2>
        <h2 className="flex items-center gap-[20px] text-[16px] text-[#CC4848] font-medium">
          <i className="bi bi-arrow-bar-down text-[22px]"></i>Export to CSV
        </h2>
      </div>
    </div>
  );
}

export default ManageEarning;
