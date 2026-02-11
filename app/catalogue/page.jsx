"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const catalogues = [
  {
    name: "PRIONEX",
    color: "#43544a",
    image: "/Prionex.png",
    flipbookUrl: "https://heyzine.com/flip-book/915996e551.html",
  },
  {
    name: "PAXORA",
    color: "#e06846",
    image: "/Paxora.png",
    flipbookUrl: "https://heyzine.com/flip-book/4a7ef3fef5.html",
  },
  {
    name: "PLAINX",
    color: "#cbeef7",
    image: "/Plainx.png",
    flipbookUrl: "https://heyzine.com/flip-book/a9fe6cde5f.html",
  },
  {
    name: "RANGREZ",
    color: "#c51b2c",
    image: "/Rangrez.png",
    flipbookUrl: "https://heyzine.com/flip-book/c501b8ed8f.html",
  },
  {
    name: "PLEXA",
    color: "#a57865",
    image: "/Plexa.png",
    flipbookUrl: "https://heyzine.com/flip-book/e6f42d36a0.html",
  },
  {
    name: "WOODMA",
    color: "#cfe2de",
    image: "/Woodma.png",
    flipbookUrl: "https://heyzine.com/flip-book/ff77ff06cd.html",
  },
];

export default function CataloguePage() {
  const [selectedCatalogue, setSelectedCatalogue] = useState(null);

  return (
    <section className="min-h-screen bg-black py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our <span className="text-amber-400">Catalogue</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {catalogues.map((catalogue, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-64 md:h-80 cursor-pointer overflow-hidden"
              onClick={() => setSelectedCatalogue(catalogue)}
            >
              <Image
                src={catalogue.image}
                alt={catalogue.name}
                fill
                className="object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, ${catalogue.color}99 100%)`,
                }}
              />

              <div className="absolute bottom-0 p-6">
                <h2 className="text-3xl font-bold">
                  {catalogue.name}
                </h2>
                <p className="text-amber-300">View Flipbook →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCatalogue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col"
            onClick={() => setSelectedCatalogue(null)}
          >
            <div className="flex justify-between items-center p-6 border-b border-amber-500/30">
              <h2 className="text-2xl text-amber-400">
                {selectedCatalogue.name} Catalogue
              </h2>
              <button
                className="text-white text-xl"
                onClick={() => setSelectedCatalogue(null)}
              >
                ✕
              </button>
            </div>

            <div
              className="flex-1 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={selectedCatalogue.flipbookUrl}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
      `}} />
    </section>
  );
}
