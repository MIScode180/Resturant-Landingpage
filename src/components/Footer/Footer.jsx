import React from "react";
import { Instagram ,  Facebook , Youtube } from "lucide-react";

function Footer() {
  return (
    <footer
      className="bg-linear-to-r from-[#F9A825] to-[#FBC02D] mt-10 py-12 shadow-inner rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-black">
        {/* Brand / Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img
          src="/logo/logo1.jpg"
          alt="logo"
          className="w-[90px] h-14 rounded-full object-cover"
        />
          <p className="text-sm mt-2 max-w-xs leading-relaxed">
            Fresh flavors, warm ambiance, and a dining experience crafted with
            passion.
          </p>
        </div>

        {/* Company Links */}
        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="font-bold text-lg mb-3">Company</h6>
          <ul className="space-y-2 text-center sm:text-left">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Reservation</li>
            <li className="cursor-pointer hover:underline">Jobs</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
        </nav>

        {/* Services Links */}
        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="font-bold text-lg mb-3">Services</h6>
          <ul className="space-y-2 text-center sm:text-left">
            <li className="cursor-pointer hover:underline">Branding</li>
            <li className="cursor-pointer hover:underline">Design</li>
            <li className="cursor-pointer hover:underline">Marketing</li>
            <li className="cursor-pointer hover:underline">Advertisement</li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex flex-col items-center sm:items-start lg:col-span-3 mt-5">
          <h6 className="font-bold text-lg mb-3">Follow Us</h6>

          <div className="flex gap-6">
            {/* Instagram */}
            <a className="hover:opacity-70 transition cursor-pointer">
              <Instagram />
            </a>

            {/* YouTube */}
            <a className="hover:opacity-70 transition cursor-pointer">
             <Youtube />
            </a>

            {/* Facebook */}
            <a className="hover:opacity-70 transition cursor-pointer">
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-black text-sm mt-10 opacity-80">
        © {new Date().getFullYear()} Simple Eats — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
