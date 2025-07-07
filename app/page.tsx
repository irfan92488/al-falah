
'use client';

import Hero from './components/Hero';
import About from './components/About';
import ProductGallery from './components/ProductGallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <ProductGallery />
      <Contact />
    </div>
  );
}
