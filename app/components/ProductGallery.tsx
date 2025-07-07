
'use client';

import { useState } from 'react';

export default function ProductGallery() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; name: string; category: string; index: number } | null>(null);

  const products = [
    // Granite Products (12 total)
    { 
      name: 'Pebble Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/44def3b1226c2d3660eb17920263ea07.png'
    },
    { 
      name: 'Tiger Skin Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/4552f3439d44a47275792dd93d2356ef.png'
    },
    { 
      name: 'River Black Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/7926fbfbc033a30696eb0b05e5aae0b2.png'
    },
    { 
      name: 'Fantasy Brown Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/f1e4196a535e1406a17164ebcd4b10ae.png'
    },
    { 
      name: 'White Galaxy Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/f341e570c2bbdb2109ec88b95fdc227c.png'
    },
    { 
      name: 'Cat Eye Green Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/6768fd9878168f4285e609033b7b92fc.png'
    },
    { 
      name: 'Absolute Black Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/7bfc80a568ca57611c4ed4e9c08a5bac.png'
    },
    { 
      name: 'Imperial Red Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/b0a5bda2bfab6a14ccc2c6078e71c3c5.png'
    },
    { 
      name: 'Blue Pearl Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/fec9f3dd69a963b92e3fd175e5d197b8.png'
    },
    { 
      name: 'Kashmir White Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/7e87574a5aacc7060db1665a9618e5d5.png'
    },
    { 
      name: 'Tan Brown Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/4d547084404d71f16c27b9143776463a.png'
    },
    { 
      name: 'Steel Grey Granite', 
      category: 'Granite',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/a54e9e2afc60efa5ae25da74ea8ea1f5.png'
    },

    // Marble Products (4 total)
    { 
      name: 'Apple Green Marble', 
      category: 'Marble',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/aa64e9ec6fe193a7f1947c7c5050cc25.png'
    },
    { 
      name: 'Onyx Marble', 
      category: 'Marble',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/64b0cc4b6dd73fc27f1e1195ef03c142.png'
    },
    { 
      name: 'Carrara White Marble', 
      category: 'Marble',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/a4ae4b4501167ea5bd2fe901335526f9.png'
    },
    { 
      name: 'Emperador Dark Marble', 
      category: 'Marble',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/c0f1f63cad696eb8ca8099e4a1f8efa0.png'
    },

    // Sandstone Products (6 total)
    { 
      name: 'Teak Wood Sandstone', 
      category: 'Sandstone',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/76061d6a6ab1ff41fc9f3bcef76b889c.png'
    },
    { 
      name: 'Rainbow Sandstone', 
      category: 'Sandstone',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/b88a4ef1f16044cc01ab3d47c174f897.png'
    },
    { 
      name: 'Red Agra Sandstone', 
      category: 'Sandstone',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/5c97b8bc15f38d81da74a62d3e0a7854.png'
    },
    { 
      name: 'Buff Sandstone', 
      category: 'Sandstone',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/1e162372bce8a0df1b92aca72ad4afd8.png'
    },
    { 
      name: 'Mint Sandstone', 
      category: 'Sandstone',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/0a8a380606147268b319726cbd98f2d1.png'
    },
    { 
      name: 'Desert Gold Sandstone', 
      category: 'Sandstone',
      image: 'https://static.readdy.ai/image/4aa709d1071c745a0f95e84e800a02b5/a28b31f2ee412614e58dff3c0a7ec25b.png'
    }
  ];

  const categories = ['All', 'Granite', 'Marble', 'Sandstone'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openLightbox = (product: { name: string; category: string; image: string }, index: number) => {
    setLightboxImage({
      src: product.image,
      name: product.name,
      category: product.category,
      index: index
    });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightboxImage) return;

    const currentIndex = lightboxImage.index;
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredProducts.length - 1;
    } else {
      newIndex = currentIndex < filteredProducts.length - 1 ? currentIndex + 1 : 0;
    }

    const newProduct = filteredProducts[newIndex];
    setLightboxImage({
      src: newProduct.image,
      name: newProduct.name,
      category: newProduct.category,
      index: newIndex
    });
  };

  return (
    <>
      <section id="product-gallery" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Product Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our premium collection of natural stones, carefully selected and processed to meet the highest quality standards
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category} {category !== 'All' && `(${products.filter(p => p.category === category).length})`}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => openLightbox(product, index)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-300 z-10 cursor-pointer"
            >
              <i className="ri-close-line text-3xl w-8 h-8 flex items-center justify-center"></i>
            </button>
            
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300 z-10 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-4xl w-12 h-12 flex items-center justify-center bg-black/50 rounded-full"></i>
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300 z-10 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-4xl w-12 h-12 flex items-center justify-center bg-black/50 rounded-full"></i>
            </button>
            
            <div className="relative animate-in zoom-in duration-500">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.name}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
