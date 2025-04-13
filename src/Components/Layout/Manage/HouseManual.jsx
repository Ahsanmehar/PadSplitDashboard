import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function HouseManual() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="w-full flex h-[100vh] flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="w-[58%] h-full relative">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div className="w-full h-full" key={index}>
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
          <h3 className="flex items-center justify-between text-[14px] font-medium border-b-[1px] border-[#D2D2D2]">
            House Rules <i className="bi bi-caret-down text-[20px]"></i>
          </h3>

          <ul className="flex flex-col gap-[6px] list-decimal list-inside">
            <li className="text-[11px] font-light">
              Keep the property clean and tidy at all times.
            </li>
            <li className="text-[11px] font-light">
              No loud noises after 10 PM to respect neighbors.
            </li>
            <li className="text-[11px] font-light">
              No smoking inside the property
            </li>
            <li className="text-[11px] font-light">
              Report any damages or maintenance issues immediately.
            </li>
            <li className="text-[11px] font-light">
              Follow the lease agreement regarding guests and pets.
            </li>
            <li className="text-[11px] font-light">
              Pay rent on time as per the lease agreement.
            </li>
            <li className="text-[11px] font-light">
              Respect shared spaces and maintain good relations with neighbors.
            </li>
            <li className="text-[11px] font-light">
              No illegal activities are allowed on the property.
            </li>
            <li className="text-[11px] font-light">
              Use appliances and utilities responsibly to avoid damage or waste.
            </li>
            <li className="text-[11px] font-light">
              Lock doors and windows when leaving for security.
            </li>
            <li className="text-[11px] font-light">
              Dispose of trash properly and follow recycling guidelines.
            </li>
          </ul>

          <div className="flex flex-col gap-[5px]">
            <h3 className="flex justify-between text-[14px] text-[#5C5C5C] font-medium border-b-[1px] border-[#D2D2D2]">
              Move-in Instructions
              <i className="bi bi-caret-down text-[20px]"></i>
            </h3>
            <h3 className="flex justify-between text-[14px] text-[#5C5C5C] font-medium border-b-[1px] border-[#D2D2D2]">
              Move-Out Instructions
              <i className="bi bi-caret-down text-[20px]"></i>
            </h3>
            <h3 className="flex justify-between text-[14px] text-[#5C5C5C] font-medium border-b-[1px] border-[#D2D2D2]">
              Waste Pickup
              <i className="bi bi-caret-down text-[20px]"></i>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[15px] p-[10px]">
        <h3 className="text-[15px] font-medium">Mechanical Locks</h3>

        <div className="flex items-center flex-wrap gap-[10px]">
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
          <div className="w-[19%] flex items-center flex-col gap-[10px] border-[1px] border-[#CC4848] p-[10px]">
            <i className="bi bi-pencil text-[16px] ml-auto"></i>
            <h4 className="text-[12px] font-medium">Room 1</h4>
            <h5 className="text-[10px] font-normal">Punch Code Lock</h5>
            <h5 className="text-[12px] font-medium">64201A</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseManual;
