"use client";
import React from "react";

export default function Nav() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-gray-800">

       
        <div className="flex items-center gap-8">

         {/* need to add logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"   
              alt="Legally Logo"
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-xl font-semibold">
              Legally
            </h1>
          </div>

          <ul className="hidden md:flex gap-6 text-gray-300 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Services</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Careers</li>
          </ul>
        </div>

        <button className="bg-red-600 px-5 py-2 rounded hover:bg-red-700 transition text-sm">
          Sign Up
        </button>
      </nav>

      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 py-16 md:py-24">

        <div>
          <p className="text-gray-400 uppercase text-xs mb-4">
            Start With Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            We Provide Global
            <br />
            <span className="text-red-600">Recruitment</span>
            <br />
            <span className="text-red-600">Excellence</span>
          </h2>

          <p className="text-gray-400 mt-6 text-sm md:text-base max-w-md">
            At Million Holdings International, we bridge the gap between
            exceptional talent and global enterprises. Our rigorous
            selection process ensures the perfect fit.
          </p>

          <div className="mt-8 text-gray-400 text-sm">
            <p>Contact Info</p>
            <p className="mt-2">📞 +90021121323</p>
          </div>
        </div>
        <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg">
          <form className="flex flex-col gap-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black border border-gray-700 p-3 rounded focus:outline-none focus:border-red-600 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-black border border-gray-700 p-3 rounded focus:outline-none focus:border-red-600 text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-gray-700 p-3 rounded focus:outline-none focus:border-red-600 text-sm"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-black border border-gray-700 p-3 rounded focus:outline-none focus:border-red-600 text-sm"
            />

            <textarea
              rows="4"
              placeholder="Describe your case..."
              className="bg-black border border-gray-700 p-3 rounded focus:outline-none focus:border-red-600 text-sm"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition text-sm"
            >
              Submit
            </button>

          </form>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-gray-800">
        <h3 className="text-2xl md:text-3xl font-bold mb-10">
          Our Convenient Office Locations Nationwide
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-red-600 font-semibold mb-2">Office 1</h4>
            <p className="text-gray-400 text-sm">
              New York, NY <br />
              123 Recruitment Street
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-red-600 font-semibold mb-2">Office 2</h4>
            <p className="text-gray-400 text-sm">
              Los Angeles, CA <br />
              456 Talent Avenue
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-red-600 font-semibold mb-2">Office 3</h4>
            <p className="text-gray-400 text-sm">
              Chicago, IL <br />
              789 Hiring Boulevard
            </p>
          </div>
        </div>

        {/* need to add map image */}
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <img
           src="/images/map.png"

            alt="Map"
            className="w-full h-60 md:h-[400px] object-cover"
          />
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800 px-6 md:px-12 py-12 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-2">
              
              <h2 className="text-lg font-semibold">Legally</h2>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              We connect talent with opportunity worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-red-600">Contact</h4>
            <p className="text-gray-400 text-sm">support@legally.com</p>
            <p className="text-gray-400 text-sm">+90021121323</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-red-600">Menu</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Services</li>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <button className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition w-full md:w-auto">
              Free Consultation
            </button>
          </div>

        </div>

        <div className="text-gray-600 text-xs mt-10 border-t border-gray-800 pt-6">
          © 2026 Legally. All rights reserved.
        </div>
      </footer>

    </div>
  );
}