
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Header */}
      <div className="bg-[#050B35] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="https://thehorizonresidences.co.in/wp-content/uploads/2025/09/Harmony-logo-2.png" 
              alt="Harmony Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h2 className="text-sm font-bold">THE HORIZON RESIDENCES BY HARMONY INFRA</h2>
            </div>
          </div>
          <div>
            <a 
              href="https://wa.link/o8f95q" 
              className="bg-[#d4af37] text-black px-4 py-2 rounded text-sm font-semibold hover:bg-[#b8941f] transition-colors whitespace-nowrap"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`py-3 ${isScrolled ? 'bg-white' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`px-6 py-2 font-medium transition-colors ${
                  isScrolled ? 'text-[#050B35] hover:text-[#d4af37]' : 'text-[#050B35] hover:text-[#d4af37]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`px-6 py-2 font-medium transition-colors ${
                  isScrolled ? 'text-[#050B35] hover:text-[#d4af37]' : 'text-[#050B35] hover:text-[#d4af37]'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('floor-plan')}
                className={`px-6 py-2 font-medium transition-colors ${
                  isScrolled ? 'text-[#050B35] hover:text-[#d4af37]' : 'text-[#050B35] hover:text-[#d4af37]'
                }`}
              >
                Floor Plan
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className={`px-6 py-2 font-medium transition-colors ${
                  isScrolled ? 'text-[#050B35] hover:text-[#d4af37]' : 'text-[#050B35] hover:text-[#d4af37]'
                }`}
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('price-list')}
                className={`px-6 py-2 font-medium transition-colors ${
                  isScrolled ? 'text-[#050B35] hover:text-[#d4af37]' : 'text-[#050B35] hover:text-[#d4af37]'
                }`}
              >
                Price List
              </button>
              <button 
                onClick={() => scrollToSection('connect-us')}
                className={`px-6 py-2 font-medium transition-colors ${
                  isScrolled ? 'text-[#050B35] hover:text-[#d4af37]' : 'text-[#050B35] hover:text-[#d4af37]'
                }`}
              >
                Connect Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#050B35] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-[#050B35] hover:text-[#d4af37] py-2 text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-[#050B35] hover:text-[#d4af37] py-2 text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('floor-plan')}
                  className="text-[#050B35] hover:text-[#d4af37] py-2 text-left"
                >
                  Floor Plan
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-[#050B35] hover:text-[#d4af37] py-2 text-left"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('price-list')}
                  className="text-[#050B35] hover:text-[#d4af37] py-2 text-left"
                >
                  Price List
                </button>
                <button 
                  onClick={() => scrollToSection('connect-us')}
                  className="text-[#050B35] hover:text-[#d4af37] py-2 text-left"
                >
                  Connect Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
