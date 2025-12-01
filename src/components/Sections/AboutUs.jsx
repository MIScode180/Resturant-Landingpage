import React from "react";

function AboutUs() {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-6">
      {/* Background Image */}
      <img
        src="/img/Aboutus.jpg"
        alt="Food"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="text-left px-4 md:px-8 max-w-sm">
          <h1 className="text-black text-2xl md:text-4xl font-bold drop-shadow-lg mb-2">
            About Us
          </h1>

          <p className="text-white font-semibold drop-shadow-lg text-sm md:text-xl mb-1">
            Delicious Food Awaits
          </p>
          <div className="text-white text-[10px] md:text-lg drop-shadow-lg leading-snug font-medium">
            <p>
              <span className="font-black text-[#84994F] text-lg md:text-xl">
                Simple Eats
              </span>{" "}
              delivers refined flavors
            </p>
            <p>in a cozy, modern setting with heartfelt</p>
            <p>hospitality. Discover comfort and</p>
            <p>elegance one memorable bite at a time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
