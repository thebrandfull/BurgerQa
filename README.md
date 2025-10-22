# Burger Qatar

![Burger Qatar](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

**The ultimate platform for discovering and ranking the best burger restaurants in Doha, Qatar.**

Visit: [burgerqa.com](https://burgerqa.com)

## Features

- **Community-Driven Rankings**: Vote for your favorite burger restaurants
- **Top 10 List**: Real-time rankings based on community votes
- **Restaurant Details**: Comprehensive information about each burger joint
- **Responsive Design**: Beautiful UI that works on all devices
- **Real-Time Updates**: Votes update rankings instantly
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thebrandfull/BurgerQa.git
cd BurgerQa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
burger-qatar/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── rankings/          # Rankings page
│   ├── restaurant/[id]/   # Dynamic restaurant pages
│   ├── about/            # About page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── RestaurantCard.tsx
├── lib/                   # Utilities and data
│   └── data.ts           # Restaurant data
└── public/               # Static assets
```

## Features in Detail

### Voting System
- One vote per restaurant per user
- Votes stored in browser local storage
- Real-time ranking updates
- Visual feedback on vote submission

### Restaurant Profiles
- High-quality images
- Detailed descriptions
- Contact information
- Specialties and tags
- Rating and vote counts
- Price ranges

### Rankings
- Top 10 list with real-time updates
- Visual ranking indicators
- Filterable and sortable (coming soon)
- Statistics dashboard

## Customization

### Adding Restaurants

Edit `lib/data.ts` to add or modify restaurants:

```typescript
{
  id: 'unique-id',
  name: 'Restaurant Name',
  location: 'Area in Doha',
  description: 'Description...',
  image: 'image-url',
  votes: 0,
  rating: 4.5,
  priceRange: 'QAR 30-60',
  specialty: 'Signature Dish',
  tags: ['Tag1', 'Tag2'],
  address: 'Full Address',
  phone: '+974 XXXX XXXX',
  hours: 'Opening Hours',
  instagram: '@handle'
}
```

### Styling

The design system is configured in `tailwind.config.ts`. Customize:
- Brand colors
- Typography
- Spacing
- Animations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Future Enhancements

- [ ] User authentication
- [ ] Restaurant submissions
- [ ] Advanced filtering
- [ ] Review system
- [ ] Mobile app
- [ ] Admin dashboard
- [ ] Search functionality
- [ ] Map integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

- Website: [burgerqa.com](https://burgerqa.com)
- Email: hello@burgerqa.com
- Instagram: [@burgerqatar](https://instagram.com/burgerqatar)

---

Built with ❤️ for burger lovers in Doha, Qatar
