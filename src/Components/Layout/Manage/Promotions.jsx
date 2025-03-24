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

function Promotions() {
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
              Promo Code
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
          <h3 className="text-[16px] font-medium">Promo Code</h3>
          <p className="text-[12px] font-normal">
            Promo codes are valid for a limited time and must be applied at
            checkout to receive the discount. Only one promo code can be used
            per transaction, and they cannot be combined with other offers.
            Promo codes are non-transferable, cannot be exchanged for cash, and
            are applicable only to eligible properties as specified.
          </p>
          <button className="w-fit flex items-center justify-center  gap-[10px] bg-f2 py-[7px] px-[14px] rounded-[5px] text-[12px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
            <i className="bi bi-plus text-[18px]"></i>
            Add Promo Code
          </button>

          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[16px] font-medium">Room Promotion</h3>
            <div className="flex items-center justify-between">
              <h4 className="text-[12px] text-[#848484] font-medium">
                Total Bedrooms
              </h4>
              <h4 className="text-[12px] text-[#848484] font-medium">
                Occupancies
              </h4>
              <h4 className="text-[12px] text-[#848484] font-medium">
                Promotions
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[12px] text-[#505050] font-medium">
                Total Bedrooms
              </h4>
              <h4 className="text-[12px] text-[#505050] font-medium">
                4 Bedrooms Occupied
              </h4>
              <h4 className="text-[12px] text-[#505050] font-medium">
                2 Active Promotions
              </h4>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex justify-between items-center p-[15px] bg-[#F6F6F6] rounded-[5px]">
              <div className="flex items-center gap-[10px]">
                <h4 className="text-[10px] font-medium">
                  77 Sparkes Road (Room 5)
                </h4>
                <h4 className="text-[12px] text-[#CC4848] font-medium bg-[#FFF09B] py-[2px] px-[8px]">
                  Vacant
                </h4>
                <h4 className="text-[10px] font-medium">5% off 6 weeks</h4>
              </div>
              <h4 className="text-[10px] text-[#16457E] underline font-medium">
                Price Detail
              </h4>
            </div>
            <div className="w-full flex justify-between items-center p-[15px] bg-[#F6F6F6] rounded-[5px]">
              <div className="flex items-center gap-[10px]">
                <h4 className="text-[10px] font-medium">
                  77 Sparkes Road (Room 5)
                </h4>
                <h4 className="text-[12px] text-[#CC4848] font-medium bg-[#FFF09B] py-[2px] px-[8px]">
                  Vacant
                </h4>
                <h4 className="text-[10px] font-medium">5% off 6 weeks</h4>
              </div>
              <h4 className="text-[10px] text-[#16457E] underline font-medium">
                Price Detail
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-[15px] h-full p-[20px]">
        <div className="w-[49%] w-full flex flex-col gap-[15px]">
          <h3 className="text-[20px] font-medium">
            Create a flyer for this property
          </h3>
          <h3 className="text-[14px] font-medium">Select a flyer design</h3>
          <div className="w-full flex flex-col gap-[10px] bg-white">
            <div className="flex items-center gap-[20px] bg-white rounded-[10px] p-[20px] shadow-[0px 0px 4px 0px #00000040]">
              <input type="checkbox" class="w-6 h-6" />
              <h3 className="text-[14px] font-medium pr-[10px]">
                Simple (Clean & Modern)
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[10px] bg-white">
            <div className="flex items-center gap-[20px] bg-white rounded-[10px] p-[20px] shadow-[0px 0px 4px 0px #00000040]">
              <input type="checkbox" class="w-6 h-6" />
              <h3 className="text-[14px] font-medium pr-[10px]">
                Friendly (Clean & Modern)
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[10px] bg-white">
            <div className="flex items-center gap-[20px] bg-white rounded-[10px] p-[20px] shadow-[0px 0px 4px 0px #00000040]">
              <input type="checkbox" class="w-6 h-6" />
              <h3 className="text-[14px] font-medium pr-[10px]">
                SBold (Big & Eye Catching)
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[49%] w-full flex flex-col gap-[15px]">
          <h4 className="text-[14px] font-medium">Preview</h4>
          <div className="w-full flex flex-col gap-[10px] bg-white p-[20px]">
            <h4 className="text-[14px] font-medium">Logo</h4>
            <h2 className="text-[20px] font-medium">
              Furnished, Affordable Rooms for Rent
            </h2>

            <div className="flex items-center justify-between">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Error-Image"
                className="w-[49%] objeact-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Error-Image"
                className="w-[49%] objeact-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
