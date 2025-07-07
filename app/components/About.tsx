
'use client';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-building-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Established 1985</h3>
                  <p className="text-gray-600">Nearly 40 years of excellence</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Gouri Marble & Gouri Granite was established in the year 1985. We started our business with the sole aim of providing world class quality of all kinds of marble, granite, sandstone, and premium natural stones.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-global-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Export</h3>
                  <p className="text-gray-600">Since 2014</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                In 2014, we began exporting under the name "Al Falah Marble Supplier And Exporter." Our manufacturing unit is located in Kishangarh, Rajasthan, and we export worldwide, especially to the Middle East.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">40+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20marble%20and%20granite%20manufacturing%20facility%20in%20Kishangarh%20Rajasthan%2C%20industrial%20stone%20cutting%20equipment%2C%20premium%20quality%20marble%20slabs%20being%20processed%2C%20clean%20modern%20factory%20environment%20with%20natural%20lighting%2C%20professional%20stone%20processing%20machinery%20and%20marble%20blocks&width=800&height=1000&seq=about-factory&orientation=portrait"
                alt="Manufacturing Facility"
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Kishangarh, Rajasthan</div>
                  <div className="text-gray-600 text-sm">Manufacturing Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
