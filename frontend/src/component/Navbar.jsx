import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'text-gray-700 hover:text-blue-500 transition duration-200';

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold text-blue-600 flex items-center gap-1">
            <span role="img" aria-label="logo">🖼️</span> WallCraft
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/favourite" className={linkClasses}>
              Favourite
            </NavLink>
            <NavLink to="/trending" className={linkClasses}>
              Trending
            </NavLink>
          </div>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;
