export interface Restaurant {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  votes: number;
  rating: number;
  priceRange: string;
  specialty: string;
  tags: string[];
  address: string;
  phone: string;
  hours: string;
  instagram?: string;
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'The Burgery',
    location: 'West Bay',
    description: 'Premium artisanal burgers crafted with imported Angus beef and fresh local ingredients. Known for their signature truffle burger and house-made sauces.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    votes: 2847,
    rating: 4.8,
    priceRange: 'QAR 45-80',
    specialty: 'Truffle Mushroom Burger',
    tags: ['Premium', 'Angus Beef', 'Craft Burgers'],
    address: 'West Bay, Doha',
    phone: '+974 4444 5555',
    hours: '11:00 AM - 11:00 PM',
    instagram: '@theburgery_qa'
  },
  {
    id: '2',
    name: 'Burger Boutique',
    location: 'The Pearl',
    description: 'Gourmet burger experience with a focus on quality ingredients and innovative flavor combinations. Famous for their wagyu beef burgers.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
    votes: 2635,
    rating: 4.7,
    priceRange: 'QAR 50-90',
    specialty: 'Wagyu Supreme Burger',
    tags: ['Gourmet', 'Wagyu', 'Luxury'],
    address: 'Porto Arabia, The Pearl',
    phone: '+974 4444 6666',
    hours: '12:00 PM - 12:00 AM',
    instagram: '@burgerboutique_doha'
  },
  {
    id: '3',
    name: 'Smokey Patty',
    location: 'Katara',
    description: 'Smoked burgers with a unique BBQ twist. All patties are slow-smoked for 6 hours to achieve the perfect flavor.',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80',
    votes: 2421,
    rating: 4.6,
    priceRange: 'QAR 40-70',
    specialty: 'Hickory Smoked Double Patty',
    tags: ['BBQ', 'Smoked', 'American Style'],
    address: 'Katara Cultural Village',
    phone: '+974 4444 7777',
    hours: '1:00 PM - 11:00 PM',
    instagram: '@smokeypatty_qatar'
  },
  {
    id: '4',
    name: 'The Flame Burger Co.',
    location: 'Lusail',
    description: 'Contemporary burger joint featuring flame-grilled patties and creative toppings. Their signature sauce is a local favorite.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80',
    votes: 2198,
    rating: 4.5,
    priceRange: 'QAR 35-65',
    specialty: 'Flame-Grilled Classic',
    tags: ['Flame-Grilled', 'Contemporary', 'Sauce Master'],
    address: 'Lusail Boulevard',
    phone: '+974 4444 8888',
    hours: '11:00 AM - 12:00 AM',
    instagram: '@flameburger_qa'
  },
  {
    id: '5',
    name: 'Urban Grill House',
    location: 'Al Sadd',
    description: 'Modern urban setting with a focus on fresh, locally-sourced ingredients. Known for their crispy chicken burgers and vegetarian options.',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80',
    votes: 2076,
    rating: 4.5,
    priceRange: 'QAR 30-60',
    specialty: 'Crispy Chicken Deluxe',
    tags: ['Urban', 'Chicken', 'Vegetarian Options'],
    address: 'Al Sadd Street',
    phone: '+974 4444 9999',
    hours: '10:00 AM - 11:00 PM',
    instagram: '@urbangrillqa'
  },
  {
    id: '6',
    name: 'The Patty Project',
    location: 'Old Town',
    description: 'Experimental burger concepts with rotating weekly specials. A favorite among food enthusiasts looking for unique combinations.',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80',
    votes: 1954,
    rating: 4.4,
    priceRange: 'QAR 38-68',
    specialty: 'Weekly Special Burger',
    tags: ['Experimental', 'Creative', 'Weekly Specials'],
    address: 'Souq Waqif Area',
    phone: '+974 4444 0000',
    hours: '12:00 PM - 10:00 PM',
    instagram: '@pattyproject_doha'
  },
  {
    id: '7',
    name: 'Classic American Diner',
    location: 'Al Waab',
    description: 'Traditional American-style diner serving classic burgers with a nostalgic atmosphere. Home of the famous double cheeseburger.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&q=80',
    votes: 1832,
    rating: 4.3,
    priceRange: 'QAR 28-55',
    specialty: 'Double Cheeseburger',
    tags: ['Classic', 'American', 'Diner Style'],
    address: 'Al Waab Street',
    phone: '+974 4444 1111',
    hours: '9:00 AM - 11:00 PM',
    instagram: '@classicamerican_qa'
  },
  {
    id: '8',
    name: 'Burger Lab',
    location: 'Education City',
    description: 'Scientific approach to burger making with precision-cooked patties and custom blend beef. Popular with the student crowd.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80',
    votes: 1721,
    rating: 4.3,
    priceRange: 'QAR 32-58',
    specialty: 'Lab Experiment Burger',
    tags: ['Innovative', 'Custom Blend', 'Student Favorite'],
    address: 'Education City',
    phone: '+974 4444 2222',
    hours: '11:00 AM - 10:00 PM',
    instagram: '@burgerlab_qatar'
  },
  {
    id: '9',
    name: 'Coastal Bites',
    location: 'Corniche',
    description: 'Seafood-inspired burgers with ocean views. Their fish burger and shrimp burger are must-tries for seafood lovers.',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80',
    votes: 1645,
    rating: 4.2,
    priceRange: 'QAR 35-65',
    specialty: 'Grilled Fish Burger',
    tags: ['Seafood', 'Ocean View', 'Fresh'],
    address: 'Doha Corniche',
    phone: '+974 4444 3333',
    hours: '12:00 PM - 11:00 PM',
    instagram: '@coastalbites_qa'
  },
  {
    id: '10',
    name: 'The Burger Station',
    location: 'Villaggio Mall',
    description: 'Fast-casual burger concept with consistently good quality. Perfect for a quick, satisfying meal while shopping.',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80',
    votes: 1587,
    rating: 4.2,
    priceRange: 'QAR 25-50',
    specialty: 'Station Special Burger',
    tags: ['Fast Casual', 'Mall Food', 'Quick Service'],
    address: 'Villaggio Mall',
    phone: '+974 4444 4444',
    hours: '10:00 AM - 10:00 PM',
    instagram: '@burgerstation_qa'
  }
];

export function getRankedRestaurants(): Restaurant[] {
  return [...restaurants].sort((a, b) => b.votes - a.votes);
}

export function getTopRestaurants(count: number = 3): Restaurant[] {
  return getRankedRestaurants().slice(0, count);
}

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find(r => r.id === id);
}
