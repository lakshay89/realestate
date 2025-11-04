
export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://thehorizonresidences.co.in/wp-content/uploads/2025/10/the-horizon-residences-3.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          HARMONY GROUP PRESENT THE HORIZON RESIDENCES
        </h2>
        <p className="text-xl mb-8">
          RERA NUMBER - UPRERAPRJ223953
        </p>
        <a 
          href="https://wa.link/o8f95q"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#b8941f] transition-colors whitespace-nowrap"
        >
          Get Full Detail
        </a>
      </div>
    </section>
  );
}
