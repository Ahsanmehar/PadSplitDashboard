import { GoogleMap, LoadScript, Marker, OverlayView } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "220px",
  overflow: "hidden",
};

const center = {
  lat: 31.5204,
  lng: 74.3587,
};

function AddRoomProperty() {
  return (
    <form className="flex items-center justify-between w-full p-[20px]">
      <div className="flex flex-col gap-[15px] w-[26%]">
        <h1 className="text-[30px] text-[#25409C] font-semibold">
          Add Room to Property
        </h1>
        <div className="flex flex-col gap-[10px]">
          <h5 className="text-[14px] text-[#484848] font-medium">
            Upload Room Photos
          </h5>

          <label htmlFor="f1">
            <div className="flex flex-col items-center justify-center gap-[10px] px-[10px] py-[20px] bg-white border-[1px] border-dashed border-[#BDBDBD] rounded-[5px]">
              <input type="file" id="f1" className="hidden" />
              <i className="bi bi-arrow-bar-up"></i>
              <h5 className="text-[14px] text-[#484848] text-center font-light">
                Drag and Drop here <br />
                or
              </h5>
              <h5 className="text-[14px] text-[#25409C] font-medium">
                Browse Files
              </h5>
            </div>
          </label>
        </div>

        <div className="flex flex-col gap-[10px]">
          <input
            type="text"
            className="w-full h-[150px] bg-white rounded-[5px]"
          />
          <label htmlFor="f2" className="flex flex-col gap-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">
              Price \ per month
            </h5>
            <input
              type="text"
              id="f2"
              className="w-full p-[10px] bg-white rounded-[5px]"
            />
          </label>
          <label htmlFor="f3" className="flex items-center gap-[10px]">
            <input type="checkbox" id="f3" className="w-[15px] h-[15px]" />
            <h5 className="text-[14px] text-[#484848] font-light">
              Different Monthly Prices
            </h5>
          </label>
        </div>

        <div className="w-full flex items-center justify-center gap-[20px] flex-wrap">
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Jan</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Feb</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Mar</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Apr</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">May</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Jun</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Jul</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Aug</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Sep</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Oct</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Nov</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
          <div className="flex flex-col items-center bg-[#e6e6e6] rounded-[5px] p-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Dec</h5>
            <h5 className="text-[14px] text-[#667085] font-light">500$</h5>
          </div>
        </div>
        <label htmlFor="f4" className="flex flex-col gap-[10px]">
          <h5 className="text-[14px] text-[#344054] font-medium">Deposit</h5>
          <input
            type="text"
            id="f4"
            className="w-full p-[10px] bg-white rounded-[5px]"
          />
        </label>
      </div>
      <div className="flex flex-col w-[72%] gap-[10px]">
        <div className="flex items-center gap-[20px]">
          <input
            type="text"
            id="f4"
            className="w-full p-[10px] bg-white rounded-[5px]"
          />
          <i className="bi bi-x-lg text-[20px]"></i>
        </div>
        <label htmlFor="f4" className="flex flex-col gap-[10px]">
          <h5 className="text-[14px] text-[#344054] font-medium">
            Property Title
          </h5>
          <input
            type="text"
            id="f4"
            className="w-full p-[10px] bg-white rounded-[5px]"
          />
        </label>

        <div className="w-full flex items-center justify-between">
          <div className="w-[49%] flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[10px]">
              <h5 className="text-[14px] text-[#344054] font-medium">
                Property type
              </h5>
              <select className="w-full bg-white text-[#667085] text-[12px] p-2 pr-8 rounded-[5px] focus:outline-none">
                <option>Select Property type</option>
                <option>Post 30 days</option>
                <option>Post 90 days</option>
              </select>
            </div>
            <label htmlFor="f4" className="flex flex-col gap-[10px]">
              <h5 className="text-[14px] text-[#344054] font-medium">Size</h5>
              <input
                type="text"
                id="f4"
                placeholder="Size"
                className="w-full p-[10px] bg-white rounded-[5px]"
              />
            </label>
            <div className="w-full flex flex-col gap-[10px]">
              <h5 className="text-[14px] text-[#344054] font-medium">
                Apartment
              </h5>
              <select className="w-full bg-white text-[#667085] text-[12px] p-2 pr-8 rounded-[5px] focus:outline-none">
                <option>Apartment</option>
                <option>Post 30 days</option>
                <option>Post 90 days</option>
              </select>
            </div>
            <label htmlFor="f4" className="flex flex-col gap-[10px]">
              <h5 className="text-[14px] text-[#344054] font-medium">
                Minimum stay
              </h5>
              <input
                type="text"
                id="f4"
                placeholder="Number of Months"
                className="w-full p-[10px] bg-white rounded-[5px]"
              />
            </label>
          </div>

          <div className="w-[49%] flex flex-col gap-[10px]">
            <label htmlFor="f4" className="flex flex-col gap-[10px]">
              <input
                type="search"
                id="f4"
                placeholder="Search"
                className="w-full p-[10px] bg-white rounded-[5px]"
              />
            </label>
            <LoadScript googleMapsApiKey="AIzaSyBkvFE4T8gykQBU-iNHe7V8llmWs41PzcU">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
        <label htmlFor="f4" className="flex flex-col gap-[10px]">
          <h5 className="text-[14px] text-[#344054] font-medium">
            Description
          </h5>
          <textarea
            placeholder="Enter a description..."
            rows={6}
            className="w-full p-[10px] bg-white rounded-[5px]"
          ></textarea>
        </label>

        <div className="w-[70%] flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] font-medium">Bedroom</h3>
            <div className="flex items-center flex-wrap gap-x-[50px] gap-y-[10px]">
              <label
                htmlFor="f6"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f6" /> Single bed
              </label>
              <label
                htmlFor="f7"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f7" /> Single bed
              </label>
              <label
                htmlFor="f8"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f8" /> Wardrobe
              </label>
              <label
                htmlFor="f9"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f9" /> Twin bed
              </label>
              <label
                htmlFor="f10"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f10" /> Balcony
              </label>
              <label
                htmlFor="f11"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f11" /> Unfurnished
              </label>
              <label
                htmlFor="f12"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f12" /> Double bed
              </label>
              <label
                htmlFor="f13"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f13" /> Twin bed
              </label>
              <label
                htmlFor="f14"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f14" /> Window
              </label>
              <label
                htmlFor="f15"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f15" /> Desk
              </label>
              <label
                htmlFor="f16"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f16" /> Lock
              </label>
              <label
                htmlFor="f17"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f17" /> Mirror
              </label>
              <label
                htmlFor="f18"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f18" /> Heating
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] font-medium">Suitable for</h3>
            <div className="flex items-center flex-wrap gap-x-[50px] gap-y-[10px]">
              <label
                htmlFor="f19"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f19" /> Males
              </label>
              <label
                htmlFor="f20"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f20" /> Professionals
              </label>
              <label
                htmlFor="f21"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f21" /> Students
              </label>
              <label
                htmlFor="f22"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f22" /> Pets
              </label>
              <label
                htmlFor="f23"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f23" /> Females
              </label>
              <label
                htmlFor="f24"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f24" /> Smokers
              </label>
              <label
                htmlFor="f25"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f25" /> Overnight guests
              </label>
              <label
                htmlFor="f26"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
              >
                <input type="checkbox" id="f26" /> Couples
              </label>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="flex flex-col items-center gap-[10px]">
              <h5 className="text-[12px] text-[#484848] font-medium">
                Number of copies
              </h5>

              <div className="flex items-center gap-[10px]">
                <i className="bi bi-dash-lg w-[21px] h-[21px] border-[1px] border-[#6C6B6B] flex items-center justify-center text-[16px]"></i>
                <h5 className="text-[14px] text-[#484848] font-medium">1</h5>
                <i className="bi bi-plus-lg w-[21px] h-[21px] border-[1px] border-[#6C6B6B] flex items-center justify-center text-[16px]"></i>
              </div>
            </div>

            <button className="w-fit flex items-center justify-center gap-[10px] bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddRoomProperty;
