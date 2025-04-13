import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "596px",
  overflow: "hidden",
};

const center = {
  lat: 31.5204,
  lng: 74.3587,
};

const hotelsData = [
  {
    id: 1,
    name: "Hotel A",
    lat: 31.5204,
    lng: 74.3587,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Lahore, Pakistan",
    price: 120,
    size: 40,
    beds: 2,
    baths: 1,
  },
  {
    id: 2,
    name: "Hotel B",
    lat: 31.525,
    lng: 74.35,
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Karachi, Pakistan",
    price: 150,
    size: 55,
    beds: 3,
    baths: 2,
  },
  {
    id: 3,
    name: "Hotel C",
    lat: 31.53,
    lng: 74.36,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Islamabad, Pakistan",
    price: 200,
    size: 70,
    beds: 4,
    baths: 3,
  },
];

function MyGoogleMap() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const result = hotelsData.filter((hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchData(result);
  }, [search]);
  return (
    <div className="flex flex-col gap-[20px]">
      {/* Map */}
      <div className="rounded-[10px]">
        <div className="flex justify-between bg-white px-[30px] py-[15px]">
          <h2 className="text-[22px] font-semibold text-f3">Map</h2>
          <div className="relative w-[360px]">
            <input
              type="text"
              placeholder="Search house, customer, and others"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#E0EEFC] rounded-[50px] placeholder:text-[#757575] text-[12px] py-[10px] px-[40px] focus:outline-none text-[#757575]"
            />
            <i className="bi bi-search text-[#757575] absolute left-[15px] top-[50%] translate-y-[-50%] text-[16px]"></i>
          </div>
        </div>
        <LoadScript googleMapsApiKey="AIzaSyBkvFE4T8gykQBU-iNHe7V8llmWs41PzcU">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
          >
            {searchData.map((hotel) => (
              <OverlayView
                key={hotel.id}
                position={{ lat: hotel.lat, lng: hotel.lng }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className="bg-white shadow-lg rounded-xl overflow-hidden w-56">
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-28 object-cover p-1 rounded-xl"
                  />
                  <div className="p-3">
                    <h3 className="text-base font-semibold">{hotel.title}</h3>
                    <p className="text-xs text-gray-500">{hotel.location}</p>
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span className="text-lg font-bold">${hotel.price}</span>
                      <span className="text-gray-500">{hotel.size}m²</span>
                    </div>
                    <div className="flex justify-between text-gray-600 text-xs mt-2">
                      <span>🛏 {hotel.beds} Beds</span>
                      <span>🛁 {hotel.baths} Baths</span>
                    </div>
                  </div>
                </div>
              </OverlayView>
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* All Users*/}
      <div className="flex flex-col justify-between p-[30px] bg-white shadow-[0px 10px 60px 0px #E2ECF980] rounded-[10px]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[22px] font-semibold text-black mb-[10px]">
              All Users
            </h2>
            <h4 className="text-[14px] font-normal text-f4">Active Members</h4>
          </div>

          <div className="flex items-center gap-[20px]">
            <div className="relative w-[216px]">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-[10px] placeholder:text-[#B5B7C0] text-[12px] py-[10px] px-[35px]"
              />
              <i className="bi bi-search text-[#7E7E7E] text-[16px] absolute left-[10px] top-[50%] translate-y-[-50%]"></i>
            </div>
            <div className="bg-[#F9FBFF] rounded-[10px] flex items-center gap-2">
              <label className="font-normal text-[12px] text-[#7E7E7E] p-[10px]">
                Sort by:
              </label>
              <select className="text-[14px] rounded bg-transparent cursor-pointer font-normal">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="w-full">
            {/* Table Header */}
            <thead className="text-[14px] text-[#B5B7C0] text-left">
              <tr>
                <th className="border-b-[1px] font-medium p-2">Username</th>
                <th className="border-b-[1px] font-medium p-2">Phone Number</th>
                <th className="border-b-[1px] font-medium p-2">Email</th>
                <th className="border-b-[1px] font-medium p-2">Country</th>
                <th className="border-b-[1px] font-medium p-2">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <td className="p-2 text-[14px] text-[#292D32] font-medium">
                  JohnDoe
                </td>
                <td className="p-2 text-[14px] text-[#292D32] font-medium">
                  +1 123 456 7890
                </td>
                <td className="p-2 text-[14px] text-[#292D32] font-medium">
                  johndoe@example.com
                </td>
                <td className="p-2 text-[14px] text-[#292D32] font-medium">
                  USA
                </td>
                <td className="p-2">
                  <span className="text-[14px] text-[#008767] font-medium py-[4px] px-[12px] border border-[#00B087] bg-[#16C09861] rounded-[4px] inline-block">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyGoogleMap;
