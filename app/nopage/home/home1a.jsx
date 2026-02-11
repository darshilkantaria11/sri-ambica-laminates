"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const LaminateHomepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedCatalogue, setSelectedCatalogue] = useState(null);
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openFlipbook = (catalogue) => {
    if (catalogue.flipbookUrl) {
      setSelectedCatalogue(catalogue);
      setIsFlipbookOpen(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
  };

  const closeFlipbook = () => {
    setIsFlipbookOpen(false);
    setSelectedCatalogue(null);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  const features = [
    {
      icon: "🎨",
      title: "Endless Designs",
      description: "From classic wood grains to contemporary patterns"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Scratch-resistant, water-proof, and built to last"
    },
    {
      icon: "🌿",
      title: "Eco-Conscious",
      description: "Sustainable materials for mindful living"
    },
    {
      icon: "⚡",
      title: "Easy Installation",
      description: "Transform your space in hours, not days"
    }
  ];


  const catalogues = [
    { 
      name: "PRIONEX", 
      color: "#43544a", 
      link: "/catalogue/prionex", 
      image: "/Prionex.png",
      flipbookUrl: "https://heyzine.com/flip-book/915996e551.html"
    },
    { 
      name: "PAXORA", 
      color: "#e06846", 
      link: "/catalogue/paxora", 
      image: "/Paxora.png",
      flipbookUrl: null // Add flipbook URL later
    },
    { 
      name: "PLAINX", 
      color: "#cbeef7", 
      link: "/catalogue/plainx", 
      image: "/Plainx.png",
      flipbookUrl: null // Add flipbook URL later
    },
    { 
      name: "RANGREZ", 
      color: "#c51b2c", 
      link: "/catalogue/rangrez", 
      image: "/Rangrez.png",
      flipbookUrl: null // Add flipbook URL later
    },
    { 
      name: "PLEXA", 
      color: "#a57865", 
      link: "/catalogue/plexa", 
      image: "/Plexa.png",
      flipbookUrl: null // Add flipbook URL later
    },
    { 
      name: "WOODMA", 
      color: "#cfe2de", 
      link: "/catalogue/woodma", 
      image: "/Woodma.png",
      flipbookUrl: null // Add flipbook URL later
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Background Image - Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/back.webp')`,
              filter: 'brightness(0.8)'
            }}
          />
        </div>

        {/* Background Image - Mobile (same image for now, you can replace) */}
        <div className="absolute inset-0 md:hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('/back1.png')`,
              filter: 'brightness(0.7)'
            }}
          />
        </div>

        {/* Animated Grain Overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            {/* Animated Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -30 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <motion.h3
                className="text-xl md:text-2xl font-light tracking-[0.3em] text-amber-200 mb-2"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                PREMIUM LAMINATES
              </motion.h3>
            </motion.div>

            {/* Main Headline with Stagger Animation */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
                transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 50 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                <span className="block">Where</span>
                <motion.span
                  className="block bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Surfaces
                </motion.span>
                <span className="block">Tell Stories</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Transform ordinary spaces into extraordinary experiences with our curated collection
              of artisan-inspired laminate sheets. Crafted for those who refuse to compromise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/catalogue">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-lg overflow-hidden"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.1 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Catalogue
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-white text-white font-semibold text-lg backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Request Samples
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm tracking-wider font-light">SCROLL</span>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Redefining <span className="text-amber-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Every sheet is a testament to innovation, quality, and timeless design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-amber-500 transition-all duration-500">
                  {/* Animated Corner Accent */}
                  <motion.div
                    className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-amber-500"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />

                  <motion.div
                    className="text-6xl mb-6"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors" style={{ fontFamily: "'Archivo', sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our <span className="text-amber-400">Catalogue</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Curated selections that bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {catalogues.map((catalogue, index) => (
              <div key={index}>
                {/* Catalogue Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-60 md:h-80 overflow-hidden cursor-pointer"
                  onClick={() => openFlipbook(catalogue)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={catalogue.image}
                      alt={catalogue.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
                    style={{
                      background: `linear-gradient(to bottom, transparent 0%, ${catalogue.color}60 50%, ${catalogue.color}90 100%)`,
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <motion.h3
                      className="text-3xl md:text-4xl font-bold mb-3 text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {catalogue.name}
                    </motion.h3>
                    <motion.div
                      className="flex items-center gap-2 text-amber-300"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="font-light">
                        {catalogue.flipbookUrl ? 'View Flipbook' : 'Explore'}
                      </span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-amber-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Screen Flipbook Modal */}
        <AnimatePresence>
          {isFlipbookOpen && selectedCatalogue && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
              onClick={closeFlipbook}
            >
              <div className="h-full w-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-amber-500/30">
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selectedCatalogue.name} Catalogue
                  </h3>
                  <button
                    onClick={closeFlipbook}
                    className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                  >
                    <span className="text-white font-semibold">Close</span>
                    <span className="text-2xl text-white group-hover:rotate-90 transition-transform">✕</span>
                  </button>
                </div>

                {/* Flipbook Container */}
                <div 
                  className="flex-1 p-4 md:p-8 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="h-full w-full"
                  >
                    <iframe
                      allowFullScreen
                      allow="clipboard-write"
                      scrolling="no"
                      className="w-full h-full rounded-lg"
                      src={selectedCatalogue.flipbookUrl}
                      style={{ 
                        border: '2px solid rgba(251, 191, 36, 0.3)', 
                        backgroundColor: '#000'
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-8xl md:text-9xl text-amber-500 mb-8 opacity-30"
            >
              "
            </motion.div>
            <h3 className="text-3xl md:text-5xl font-light mb-8 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Not just surfaces. <br />
              <span className="text-amber-400 font-normal">Statements.</span> <br />
              Not just materials. <br />
              <span className="text-amber-400 font-normal">Masterpieces.</span>
            </h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '200px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Transform <br />
              <span className="text-amber-400">Your Space?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
              Get in touch with our design experts and discover the perfect laminate solution for your project
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Get Free Consultation
                </motion.button>
              </Link>

              <Link href="/collections">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  View Catalog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-wider text-amber-400"
            >
              PREMIUM LAMINATES
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-8 text-gray-400"
            >
              <Link href="/about">
                <motion.span
                  whileHover={{ color: '#fbbf24' }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About
                </motion.span>
              </Link>
              <Link href="/collections">
                <motion.span
                  whileHover={{ color: '#fbbf24' }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Collections
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ color: '#fbbf24' }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contact
                </motion.span>
              </Link>
              <Link href="/support">
                <motion.span
                  whileHover={{ color: '#fbbf24' }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Support
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-neutral-800 text-center text-gray-500 text-sm"
          >
            © 2026 Premium Laminates. Crafted with excellence.
          </motion.div>
        </div>
      </footer>

      {/* Google Fonts */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Archivo:wght@300;400;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
      `}} />
    </div>
  );
};

export default LaminateHomepage;