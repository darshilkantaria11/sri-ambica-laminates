"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for scroll animations
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  const navbarBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    // { name: "Why us?", href: "/why-us" },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;700&display=swap');
      `}} />

      <motion.header
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className="fixed top-0 left-0 right-0 z-30"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        {/* Desktop Navbar */}
        <motion.div
          className={`hidden md:flex items-center justify-between px-8 lg:px-12 py-4 transition-all duration-500 ${
            isScrolled
              ? "bg-black/95 backdrop-blur-xl border-b border-amber-500/30 shadow-2xl shadow-amber-500/10"
              : "bg-gradient-to-r from-orange-900/80 via-amber-900/70 to-orange-800/80 backdrop-blur-md border-b border-amber-500/20"
          }`}
        >
          {/* Logo Section with Animation */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={linkVariants}
            >
              <motion.div
                className="relative"
                animate={{
                  filter: isScrolled
                    ? "drop-shadow(0 0 8px rgba(251, 191, 36, 0.3))"
                    : "drop-shadow(0 0 0px rgba(251, 191, 36, 0))",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image src={Logo} alt="Logo" width={80} height={80} />
              </motion.div>
            </motion.div>
          </Link>

          {/* Navigation Links with Animated Underline */}
          <nav className="flex space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.div key={link.href} variants={linkVariants}>
                <Link href={link.href}>
                  <motion.div
                    className="relative px-4 py-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.p
                      className={`relative z-30 font-semibold text-base lg:text-lg transition-colors duration-300 ci ${
                        pathname === link.href
                          ? "text-amber-300"
                          : "text-white group-hover:text-amber-300"
                      }`}
                    >
                      {link.name}
                    </motion.p>

                    {/* Animated Underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: pathname === link.href ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Button with Premium Animation */}
          <motion.div variants={linkVariants}>
            <Link href="/contact">
              <motion.button
                className="relative px-6 lg:px-8 py-3 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                
                {/* Inner Background */}
                <div className="absolute inset-[2px] bg-black rounded-full transition-all duration-300 group-hover:bg-transparent" />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />

                <span className="relative z-30 font-bold text-amber-300 group-hover:text-white transition-colors duration-300">
                  Contact Us
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Navbar */}
        <motion.div
          className={`md:hidden flex items-center justify-between px-4 py-4 transition-all duration-500 ${
            isScrolled
              ? "bg-black/95 backdrop-blur-xl border-b border-amber-500/30"
              : "bg-gradient-to-r from-orange-900/85 via-amber-900/75 to-orange-800/85 backdrop-blur-md border-b border-amber-500/20"
          }`}
        >
          {/* Logo Section */}
          <Link href="/">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={Logo} alt="Logo" width={70} height={70} />
            </motion.div>
          </Link>

          {/* Right Side: Contact Button + Hamburger */}
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <motion.button
                className="relative px-4 py-2 text-sm overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                <div className="absolute inset-[2px] bg-black rounded-full group-hover:bg-transparent transition-all duration-300" />
                <span className="relative z-30 font-semibold text-amber-300 group-hover:text-white transition-colors duration-300">
                  Contact
                </span>
              </motion.button>
            </Link>

            {/* Animated Hamburger Menu */}
            <motion.button
              className="relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-white origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 9 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={
                    isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -9 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Dropdown Menu with Framer Motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-amber-500/30"
            >
              <div className="flex flex-col items-center space-y-1 py-6 px-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={mobileItemVariants}
                    className="w-full"
                  >
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.div
                        className="relative w-full py-4 px-6 group"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Active Indicator */}
                        {pathname === link.href && (
                          <motion.div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-r-full"
                            layoutId="activeIndicator"
                          />
                        )}

                        <motion.p
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            pathname === link.href
                              ? "text-amber-400"
                              : "text-gray-300 group-hover:text-amber-400"
                          }`}
                        >
                          {link.name}
                        </motion.p>

                        {/* Hover Background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-lg"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </Link>

                    {/* Separator */}
                    {index < navLinks.length - 1 && (
                      <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.1 }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Decorative Element */}
                <motion.div
                  className="w-full mt-6 pt-6 border-t border-amber-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex justify-center gap-6">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-amber-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Glow Effect on Scroll */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.header>
    </>
  );
}