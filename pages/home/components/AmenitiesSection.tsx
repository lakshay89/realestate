
export function AmenitiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://thehorizonresidences.co.in/wp-content/uploads/2025/09/imgi_41_harmony-horizon-residences-ghaziabad-DmgCrDb56aLfUhneTw44NA.jpg"
              alt="Harmony Horizon Residences"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-lg text-gray-700 mb-6">
              Harmony promises a living experience like no other.
            </p>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Offers well-designed 4 & 5 BHK apartments.
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Close to schools, hospitals, shopping malls, and essential amenities.
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Early investors can secure homes in a promising location.
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Registered under RERA for transparency and regulatory adherence.
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Vastu-compliant architecture
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Developed by Harmony Infra, known for quality and customer satisfaction.
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Super Luxury Specifications
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">■</span>
                Superior Carpet Area Efficiency
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
