// ===================================
// RESTAURANT DATA - SYNCED WITH ADMIN
// ===================================
function getDefaultRestaurants() {
    return [
        {
            id: 1,
            name: "Shake Shack",
            location: "Doha Festival City, Doha",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Shake_Shack_logo.svg/240px-Shake_Shack_logo.svg.png",
            rating: 4.6,
            votes: 2847,
            instagram: "https://www.instagram.com/shakeshackqatar/",
            maps: "https://maps.app.goo.gl/MwVzxBQyHF8jF6fK8",
            phone: "+974 4035 4646"
        },
        {
            id: 2,
            name: "The Butcher's Shop & Grill",
            location: "Four Seasons Hotel, Doha",
            logo: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop",
            rating: 4.8,
            votes: 2156,
            instagram: "https://www.instagram.com/thebutchersdoha/",
            maps: "https://maps.app.goo.gl/vZJ9h8PQmhNg1oGM7",
            phone: "+974 4494 8888"
        },
        {
            id: 3,
            name: "Five Guys",
            location: "Villaggio Mall, Doha",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Five_Guys_logo.svg/240px-Five_Guys_logo.svg.png",
            rating: 4.5,
            votes: 1923,
            instagram: "https://www.instagram.com/fiveguysqatar/",
            maps: "https://maps.app.goo.gl/8xKvNYjP6eQw9PbV7",
            phone: "+974 4433 7766"
        }
    ];
}

// Load restaurants from localStorage (managed by admin panel)
function loadRestaurants() {
    const stored = localStorage.getItem('restaurants');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error loading restaurants:', e);
            return getDefaultRestaurants();
        }
    }
    // First time - save defaults
    const defaults = getDefaultRestaurants();
    localStorage.setItem('restaurants', JSON.stringify(defaults));
    return defaults;
}

let restaurants = loadRestaurants();

// ===================================
// STATE MANAGEMENT
// ===================================
let userVotes = JSON.parse(localStorage.getItem('burgerQatarVotes')) || {};

// Save restaurants back to localStorage
function saveRestaurants() {
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    sortRestaurants();
    renderPodiumCompact();
    renderLeaderboard();
    updateStats();
    setupEventListeners();
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
// RENDERING - COMPACT PODIUM
// ===================================
function renderPodiumCompact() {
    const podium = document.getElementById('podiumCompact');
    const top3 = restaurants.slice(0, 3);

    const medals = ['🥇', '🥈', '🥉'];

    podium.innerHTML = top3.map((restaurant, index) => {
        return `
            <div class="podium-item-compact" data-rank="${index + 1}">
                <span class="medal">${medals[index]}</span>
                <div class="podium-restaurant-name">${restaurant.name}</div>
                <div class="podium-votes-compact">${restaurant.votes.toLocaleString()}</div>
                <div class="podium-label">votes</div>
            </div>
        `;
    }).join('');
}

// ===================================
// RENDERING - LEADERBOARD
// ===================================
function renderLeaderboard(filter = 'all') {
    const leaderboard = document.getElementById('leaderboard');
    let displayRestaurants = [...restaurants];

    if (filter === 'rising') {
        displayRestaurants = filterRisingStars();
    }

    leaderboard.innerHTML = displayRestaurants.map((restaurant, index) =>
        createLeaderboardRow(restaurant, index + 1)
    ).join('');

    addVoteListeners();
}

function createLeaderboardRow(restaurant, position) {
    const hasVoted = userVotes[restaurant.id];
    const stars = '⭐'.repeat(Math.floor(restaurant.rating));

    return `
        <div class="leaderboard-row" data-position="${position}">
            <div class="rank-number">#${position}</div>

            <img src="${restaurant.logo}" alt="${restaurant.name}" class="restaurant-logo">

            <div class="restaurant-info">
                <div class="restaurant-name">${restaurant.name}</div>
                <div class="restaurant-location">📍 ${restaurant.location}</div>
                <div class="rating-stars">${stars} ${restaurant.rating}</div>
                <div class="restaurant-links">
                    <a href="${restaurant.maps}" target="_blank" class="social-link">
                        📍 Maps
                    </a>
                    <a href="${restaurant.instagram}" target="_blank" class="social-link">
                        📷 Instagram
                    </a>
                    <a href="tel:${restaurant.phone}" class="social-link">
                        📞 Call
                    </a>
                </div>
            </div>

            <div class="vote-section">
                <div class="vote-count">${restaurant.votes.toLocaleString()}</div>
                <div class="vote-count-label">Votes</div>
            </div>

            <div class="vote-section">
                <button
                    class="vote-button ${hasVoted ? 'voted' : ''}"
                    data-id="${restaurant.id}"
                    ${hasVoted ? 'disabled' : ''}
                >
                    ${hasVoted ? '✓ Voted' : '👍 Vote'}
                </button>
            </div>
        </div>
    `;
}

// ===================================
// VOTING SYSTEM
// ===================================
function addVoteListeners() {
    const voteButtons = document.querySelectorAll('.vote-button');
    voteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const restaurantId = parseInt(btn.dataset.id);
            handleVote(restaurantId, btn);
        });
    });
}

function handleVote(restaurantId, button) {
    if (userVotes[restaurantId]) {
        return;
    }

    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;

    restaurant.votes += 1;
    userVotes[restaurantId] = true;

    // Save both votes and updated restaurant data
    localStorage.setItem('burgerQatarVotes', JSON.stringify(userVotes));
    saveRestaurants();

    button.classList.add('voted');
    button.innerHTML = '✓ Voted';
    button.disabled = true;

    animateUpdate(() => {
        sortRestaurants();
        renderPodiumCompact();
        renderLeaderboard();
        updateStats();
    });
}

function animateUpdate(callback) {
    const leaderboard = document.getElementById('leaderboard');
    const podium = document.getElementById('podiumCompact');

    leaderboard.style.opacity = '0.5';
    podium.style.opacity = '0.5';

    setTimeout(() => {
        callback();
        leaderboard.style.opacity = '1';
        podium.style.opacity = '1';
    }, 200);
}

// ===================================
// STATISTICS
// ===================================
function updateStats() {
    const totalVotes = restaurants.reduce((sum, r) => sum + r.votes, 0);
    const totalRestaurants = restaurants.length;

    animateNumber('totalVotes', totalVotes);
    animateNumber('totalRestaurants', totalRestaurants);
}

function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    const currentNumber = parseInt(element.textContent) || 0;
    const increment = Math.ceil((targetNumber - currentNumber) / 15);

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
    const filterButtons = document.querySelectorAll('.tab-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter || 'all';
            const sort = btn.dataset.sort;

            if (sort === 'votes') {
                sortRestaurants();
                renderLeaderboard('all');
            } else {
                renderLeaderboard(filter);
            }
        });
    });
}

// ===================================
// CONSOLE BRANDING
// ===================================
console.log('%c🍔 Burger Qatar', 'font-size: 24px; font-weight: bold; color: #FF6B6B;');
console.log('%cDoha\'s Burger Leaderboard', 'font-size: 14px; color: #666;');
