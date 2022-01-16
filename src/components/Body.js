import React from "react";

function Body() {
  return (
    <div>
      <div className="bg-indigo-900 lg:h-4"> </div>
      <div className="hidden h-full lg:block">
        <div className="w-full h-1/2 bg">
          <div className="max-w-6xl mx-auto">
            <div className="py-20">
              <div className="text-4xl font-semibold text-white">Wealth</div>
              <div className="text-4xl font-semibold text-white">
                Management Platforms
              </div>
              <div className="pt-4 text-2xl text-gray-300">
                <p>Investment excellence.</p>
                <p>Diversity of thought.</p>
                <p>Organizational strength.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="block lg:hidden">
        <div className="h-full p-4 bg-blue-500">
          <div className="py-32">
            <div className="text-gray-100 ">
              <p className="text-xl">Wealth</p>
              <p className="text-4xl font-semibold"> Management Platforms</p>
            </div>
            <div style={{ color: "white" }} className="pt-2">
              •••••••••••••••••••••••••••••••••
            </div>

            <div className="pt-4 text-xl text-gray-300">
              <p>Investment excellence.</p>
              <p>Diversity of thought.</p>
              <p>Organizational strength.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
