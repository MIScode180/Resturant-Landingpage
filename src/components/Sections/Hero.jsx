import React from 'react'

export default function Hero() {
  return (
<div className="relative w-full h-[80vh] z-0">
  <img 
    src="/img/img1.jpg" 
    alt=""
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black/30 z-0">
    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
      Savor the Art of Fine Dining
    </h1>

    <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
      Crafted flavors, fresh ingredients, and a culinary experience you’ll never forget.
    </p>

    <button className="mt-6 bg-[#84994F] text-black px-6 py-3 rounded-xl text-lg hover:bg-[#95a998] transition cursor-pointer">
      Order Online
    </button>
  </div>
</div>

  )
}




