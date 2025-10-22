# 🍔 Burger Qatar - Premium Burger Rankings

A world-class, community-driven platform for ranking the best burger restaurants in Doha, Qatar. Built with pure HTML, CSS, and JavaScript for seamless GitHub Pages deployment.

## ✨ Features

### 🏆 Interactive Rankings
- **Top 3 Podium Display** - Showcase the best burger spots with an elegant podium design
- **Complete Top 10 List** - Full rankings with detailed restaurant cards
- **Real-time Voting System** - Vote for your favorites and see rankings update instantly
- **Rising Stars Filter** - Discover up-and-coming burger joints

### 🎨 Premium Design
- **Professional UI/UX** - Designed to match top branding agencies
- **Smooth Animations** - Elegant transitions and scroll effects
- **Fully Responsive** - Perfect on desktop, tablet, and mobile
- **Modern Color Palette** - Rich burgundy, golden yellow, and sophisticated neutrals

### 💾 Smart Features
- **LocalStorage Persistence** - Your votes are saved automatically
- **No Backend Required** - 100% client-side functionality
- **Fast & Lightweight** - Optimized performance
- **SEO Friendly** - Semantic HTML structure

## 🚀 Quick Start

### For GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add index.html styles.css script.js
   git commit -m "Add Burger Qatar website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

3. **Access Your Site:**
   - Your site will be live at: `https://yourusername.github.io/repository-name`
   - Or use your custom domain: `burgerqa.com`

### For Custom Domain (burgerqa.com)

1. **Add CNAME file:**
   ```bash
   echo "burgerqa.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS:**
   Add these DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Enable HTTPS:**
   - In repository settings > Pages
   - Check "Enforce HTTPS"

## 📁 Project Structure

```
BurgerQa/
├── index.html       # Main HTML structure
├── styles.css       # Premium styling & animations
├── script.js        # Voting system & interactivity
└── README.md        # Documentation
```

## 🎯 How It Works

### Voting System
- Each visitor can vote once per restaurant
- Votes are stored in browser's localStorage
- Rankings update in real-time based on votes
- Vote counts persist across sessions

### Restaurant Data
The `restaurants` array in `script.js` contains:
- Restaurant name
- Location in Doha
- High-quality images (from Unsplash)
- Rating (out of 5 stars)
- Vote count
- Description

### Customization

**To add/edit restaurants:**
Edit the `restaurants` array in `script.js`:
```javascript
{
    id: 11,
    name: "Your Restaurant Name",
    location: "Location in Doha",
    image: "https://your-image-url.com/image.jpg",
    rating: 4.7,
    votes: 0,
    description: "Your description here"
}
```

**To change colors:**
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #8B1E3F;        /* Main brand color */
    --secondary: #E4A93D;      /* Accent color */
    --accent: #2E7D32;         /* Success/voted color */
}
```

## 🎨 Design System

### Color Palette
- **Primary:** Rich Burgundy (#8B1E3F) - Represents premium beef
- **Secondary:** Golden Yellow (#E4A93D) - Represents buns & quality
- **Accent:** Forest Green (#2E7D32) - Represents freshness
- **Neutrals:** Charcoal, warm grays, crisp white

### Typography
- **Display Font:** Georgia serif for elegance
- **Body Font:** System font stack for performance
- **Hierarchy:** Clear size scale with generous spacing

### Components
- Smooth hover effects
- Elegant card designs with depth
- Responsive grid layouts
- Animated transitions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **No framework dependencies** - Pure vanilla JavaScript
- **Optimized images** - WebP with fallbacks
- **Minimal HTTP requests** - Single HTML/CSS/JS file
- **Fast load times** - Under 100KB total size

## 🔒 Privacy

- No tracking or analytics
- No cookies
- Only localStorage for vote persistence
- No external data collection

## 📄 License

Free to use for the Burger Qatar project.

## 🙏 Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: Unicode emoji
- Design & Development: Premium custom build

## 📧 Support

For issues or questions about the website, please contact the repository owner.

---

**Built with ❤️ for burger lovers in Doha, Qatar**

🍔 Enjoy discovering the best burgers in town!
