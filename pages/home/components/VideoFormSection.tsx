
import { useState } from 'react';

export function VideoFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! We will contact you soon.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', mobile: '' });
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#050B35] mb-4">
            HORIZON RESIDENCES RERA NUMBER - UPRERAPRJ223953
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="relative">
            <video 
              className="w-full rounded-lg shadow-lg"
              controls
              autoPlay
              muted
              loop
              poster="https://thehorizonresidences.co.in/wp-content/uploads/2025/10/The-Horizon-Residence.png"
            >
              <source src="https://thehorizonresidences.co.in/wp-content/uploads/2025/09/Harmony-V.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#050B35] text-center mb-6">
              THE HORIZON RESIDENCES
            </h3>
            
            {submitMessage && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  placeholder="Mobile Number"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d4af37] text-black py-3 px-6 rounded-md font-semibold hover:bg-[#b8941f] transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Get Final Price'}
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-600">
              <p className="font-semibold mb-2">Harmony Infra | Premium Apartments in Indirapuram in Ghaziabad.</p>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Nature-themed lifestyle
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  25+ Amenities
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Excellent connectivity to key areas 4 & 5 BHK Apt Starting Price: ₹ 5.50 Cr*
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
