import React from "react";
import apenFoto from "/apen foto2-edited.png";
import { Link } from "react-router-dom"; // Add this import

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 md:px-0 text-center">
      <div className="max-w-3xl">
        <img src={apenFoto} alt="Apen Foto" className="mb-8 mx-auto" />
        <h1 className="text-3xl md:text-5xl font-serif mb-6">
          Stefanus Adri Irawan
        </h1>
        <div className="prose prose-lg mb-6">
          <p>
            I'm a composer, music producer, and music educator specializing in
            film scoring and commercial sound design. With expertise across
            multiple instruments and production techniques, I create targeted
            musical solutions for diverse media projects. I've worked on
            projects across different media, from cinematic scores to music
            production. As an educator, I leverage industry experience to
            provide practical instruction in music theory, composition.
          </p>
          <p style={{ color: "rgb(139, 31, 31)" }}>
            <strong>Compose, Create, Captivate</strong>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-wine text-white rounded-md hover:bg-wine-700 transition-colors text-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
