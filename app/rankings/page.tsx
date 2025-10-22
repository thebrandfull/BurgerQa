'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Filter, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RestaurantCard from '@/components/RestaurantCard';
import { Restaurant, getRankedRestaurants } from '@/lib/data';

export default function RankingsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(getRankedRestaurants());
  const [votedFor, setVotedFor] = useState<Set<string>>(new Set());
  const [showVoteSuccess, setShowVoteSuccess] = useState(false);

  useEffect(() => {
    // Load voted restaurants from localStorage
    const saved = localStorage.getItem('votedRestaurants');
    if (saved) {
      setVotedFor(new Set(JSON.parse(saved)));
    }
  }, []);

  const handleVote = (id: string) => {
    if (votedFor.has(id)) {
      return; // Already voted
    }

    // Update votes
    const updated = restaurants.map(r =>
      r.id === id ? { ...r, votes: r.votes + 1 } : r
    ).sort((a, b) => b.votes - a.votes);

    setRestaurants(updated);

    // Save vote
    const newVoted = new Set(votedFor).add(id);
    setVotedFor(newVoted);
    localStorage.setItem('votedRestaurants', JSON.stringify(Array.from(newVoted)));

    // Show success message
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-brand-400" />
              <span className="text-brand-400 font-semibold text-sm">
                Official Rankings
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl mb-6">
              Top <span className="gradient-text">10 Burger</span> Restaurants
            </h1>
            <p className="text-dark-300 text-xl max-w-3xl mx-auto">
              Doha's finest burger joints, ranked by community votes.
              Vote for your favorites to help them climb the rankings!
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="font-display font-bold text-2xl gradient-text mb-1">
                  {restaurants.length}
                </div>
                <div className="text-dark-400 text-sm">Restaurants</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl gradient-text mb-1">
                  {restaurants.reduce((acc, r) => acc + r.votes, 0).toLocaleString()}
                </div>
                <div className="text-dark-400 text-sm">Total Votes</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl gradient-text mb-1">
                  {(restaurants.reduce((acc, r) => acc + r.rating, 0) / restaurants.length).toFixed(1)}★
                </div>
                <div className="text-dark-400 text-sm">Avg Rating</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl gradient-text mb-1">
                  {votedFor.size}
                </div>
                <div className="text-dark-400 text-sm">Your Votes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rankings Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <RestaurantCard
                  restaurant={restaurant}
                  rank={index + 1}
                  onVote={votedFor.has(restaurant.id) ? undefined : handleVote}
                />
                {votedFor.has(restaurant.id) && (
                  <div className="mt-4 px-6">
                    <div className="flex items-center justify-center space-x-2 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">
                        You voted for this restaurant
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vote Again Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-12 text-center"
          >
            <TrendingUp className="w-16 h-16 text-brand-500 mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Your Vote <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-dark-300 text-lg mb-6 max-w-2xl mx-auto">
              Help your favorite burger joints reach the top!
              Each vote helps restaurants gain visibility and recognition in Doha's competitive food scene.
            </p>
            <div className="text-dark-400 text-sm">
              Rankings update in real-time based on community votes
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
