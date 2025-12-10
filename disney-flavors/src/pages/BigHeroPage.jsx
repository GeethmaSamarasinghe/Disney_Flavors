import React from 'react';
import heroImage from '../assets/bigHero.jpg'
import bgImage from '../assets/bigHero-bg.jpg'

export default function BigHeroPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full h-screen max-w-screen-2xl mx-auto">
            <div className="flex h-full">
              {/* Left Side - Character Image */}
              <div className="w-2/5 relative bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-600">
                <img
                  src={heroImage}
                  alt="BigHero6"
                  className="w-full h-full object-cover"
                />                
              </div>

              {/* Right Side - Quote */}
              <div className="w-3/5 relative flex items-center justify-center p-16"
                style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                 }}>

                <div className="max-w-2xl text-center">
                  <blockquote>
                    <p className="text-white text-4xl leading-relaxed mb-8 font-light">
                    “Do you want some dinner? I made some chicken wings!”
                    </p>
                    <footer className="text-white text-3xl font-light">
                      -Aunt Cass
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
            <h3 className="text-2xl font-bold mb-2">Big Hero 6</h3>
            
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Disney_Flavors. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}