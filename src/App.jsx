import React from 'react';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Hi, I'm Adarsh!</h1>
          <p className="mt-4 text-lg">Full Stack Developer | Web Enthusiast</p>
          <div className="mt-8">
            <button className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all mr-4">Hire Me</button>
            <button className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-700 transition-all">Message Me</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I am a passionate Full Stack Developer with expertise in JavaScript, React, Node.js, and more. I love to build web applications that solve real-world problems and create a positive impact on users.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-200">
        <h2 className="text-4xl font-semibold text-center mb-8">My Skills</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-semibold">Skills</h2>
            <p className="mt-4 text-lg text-gray-600">JavaScript, React, Node.js, and more...</p>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <img src="skills.png" alt="Skills" className="w-64 h-64 rounded-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Adarsh Mishra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
