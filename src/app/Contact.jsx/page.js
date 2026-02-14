import React from 'react'

function contact() {
  return (
       <div className="bg-black text-white min-h-screen px-6 md:px-20 py-16">

   
      <div className="grid md:grid-cols-2 gap-16">

   
        <div>
          <p className="text-red-600 uppercase tracking-widest text-sm mb-4">
            Start With Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Straightforward legal
            <br />
            services with no hidden
            <br />
            surprises
          </h1>

          <div className="mt-10">
            <p className="text-gray-400 text-sm mb-2">Contact Info</p>
            <p className="text-gray-300">Legally: +90 021 121323</p>
          </div>
        </div>

   
        <div className="bg-zinc-900 p-8 rounded-lg">

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-black border border-zinc-700 p-3 text-white focus:outline-none focus:border-red-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-black border border-zinc-700 p-3 text-white focus:outline-none focus:border-red-600"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black border border-zinc-700 p-3 mb-4 text-white focus:outline-none focus:border-red-600"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-black border border-zinc-700 p-3 mb-4 text-white focus:outline-none focus:border-red-600"
          />

          <textarea
            placeholder="Describe your case..."
            rows="4"
            className="w-full bg-black border border-zinc-700 p-3 mb-6 text-white focus:outline-none focus:border-red-600"
          ></textarea>

          <button className="w-full bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
            Submit
          </button>

        </div>
      </div>


     
      <div className="mt-24">

        <p className="text-red-600 uppercase tracking-widest text-sm mb-4">
          Our Office Sites
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Our Convenient Office
          <br />
          Locations Nationwide
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">OFFICE 1</h3>
            <p className="text-gray-400 text-sm">
              New York City, NY <br />
              111 Legal Avenue, Suite 456 <br />
              New York, NY 10001
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">OFFICE 2</h3>
            <p className="text-gray-400 text-sm">
              Los Angeles, CA <br />
              789 Justice Blvd, Floor 3 <br />
              Los Angeles, CA 90001
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">OFFICE 3</h3>
            <p className="text-gray-400 text-sm">
              Chicago, IL <br />
              456 Law Street, Suite 101 <br />
              Chicago, IL 60601
            </p>
          </div>

        </div>
      </div>


     
      <div className="mt-16">

        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-zinc-800">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.994234746923!2d-73.996864684593!3d40.73061007932861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18c3b0fd%3A0x8f0a9e4a8c3e1a!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </div>
  )
  
}

export default contact

