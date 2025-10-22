'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-xl border-b border-dark-800 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-gold-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-brand-500 to-brand-600 p-2.5 rounded-xl shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl sm:text-2xl gradient-text">
                Burger Qatar
              </h1>
              <p className="text-xs text-dark-400 font-medium hidden sm:block">
                Doha's Best Burgers
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-dark-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/rankings"
              className="text-dark-300 hover:text-white transition-colors font-medium"
            >
              Top 10
            </Link>
            <Link
              href="/about"
              className="text-dark-300 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/rankings"
              className="btn-primary"
            >
              Vote Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900 border-t border-dark-800"
          >
            <div className="container-custom py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-dark-300 hover:text-white transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/rankings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-dark-300 hover:text-white transition-colors font-medium py-2"
              >
                Top 10
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-dark-300 hover:text-white transition-colors font-medium py-2"
              >
                About
              </Link>
              <Link
                href="/rankings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-primary text-center"
              >
                Vote Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
