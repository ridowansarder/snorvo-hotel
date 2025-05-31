import { useNavigate } from "react-router-dom";
import { facilityIcons, roomsDummyData } from "../../public/assets/assets";
import { MapPin, Star } from "lucide-react";

const AllRooms = () => {
  const navigate = useNavigate();
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
              <h1 className="font-bold text-2xl mb-1.5 cursor-pointer" onClick={() => navigate(`/rooms/${room._id}`)}>{room.hotel.name}</h1>
              <div className="flex items-start mb-3">
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 " />
                <span className="ml-2">200+ reviews</span>
              </div>
              <div className="flex items-center mb-3">
                <MapPin className="h-5" /> 36/A, Kafrul, Dhaka
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
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">Any</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  );
};

export default AllRooms;
