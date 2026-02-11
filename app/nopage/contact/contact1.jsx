"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ContactUsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const headerScale = useTransform(scrollY, [0, 200], [1, 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our team",
      action: "Available 24/7",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick responses guaranteed",
      action: "Message Now",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Our showroom in Hyderabad",
      action: "Get Directions",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: "✉️",
      title: "Email",
      description: "Detailed inquiries welcome",
      action: "Send Email",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const team = [
    {
      name: "Meet Patel",
      phone: "+91 7016079345",
      whatsapp: "917016079345",
      image: "/Ow2.png",
       role: "Operations Head"
    },
    {
      name: "Yug Patel",
      phone: "+91 6354531450",
      whatsapp: "916354531450",
      image: "/Ow1.png",
      role: "Sales Manager"
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

        {/* Animated Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-amber-500/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`
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
              GET IN TOUCH
            </motion.h3>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Contact</span> Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We'd love to hear from you! Reach out to us anytime.
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
            <span className="text-sm tracking-wider font-light">CONNECT</span>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Methods Section */}
    

      {/* Main Contact Section */}
      <section className="py-32 bg-black relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(251,191,36,0.1) 50px, rgba(251,191,36,0.1) 51px)`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Team Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Meet <span className="text-amber-400">Our Team</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 font-light">
                  Have questions or need assistance? Feel free to contact us using the information below.
                </p>
              </motion.div>

              <div className="space-y-6">
                {team.map((member, index) => (
                  <motion.a
                    key={index}
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    className="block group"
                  >
                    <div className="relative bg-gradient-to-br from-neutral-900 to-black border-2 border-neutral-800 hover:border-amber-500 transition-all duration-500 p-6 overflow-hidden">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-amber-500/5 transition-all duration-500" />

                      <div className="relative flex items-center gap-6">
                        {/* Avatar */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-500/50 group-hover:border-amber-500 transition-colors">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                          {/* Online Indicator */}
                          <motion.div
                            className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                            {member.name}
                          </h3>
                          <p className="text-amber-500 text-sm mb-2 font-light">
                            {member.role}
                          </p>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                            <span className="text-sm">📱</span>
                            <span className="text-sm font-light">{member.phone}</span>
                          </div>
                        </div>

                        {/* WhatsApp Icon */}
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ duration: 0.3 }}
                          className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity"
                        >
                          💬
                        </motion.div>
                      </div>

                      {/* Click to WhatsApp Text */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="mt-4 text-center text-sm text-amber-500 font-light"
                      >
                        Click to message on WhatsApp →
                      </motion.div>

                      {/* Corner Accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-amber-500/30 group-hover:border-amber-500 transition-colors"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 p-8 bg-gradient-to-br from-neutral-900 to-black border border-amber-500/30"
              >
                <h3 className="text-2xl font-bold mb-6 text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Business Hours
                </h3>
                <div className="space-y-3 text-gray-300 font-light">
                  <div className="flex justify-between items-center">
                    <span>Monday - Saturday</span>
                    <span className="text-amber-500 font-semibold">11AM TO 9PM</span>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-amber-500 font-semibold">24/7</span>
                  </div> */}
                  <div className="pt-4 border-t border-neutral-800">
                    <p className="text-sm text-gray-500">
                      📍 Location: Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="sticky top-24">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden border-2 border-amber-500/30 hover:border-amber-500 transition-colors duration-500"
                >
                  {/* Corner Decorations */}
                  <motion.div
                    className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-amber-500 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-amber-500 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  />

                  {/* Map Label */}
                  <motion.div
                    className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 bg-black/80 backdrop-blur-sm px-6 py-3 border border-amber-500/50"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="text-amber-400 font-bold text-sm tracking-wider">
                      📍 VISIT OUR SHOWROOM
                    </p>
                  </motion.div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.718457070704!2d78.45498427540292!3d17.377275483508164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9784e325fe5d%3A0x484ef2522d985b96!2ssri%20ambica%20laminate!5e0!3m2!1sen!2sin!4v1737008357441!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>

                {/* Get Directions Button */}
                <motion.a
                  href="https://maps.app.goo.gl/your-maps-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block mt-6"
                >
                  <div className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                    Get Directions on Google Maps →
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
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
              Ready to Start <br />
              <span className="text-amber-400">Your Project?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
              Our team is standing by to help you find the perfect laminate solution
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/catalogue">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  View Catalogue
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Our Services
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

export default ContactUsPage;