import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../../public/assets/assets";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 mx-auto bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center mb-10 lg:px-4">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Featured Hotels
            </h1>
            <p className="text-gray-600  ">
              Explore our top-rated hotels and exclusive offers.
            </p>
          </div>
          <Button className="mt-4 lg:mt-0">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
            >
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <img
                  src={room.images[0]}
                  alt={room.hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 ">
                      {room.hotel.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>4.5</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-sm flex items-center my-2 text-gray-500 ">
                      <MapPin className="h-4 ml-0" />
                      Kafrul, Dhaka
                    </p>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-800 ">
                        ${room.pricePerNight}
                      </span>
                    </div>
                    <Button className="cursor-pointer">Book now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
