import {
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "@/../public/assets/assets";
import { LucideHouse, MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  type RoomType = (typeof roomsDummyData)[number];
  const [room, setRoom] = useState<RoomType | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  useEffect(() => {
    const foundRoom = roomsDummyData.find((room) => room._id === id);
    if (foundRoom) setRoom(foundRoom);
    if (foundRoom) setMainImage(foundRoom.images[0]);
  }, [id]);
  return (
    room && (
      <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
        {/* room details */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
          <h1 className="font-bold text-2xl lg:text-4xl">
            {room.hotel.name}{" "}
            <span className="font-medium text-sm">({room.roomType})</span>
          </h1>
          <p className="bg-orange-500 text-white font-semibold py-1 px-3 rounded-full text-sm">
            20% OFF
          </p>
        </div>

        {/* ratings */}
        <div className="flex items-start my-3">
          <Star className="text-yellow-400 fill-yellow-400" />
          <Star className="text-yellow-400 fill-yellow-400" />
          <Star className="text-yellow-400 fill-yellow-400" />
          <Star className="text-yellow-400 fill-yellow-400" />
          <Star className="text-yellow-400 " />
          <span className="ml-2">200+ reviews</span>
        </div>

        {/* location */}
        <div className="flex items-center my-3">
          <MapPin className="h-5" />{" "}
          <span className="text-sm">36/A, Kafrul, Dhaka</span>
        </div>

        {/* images */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="w-full lg:w-1/2">
            <img
              src={mainImage ?? undefined}
              alt="Room Image"
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {room.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Room Image ${index + 1}`}
                className={`rounded-lg w-full h-auto object-cover cursor-pointer ${
                  mainImage === image && "outline-4 outline-orange-600"
                } hover:opacity-80 transition-opacity`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        {/* amenities */}
        <div className="my-6 flex flex-col lg:flex-row justify-between">
          <div>
            <p className="text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins mb-8">
              Experience Luxury Like Never Before
            </p>
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
          </div>
          <div>
            <span className="font-semibold text-xl lg:text-2xl">
              ${room.pricePerNight}/Night
            </span>
          </div>
        </div>

        {/* availability */}

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto bg-white text-gray-700 rounded-lg px-4 py-8 mt-12 w-full shadow-lg">
          {/* Check-in */}
          <div className="flex flex-col">
            <label htmlFor="checkIn" className="text-sm font-medium mb-1">
              Check-in
            </label>
            <input
              type="date"
              id="checkIn"
              className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label htmlFor="checkOut" className="text-sm font-medium mb-1">
              Check-out
            </label>
            <input
              type="date"
              id="checkOut"
              className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label htmlFor="guests" className="text-sm font-medium mb-1">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              min="1"
              max="4"
              placeholder="0"
              className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none"
            />
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="bg-black text-white rounded-md px-4 py-2 text-sm flex items-center justify-center gap-1 w-full sm:w-auto mt-1 sm:mt-auto"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="m21 21-3.5-3.5M17 10a7 7 0 11-14 0 7 7 0 0114 0Z"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Check Availability</span>
          </button>
        </form>

        {/* common specs */}
        <div className="mt-12 max-w-2xl">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-center gap-4 mb-4 p-4">
              <img src={spec.icon} alt={spec.title} className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold">{spec.title}</h3>
                <p className="text-sm text-gray-600">{spec.description}</p>
              </div>
            </div>
          ))}
          <hr className="my-12" />
          {/* description */}
          <p className="text-gray-600">
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
          <hr className="my-12" />
        </div>

        <div>
          <div className="flex items-center gap-4 mt-12">
            <LucideHouse className="h-16 w-16 text-gray-700" />
            <div>
              <h2 className="text-3xl font-medium">Hosted by Snorvo</h2>
              <div className="flex items-start my-3">
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 " />
                <span className="ml-2">200+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
