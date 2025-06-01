import { useNavigate } from "react-router-dom";
import { facilityIcons, roomsDummyData } from "../../public/assets/assets";
import { MapPin, Star } from "lucide-react";
import { useState } from "react";

const AllRooms = () => {
  const navigate = useNavigate();
  const [filterOpened, setFilterOpened] = useState<boolean>(false);
  const popularFilters = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite",
  ];
  const priceRange = [
    "$0 to 500",
    "$500 to 1000",
    "$1000 to 2000",
    "$2000 to 3000",
  ];
  const sortBy = ["Price Low to High", "Price High to Low", "Newest First"];
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between min-h-screen bg-gray-100 pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Room list */}
      <div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Hotel Rooms</h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room, id) => (
          <div
            className="flex flex-col lg:flex-row gap-6 mt-6 border-b py-10 last:pb-20 last:border-0"
            key={id}
          >
            <img
              src={room.images[0]}
              alt="hotel image"
              title="View room details"
              onClick={() => navigate(`/rooms/${room._id}`)}
              className="max-h-65 rounded-xl shadow-lg md:w-1/2 object-cover cursor-pointer"
            />
            <div>
              <h3 className="text-gray-600 mb-1.5">Dhaka</h3>
              <h1
                className="font-bold text-2xl mb-1.5 cursor-pointer"
                onClick={() => navigate(`/rooms/${room._id}`)}
              >
                {room.hotel.name}
              </h1>
              <div className="flex items-start mb-3">
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 " />
                <span className="ml-2">200+ reviews</span>
              </div>
              <div className="flex items-center mb-3">
                <MapPin className="h-5" /> <span className="text-sm">36/A, Kafrul, Dhaka</span>
              </div>
              <div className="flex flex-wrap gap-3 items-center mb-4 ">
                {room.amenities.map((amenity, id) => (
                  <div
                    className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-2 gap-2"
                    key={id}
                  >
                    <img
                      src={facilityIcons[amenity as keyof typeof facilityIcons]}
                      alt="amenity icon"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
              <span className="font-bold text-lg">
                ${room.pricePerNight}/Night
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* filters */}
      <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
        <div
          className={` flex items-center justify-between ${
            filterOpened && "border-b mb-4 pb-3"
          } lg:border-b lg:mb-4 lg:pb-3`}
        >
          <h2 className="text-base font-semibold">Filters</h2>
          <span
            className="lg:hidden text-xs"
            onClick={() => setFilterOpened(!filterOpened)}
          >
            {filterOpened ? "Hide" : "Show"}
          </span>
          <span className="hidden lg:block cursor-pointer text-sm">Clear</span>
        </div>

        <div
          className={`${
            filterOpened ? "block" : "hidden lg:block"
          } transition-all duration-700`}
        >
          <div>
            <p className="font-semibold text-gray-800 pb-2 my-3">
              Popular Filters
            </p>

            {popularFilters.map((filter) => (
              <div key={filter} className="space-y-4">
                <input
                  type="checkbox"
                  name={filter}
                  id={filter}
                  className=" cursor-pointer"
                />
                <label htmlFor={filter} className="ml-3 cursor-pointer text-sm">
                  {filter}
                </label>
              </div>
            ))}
          </div>
          <div>
            <p className="font-semibold text-gray-800 pb-2 my-3">Price Range</p>

            {priceRange.map((filter) => (
              <div key={filter} className="space-y-4">
                <input
                  type="checkbox"
                  name={filter}
                  id={filter}
                  className=" cursor-pointer"
                />
                <label htmlFor={filter} className="ml-3 cursor-pointer text-sm">
                  {filter}
                </label>
              </div>
            ))}
          </div>
          <div>
            <p className="font-semibold text-gray-800 pb-2 my-3">Sort By</p>

            {sortBy.map((filter) => (
              <div key={filter} className="space-y-4">
                <input type="radio" name="sort" id={filter} className="cursor-pointer" />
                <label htmlFor={filter} className="ml-3 cursor-pointer text-sm">
                  {filter}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
