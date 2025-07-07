
'use client';

export default function Hero() {
  const scrollToProducts = () => {
    const productSection = document.getElementById('product-gallery');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Luxurious%20marble%20quarry%20with%20pristine%20white%20and%20grey%20veined%20marble%20slabs%2C%20golden%20sunlight%20illuminating%20the%20natural%20stone%20textures%2C%20premium%20quality%20natural%20stone%20background%2C%20elegant%20and%20sophisticated%20marble%20extraction%20site%20with%20clean%20modern%20industrial%20setting&width=1920&height=1080&seq=hero-marble&orientation=landscape')`
      }}
    >
      <div className="text-center text-white z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
            GOURI GROUP
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-2">
            Al Falah Marble Supplier & Exporter
          </h2>
          <p className="text-xl md:text-2xl text-yellow-300 font-medium">
            Granite & Marble Supplier Since 1985
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
          <button 
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            View Products
          </button>
          <button 
            onClick={scrollToContact}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-3xl"></i>
      </div>
    </section>
  );
}