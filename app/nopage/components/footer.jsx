"use client"
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Footer() {
  return (
      <footer className="bg-neutral-950 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-wider text-amber-400"
            >
              SRI AMBICA LAMINATES
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-8 text-gray-400"
            >
              {['About', 'Collections', 'Contact', 'Support'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: '#fbbf24' }}
                  className="hover:text-amber-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t uppercase border-neutral-800 text-center text-gray-500 text-sm"
          >
            © 2026 SRIAMBICALaminates. Crafted with excellence.
          </motion.div>
        </div>
      </footer>
  );
}
