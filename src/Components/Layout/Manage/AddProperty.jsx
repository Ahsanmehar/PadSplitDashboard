import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
  overflow: "hidden",
};

const center = {
  lat: 31.5204,
  lng: 74.3587,
};

function AddProperty() {
  return (
    <form className="flex flex-col gap-[10px] w-full p-[20px]">
      <div className="w-full flex items-center gap-[30px]">
        <h1 className="text-[30px] text-[#25409C] font-semibold whitespace-nowrap">
          Add Room to Property
        </h1>
        <div className="w-full flex items-center gap-[20px]">
          <input
            type="text"
            id="f4"
            className="w-full p-[10px] bg-white rounded-[5px]"
          />
          <i className="bi bi-x-lg text-[20px]"></i>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[49%] flex flex-col gap-[20px]">
          <label htmlFor="f4" className="flex flex-col gap-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">
              Apartment Title
            </h5>
            <input
              type="text"
              id="f4"
              placeholder="Apartment Title"
              className="w-full p-[10px] bg-white rounded-[5px]"
            />
          </label>
          <label htmlFor="f4" className="flex flex-col gap-[10px]">
            <h5 className="text-[14px] text-[#344054] font-medium">Size</h5>
            <input
              type="text"
              id="f4"
              placeholder="Size"
              className="w-full p-[10px] bg-white rounded-[5px]"
            />
          </label>

          <div className="flex items-center gap-[20px]">
            <label
              htmlFor="f8"
              className="flex items-center gap-[10px] text-[14px] text-[#344054] font-medium"
            >
              <input type="checkbox" id="f8" className="w-[20px] h-[20px]" />
              Bills included up to
            </label>

            <input
              type="text"
              id="f4"
              className="w-full p-[10px] bg-white rounded-[5px]"
            />
          </div>

          <div className="flex items-center gap-[20px]">
            <h5 className="text-[14px] text-[#484848] font-medium">
              Number of bathrooms
            </h5>

            <div className="flex items-center gap-[10px]">
              <i className="bi bi-dash-lg w-[21px] h-[21px] border-[1px] border-[#6C6B6B] flex items-center justify-center text-[16px]"></i>
              <h5 className="text-[14px] text-[#484848] font-medium">1</h5>
              <i className="bi bi-plus-lg w-[21px] h-[21px] border-[1px] border-[#6C6B6B] flex items-center justify-center text-[16px]"></i>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] text-[#484848] font-light">
              Bathroom 1
            </h3>
            <div className="flex items-center flex-wrap gap-x-[30px] gap-y-[10px]">
              <label
                htmlFor="f6"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f6" /> Toilet
              </label>
              <label
                htmlFor="f7"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f7" /> Shower
              </label>
              <label
                htmlFor="f8"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f8" /> Bath
              </label>
              <label
                htmlFor="f9"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f9" /> Sink
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] text-[#484848] font-light">
              Bathroom 2
            </h3>
            <div className="flex items-center flex-wrap gap-x-[30px] gap-y-[10px]">
              <label
                htmlFor="f10"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f10" /> Toilet
              </label>
              <label
                htmlFor="f11"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f11" /> Shower
              </label>
              <label
                htmlFor="f12"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f12" /> Bath
              </label>
              <label
                htmlFor="f13"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f13" /> Sink
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] text-[#484848] font-light">
              Bathroom 3
            </h3>
            <div className="flex items-center flex-wrap gap-x-[30px] gap-y-[10px]">
              <label
                htmlFor="f14"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f14" /> Toilet
              </label>
              <label
                htmlFor="f15"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f15" /> Shower
              </label>
              <label
                htmlFor="f16"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f16" /> Bath
              </label>
              <label
                htmlFor="f17"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f17" /> Sink
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] text-[#484848] font-light">Kitchen</h3>
            <div className="w-[70%] flex items-center flex-wrap gap-x-[50px] gap-y-[10px]">
              <label
                htmlFor="f18"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f18" /> Microwave
              </label>
              <label
                htmlFor="f19"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f19" /> Oven
              </label>
              <label
                htmlFor="f20"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f20" /> Touster
              </label>
              <label
                htmlFor="f21"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f21" /> Stove
              </label>
              <label
                htmlFor="f22"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f22" /> Fridge
              </label>
              <label
                htmlFor="f23"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f23" /> Freezer
              </label>
              <label
                htmlFor="f24"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f24" /> Kettle
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[14px] text-[#484848] font-light">
              Living room
            </h3>
            <div className="w-[70%] flex items-center flex-wrap gap-x-[50px] gap-y-[10px]">
              <label
                htmlFor="f25"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f25" /> TV
              </label>
              <label
                htmlFor="f26"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f26" /> Sofa
              </label>
              <label
                htmlFor="f27"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f27" /> Wi-fi
              </label>
              <label
                htmlFor="f28"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f28" /> Washing machine
              </label>
              <label
                htmlFor="f29"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f29" /> Unfurnished
              </label>
              <label
                htmlFor="f30"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f30" /> Central heating
              </label>
              <label
                htmlFor="f31"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f31" /> Terrace
              </label>
              <label
                htmlFor="f32"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f32" /> Elevator
              </label>
              <label
                htmlFor="f33"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f33" /> Air conditioning
              </label>
              <label
                htmlFor="f34"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f34" /> Dishwasher
              </label>
              <label
                htmlFor="f35"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f35" /> Free prarking
              </label>
              <label
                htmlFor="f36"
                className="flex items-center gap-[10px] text-[14px] text-[#344054] font-light"
              >
                <input type="checkbox" id="f36" /> Garden
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[49%] gap-[20px]">
          <div className="w-full relative w-[360px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white border-[1px] border-[#D0D5DD] rounded-[5px] placeholder:text-[#757575] text-[16px] py-[10px] px-[40px]"
            />
            <i className="bi bi-search text-[#757575] absolute left-[15px] top-[50%] translate-y-[-50%] text-[16px]"></i>
          </div>

          <LoadScript googleMapsApiKey="AIzaSyBkvFE4T8gykQBU-iNHe7V8llmWs41PzcU">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>

          <div className="flex gap-[20px] ml-auto">
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

export default AddProperty;
