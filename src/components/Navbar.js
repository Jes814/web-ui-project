import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex justify-center w-full px-4 lg:pb-2 lg:max-w-6xl lg:mx-auto">
          <div className="flex items-center justify-center w-full h-28">
            <div className="flex items-end w-3/4 font-semibold">
              <div className="px-12">Home</div>
              <div className="px-12">About Us</div>
              <div className="px-12">Insights</div>
              <div className="px-12">Events</div>
              <div className="px-12">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="block lg:hidden">
        <div className="flex justify-end p-4">
          <button onClick={openToggle} className="focus:outline-none sm:hidden">
            <svg
              className="w-8 h-8 text-black fill-current hover:text-gray-500"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          open ? "flex flex-col md:hidden px-2 text-black text-lg" : "hidden"
        }
      >
        <div className="flex flex-col px-6 pb-6 text-center ">
          <div className="pb-2 text-blue-600 border-b border-gray-500">
            Site Links
          </div>

          <div className="px-12 py-4 my-2 bg-gray-200">Home</div>
          <div className="px-12 py-4 my-2 bg-gray-200">About Us</div>
          <div className="px-12 py-4 my-2 bg-gray-200">Insights</div>
          <div className="px-12 py-4 my-2 bg-gray-200">Events</div>
          <div className="px-12 py-4 my-2 bg-gray-200">Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
