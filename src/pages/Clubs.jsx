
import React from "react";

const Clubs = () => {
  const clubs = [
    {
      name: "Coding Club",
      category: "Technology",
      description: "Learn coding, solve problems and build projects together.",
    },
    {
      name: "Cultural Club",
      category: "Arts and Culture",
      description: "Explore music, dance, art and college events.",
    },
    {
      name: "Sports Club",
      category: "Sports",
      description: "Meet sports lovers and take part in campus activities.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050706] px-5 py-12 sm:px-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm text-lime-300">FIND YOUR COMMUNITY</p>

        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Explore Clubs
        </h1>

        <p className="mt-4 max-w-xl text-gray-400 sm:text-lg">
          Join a club, discover your interests and connect with students.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="rounded-xl border border-gray-800 bg-[#0b0e0c] p-6"
            >
              <p className="mb-4 text-sm text-lime-300">
                {club.category}
              </p>

              <h2 className="text-2xl font-bold text-white">
                {club.name}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {club.description}
              </p>

              <button className="mt-6 rounded-lg bg-lime-300 px-5 py-3 font-bold text-black">
                Explore Club
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;
