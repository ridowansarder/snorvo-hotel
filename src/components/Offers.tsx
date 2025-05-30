import { exclusiveOffers } from "../../public/assets/assets";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Offers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center mb-10 lg:px-4">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Exclusive Offers
            </h1>
            <p className="text-gray-600 ">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
          </div>
          <Button className="mt-4 lg:mt-0">
            View all offers <ArrowRight />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exclusiveOffers.map((offer) => (
            <div
              key={offer._id}
              className="flex group flex-col md:flex-row items-center gap-6 mb-8 p-6 bg-cover bg-no-repeat rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
              style={{ backgroundImage: `url(${offer.image})` }}
            >
              <div className="flex flex-col items-start">
                <p className=" bg-gray-50 text-gray-950 px-2 py-1.5 text-sm rounded-full">
                  {offer.priceOff}% OFF
                </p>
                <h2 className="text-lg font-semibold text-gray-100 mt-4">
                  {offer.title}
                </h2>
                <p className="text-gray-300">{offer.description}</p>
                <Button className="mt-4">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
