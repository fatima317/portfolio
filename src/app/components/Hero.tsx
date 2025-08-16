// components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Fatima Saleem</h1>
        <p className="text-xl mb-6">Dentist | AI Enthusiast </p>
        <div className="space-x-4">
          <a
            href="/cv.pdf"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            View CV
          </a>
          <a
            href="#contact"
            className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
