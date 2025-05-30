const Hero = () => {
  return (
    <div className='relative flex flex-col justify-center items-center py-8 px-4 sm:px-6 md:px-10 lg:px-24 text-white bg-[url("/src/assets/heroImg.jpg")] bg-no-repeat bg-cover bg-center min-h-screen'>
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center lg:items-start gap-4 w-full max-w-7xl">
        <p className="bg-purple-500/90 mt-16 px-4 py-1 rounded-full text-sm sm:text-base text-center">
          The Ultimate Hotel Experience
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-5xl font-bold font-poppins text-center lg:text-left leading-tight sm:leading-snug">
          Discover Your Perfect <br className="hidden sm:block" /> Gateway
          Destination
        </h1>

        <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg max-w-2xl text-center lg:text-left">
          Explore a world of luxury and comfort with our exclusive hotel
          offerings.
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 bg-white text-gray-700 rounded-lg px-4 py-5 mt-4 w-full max-w-5xl shadow-md">
          {/* Destination */}
          <div className="flex flex-col">
            <label
              htmlFor="destinationInput"
              className="text-sm font-medium mb-1"
            >
              Destination
            </label>
            <input
              type="text"
              id="destinationInput"
              placeholder="Type here"
              required
              className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none"
            />
          </div>

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
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
