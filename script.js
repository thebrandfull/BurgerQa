// ===================================
// RESTAURANT DATA
// ===================================
let restaurants = [
    {
        id: 1,
        name: "The Butcher's Workshop",
        location: "The Pearl, Doha",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
        rating: 4.8,
        votes: 1247,
        description: "Premium artisan burgers with locally sourced ingredients"
    },
    {
        id: 2,
        name: "Burgerhood",
        location: "West Bay, Doha",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop",
        rating: 4.7,
        votes: 1156,
        description: "Classic American-style burgers with a twist"
    },
    {
        id: 3,
        name: "Black Angus Steakhouse",
        location: "Katara Cultural Village",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop",
        rating: 4.9,
        votes: 1089,
        description: "Luxury burgers made from premium Angus beef"
    },
    {
        id: 4,
        name: "Shake Shack Qatar",
        location: "Doha Festival City",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop",
        rating: 4.6,
        votes: 987,
        description: "New York's finest burger experience in Doha"
    },
    {
        id: 5,
        name: "Five Guys Doha",
        location: "Villaggio Mall",
        image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&h=600&fit=crop",
        rating: 4.5,
        votes: 856,
        description: "Fresh, customizable burgers with unlimited toppings"
    },
    {
        id: 6,
        name: "The Burger Joint",
        location: "Al Sadd, Doha",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=600&fit=crop",
        rating: 4.4,
        votes: 734,
        description: "Gourmet burgers in a cozy atmosphere"
    },
    {
        id: 7,
        name: "Johnny Rockets",
        location: "City Center Doha",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop",
        rating: 4.3,
        votes: 623,
        description: "Classic diner-style burgers and shakes"
    },
    {
        id: 8,
        name: "Elevation Burger",
        location: "Al Gharafa, Doha",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
        rating: 4.5,
        votes: 567,
        description: "Organic, grass-fed beef burgers"
    },
    {
        id: 9,
        name: "The Counter",
        location: "The Gate Mall",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=600&fit=crop",
        rating: 4.4,
        votes: 489,
        description: "Build your own custom burger masterpiece"
    },
    {
        id: 10,
        name: "Burgeri",
        location: "Souq Waqif, Doha",
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&h=600&fit=crop",
        rating: 4.6,
        votes: 412,
        description: "Traditional meets modern in this burger haven"
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let userVotes = JSON.parse(localStorage.getItem('burgerQatarVotes')) || {};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    // Sort restaurants by votes
    sortRestaurants();

    // Render all sections
    renderPodium();
    renderRestaurantGrid();
    updateStats();

    // Add scroll animations
    setupScrollAnimations();
}

// ===================================
// SORTING & FILTERING
// ===================================
function sortRestaurants() {
    restaurants.sort((a, b) => b.votes - a.votes);
}

function filterRisingStars() {
    const avgVotes = restaurants.reduce((sum, r) => sum + r.votes, 0) / restaurants.length;
    return restaurants.filter(r => r.votes < avgVotes && r.rating >= 4.5);
}

// ===================================
// RENDERING FUNCTIONS
// ===================================
function renderPodium() {
    const podium = document.getElementById('podium');
    const top3 = restaurants.slice(0, 3);

    // Reorder for podium display: 2nd, 1st, 3rd
    const podiumOrder = [top3[1], top3[0], top3[2]];

    podium.innerHTML = podiumOrder.map((restaurant, index) => {
        const actualRank = index === 0 ? 2 : index === 1 ? 1 : 3;
        return createPodiumCard(restaurant, actualRank);
    }).join('');
}

function createPodiumCard(restaurant, rank) {
    const hasVoted = userVotes[restaurant.id];
    const stars = '⭐'.repeat(Math.floor(restaurant.rating));

    return `
        <div class="podium-item" data-rank="${rank}">
            <div class="rank-badge">${rank}</div>
            <div class="podium-card">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="podium-image">
                <h3 class="podium-name">${restaurant.name}</h3>
                <p class="podium-location">📍 ${restaurant.location}</p>
                <div class="podium-rating">
                    <span class="stars">${stars}</span>
                    <span>${restaurant.rating}</span>
                </div>
                <div class="podium-votes">${restaurant.votes.toLocaleString()}</div>
                <div class="vote-label">votes</div>
            </div>
        </div>
    `;
}

function renderRestaurantGrid(filter = 'all') {
    const grid = document.getElementById('restaurantGrid');
    let displayRestaurants = [...restaurants];

    if (filter === 'rising') {
        displayRestaurants = filterRisingStars();
    }

    grid.innerHTML = displayRestaurants.map((restaurant, index) =>
        createRestaurantCard(restaurant, index + 1)
    ).join('');

    // Add click listeners to vote buttons
    addVoteListeners();
}

function createRestaurantCard(restaurant, rank) {
    const hasVoted = userVotes[restaurant.id];
    const stars = '⭐'.repeat(Math.floor(restaurant.rating));

    return `
        <div class="restaurant-card fade-in">
            <div class="card-image-wrapper">
                <div class="card-rank">#${rank}</div>
                <img src="${restaurant.image}" alt="${restaurant.name}" class="card-image">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-name">${restaurant.name}</h3>
                    <p class="card-location">📍 ${restaurant.location}</p>
                </div>
                <div class="card-rating">
                    <span class="stars">${stars}</span>
                    <span>${restaurant.rating}</span>
                </div>
                <p style="color: var(--medium-gray); margin-bottom: 1rem;">${restaurant.description}</p>
                <div class="card-stats">
                    <div>
                        <div class="card-votes">${restaurant.votes.toLocaleString()}</div>
                        <div class="vote-label">votes</div>
                    </div>
                    <button
                        class="vote-btn ${hasVoted ? 'voted' : ''}"
                        data-id="${restaurant.id}"
                        ${hasVoted ? 'disabled' : ''}
                    >
                        ${hasVoted ? '✓ Voted' : '👍 Vote'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===================================
// VOTING SYSTEM
// ===================================
function addVoteListeners() {
    const voteButtons = document.querySelectorAll('.vote-btn');
    voteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const restaurantId = parseInt(btn.dataset.id);
            handleVote(restaurantId, btn);
        });
    });
}

function handleVote(restaurantId, button) {
    // Check if already voted
    if (userVotes[restaurantId]) {
        return;
    }

    // Find restaurant and increment vote
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;

    restaurant.votes += 1;
    userVotes[restaurantId] = true;

    // Save to localStorage
    localStorage.setItem('burgerQatarVotes', JSON.stringify(userVotes));

    // Animate button
    button.classList.add('voted');
    button.innerHTML = '✓ Voted';
    button.disabled = true;

    // Update displays with animation
    animateVoteUpdate(() => {
        sortRestaurants();
        renderPodium();
        renderRestaurantGrid();
        updateStats();
    });
}

function animateVoteUpdate(callback) {
    // Add a nice transition effect
    const grid = document.getElementById('restaurantGrid');
    const podium = document.getElementById('podium');

    grid.style.opacity = '0.5';
    podium.style.opacity = '0.5';

    setTimeout(() => {
        callback();
        grid.style.opacity = '1';
        podium.style.opacity = '1';
    }, 300);
}

// ===================================
// STATISTICS
// ===================================
function updateStats() {
    const totalVotes = restaurants.reduce((sum, r) => sum + r.votes, 0);
    const totalRestaurants = restaurants.length;

    // Animate numbers
    animateNumber('totalVotes', totalVotes);
    animateNumber('totalRestaurants', totalRestaurants);
}

function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    const currentNumber = parseInt(element.textContent) || 0;
    const increment = Math.ceil((targetNumber - currentNumber) / 20);

    let current = currentNumber;
    const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
            current = targetNumber;
            clearInterval(timer);
        }
        element.textContent = current.toLocaleString();
    }, 30);
}

// ===================================
// EVENT LISTENERS
// ===================================
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Apply filter
            const filter = btn.dataset.filter || 'all';
            const sort = btn.dataset.sort;

            if (sort === 'votes') {
                sortRestaurants();
                renderRestaurantGrid('all');
            } else {
                renderRestaurantGrid(filter);
            }
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe restaurant cards
    document.querySelectorAll('.restaurant-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    renderPodium();
    renderRestaurantGrid();
}, 250));

// ===================================
// CONSOLE BRANDING
// ===================================
console.log('%c🍔 Burger Qatar', 'font-size: 24px; font-weight: bold; color: #8B1E3F;');
console.log('%cWelcome to Doha\'s Premier Burger Rankings', 'font-size: 14px; color: #E4A93D;');
console.log('%cBuilt with ❤️ for burger lovers', 'font-size: 12px; color: #666;');
