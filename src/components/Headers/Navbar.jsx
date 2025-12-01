import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-4 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <img
          src="/logo/logo1.jpg"
          alt="logo"
          className="w-[90px] h-14 rounded-full object-cover"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-lg font-semibold text-black">
            <li className="hover:text-[#84994F] cursor-pointer">Home</li>
            <li className="hover:text-[#84994F] cursor-pointer">Menu</li>
            <li className="hover:text-[#84994F] cursor-pointer">Reservations</li>
            <li className="hover:text-[#84994F] cursor-pointer">About</li>
            <li className="hover:text-[#84994F] cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-[#84994F] rounded-xl text-black px-5 py-2 hover:bg-[#95a998] cursor-pointer">
            Order Online
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-[#FCB53B] font-bold"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white w-full px-6 py-6 space-y-5 text-black font-semibold shadow-lg">
          <div className="text-center hover:text-[#84994F] cursor-pointer">Home</div>
          <div className="text-center hover:text-[#84994F] cursor-pointer">Menu</div>
          <div className="text-center hover:text-[#84994F] cursor-pointer">Reservations</div>
          <div className="text-center hover:text-[#84994F] cursor-pointer">About</div>
          <div className="text-center hover:text-[#84994F] cursor-pointer">Contact</div>

          <button className="bg-[#84994F] w-40 rounded-xl text-black py-2 hover:bg-[#95a998] transition mx-auto block">
            Order Online
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
