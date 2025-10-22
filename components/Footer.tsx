import Link from 'next/link';
import { Instagram, Mail, TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-gold-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-brand-500 to-brand-600 p-2.5 rounded-xl shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="font-display font-bold text-xl gradient-text">
                  Burger Qatar
                </h2>
              </div>
            </Link>
            <p className="text-dark-400 max-w-md mb-4">
              Your ultimate guide to the best burger restaurants in Doha.
              Vote for your favorites and discover new burger joints across Qatar.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/burgerqatar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@burgerqa.com"
                className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rankings"
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  Top 10 Rankings
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-dark-400">
              <li>Doha, Qatar</li>
              <li>hello@burgerqa.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Burger Qatar. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-dark-500 hover:text-dark-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-dark-500 hover:text-dark-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
