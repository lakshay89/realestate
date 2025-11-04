
export function LocationSection() {
  return (
    <section id="connect-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#050B35] mb-8">Location Map</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Harmony%20Infra&t=m&z=10&output=embed&iwloc=near"
              title="Harmony Infra Location"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
