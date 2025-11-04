
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/The-Horizon-Residence.png",
    "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/the-horizon-residences-3.png",
    "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/the-horizon-residences-2.png",
    "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/the-horizon-residnces-5.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Horizon Residences ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#d4af37]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
