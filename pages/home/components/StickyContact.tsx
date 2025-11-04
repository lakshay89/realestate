
export function StickyContact() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
      {/* Phone Button */}
      <a
        href="tel:+919211553020"
        className="bg-[#050B35] text-white p-3 rounded-full shadow-lg hover:bg-[#0a1654] transition-colors group"
        title="Call Us"
      >
        <i className="ri-phone-line text-xl"></i>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.link/o8f95q"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
        title="WhatsApp"
      >
        <i className="ri-whatsapp-line text-xl"></i>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-[#d4af37] text-black p-3 rounded-full shadow-lg hover:bg-[#b8941f] transition-colors group"
        title="Scroll to Top"
      >
        <i className="ri-arrow-up-line text-xl"></i>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Top
        </span>
      </button>
    </div>
  );
}
