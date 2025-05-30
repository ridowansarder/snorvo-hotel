import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const hotelsList = [
  {
    id: 1,
    name: "Hotel Sunshine",
    category: "Luxury",
    location: "Dhaka",
    image: "/assets/roomImg1.png",
    rating: 4.5,
    price: 200,
    offerPrice: 150,
  },
  {
    id: 2,
    name: "Ocean View Resort",
    category: "Beachfront",
    location: "Sylhet",
    image: "/assets/roomImg2.png",
    rating: 4.0,
    price: 250,
    offerPrice: 200,
  },
  {
    id: 3,
    name: "Mountain Retreat",
    category: "Nature",
    location: "Chittagong",
    image: "/assets/roomImg3.png",
    rating: 4.8,
    price: 300,
    offerPrice: 250,
  },
];

const Featured = () => {
  return (
    <section className="py-20 mx-auto bg-gray-50">
      <div className="container mx-auto max-w-5xl px-4 py-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotelsList.map((hotel) => (
            <div key={hotel.id} className="hover:shadow-lg hover:scale-105 transition duration-300">
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 ">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-sm text-gray-600 ">
                      {hotel.category}
                    </p>
                    <p className="text-sm flex items-center my-2 text-gray-500 ">
                      <MapPin className="h-4 ml-0" />
                      {hotel.location}
                    </p>
                  </div>

                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{hotel.rating}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-800 ">
                        ${hotel.offerPrice}
                      </span>
                      <span className="line-through text-gray-500  ml-2">
                        ${hotel.price}
                      </span>
                    </div>

                    <Button>Book now</Button>
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
