import React from 'react';
import apenFoto from '/apen foto.png';
import { Link } from 'react-router-dom'; // Add this import

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 md:px-0 text-center">
      <div className="max-w-3xl">
        <img src={apenFoto} alt="Apen Foto" className="mb-8" />
        <h1 className="text-3xl md:text-5xl font-serif mb-6">
          Stefanus Adri Irawan
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-wine text-white rounded-md hover:bg-wine-700 transition-colors text-center">
            Hire Me
          </Link>
          <Link
            to="/about"
            className="inline-block px-6 py-3 border border-wine text-wine rounded-md hover:bg-wine/10 transition-colors text-center">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
