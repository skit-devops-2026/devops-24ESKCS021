import React from "react";

const Events = () => {
  const events = [
    {
      name: "Campus Hackathon",
      category: "Technology",
      description: "Build projects and share your ideas with other students.",
    },
    {
      name: "College Fest",
      category: "Cultural",
      description: "Enjoy music, dance and exciting college activities.",
    },
    {
      name: "Sports Tournament",
      category: "Sports",
      description: "Participate in sports and show your talent.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050706] px-5 py-12 sm:px-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm text-lime-300">CAMPUS CONNECT</p>

        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Campus Events
        </h1>

        <p className="mt-4 max-w-xl text-base text-gray-400 sm:text-lg">
          Discover events, explore your interests and make your college
          experience better.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.name}
              className="rounded-xl border border-gray-800 bg-[#0b0e0c] p-6"
            >
              <p className="mb-4 text-sm font-bold text-lime-300">
                {event.category}
              </p>

              <h2 className="text-2xl font-bold text-white">
                {event.name}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {event.description}
              </p>

              <button className="mt-6 rounded-lg bg-lime-300 px-5 py-3 font-bold text-black">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;