import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="p-14 bg-white text-[#1E1E1E]">
      <div className="md:flex items-start justify-between">
        <div className="flex flex-col justify-between max-md:mb-10">
          <div>
            {/* <img
              className="w-[200px] mb-3 "
              src="/images/logo1.png"
              alt="logo"
            /> */}
            <Image
              priority={true}
              style={{ width: "200px", height: "auto" }}
              src="/images/logo1.png"
              width={200}
              height={20}
              alt="logo"
              className="mb-3"
            />
            <h1>
              The biggest, extraordinary add spread <br /> out kpop music
              festival all around the world
            </h1>
          </div>
          <p className="mt-20 max-md:hidden">2025 &copy; Elegent</p>
        </div>
        <div>
          <div className="flex items-start space-x-12 ">
            <ul>
              <li className="text-xl font-semibold pb-5">Menu</li>
              <li>Home</li>
              <li>Performance</li>
              <li>Booking</li>
              <li>Store</li>
              <li>About Us</li>
            </ul>
            <ul>
              <li className="text-xl font-semibold pb-5">Help</li>
              <li>Privacy & Policy</li>
              <li>Term of Use</li>
            </ul>
            <ul>
              <li className="text-xl font-semibold pb-5">Social</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
