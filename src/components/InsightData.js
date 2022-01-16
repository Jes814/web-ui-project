import React from "react";
import Card1 from "../pictures/card1.png";
import Card2 from "../pictures/card2.png";
import Card3 from "../pictures/card3.png";
import Top from "../pictures/top.png";
import Bot from "../pictures/bottom.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function InsightData() {
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
    <div className="py-8 bg-gray-200">
      <div className="p-6 lg:max-w-6xl lg:mx-auto lg:p-0">
        <div className="lg:py-4">
          <p className="text-2xl font-semibold lg:text-4xl">Insights</p>
          <p className="lg:text-lg text-md">
            How are factors being used around the world?
          </p>
        </div>
        <Carousel
          showDots={true}
          autoPlay={true}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
        >
          <div className="p-2">
            <div className="w-full h-full p-4 bg-white border-b-8 border-indigo-500 shadow-lg ">
              <div className="relative w-full h-80">
                <img className="absolute" src={Top} alt="card1" />

                <img className="h-full" src={Card1} alt="card1" />

                <img
                  className="absolute bottom-0 right-0"
                  src={Bot}
                  alt="card1"
                />
              </div>
              <div className="py-4 text-4xl font-semibold text-indigo-500">
                <p>Global Factor</p>
                <p>Investing Study</p>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="w-full h-full p-4 bg-white border-b-8 border-green-500 shadow-lg ">
              <div className="relative w-full h-80">
                <img className="absolute" src={Top} alt="card2" />

                <img className="h-full" src={Card2} alt="card2" />

                <img
                  className="absolute bottom-0 right-0"
                  src={Bot}
                  alt="card2"
                />
              </div>
              <div className="py-4 text-4xl font-semibold text-green-500">
                <p>2019</p>
                <p>Outlook</p>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="w-full h-full p-4 bg-white border-b-8 border-blue-400 shadow-lg ">
              <div className="relative w-full h-80">
                <img className="absolute" src={Top} alt="card3" />

                <img className="h-full" src={Card3} alt="card3" />

                <img
                  className="absolute bottom-0 right-0"
                  src={Bot}
                  alt="card3"
                />
              </div>
              <div className="py-4 text-4xl font-semibold text-blue-400">
                <p>Capital Market</p>
                <p>Assumptions</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default InsightData;
