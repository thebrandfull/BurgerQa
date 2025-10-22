'use client';

import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Restaurant } from '@/lib/data';

interface RestaurantCardProps {
  restaurant: Restaurant;
  rank?: number;
  onVote?: (id: string) => void;
  delay?: number;
}

export default function RestaurantCard({
  restaurant,
  rank,
  onVote,
  delay = 0,
}: RestaurantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="card-interactive group"
    >
      <Link href={`/restaurant/${restaurant.id}`}>
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          {rank && (
            <div className="absolute top-4 left-4 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl blur-xl opacity-75"></div>
                <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 px-4 py-2 rounded-2xl shadow-2xl">
                  <span className="font-display font-bold text-2xl text-dark-950">
                    #{rank}
                  </span>
                </div>
              </div>
            </div>
          )}

          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-brand-400 transition-colors">
                {restaurant.name}
              </h3>
              <div className="flex items-center text-dark-400 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {restaurant.location}
              </div>
            </div>
          </div>

          <p className="text-dark-300 text-sm mb-4 line-clamp-2">
            {restaurant.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {restaurant.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-dark-800 text-dark-300 text-xs rounded-full border border-dark-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-dark-800">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gold-500">
                <Star className="w-4 h-4 mr-1 fill-current" />
                <span className="font-semibold">{restaurant.rating}</span>
              </div>
              <div className="flex items-center text-brand-400">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="font-semibold">{restaurant.votes.toLocaleString()}</span>
                <span className="text-dark-500 text-sm ml-1">votes</span>
              </div>
            </div>
            <span className="text-dark-400 text-sm">{restaurant.priceRange}</span>
          </div>
        </div>
      </Link>

      {/* Vote Button */}
      {onVote && (
        <div className="px-6 pb-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              onVote(restaurant.id);
            }}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <TrendingUp className="w-5 h-5" />
            <span>Vote for {restaurant.name}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </motion.div>
  );
}
