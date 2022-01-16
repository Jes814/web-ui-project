import React from "react";
import Corner from "../pictures/corner.png";
import Ascent from "../pictures/ascent.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function UpcomingEvents() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="h-full py-8 bg-gray-200">
        <div className="p-6 lg:max-w-6xl lg:mx-auto">
          <div className="my-4">
            <p className="text-2xl font-semibold lg:text-4xl">
              Upcoming Events
            </p>
            <p className="lg:text-lg text-md">
              This needs a great tagline, but i'll fill it in later
            </p>
          </div>
          <Carousel
            showDots={true}
            infinite={true}
            autoPlay={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            responsive={responsive}
          >
            <div className="px-2 py-6 ">
              <div className="relative z-10 h-full ">
                <div className="absolute -top-5">
                  <img src={Corner} alt="corner" />
                </div>
                <div className="relative h-64 text-white bg-blue-700 ">
                  <div className="absolute z-10 p-4 text-center bg-gray-100 lg:bg-blue-900 -top-5 left-5 w-28">
                    <p className="text-xl text-gray-500 lg:text-gray-100">
                      JAN
                    </p>
                    <p className="text-4xl font-semibold text-gray-500 lg:text-gray-100">
                      28
                    </p>
                  </div>
                  <div className="px-6 pt-24 text-4xl font-semibold text-white">
                    <p className="text-2xl">Insight Exchange Network</p>
                    <p className="text-xs">
                      Join us for this conference showcasing innovation.
                    </p>
                    <button className="px-4 text-lg border lg:py-2 lg:mt-10">
                      Get More Insight
                    </button>
                  </div>
                </div>

                <div
                  className="flex justify-end bg-blue-700 bg-no-repeat bg-cover "
                  style={{ backgroundImage: `url(${Ascent})` }}
                >
                  <p className="text-lg font-bold text-black">Chicago, IL</p>
                </div>
              </div>
            </div>

            <div className="px-2 py-6 ">
              <div className="relative z-10 h-full mx-4">
                <div className="absolute -top-5">
                  <img src={Corner} alt="corner" />
                </div>
                <div className="relative h-64 bg-blue-700 ">
                  <div className="absolute z-10 p-4 leading-10 text-center bg-gray-100 lg:bg-blue-900 -top-5 left-5 w-28">
                    <p className="text-xl text-gray-500 lg:text-gray-100">
                      FEB
                    </p>
                    <p className="text-4xl font-semibold text-gray-500 lg:text-gray-100">
                      12
                    </p>
                  </div>
                  <div className="px-6 pt-24 text-4xl font-semibold text-white">
                    <p className="text-2xl">Citywide Buyer's Retreat</p>
                    <p className="text-xs">
                      Find out how banks are responding to the changing future
                      of interest...
                    </p>
                    <button className="px-4 text-lg border lg:py-2 lg:my-6">
                      Get More Insight
                    </button>
                  </div>
                </div>

                <div
                  className="flex justify-end bg-blue-700 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${Ascent})` }}
                >
                  <p className="text-lg font-bold text-black">
                    The Wagner, New York
                  </p>
                </div>
              </div>
            </div>

            <div className="px-2 py-6 ">
              <div className="relative z-10 h-full ">
                <div className="absolute -top-5">
                  <img src={Corner} alt="corner" />
                </div>
                <div className="relative h-64 text-white bg-blue-700">
                  <div className="absolute z-10 p-4 text-center bg-gray-100 lg:bg-blue-900 -top-5 left-5 w-28">
                    <p className="text-xl text-gray-500 lg:text-gray-100">
                      MAY
                    </p>
                    <p className="text-4xl font-semibold text-gray-500 lg:text-gray-100">
                      6
                    </p>
                  </div>
                  <div className="px-6 pt-24 text-4xl font-semibold text-white">
                    <p className="text-2xl font-semibold">Research Exchange</p>
                    <p className="text-xs">
                      Find the best online resources to help with your
                      investments...
                    </p>
                    <div className="pt-8 lg:p-0">
                      <button className="px-4 text-lg border lg:py-2 lg:my-6">
                        Get more insight
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-end bg-blue-700 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${Ascent})` }}
                >
                  <p className="text-lg font-bold text-black">
                    London, England
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
