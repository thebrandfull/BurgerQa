'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Star, TrendingUp, Award, Instagram, ChevronLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getRestaurantById, getRankedRestaurants } from '@/lib/data';
import { use } from 'react';

export default function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const restaurant = getRestaurantById(resolvedParams.id);
  const [hasVoted, setHasVoted] = useState(false);
  const [showVoteSuccess, setShowVoteSuccess] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(restaurant?.votes || 0);

  useEffect(() => {
    if (restaurant) {
      const saved = localStorage.getItem('votedRestaurants');
      if (saved) {
        const votedIds = JSON.parse(saved);
        setHasVoted(votedIds.includes(restaurant.id));
      }
    }
  }, [restaurant]);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Restaurant Not Found</h1>
          <Link href="/rankings" className="btn-primary">
            Back to Rankings
          </Link>
        </div>
      </div>
    );
  }

  const rankedRestaurants = getRankedRestaurants();
  const rank = rankedRestaurants.findIndex(r => r.id === restaurant.id) + 1;

  const handleVote = () => {
    if (hasVoted) return;

    setCurrentVotes(prev => prev + 1);
    setHasVoted(true);

    const saved = localStorage.getItem('votedRestaurants');
    const votedIds = saved ? JSON.parse(saved) : [];
    votedIds.push(restaurant.id);
    localStorage.setItem('votedRestaurants', JSON.stringify(votedIds));

    setShowVoteSuccess(true);
    setTimeout(() => setShowVoteSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation />

      {/* Success Toast */}
      {showVoteSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">Vote counted! Thank you!</span>
          </div>
        </motion.div>
      )}

      {/* Back Button */}
      <div className="pt-24 pb-8">
        <div className="container-custom">
          <Link
            href="/rankings"
            className="inline-flex items-center space-x-2 text-dark-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Rankings</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[500px]">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent"></div>

        {/* Rank Badge */}
        <div className="absolute top-8 left-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl blur-xl opacity-75"></div>
            <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 px-6 py-3 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-dark-950" />
                <span className="font-display font-bold text-2xl text-dark-950">
                  #{rank}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-display font-bold text-5xl mb-4">
                  {restaurant.name}
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center text-gold-500">
                    <Star className="w-6 h-6 mr-2 fill-current" />
                    <span className="font-bold text-2xl">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center text-brand-400">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    <span className="font-bold text-2xl">{currentVotes.toLocaleString()}</span>
                    <span className="text-dark-500 ml-2">votes</span>
                  </div>
                  <div className="text-dark-400 font-semibold text-lg">
                    {restaurant.priceRange}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {restaurant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-dark-800 text-dark-200 text-sm rounded-full border border-dark-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card p-8 mb-8">
                  <h2 className="font-display font-bold text-2xl mb-4">About</h2>
                  <p className="text-dark-300 text-lg leading-relaxed mb-6">
                    {restaurant.description}
                  </p>
                  <div className="pt-6 border-t border-dark-800">
                    <h3 className="font-display font-bold text-xl mb-3 text-brand-400">
                      Specialty Dish
                    </h3>
                    <p className="text-white text-lg font-semibold">
                      {restaurant.specialty}
                    </p>
                  </div>
                </div>

                {/* Vote Button */}
                {!hasVoted ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleVote}
                    className="w-full btn-primary flex items-center justify-center space-x-3 text-xl py-5"
                  >
                    <TrendingUp className="w-6 h-6" />
                    <span>Vote for {restaurant.name}</span>
                  </motion.button>
                ) : (
                  <div className="w-full flex items-center justify-center space-x-3 py-5 bg-green-500/10 border border-green-500/20 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span className="text-green-400 font-semibold text-xl">
                      You voted for this restaurant
                    </span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="card p-6 mb-6">
                  <h3 className="font-display font-bold text-xl mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-dark-400 text-sm mb-1">Location</div>
                        <div className="text-white font-medium">{restaurant.location}</div>
                        <div className="text-dark-300 text-sm">{restaurant.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-dark-400 text-sm mb-1">Phone</div>
                        <a
                          href={`tel:${restaurant.phone}`}
                          className="text-white font-medium hover:text-brand-400 transition-colors"
                        >
                          {restaurant.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-dark-400 text-sm mb-1">Hours</div>
                        <div className="text-white font-medium">{restaurant.hours}</div>
                      </div>
                    </div>

                    {restaurant.instagram && (
                      <div className="flex items-start space-x-3">
                        <Instagram className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-dark-400 text-sm mb-1">Instagram</div>
                          <a
                            href={`https://instagram.com/${restaurant.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-brand-400 transition-colors"
                          >
                            {restaurant.instagram}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card p-6 bg-gradient-to-br from-brand-500/10 to-gold-500/10 border-brand-500/20">
                  <h3 className="font-display font-bold text-xl mb-3 gradient-text">
                    Current Ranking
                  </h3>
                  <div className="text-5xl font-display font-bold gradient-text mb-2">
                    #{rank}
                  </div>
                  <p className="text-dark-300 text-sm">
                    Out of {rankedRestaurants.length} restaurants
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
