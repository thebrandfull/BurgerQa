# Burger Qatar - Deployment Guide

## 🚀 Quick Start

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Push to GitHub** (Already done!)
   - Repository: `thebrandfull/BurgerQa`
   - Branch: `claude/burger-qatar-website-011CUN1WP3QS7RKW8qCxiKBE`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `thebrandfull/BurgerQa`
   - Select branch: `claude/burger-qatar-website-011CUN1WP3QS7RKW8qCxiKBE`

3. **Configure Domain**
   - Add custom domain: `burgerqa.com`
   - Update DNS records as instructed
   - Vercel handles SSL automatically

4. **Deploy**
   - Click "Deploy"
   - Done! Your site is live

**Vercel Configuration:**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node Version: 18.x or higher

### Option 2: Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - New site from Git
   - Select GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**

### Option 3: Custom VPS/Server

For deploying on your own server:

1. **Install Node.js 18+**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Clone Repository**
```bash
git clone https://github.com/thebrandfull/BurgerQa.git
cd BurgerQa
git checkout claude/burger-qatar-website-011CUN1WP3QS7RKW8qCxiKBE
```

3. **Install & Build**
```bash
npm install
npm run build
```

4. **Run with PM2**
```bash
npm install -g pm2
pm2 start npm --name "burger-qatar" -- start
pm2 save
pm2 startup
```

5. **Setup Nginx**
```nginx
server {
    listen 80;
    server_name burgerqa.com www.burgerqa.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **SSL with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d burgerqa.com -d www.burgerqa.com
```

## 🎨 Customization

### Adding New Restaurants

Edit `lib/data.ts`:

```typescript
{
  id: '11',
  name: 'Your Restaurant',
  location: 'Location in Doha',
  description: 'Description here...',
  image: 'https://images.unsplash.com/...',
  votes: 0,
  rating: 4.5,
  priceRange: 'QAR 30-60',
  specialty: 'Signature Dish',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  address: 'Full Address',
  phone: '+974 XXXX XXXX',
  hours: 'Opening Hours',
  instagram: '@instagram_handle'
}
```

### Customizing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    500: '#FF7A4D', // Main brand color
    600: '#E65A2B', // Hover state
  },
  // ... other colors
}
```

### Changing Content

- **Homepage**: Edit `app/page.tsx`
- **Rankings**: Edit `app/rankings/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Navigation**: Edit `components/Navigation.tsx`
- **Footer**: Edit `components/Footer.tsx`

## 📊 Features Overview

### 1. Homepage
- Animated hero section with gradient background
- Top 3 featured restaurants
- Statistics dashboard
- Features section
- Call-to-action sections

### 2. Rankings Page
- Full Top 10 list
- Real-time voting system
- Vote tracking (localStorage)
- Success notifications
- Statistics bar

### 3. Restaurant Details
- Individual pages for each restaurant
- Full contact information
- Large hero images
- Voting functionality
- Rank badges

### 4. Voting System
- One vote per restaurant per browser
- Persistent via localStorage
- Real-time ranking updates
- Visual feedback

## 🔧 Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Burger Qatar
```

For production:

```env
NEXT_PUBLIC_SITE_URL=https://burgerqa.com
NEXT_PUBLIC_SITE_NAME=Burger Qatar
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

The site is optimized for:
- Fast initial load
- Smooth animations
- Responsive images
- Efficient bundle size
- SEO optimization

### Lighthouse Scores (Expected)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## 🛠️ Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
PORT=3001 npm run dev
```

### Votes Not Persisting
- Check browser localStorage is enabled
- Clear cache and try again

## 📞 Support

For issues or questions:
- Email: hello@burgerqa.com
- GitHub Issues: [Create an issue](https://github.com/thebrandfull/BurgerQa/issues)

## 🎉 What's Next?

Future enhancements to consider:
- User authentication system
- Restaurant owner submissions
- Advanced filtering (cuisine, price, location)
- Review system with comments
- Photo uploads
- Mobile app (React Native)
- Admin dashboard
- Search functionality
- Google Maps integration
- Social media sharing
- Email notifications

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
