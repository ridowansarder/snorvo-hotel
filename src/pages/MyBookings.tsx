import { Circle, MapPin, User2 } from "lucide-react";
import { userBookingsDummyData } from "../../public/assets/assets";

const MyBookings = () => {
  return (
    <div className="pt-28 pb-16 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      <div className="flex flex-col items-start  gap-4">
        <h1 className="font-bold text-2xl lg:text-4xl">My Bookings</h1>
        <p className="max-w-3xl py-1">
          Easily manage your past, current, and upcoming hotel reservations in
          one place. Plan your trips seamlessly with just a few clicks.
        </p>
      </div>

      <div className="max-w-6xl mt-8 w-full">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] gap-4 text-base font-semibold  border-b pb-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Dates & Times</div>
          <div className="w-1/3">Payment</div>
        </div>

        {userBookingsDummyData.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-4 text-base font-semibold border-b py-6 border-gray-300 first:border-t last:border-b-0"
          >
            {/* hotels */}
            <div className="flex flex-col lg:flex-row gap-3">
              <img
                src={booking.room.images[0]}
                alt="hotel image"
                className="w-full md:w-44 rounded shadow object-cover"
              />
              <div>
                <p className="text-xl font-bold">
                  {booking.hotel.name} <span className="text-xs">({booking.room.roomType})</span>
                </p>
                <div className="flex items-center my-2 text-gray-500">
                  <MapPin className="h-4" />{" "}
                  <span className="text-sm">36/A, Kafrul, Dhaka</span>
                </div>
                <div className="flex items-center my-2 text-gray-500">
                  <User2 className="h-4" />{" "}
                  <span className="text-sm">Guests: {booking.guests}</span>
                </div>
                <p className="font-bold">Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* date & time */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8 xl:12 justify-center lg:justify-start lg:items-center">
              <div>
                <p>Check-In: </p>
                <span className="font-normal text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </span>
              </div>
              <div>
                <p>Check-Out: </p>
                <span className="font-normal text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </span>
              </div>
            </div>

            {/* payment */}
            <div className="flex items-center">
              {booking.isPaid ? (
                <div className="flex items-center gap-2">
                  <Circle className="h-3 w-3 text-green-500 fill-green-500" />
                  <span className="font-normal text-green-600">Paid</span>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Circle className="h-3 w-3 text-red-500 fill-red-500" />
                    <span className="font-normal text-red-600">Unpaid</span>
                  </div>
                  <button className="font-normal text-xs border border-gray-800 py-1.5 px-6 cursor-pointer hover:bg-gray-100 rounded-full">Pay Now</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
