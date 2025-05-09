// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to WallCraft 🎨
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
        Explore a beautiful collection of high-resolution wallpapers. Browse trending designs or save your favourites to personalize your screen!
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        <Link
          to="/trending"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Explore Trending
        </Link>
        <Link
          to="/favourite"
          className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300"
        >
          View Favourites
        </Link>
      </div>
    </div>
  );
};

export default Home;
