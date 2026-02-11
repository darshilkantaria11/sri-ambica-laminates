"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutUsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const headerScale = useTransform(scrollY, [0, 200], [1, 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const values = [
    {
      title: "Our Mission",
      description: "To be the most trusted supplier of high-quality laminate sheets, delivering unmatched value and customer satisfaction.",
      icon: "🎯",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Our Vision",
      description: "To revolutionize the laminate industry with innovative designs, sustainable practices, and reliable delivery services.",
      icon: "🌟",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Our Values",
      description: "Integrity, commitment, customer-centricity, and quality excellence are at the core of everything we do.",
      icon: "💎",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  const testimonials = [
    {
      quote: "Sri Ambica Laminates has been our go-to supplier for years. Their fast delivery and customer service are unmatched.",
      author: "Retailer in Hyderabad",
      role: "Wholesale Partner",
      rating: 5
    },
    {
      quote: "Their laminates are of exceptional quality. Highly recommended for anyone looking for reliable suppliers.",
      author: "Interior Designer",
      role: "Design Professional",
      rating: 5
    },
    {
      quote: "I love their commitment to sustainability and their wide range of designs. Truly impressive!",
      author: "Architect in Telangana",
      role: "Architecture Firm",
      rating: 5
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "5000+", label: "Projects Completed" },
    { number: "24/7", label: "Customer Support" }
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

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-amber-500/10"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + i * 12}%`
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
              OUR STORY
            </motion.h3>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Sri Ambica</span> Laminates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Trusted partner in quality laminate solutions, delivering excellence since our inception.
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

      {/* Main About Section with Image */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(251,191,36,0.1) 50px, rgba(251,191,36,0.1) 51px)`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafting <span className="text-amber-400">Excellence</span>,<br />
                Delivering <span className="text-amber-400">Quality</span>
              </motion.h2>

              <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  At Sri Ambica Laminates, we pride ourselves on offering top-notch laminate sheets tailored for
                  retailers. From a single sheet to bulk orders, our commitment to quality and customer satisfaction remains unparalleled.
                  Located in Hyderabad, we've built a reputation for reliability, fast delivery, and exceptional support.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We believe in creating long-lasting partnerships by providing value, innovation, and personalized
                  services that meet your business needs.
                </motion.p>
              </div>

              {/* Decorative Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-amber-500 to-orange-600 mt-8"
              />
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] group">
                {/* Decorative Frame */}
                <motion.div
                  className="absolute -top-6 -left-6 w-full h-full border-2 border-amber-500/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />

                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/A1.png"
                    alt="About Sri Ambica Laminates"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent" />
                </div>

                {/* Corner Accents */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-amber-500"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-amber-500"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Mission, Vision, Values */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-950 to-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              What <span className="text-amber-400">Drives Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Our core principles that guide every decision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800 hover:border-amber-500 transition-all duration-500 p-8">
                  {/* Background Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed font-light">
                    {value.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Corner Decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-amber-500/30 group-hover:border-amber-500 transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Dots Pattern */}
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

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our <span className="text-amber-400">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Real experiences from our valued partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 hover:border-amber-500 transition-all duration-500 p-8">
                  {/* Quote Icon */}
                  <motion.div
                    className="text-6xl text-amber-500/20 mb-4"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    "
                  </motion.div>

                  {/* Quote */}
                  <p className="text-gray-300 italic leading-relaxed mb-6 font-light">
                    {testimonial.quote}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                        className="text-amber-500 text-xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="border-t border-neutral-800 pt-4 mt-4">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Partner <br />
              <span className="text-amber-400">with Excellence?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
              Join hundreds of satisfied retailers and designers who trust Sri Ambica Laminates
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
                  Get In Touch
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  View Services
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

export default AboutUsPage;