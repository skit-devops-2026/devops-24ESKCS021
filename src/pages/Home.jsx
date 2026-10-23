
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex min-h-screen items-center bg-[#050706] px-5 py-16 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full">
        <p className="mb-5 text-sm font-bold tracking-wide text-lime-300 sm:text-base">
          YOUR CAMPUS. YOUR COMMUNITY.
        </p>

        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Find.
          <br />
          <span className="text-lime-300">Join.</span>
          <br />
          Belong.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          Discover college events, join clubs and connect with
          students who share your interests.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/events"
            className="w-full rounded-lg bg-lime-300 px-6 py-4 text-center font-bold text-black sm:w-auto"
          >
            Explore Events →
          </Link>

          <Link
            to="/clubs"
            className="w-full rounded-lg border border-gray-600 px-6 py-4 text-center text-white sm:w-auto"
          >
            Explore Clubs
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-gray-800 pt-8 sm:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-lime-300 sm:text-3xl">
              Events
            </h2>
            <p className="mt-2 text-gray-400">
              Discover campus activities
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-lime-300 sm:text-3xl">
              Clubs
            </h2>
            <p className="mt-2 text-gray-400">
              Find your community
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-lime-300 sm:text-3xl">
              Connect
            </h2>
            <p className="mt-2 text-gray-400">
              Meet fellow students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
