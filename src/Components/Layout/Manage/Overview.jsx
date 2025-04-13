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

function Overview() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="w-full h-[100vh] flex flex-col gap-[20px]">
      <div className="w-full  flex items-center justify-between">
        <div className="w-[58%] h-full relative">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div className="w-full h-full" key={index}>
                <img
                  src={src}
                  alt="Error-Image"
                  className="w-full object-cover rounded-lg"
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

        <div className="flex h-full flex-col gap-[15px] w-[41%] h-full p-[20px] bg-white rounded-[10px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[16px] text-[#596574] font-semibold">
              Listed Prices
            </h3>
            <h4 className="flex items-center justify-between text-[12px] text-[#596574] font-normal">
              Listed Prices
              <span>08 March 2017</span>
            </h4>
            <h4 className="flex items-center justify-between text-[12px] text-[#596574] font-normal">
              Advertised Date
              <span>$450</span>
            </h4>
            <h4 className="flex items-center justify-between text-[12px] text-[#596574] font-normal">
              Source
              <span>08 March 2017</span>
            </h4>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[16px] text-[#596574] font-semibold">
              Last Reviewed Expenses
            </h3>
            <h4 className="flex items-center justify-between text-[12px] text-[#596574] font-normal">
              Date of review
              <span>08 March 2017</span>
            </h4>
            <h4 className="flex items-center justify-between text-[12px] text-[#596574] font-normal">
              Rent paid (weekly)
              <span>$450</span>
            </h4>
            <h4 className="flex items-center justify-between text-[12px] text-[#596574] font-normal">
              Electricity charges (quarterly)
              <span>08 March 2017</span>
            </h4>
            <h4 className="flex items-center justify-between text-[12px] text-[#596574] font-normal">
              Gas charges (quarterly)
              <span>None</span>
            </h4>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[16px] text-[#596574] font-semibold">
              Property Features
            </h3>

            <div className="flex items-center flex-wrap">
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Balcony
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Separate Dining
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Courtyard
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Study
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Lock Up Garage
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Air conditioning
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Polished Timber Floor
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Internal Laundry
              </h4>
              <h4 className="text-[12px] text-[#596574] font-normal py-[10px] px-[21px] bg-[#F6F6F7] w-fit">
                Rumpus Room
              </h4>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full flex flex-col gap-[15px] h-full p-[20px] bg-white">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-[20px]">
            <img
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop"
              alt="Error-image"
              className="w-[195px] object-cover"
            />

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold">Room 1</h3>
              <h4 className="text-[12px] font-normal">
                Listed since: 10/01/2025
              </h4>
              <h4 className="text-[12px] font-normal">
                On going service fee: 12%
              </h4>
              <h4 className="text-[12px] font-normal">Booking Fee: None</h4>
            </div>
          </div>

          <div className="flex flex-col items-end gap-[20px]">
            <h3 className="text-[15px] text-white font-medium bg-[#22B07D] py-[6px] px-[20px] rounded-[5px]">
              Vacant
            </h3>
            <h4 className="text-[12px] font-medium">Weekly Dues</h4>
            <h4 className="text-[12px] font-medium">$163</h4>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-[20px]">
            <img
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop"
              alt="Error-image"
              className="w-[195px] object-cover"
            />

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold">Room 2</h3>
              <h4 className="text-[12px] font-normal">
                Listed since: 10/01/2025
              </h4>
              <h4 className="text-[12px] font-normal">
                On going service fee: 12%
              </h4>
              <h4 className="text-[12px] font-normal">Booking Fee: None</h4>
            </div>
          </div>

          <div className="flex flex-col items-end gap-[20px]">
            <h3 className="text-[15px] text-white font-medium bg-[#CC4848] py-[6px] px-[20px] rounded-[5px]">
              Vacant
            </h3>
            <h4 className="text-[12px] font-medium">Weekly Dues</h4>
            <h4 className="text-[12px] font-medium">$163</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
