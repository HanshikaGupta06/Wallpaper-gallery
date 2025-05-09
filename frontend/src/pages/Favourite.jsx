import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Download } from 'lucide-react';

const Favourite = () => {
  const [favouriteImages, setFavouriteImages] = useState([]);

  useEffect(() => {
    try {
      axios
        .get('http://localhost:3000/api/v1/favourite')
        .then((res) => setFavouriteImages(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url, { mode: 'cors' });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${title}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Favourite Wallpapers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {favouriteImages.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 flex justify-between items-center">
              <p className="text-lg font-medium text-gray-700">{item.title}</p>
              <button
                onClick={() => handleDownload(item.url, item.title)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition"
                title="Download"
              >
                <Download size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
