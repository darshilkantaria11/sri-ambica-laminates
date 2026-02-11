"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  // { name: "Why us?", href: "/why-us" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 py-12 border-t border-neutral-800 ci">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-wider text-amber-400"
          >
            SRI AMBICA LAMINATES
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-gray-400"

          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.span
                  whileHover={{ color: "#fbbf24" }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t uppercase border-neutral-800 text-center text-gray-500 text-sm"
        >
          © {currentYear} SRI AMBICA LAMINATES. Crafted with excellence.
        </motion.div>
      </div>
    </footer>
  );
}
