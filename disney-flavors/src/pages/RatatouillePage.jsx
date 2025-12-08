import React from 'react';
import remyImage from '../assets/remy.jpg'
import bgImage from '../assets/rat-bg.jpg'

export default function RatatouillePage() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full h-screen max-w-screen-2xl mx-auto">
            <div className="flex h-full">
              {/* Left Side - Character Image */}
              <div className="w-2/5 relative bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-600">
                <img
                  src={remyImage}
                  alt="Remy"
                  className="w-full h-full object-cover"
                />
                
              </div>

              {/* Right Side - Quote */}
              <div className="w-3/5 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 flex items-center justify-center p-16"
              style={{
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                <div className="max-w-2xl text-center">

                  <blockquote>
                    <p className="text-white text-4xl leading-relaxed mb-8 font-light">
                      "Good food is like music you can taste, color you can smell. There is excellence all around you. You need only be aware to stop and savor it."
                    </p>
                    <footer className="text-white text-3xl font-light">
                      -Chef Auguste Gusteau
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">RATATOUILLE</h3>
            <p className="text-gray-400">A Pixar Animation Studios Film</p>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Disney_Flavors. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}