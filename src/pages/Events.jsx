import React, { useState } from "react";

const Events = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

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

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-[#050706] px-5 py-12 sm:px-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Campus Events
        </h1>

        <p className="mt-4 text-gray-400">
          Search events or choose your favourite category.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-[#0b0e0c] p-4 text-white sm:flex-1"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-[#0b0e0c] p-4 text-white sm:w-56"
          >
            <option value="All">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
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

        {filteredEvents.length === 0 && (
          <p className="mt-8 text-gray-400">
            No events found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
};

export default Events;