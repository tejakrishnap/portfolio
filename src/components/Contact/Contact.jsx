import React from "react";
import { FaMapMarkedAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white h-fit" id="contact">
      <div className="relative isolate lg:px-8 mx-auto max-w-screen-lg">
        <div className="flex gap-8 items-center mx-auto max-w-6xl py-32 sm:py-48 lg:py-28">
          <div className="">
            <h3 className="text-lg text-left font-poppins font-bold sm:text-lg text-blue pb-2 ">
              CONTACT ME
            </h3>
            <h4 className="text-2xl text-left font-poppins font-bold sm:text-[25px] leading-[35px] text-black mb-16">
              Hit me up! 👇
            </h4>
            <div className="flex space-x-6 mt-6">
              <div className="flex gap-20">
                <div className="flex items-center gap-3">
                  <div className="icon-circle text-blue">
                    <FaMapMarkedAlt />
                  </div>
                  <div>
                    <h5 className="text-lg text-left font-poppins font-bold">
                      Location
                    </h5>
                    <p className="text-lg text-left text-gray-light font-poppins font-medium">
                      Overland Park, Kansas
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-circle text-blue">
                    <FaMailBulk />
                  </div>
                  <div>
                    <h5 className="text-lg text-left font-poppins font-bold">
                      Email
                    </h5>
                    <p className="text-lg text-left text-gray-light font-poppins font-medium">
                      <a href="mailto:stefan.topallovic@gmail.com">
                        saikrishna.usait@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
