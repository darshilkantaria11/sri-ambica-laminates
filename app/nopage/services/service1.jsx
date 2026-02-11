"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const headerScale = useTransform(scrollY, [0, 200], [1, 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Same-Day & Next-Day Delivery",
      description: "Same-day delivery for Hyderabad locations and next-day delivery for nearby areas, even for a single sheet.",
      image: "/S2.jpg",
      icon: "🚚",
      gradient: "from-amber-500 to-orange-600",
      features: ["Same-Day in Hyderabad", "Next-Day Nearby Areas", "Single Sheet Available"]
    },
    {
      title: "Premium Laminate Sheets",
      description: "Providing premium-quality laminate sheets in bulk for retailers across Hyderabad and nearby regions.",
      image: "/S4.png",
      icon: "💎",
      gradient: "from-orange-500 to-red-600",
      features: ["Premium Quality", "Bulk Orders", "Wide Coverage"]
    },
    {
      title: "24/7 Call & WhatsApp Support",
      description: "Our team is available round-the-clock for queries and orders through call or WhatsApp.",
      image: "/S3.png",
      icon: "📞",
      gradient: "from-red-500 to-pink-600",
      features: ["24/7 Availability", "Instant Response", "Multi-Channel Support"]
    }
  ];

  const whyChooseUs = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Fastest delivery in the industry with same-day service"
    },
    {
      icon: "🎯",
      title: "Quality First",
      description: "Premium materials that stand the test of time"
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Competitive wholesale rates for bulk orders"
    },
    {
      icon: "🤝",
      title: "Trusted Partner",
      description: "Years of experience serving satisfied clients"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black">
          <motion.div
            className="absolute inset-0 opacity-30"
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
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 border border-amber-500/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-xl md:text-2xl font-light tracking-[0.3em] text-amber-400 mb-6"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              EXCEPTIONAL SERVICE
            </motion.h3>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Quality laminates, fast delivery, and exceptional customer service tailored to meet your wholesale needs.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isLoaded ? '200px' : 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm tracking-wider font-light">DISCOVER</span>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Services Section */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(251,191,36,0.1) 50px, rgba(251,191,36,0.1) 51px)`
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
              What We <span className="text-amber-400">Offer</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Comprehensive solutions designed to exceed your expectations
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
                    
                    {/* Icon Badge */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-6 right-6 w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl border-2 border-amber-500/30"
                    >
                      {service.icon}
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-8">
                    {/* Decorative Corner */}
                    <motion.div
                      className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-amber-500"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    />

                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Effect Line */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${service.gradient} mt-6`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose <span className="text-amber-400">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Experience the difference that sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 hover:border-amber-500 transition-all duration-500 h-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 transition-all duration-500 rounded-lg" />

                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors" style={{ fontFamily: "'Archivo', sans-serif" }}>
                    {item.title}
                  </h3>

                  <p className="text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-950 to-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Clients" },
              { number: "24/7", label: "Support" },
              { number: "5000+", label: "Deliveries" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.h3
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400 text-lg font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
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
              Partner with <br />
              <span className="text-amber-400">Sri Ambica Laminates</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
              Whether you're a retailer or designer, our laminates are crafted to exceed expectations.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Call Us Now
                </motion.button>
              </Link>

              <Link href="/catalogue">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  View Catalogue
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Google Fonts */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Archivo:wght@300;400;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
      `}} />
    </div>
  );
};

export default ServicesPage;