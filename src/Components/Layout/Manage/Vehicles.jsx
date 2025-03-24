import ManageMenu from "../../Common/ManageMenu";
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

function Vehicles() {
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

        <div className="flex flex-col gap-[15px] w-[41%] h-full p-[20px] bg-white rounded-[10px]">
          <h3 className="text-[14px] font-medium border-b-[1px] border-[#D2D2D2] pb-[10px]">
            Vehicles
          </h3>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] font-medium mb-[20px]">
              Parking Availability
            </h3>
            <h4 className="text-[12px] font-light">Street: 6 parking spots</h4>
            <h4 className="text-[12px] font-light">
              Driveway: 0 parking spots
            </h4>
            <h4 className="text-[12px] font-light">Garage: 0 parking spots</h4>
          </div>

          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[14px] font-medium">Property Features</h3>
            <ul className="flex flex-col gap-[6px] list-decimal list-inside">
              <li className="text-[12px] font-light">
                Park only in designated areas assigned to you.
              </li>
              <li className="text-[12px] font-light">
                No blocking driveways, walkways, or emergency access routes.
              </li>
              <li className="text-[12px] font-light">
                Visitor parking is limited to designated spots and timeframes.
              </li>
              <li className="text-[12px] font-light">
                Maintain your vehicle to prevent oil leaks or damage to the
                property.
              </li>
              <li className="text-[12px] font-light">
                Unauthorized vehicles will be towed at the owner's expense.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[15px] h-full p-[20px] bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-medium pr-[10px]">
            Registered Vehicles
          </h3>
          <button className="w-fit flex items-center justify-center  gap-[10px] bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
            <i className="bi bi-plus text-[18px]"></i>
            Add Vehicle
          </button>
        </div>

        <div className="w-full flex gap-[20px] flex-col">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-between w-[49%] border-[1px] border-[#CC4848] rounded-[5px] p-[5px]">
              <div className="flex  items-center gap-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop"
                  alt="Error-image"
                  className="w-[140px] object-cover"
                />

                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-[12px] font-medium">Honda Civic</h3>
                  <h4 className="text-[10px] font-normal">White</h4>
                  <h3 className="text-[12px] font-medium">Vehicle No: 12345</h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    alt="Error-Image"
                    className="w-[38px] h-[38px] border-blue border-[1px] rounded-[50%] ml-[10px]"
                  />
                  <h4 className="text-[#242424] text-[14px] font-normal">
                    Daniel Foster
                  </h4>
                </div>
                <h4 className="text-[12px] font-medium">Room: 1</h4>
              </div>
            </div>
            <div className="flex items-center justify-between w-[49%] border-[1px] border-[#CC4848] rounded-[5px] p-[5px]">
              <div className="flex  items-center gap-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop"
                  alt="Error-image"
                  className="w-[140px] object-cover"
                />

                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-[12px] font-medium">Honda Civic</h3>
                  <h4 className="text-[10px] font-normal">White</h4>
                  <h3 className="text-[12px] font-medium">Vehicle No: 12345</h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    alt="Error-Image"
                    className="w-[38px] h-[38px] border-blue border-[1px] rounded-[50%] ml-[10px]"
                  />
                  <h4 className="text-[#242424] text-[14px] font-normal">
                    Daniel Foster
                  </h4>
                </div>
                <h4 className="text-[12px] font-medium">Room: 1</h4>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-between w-[49%] border-[1px] border-[#CC4848] rounded-[5px] p-[5px]">
              <div className="flex  items-center gap-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop"
                  alt="Error-image"
                  className="w-[140px] object-cover"
                />

                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-[12px] font-medium">Honda Civic</h3>
                  <h4 className="text-[10px] font-normal">White</h4>
                  <h3 className="text-[12px] font-medium">Vehicle No: 12345</h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    alt="Error-Image"
                    className="w-[38px] h-[38px] border-blue border-[1px] rounded-[50%] ml-[10px]"
                  />
                  <h4 className="text-[#242424] text-[14px] font-normal">
                    Daniel Foster
                  </h4>
                </div>
                <h4 className="text-[12px] font-medium">Room: 1</h4>
              </div>
            </div>
            <div className="flex items-center justify-between w-[49%] border-[1px] border-[#CC4848] rounded-[5px] p-[5px]">
              <div className="flex  items-center gap-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop"
                  alt="Error-image"
                  className="w-[140px] object-cover"
                />

                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-[12px] font-medium">Honda Civic</h3>
                  <h4 className="text-[10px] font-normal">White</h4>
                  <h3 className="text-[12px] font-medium">Vehicle No: 12345</h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    alt="Error-Image"
                    className="w-[38px] h-[38px] border-blue border-[1px] rounded-[50%] ml-[10px]"
                  />
                  <h4 className="text-[#242424] text-[14px] font-normal">
                    Daniel Foster
                  </h4>
                </div>
                <h4 className="text-[12px] font-medium">Room: 1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
