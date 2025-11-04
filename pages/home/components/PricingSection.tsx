
export function PricingSection() {
  return (
    <section id="price-list" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Pricing Information */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The current pre-launch offer price for this property is approx Rs 15,000/- sq ft + other charges (approx. Rs 500-600/- sq ft). This price is expected to rise to approx. Rs 16,500/- sq ft to Rs 17,000/- sq ft + other charges.
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            Their pre-booking payment plan is structured in the ratio of 40:30:30, i.e.
          </p>
          
          <ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-2">•</span>
              40% payment at the time of launch
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-2">•</span>
              30% at the time of superstructure completion
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-2">•</span>
              30% at the time of possession
            </li>
          </ul>
        </div>

        {/* Payment Plan and Master Plan Images */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <a href="https://wa.link/o8f95q" target="_blank" rel="noopener noreferrer">
              <img
                src="https://thehorizonresidences.co.in/wp-content/uploads/2025/09/costing-details.jpg"
                alt="Payment Plan"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
            <h3 className="text-2xl font-bold text-[#050B35] mt-4">PAYMENT PLAN</h3>
          </div>

          <div className="text-center">
            <a href="https://wa.link/o8f95q" target="_blank" rel="noopener noreferrer">
              <img
                src="https://thehorizonresidences.co.in/wp-content/uploads/2025/09/master-plan.jpg"
                alt="Master Plan"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
            <h3 className="text-2xl font-bold text-[#050B35] mt-4">MASTER PLAN</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
