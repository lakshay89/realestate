
export function FloorPlansSection() {
  const floorPlans = [
    {
      image: "https://thehorizonresidences.co.in/wp-content/uploads/2025/09/f2.webp",
      title: "4 BHK Floor Plan",
      area: "2068.08 sq. ft."
    },
    {
      image: "https://thehorizonresidences.co.in/wp-content/uploads/2025/09/f1.webp",
      title: "4.5 BHK Floor Plan",
      area: "2281.32 sq. ft."
    },
    {
      image: "https://thehorizonresidences.co.in/wp-content/uploads/2025/09/f3.webp",
      title: "5 BHK Floor Plan",
      area: "2485.19 sq. ft."
    }
  ];

  return (
    <section id="floor-plan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-2">Available Floor Plans</p>
          <p className="text-xl text-[#d4af37] mb-2">Harmony</p>
          <h2 className="text-3xl font-bold text-[#050B35] mb-4">THE HORIZON RESIDENCES</h2>
          <p className="text-lg text-gray-600">offers 4 BHK, 4.5 BHK, and 5 BHK luxury apartments. Fill the form below to download floor plans.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {floorPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <a href="https://wa.link/o8f95q" target="_blank" rel="noopener noreferrer">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#050B35] mb-2">{plan.title}</h3>
                <p className="text-gray-600">{plan.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
