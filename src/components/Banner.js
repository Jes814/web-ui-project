import React from "react";

function Banner() {
  return (
    <div className="">
      <div className="w-full h-full bg2">
        <div className="p-6 lg:mx-auto lg:max-w-6xl lg:p-0">
          <div className="flex items-center justify-center h-full text-center text-white py-28">
            <div>
              <p className="text-2xl font-semibold lg:text-4xl">
                Our Commitment to Professionals
              </p>
              <p className="max-w-4xl pt-2">
                We help our partners deliver industry leading results with a
                commitment to excellence, thought-provoking insights and
                experienced distribution. We are laser focused on our shared
                goal – helping clients achieve their objectives. 
              </p>

              <div className="pt-8">
                <button className="px-6 py-2 border-2 border-white ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
