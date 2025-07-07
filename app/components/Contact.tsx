
'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    emailjs: any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    product_interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailjsReady, setEmailjsReady] = useState(false);

  useEffect(() => {
    const checkEmailJS = () => {
      if (typeof window !== 'undefined' && window.emailjs) {
        setEmailjsReady(true);
      } else {
        setTimeout(checkEmailJS, 100);
      }
    };
    checkEmailJS();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    if (!emailjsReady) {
      setSubmitStatus('error');
      console.error('EmailJS not loaded');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await window.emailjs.sendForm(
        "service_f2mhy3c", 
        "template_mr61nkk", 
        e.target,
        "Twl1RhZCacvrwcklO"
      ); 

      console.log('EmailJS Success:', result);
      setSubmitStatus('success');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        product_interest: '',
        message: ''
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life with premium natural stones? Get in touch with our experts today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-phone-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Numbers</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">India Enquiries:</h4>
                      <div className="flex items-center ml-4">
                        <i className="ri-user-line text-yellow-600 mr-2"></i>
                        <span className="text-gray-700 mr-3">Laique Ahmed</span>
                      </div>
                      <div className="flex items-center ml-4 mt-1">
                        <i className="ri-phone-fill text-yellow-600 mr-2"></i>
                        <a href="tel:+919509532556" className="text-gray-700 hover:text-yellow-600 transition-colors">
                          +91 95095 32556
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Australia/Saudi Arabia/U.A.E Enquiries:</h4>
                      <div className="flex items-center ml-4">
                        <i className="ri-user-line text-yellow-600 mr-2"></i>
                        <span className="text-gray-700 mr-3">Ahasan Raza</span>
                      </div>
                      <div className="flex items-center ml-4 mt-1">
                        <i className="ri-phone-fill text-yellow-600 mr-2"></i>
                        <a href="tel:+61449505454" className="text-gray-700 hover:text-yellow-600 transition-colors">
                          +61 449-505-454
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Canada/USA Enquiries:</h4>
                      <div className="flex items-center ml-4">
                        <i className="ri-user-line text-yellow-600 mr-2"></i>
                        <span className="text-gray-700 mr-3">Mohammed Irfan</span>
                      </div>
                      <div className="flex items-center ml-4 mt-1">
                        <i className="ri-phone-fill text-yellow-600 mr-2"></i>
                        <a href="tel:+14372688268" className="text-gray-700 hover:text-yellow-600 transition-colors">
                          +1 437-268-8268
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-mail-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Address</h3>
                  <div className="flex items-center">
                    <i className="ri-mail-fill text-yellow-600 mr-3"></i>
                    <a href="mailto:info@alfalahexports.com" className="text-lg text-gray-700 hover:text-yellow-600 transition-colors">
                      info@alfalahexports.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Unit</h3>
                  <div className="flex items-start">
                    <i className="ri-map-pin-fill text-yellow-600 mr-3 mt-1"></i>
                    <div className="text-lg text-gray-700">
                      Kishangarh, Rajasthan<br />
                      <span className="text-gray-500">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-2xl text-black">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2"></i>
                    <span className="text-red-800 font-medium">Failed to send message. Please try again or contact us directly.</span>
                  </div>
                </div>
              )}
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm"
                      placeholder="Your first name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm"
                      placeholder="Your last name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Interest *
                  </label>
                  <select
                    name="product_interest"
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm"
                    value={formData.product_interest}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select a product category</option>
                    <option value="Granite">Granite</option>
                    <option value="Marble">Marble</option>
                    <option value="Sandstone">Sandstone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <div className="text-xs text-gray-500 mt-1">Maximum 500 characters</div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !emailjsReady}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                    isSubmitting || !emailjsReady
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : !emailjsReady ? 'Loading...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20stone%20showroom%20interior%20with%20elegant%20marble%20and%20granite%20displays%2C%20modern%20lighting%20showcasing%20premium%20natural%20stone%20samples%2C%20luxury%20stone%20exhibition%20space%20with%20clean%20contemporary%20design%2C%20sophisticated%20stone%20gallery%20environment&width=800&height=500&seq=showroom&orientation=landscape"
                alt="Showroom"
                className="w-full h-64 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Visit Our Showroom</h4>
                <p className="text-gray-200">Experience our premium stones firsthand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
