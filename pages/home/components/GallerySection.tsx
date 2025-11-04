
import { useState } from 'react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/the-horizon-residnces-5.png",
      alt: "Horizon Residences View 1"
    },
    {
      src: "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/the-horizon-residences-2.png",
      alt: "Horizon Residences View 2"
    },
    {
      src: "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/the-horizon-residences-2.png",
      alt: "Horizon Residences View 3"
    },
    {
      src: "https://thehorizonresidences.co.in/wp-content/uploads/2025/10/The-Horizon-Residence.png",
      alt: "Horizon Residences View 4"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#050B35]">Gallery Of The Horizon Residences</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
