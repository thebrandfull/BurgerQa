'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, ChevronRight, Star, Flame } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RestaurantCard from '@/components/RestaurantCard';
import { getTopRestaurants } from '@/lib/data';

export default function Home() {
  const topThree = getTopRestaurants(3);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1920&q=80"
            alt="Delicious burgers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/95 via-dark-950/90 to-dark-950"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gold-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full mb-8">
              <Flame className="w-4 h-4 text-brand-400" />
              <span className="text-brand-400 font-semibold text-sm">
                Qatar's #1 Burger Ranking Platform
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            Discover Doha's
            <br />
            <span className="gradient-text">Best Burger Joints</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-dark-300 mb-12 max-w-2xl mx-auto"
          >
            Vote for your favorite burger restaurants and help others discover
            the most delicious burgers in Qatar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link href="/rankings" className="btn-primary flex items-center space-x-2 text-lg">
              <span>View Top 10</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/rankings" className="btn-secondary flex items-center space-x-2 text-lg">
              <TrendingUp className="w-5 h-5" />
              <span>Vote Now</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20"
          >
            <div className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-2">
                10+
              </div>
              <div className="text-dark-400 text-sm sm:text-base">
                Restaurants
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-2">
                20K+
              </div>
              <div className="text-dark-400 text-sm sm:text-base">
                Total Votes
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-2">
                4.5★
              </div>
              <div className="text-dark-400 text-sm sm:text-base">
                Avg Rating
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-dark-700 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-brand-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Top 3 Section */}
      <section className="section-padding bg-dark-950 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 font-semibold text-sm">
                Top Rated
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              The <span className="gradient-text">Top 3</span> Champions
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              These burger joints have earned their place at the top through
              exceptional quality and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topThree.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                rank={index + 1}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/rankings" className="btn-primary inline-flex items-center space-x-2">
              <span>View Full Top 10 List</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Why <span className="gradient-text">Burger Qatar?</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              We make it easy to find and support the best burger restaurants in Doha
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Real-Time Rankings',
                description: 'Watch as your votes impact the rankings in real-time. Every voice matters.',
              },
              {
                icon: Users,
                title: 'Community Driven',
                description: 'Rankings are based on votes from real burger lovers across Doha.',
              },
              {
                icon: Star,
                title: 'Detailed Reviews',
                description: 'Get comprehensive information about each restaurant before you visit.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-gold-500 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-brand-500 to-brand-600 p-4 rounded-2xl">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-gold-500/10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-12 text-center"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Ready to Find Your
              <br />
              <span className="gradient-text">Perfect Burger?</span>
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of burger enthusiasts in Qatar and start voting today
            </p>
            <Link href="/rankings" className="btn-primary inline-flex items-center space-x-2 text-lg">
              <span>Explore Top 10 Rankings</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
