import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#050706] px-5 py-5">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          Campus<span className="text-lime-300">Connect</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded border border-gray-600 px-4 py-2 text-white md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <div className="hidden gap-6 text-white md:flex">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/clubs">Clubs</Link>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-5 flex flex-col gap-5 border-t border-gray-700 pt-5 text-white md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/clubs" onClick={() => setMenuOpen(false)}>Clubs</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;