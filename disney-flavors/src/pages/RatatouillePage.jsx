import React, { useState } from 'react';

export default function RatatouillePage() {
  const [heroImage, setHeroImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Image Upload Control - Remove after uploading */}
      {!heroImage && (
        <div className="bg-blue-600 text-white p-4 text-center">
          <label htmlFor="heroUpload" className="cursor-pointer">
            <span className="text-lg font-semibold">Click here to upload the hero image</span>
            <input
              id="heroUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* Hero Section - Exact Layout from Image */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full h-screen max-w-screen-2xl mx-auto">
          <div className="relative h-full border-8 border-purple-600 overflow-hidden">
            <div className="flex h-full">
              {/* Left Side - Character Image */}
              <div className="w-2/5 relative bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-600">
                {heroImage && (
                  <img
                    src={heroImage}
                    alt="Ratatouille Character"
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Disney Pixar Logo */}
                <div className="absolute top-8 left-8">
                  <div className="text-white text-sm font-semibold tracking-widest">
                    Disney · PIXAR
                  </div>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-12 left-8">
                  <h1 className="text-white font-bold text-7xl tracking-wider drop-shadow-2xl">
                    RATATOUILLE
                  </h1>
                </div>
              </div>

              {/* Right Side - Quote */}
              <div className="w-3/5 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 flex items-center justify-center p-16">
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The Story of a Dreamer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In the heart of Paris, a young rat named Remy dreams of becoming a chef. 
              Against all odds, he forms an unlikely alliance with a garbage boy at a famous restaurant, 
              proving that greatness can come from the most unexpected places.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Anyone Can Cook</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chef Gusteau's famous motto reminds us that cooking isn't about where you come from 
                or who you are—it's about passion, dedication, and the courage to pursue your dreams. 
                In the kitchen, talent knows no boundaries.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">A Culinary Adventure</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Follow Remy as he navigates the dangerous world of haute cuisine, where one wrong 
                ingredient can spell disaster. With determination and creativity, he transforms 
                simple ingredients into extraordinary masterpieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            What Makes It Special
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-orange-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visual Masterpiece</h3>
              <p className="text-gray-600 text-lg">
                Every frame is crafted with stunning detail, bringing the bustling kitchens 
                and vibrant streets of Paris to life.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heartfelt Story</h3>
              <p className="text-gray-600 text-lg">
                A touching tale about following your passion, overcoming prejudice, 
                and finding your place in the world.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Award-Winning</h3>
              <p className="text-gray-600 text-lg">
                Winner of the Academy Award for Best Animated Feature and beloved 
                by audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-5xl font-bold mb-6">
            Not Everyone Can Become a Great Artist
          </h2>
          <p className="text-2xl mb-10 font-light">
            But a great artist can come from anywhere.
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition">
            Discover the Magic
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">RATATOUILLE</h3>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Disney_Flavors. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}