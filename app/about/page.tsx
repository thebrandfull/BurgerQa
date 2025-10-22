'use client';

import { motion } from 'framer-motion';
import { Target, Heart, TrendingUp, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display font-bold text-5xl sm:text-6xl mb-6">
              About <span className="gradient-text">Burger Qatar</span>
            </h1>
            <p className="text-dark-300 text-xl max-w-3xl mx-auto">
              We're on a mission to help you discover the best burger restaurants
              in Doha, one vote at a time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To create a transparent, community-driven platform that celebrates the best burger restaurants in Qatar and helps food lovers make informed dining decisions.',
              },
              {
                icon: Heart,
                title: 'Our Passion',
                description: 'We believe great burgers bring people together. Our platform is built by burger enthusiasts, for burger enthusiasts across Doha.',
              },
              {
                icon: Users,
                title: 'Our Community',
                description: 'Rankings are determined entirely by community votes. Every voice matters, and together we showcase Doha\'s best burger experiences.',
              },
              {
                icon: TrendingUp,
                title: 'Our Impact',
                description: 'We help outstanding burger restaurants gain the recognition they deserve while guiding diners to unforgettable meals.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-gold-500 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-brand-500 to-brand-600 p-3 rounded-2xl">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-12 text-center"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
              Start voting today and help shape the future of Doha's burger scene.
              Your opinion matters!
            </p>
            <Link href="/rankings" className="btn-primary inline-flex items-center space-x-2">
              <span>View Rankings & Vote</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
