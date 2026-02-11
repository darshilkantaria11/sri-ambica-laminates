"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreloaderParticle = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Create letter particles
  const createParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
      delay: Math.random() * 0.5,
    }));
  };

  const particles = createParticles(30);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            scale: 0,
            rotate: 180,
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-neutral-950 to-neutral-900 z-50 overflow-hidden"
        >
          {/* Radial Gradient Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Particle Field Background */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-px h-px bg-amber-500/40 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, particle.x, particle.x * 2],
                  y: [0, particle.y, particle.y * 2],
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4">
            {/* SRI AMBICA - Stagger Letter Reveal */}
            <div className="mb-4 overflow-hidden">
              <motion.div
                className="text-6xl md:text-8xl lg:text-9xl font-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {["S", "R", "I"].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ 
                      y: 200, 
                      opacity: 0, 
                      rotateX: 90,
                      scale: 0 
                    }}
                    animate={{ 
                      y: 0, 
                      opacity: 1, 
                      rotateX: 0,
                      scale: 1 
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    style={{
                      background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 60px rgba(251, 191, 36, 0.5)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className="inline-block mx-3" />
                {["A", "M", "B", "I", "C", "A"].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ 
                      y: 200, 
                      opacity: 0, 
                      rotateX: 90,
                      scale: 0 
                    }}
                    animate={{ 
                      y: 0, 
                      opacity: 1, 
                      rotateX: 0,
                      scale: 1 
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    style={{
                      background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 60px rgba(251, 191, 36, 0.5)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Divider Line */}
            <motion.div
              className="relative w-full max-w-2xl mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              
              {/* Center Diamond */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-500 rotate-45"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              />
            </motion.div>

            {/* LAMINATES - Wave Reveal */}
            <div className="overflow-hidden">
              <motion.div
                className="text-3xl md:text-5xl font-light tracking-[0.5em]"
                style={{ fontFamily: "'Archivo', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {["L", "A", "M", "I", "N", "A", "T", "E", "S"].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block text-amber-400"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.5 + i * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Animated Dots Loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex justify-center items-center gap-3 mt-12"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Circular Progress Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <svg width="600" height="600" className="opacity-30">
                <motion.circle
                  cx="300"
                  cy="300"
                  r="280"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="1760"
                  initial={{ strokeDashoffset: 1760 }}
                  animate={{ 
                    strokeDashoffset: 0,
                    rotate: 360 
                  }}
                  transition={{
                    strokeDashoffset: {
                      duration: 3,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  }}
                  style={{ transformOrigin: "center" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center"
          >
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-gray-500 text-xs tracking-[0.4em] font-light mb-2">
                PREMIUM SURFACES
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500" />
                <div className="w-1 h-1 bg-amber-500 rounded-full" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Google Fonts */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Archivo:wght@300;400;600;700&display=swap');
            `
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreloaderParticle;