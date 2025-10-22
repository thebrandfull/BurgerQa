// ===================================
// REAL DOHA BURGER RESTAURANTS DATA
// ===================================
let restaurants = [
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
    },
    {
        id: 4,
        name: "Chez Sushi",
        location: "The Pearl, Doha",
        logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop",
        rating: 4.7,
        votes: 1645,
        instagram: "https://www.instagram.com/chezsushi.qa/",
        maps: "https://maps.app.goo.gl/NmP8x7yVQYHmKzQE7",
        phone: "+974 4403 3636"
    },
    {
        id: 5,
        name: "Black Angus Steakhouse",
        location: "Katara Cultural Village",
        logo: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop",
        rating: 4.6,
        votes: 1423,
        instagram: "https://www.instagram.com/blackangusqatar/",
        maps: "https://maps.app.goo.gl/dXj5ZhQkYW3nKr4R6",
        phone: "+974 4408 0338"
    },
    {
        id: 6,
        name: "The Burger House",
        location: "Al Sadd, Doha",
        logo: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&h=200&fit=crop",
        rating: 4.4,
        votes: 1187,
        instagram: "https://www.instagram.com/burgerhouseqa/",
        maps: "https://maps.app.goo.gl/zY2kPQmR4eHfTxUA8",
        phone: "+974 4442 3322"
    },
    {
        id: 7,
        name: "Johnny Rockets",
        location: "City Center Doha",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Johnny_Rockets_logo.svg/240px-Johnny_Rockets_logo.svg.png",
        rating: 4.3,
        votes: 967,
        instagram: "https://www.instagram.com/johnnyrockets_qatar/",
        maps: "https://maps.app.goo.gl/xT6vWpNh8cKfUdVD6",
        phone: "+974 4483 0030"
    },
    {
        id: 8,
        name: "Elevation Burger",
        location: "Al Gharafa, Doha",
        logo: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=200&h=200&fit=crop",
        rating: 4.5,
        votes: 834,
        instagram: "https://www.instagram.com/elevationburger_qa/",
        maps: "https://maps.app.goo.gl/HqJz9pXfYN2kRwGt8",
        phone: "+974 4443 3311"
    },
    {
        id: 9,
        name: "The Counter",
        location: "The Gate Mall, Doha",
        logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop",
        rating: 4.4,
        votes: 712,
        instagram: "https://www.instagram.com/thecounterqatar/",
        maps: "https://maps.app.goo.gl/Rv8yHpNt5mWfKdVt9",
        phone: "+974 4405 5500"
    },
    {
        id: 10,
        name: "Burgeri",
        location: "Souq Waqif, Doha",
        logo: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=200&h=200&fit=crop",
        rating: 4.6,
        votes: 589,
        instagram: "https://www.instagram.com/burgeriqatar/",
        maps: "https://maps.app.goo.gl/nX4wPqYj7cHfVxUA9",
        phone: "+974 4422 5566"
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

    localStorage.setItem('burgerQatarVotes', JSON.stringify(userVotes));

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
