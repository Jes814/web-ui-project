import React from "react";

import Twitter from "../pictures/twitter.png";
import Facebook from "../pictures/facebook.png";
import Linkedin from "../pictures/linkedin.png";
import Email from "../pictures/email.png";

function Footer() {
  return (
    <div>
      <div className="hidden p-6 bg-gray-500 lg:p-0 lg:block">
        <div className="max-w-6xl py-6 mx-auto bg-gray-500 ">
          <div className="flex justify-between text-xs text-gray-200">
            <div>
              <div>Call us 111-222-333</div>
              <div>for more information</div>
            </div>
            <div className="flex items-center">
              <div className="pr-2 text-xs text-gray-200">Social Share</div>
              <div className="px-1">
                <img className="w-6" src={Twitter} alt="icons" />
              </div>
              <div className="px-1">
                <img className="w-6" src={Facebook} alt="icons" />
              </div>
              <div className="px-1">
                <img className="w-6" src={Linkedin} alt="icons" />
              </div>
              <div className="pl-1">
                <img className="w-6" src={Email} alt="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="bg-gray-200">
          <div className="p-6">
            <div className="flex ">
              <div className="p-2 ">
                <button className="px-6 py-2 bg-white ">Privacy Policy</button>
              </div>
              <div className="p-2">
                <button className="px-6 py-2 bg-white ">Terms of Use</button>
              </div>
            </div>

            <div className="flex flex-col px-6 pt-2 pb-6 text-center ">
              <div className="pb-2 text-blue-600 border-b border-gray-500">
                Site Links
              </div>

              <div className="px-12 py-4 my-2 bg-white ">Home</div>
              <div className="px-12 py-4 my-2 bg-white ">About Us</div>
              <div className="px-12 py-4 my-2 bg-white ">Insights</div>
              <div className="px-12 py-4 my-2 bg-white ">Events</div>
              <div className="px-12 py-4 my-2 bg-white ">Due Diligence</div>
              <div className="px-12 py-4 my-2 bg-white ">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
