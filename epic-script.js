// ================================================================
// BURGER QATAR - EPIC RANKING SYSTEM
// Professional, transparent, un-gameable burger rankings
// ================================================================

// ===================================
// CONFIGURATION
// ===================================
const CONFIG = {
    MIN_VOTES_TO_RANK: 5, // Reduced from 30 for demo
    MAX_VOTES_PER_DAY: 20,
    MAX_VOTES_PER_RESTAURANT_PER_DAY: 1,
    RECENCY_HALF_LIFE_DAYS: 180,
    WILSON_CONFIDENCE: 1.96, // 95% confidence

    // Scoring weights
    WEIGHT_WILSON: 0.60,
    WEIGHT_PAIRWISE: 0.25,
    WEIGHT_EXPERT: 0.15,

    // ELO settings
    ELO_K_FACTOR: 32,
    ELO_INITIAL: 1500
};

// ===================================
// COMPREHENSIVE RESTAURANT DATABASE
// ===================================
const DEFAULT_RESTAURANTS = [
    {
        id: 1,
        nameEn: "Shake Shack",
        nameAr: "شيك شاك",
        area: "Doha Festival City",
        cuisine: "American",
        priceLevel: 2,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Shake_Shack_logo.svg/240px-Shake_Shack_logo.svg.png",
        rating: 4.6,
        instagram: "https://www.instagram.com/shakeshackqatar/",
        maps: "https://maps.app.goo.gl/MwVzxBQyHF8jF6fK8",
        phone: "+974 4035 4646",
        occasions: ["casual", "family"],
        badges: ["Hotel", "Halal"],
        hours: "10:00 - 23:00",
        votes: { up: 287, down: 13 },
        pairwiseWins: 45,
        pairwiseLosses: 12,
        expertScore: 85,
        createdAt: new Date('2024-01-15').getTime()
    },
    {
        id: 2,
        nameEn: "The Butcher's Shop & Grill",
        nameAr: "ذا بوتشرز شوب آند جريل",
        area: "West Bay",
        cuisine: "Gourmet",
        priceLevel: 3,
        logo: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop",
        rating: 4.8,
        instagram: "https://www.instagram.com/thebutchersdoha/",
        maps: "https://maps.app.goo.gl/vZJ9h8PQmhNg1oGM7",
        phone: "+974 4494 8888",
        occasions: ["business", "fine-dining"],
        badges: ["Hotel", "Alcohol"],
        hours: "12:00 - 00:00",
        votes: { up: 256, down: 8 },
        pairwiseWins: 52,
        pairwiseLosses: 8,
        expertScore: 92,
        createdAt: new Date('2024-01-10').getTime()
    },
    {
        id: 3,
        nameEn: "Five Guys",
        nameAr: "فايف غايز",
        area: "The Pearl",
        cuisine: "American",
        priceLevel: 2,
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Five_Guys_logo.svg/240px-Five_Guys_logo.svg.png",
        rating: 4.5,
        instagram: "https://www.instagram.com/fiveguysqatar/",
        maps: "https://maps.app.goo.gl/8xKvNYjP6eQw9PbV7",
        phone: "+974 4433 7766",
        occasions: ["casual", "family"],
        badges: ["Halal"],
        hours: "11:00 - 23:00",
        votes: { up: 192, down: 11 },
        pairwiseWins: 38,
        pairwiseLosses: 15,
        expertScore: 78,
        createdAt: new Date('2024-02-01').getTime()
    },
    {
        id: 4,
        nameEn: "Johnny Rockets",
        nameAr: "جوني روكتس",
        area: "Lusail",
        cuisine: "American",
        priceLevel: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Johnny_Rockets_logo.svg/240px-Johnny_Rockets_logo.svg.png",
        rating: 4.3,
        instagram: "https://www.instagram.com/johnnyrockets_qatar/",
        maps: "https://maps.app.goo.gl/xT6vWpNh8cKfUdVD6",
        phone: "+974 4483 0030",
        occasions: ["casual", "family", "late-night"],
        badges: ["Halal"],
        hours: "10:00 - 02:00",
        votes: { up: 145, down: 18 },
        pairwiseWins: 28,
        pairwiseLosses: 22,
        expertScore: 70,
        createdAt: new Date('2024-01-20').getTime()
    },
    {
        id: 5,
        nameEn: "Elevation Burger",
        nameAr: "إليفيشن برجر",
        area: "Msheireb",
        cuisine: "American",
        priceLevel: 2,
        logo: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=200&h=200&fit=crop",
        rating: 4.5,
        instagram: "https://www.instagram.com/elevationburger_qa/",
        maps: "https://maps.app.goo.gl/HqJz9pXfYN2kRwGt8",
        phone: "+974 4443 3311",
        occasions: ["casual", "business"],
        badges: ["Organic", "Halal"],
        hours: "11:00 - 22:00",
        votes: { up: 134, down: 9 },
        pairwiseWins: 32,
        pairwiseLosses: 14,
        expertScore: 82,
        createdAt: new Date('2024-02-10').getTime()
    },
    {
        id: 6,
        nameEn: "The Counter",
        nameAr: "ذا كاونتر",
        area: "Katara",
        cuisine: "Gourmet",
        priceLevel: 2,
        logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop",
        rating: 4.4,
        instagram: "https://www.instagram.com/thecounterqatar/",
        maps: "https://maps.app.goo.gl/Rv8yHpNt5mWfKdVt9",
        phone: "+974 4405 5500",
        occasions: ["casual", "family"],
        badges: ["Custom Build", "Halal"],
        hours: "12:00 - 23:00",
        votes: { up: 112, down: 12 },
        pairwiseWins: 26,
        pairwiseLosses: 18,
        expertScore: 75,
        createdAt: new Date('2024-01-25').getTime()
    },
    {
        id: 7,
        nameEn: "Burgeri",
        nameAr: "برجري",
        area: "Souq Waqif",
        cuisine: "Middle Eastern",
        priceLevel: 1,
        logo: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=200&h=200&fit=crop",
        rating: 4.6,
        instagram: "https://www.instagram.com/burgeriqatar/",
        maps: "https://maps.app.goo.gl/nX4wPqYj7cHfVxUA9",
        phone: "+974 4422 5566",
        occasions: ["casual", "late-night"],
        badges: ["Local Favorite", "Halal"],
        hours: "10:00 - 01:00",
        votes: { up: 98, down: 7 },
        pairwiseWins: 24,
        pairwiseLosses: 16,
        expertScore: 80,
        createdAt: new Date('2024-02-05').getTime()
    },
    {
        id: 8,
        nameEn: "Black Angus Steakhouse",
        nameAr: "بلاك أنجس ستيك هاوس",
        area: "West Bay",
        cuisine: "Gourmet",
        priceLevel: 3,
        logo: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop",
        rating: 4.6,
        instagram: "https://www.instagram.com/blackangusqatar/",
        maps: "https://maps.app.goo.gl/dXj5ZhQkYW3nKr4R6",
        phone: "+974 4408 0338",
        occasions: ["business", "fine-dining"],
        badges: ["Hotel", "Premium Beef"],
        hours: "12:00 - 00:00",
        votes: { up: 142, down: 11 },
        pairwiseWins: 35,
        pairwiseLosses: 13,
        expertScore: 88,
        createdAt: new Date('2024-01-18').getTime()
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
class RankingSystem {
    constructor() {
        this.restaurants = this.loadRestaurants();
        this.userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
        this.votesThisDay = JSON.parse(localStorage.getItem('votesThisDay') || '[]');
        this.pairwiseComparisons = JSON.parse(localStorage.getItem('pairwiseComparisons') || '[]');
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.currentFilters = {};

        this.cleanupOldVotes();
    }

    loadRestaurants() {
        const stored = localStorage.getItem('restaurants');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error('Error loading restaurants:', e);
            }
        }
        // Initialize with defaults
        localStorage.setItem('restaurants', JSON.stringify(DEFAULT_RESTAURANTS));
        return JSON.parse(JSON.stringify(DEFAULT_RESTAURANTS));
    }

    saveRestaurants() {
        localStorage.setItem('restaurants', JSON.stringify(this.restaurants));
    }

    cleanupOldVotes() {
        const today = new Date().toDateString();
        const votesDay = localStorage.getItem('votesDay');

        if (votesDay !== today) {
            this.votesThisDay = [];
            localStorage.setItem('votesDay', today);
            localStorage.setItem('votesThisDay', '[]');
        }
    }

    // ===================================
    // WILSON SCORE ALGORITHM
    // ===================================
    calculateWilsonScore(positive, n, z = CONFIG.WILSON_CONFIDENCE) {
        if (n === 0) return 0;

        const p = positive / n;
        const denom = 1 + (z * z) / n;
        const center = p + (z * z) / (2 * n);
        const margin = z * Math.sqrt((p * (1 - p) + (z * z) / (4 * n)) / n);

        return (center - margin) / denom;
    }

    // ===================================
    // ELO / PAIRWISE RATING
    // ===================================
    calculateEloRating(restaurant) {
        const wins = restaurant.pairwiseWins || 0;
        const losses = restaurant.pairwiseLosses || 0;
        const total = wins + losses;

        if (total === 0) return 0.5;

        // Simplified Elo-style rating normalized to 0-1
        const winRate = wins / total;
        return Math.min(1, Math.max(0, winRate));
    }

    // ===================================
    // RECENCY FACTOR
    // ===================================
    calculateRecencyFactor(createdAt) {
        const now = Date.now();
        const ageDays = (now - createdAt) / (1000 * 60 * 60 * 24);
        const halfLife = CONFIG.RECENCY_HALF_LIFE_DAYS;

        return Math.pow(0.5, ageDays / halfLife);
    }

    // ===================================
    // FINAL SCORE CALCULATION
    // ===================================
    calculateFinalScore(restaurant) {
        const totalVotes = restaurant.votes.up + restaurant.votes.down;

        // Don't rank if below minimum votes
        if (totalVotes < CONFIG.MIN_VOTES_TO_RANK) {
            return null;
        }

        // Wilson score (0-1)
        const wilson = this.calculateWilsonScore(restaurant.votes.up, totalVotes);

        // Pairwise rating (0-1)
        const pairwise = this.calculateEloRating(restaurant);

        // Expert score (0-1)
        const expert = (restaurant.expertScore || 0) / 100;

        // Recency factor
        const recency = this.calculateRecencyFactor(restaurant.createdAt);

        // Trust weight (simplified - would be more complex in production)
        const trustWeight = 1.0;

        // Final score (0-100)
        const score = 100 * (
            CONFIG.WEIGHT_WILSON * wilson +
            CONFIG.WEIGHT_PAIRWISE * pairwise +
            CONFIG.WEIGHT_EXPERT * expert
        ) * recency * trustWeight;

        return {
            score: Math.round(score * 10) / 10,
            wilson: Math.round(wilson * 100),
            pairwise: Math.round(pairwise * 100),
            expert: restaurant.expertScore || 0,
            recency: Math.round(recency * 100),
            totalVotes
        };
    }

    // ===================================
    // RANKING SYSTEM
    // ===================================
    getRankedRestaurants(filters = {}) {
        let restaurants = [...this.restaurants];

        // Apply filters
        if (filters.area && filters.area !== '') {
            restaurants = restaurants.filter(r => r.area === filters.area);
        }
        if (filters.cuisine && filters.cuisine !== '') {
            restaurants = restaurants.filter(r => r.cuisine === filters.cuisine);
        }
        if (filters.priceLevel && filters.priceLevel !== '') {
            restaurants = restaurants.filter(r => r.priceLevel === parseInt(filters.priceLevel));
        }
        if (filters.occasion && filters.occasion !== '') {
            restaurants = restaurants.filter(r => r.occasions.includes(filters.occasion));
        }

        // Calculate scores and add ranking info
        const ranked = restaurants
            .map(restaurant => {
                const scoreData = this.calculateFinalScore(restaurant);
                return {
                    ...restaurant,
                    scoreData,
                    hasMinVotes: scoreData !== null
                };
            })
            .filter(r => r.hasMinVotes)
            .sort((a, b) => b.scoreData.score - a.scoreData.score)
            .map((restaurant, index) => ({
                ...restaurant,
                rank: index + 1
            }));

        return ranked;
    }

    // ===================================
    // VOTING SYSTEM
    // ===================================
    canVote(restaurantId) {
        // Check daily vote limit
        if (this.votesThisDay.length >= CONFIG.MAX_VOTES_PER_DAY) {
            return { allowed: false, reason: 'daily_limit' };
        }

        // Check if already voted for this restaurant today
        const votedToday = this.votesThisDay.filter(v => v.restaurantId === restaurantId);
        if (votedToday.length >= CONFIG.MAX_VOTES_PER_RESTAURANT_PER_DAY) {
            return { allowed: false, reason: 'restaurant_limit' };
        }

        // Check if already voted (ever)
        if (this.userVotes[restaurantId]) {
            return { allowed: false, reason: 'already_voted' };
        }

        return { allowed: true };
    }

    vote(restaurantId, value) {
        const canVoteResult = this.canVote(restaurantId);
        if (!canVoteResult.allowed) {
            return { success: false, reason: canVoteResult.reason };
        }

        const restaurant = this.restaurants.find(r => r.id === restaurantId);
        if (!restaurant) {
            return { success: false, reason: 'not_found' };
        }

        // Record vote
        if (value === 1) {
            restaurant.votes.up++;
        } else {
            restaurant.votes.down++;
        }

        // Track vote
        this.userVotes[restaurantId] = { value, timestamp: Date.now() };
        this.votesThisDay.push({
            restaurantId,
            timestamp: Date.now()
        });

        // Save state
        localStorage.setItem('userVotes', JSON.stringify(this.userVotes));
        localStorage.setItem('votesThisDay', JSON.stringify(this.votesThisDay));
        this.saveRestaurants();

        return { success: true };
    }

    // ===================================
    // PAIRWISE COMPARISON
    // ===================================
    recordPairwiseComparison(winnerId, loserId) {
        const winner = this.restaurants.find(r => r.id === winnerId);
        const loser = this.restaurants.find(r => r.id === loserId);

        if (!winner || !loser) return { success: false };

        winner.pairwiseWins = (winner.pairwiseWins || 0) + 1;
        loser.pairwiseLosses = (loser.pairwiseLosses || 0) + 1;

        this.pairwiseComparisons.push({
            winnerId,
            loserId,
            timestamp: Date.now()
        });

        localStorage.setItem('pairwiseComparisons', JSON.stringify(this.pairwiseComparisons));
        this.saveRestaurants();

        return { success: true };
    }

    getRandomPair() {
        const eligible = this.restaurants.filter(r => {
            const totalVotes = r.votes.up + r.votes.down;
            return totalVotes >= CONFIG.MIN_VOTES_TO_RANK;
        });

        if (eligible.length < 2) {
            return null;
        }

        const idx1 = Math.floor(Math.random() * eligible.length);
        let idx2 = Math.floor(Math.random() * eligible.length);
        while (idx2 === idx1) {
            idx2 = Math.floor(Math.random() * eligible.length);
        }

        return [eligible[idx1], eligible[idx2]];
    }

    // ===================================
    // STATISTICS
    // ===================================
    getStats() {
        const ranked = this.getRankedRestaurants();
        const totalVotes = this.restaurants.reduce((sum, r) => sum + r.votes.up + r.votes.down, 0);
        const avgScore = ranked.length > 0
            ? Math.round(ranked.reduce((sum, r) => sum + r.scoreData.score, 0) / ranked.length)
            : 0;

        return {
            totalRestaurants: ranked.length,
            totalVotes,
            avgScore
        };
    }
}

// ===================================
// UI CONTROLLER
// ===================================
class UIController {
    constructor(rankingSystem) {
        this.system = rankingSystem;
        this.currentView = 'list';
    }

    init() {
        this.applyLanguage();
        this.renderAll();
        this.setupEventListeners();
        this.renderCompareWidget();
    }

    applyLanguage() {
        const lang = this.system.currentLanguage;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update all translatable elements
        document.querySelectorAll('[data-en]').forEach(el => {
            const key = lang === 'ar' ? 'data-ar' : 'data-en';
            el.textContent = el.getAttribute(key);
        });

        // Update language toggle
        document.getElementById('langText').textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    renderAll() {
        this.renderStats();
        this.renderPodium();
        this.renderRankingsList();
    }

    renderStats() {
        const stats = this.system.getStats();
        document.getElementById('totalRestaurants').textContent = stats.totalRestaurants;
        document.getElementById('totalVotes').textContent = stats.totalVotes.toLocaleString();
        document.getElementById('avgScore').textContent = stats.avgScore;
    }

    renderPodium() {
        const ranked = this.system.getRankedRestaurants(this.system.currentFilters);
        const top3 = ranked.slice(0, 3);
        const podium = document.getElementById('podium');

        if (top3.length === 0) {
            podium.innerHTML = '<p style="text-align: center; color: #999;">Not enough votes yet</p>';
            return;
        }

        podium.innerHTML = top3.map((restaurant, index) => {
            const rank = index + 1;
            const name = this.system.currentLanguage === 'ar' ? restaurant.nameAr : restaurant.nameEn;

            return `
                <div class="podium-card" data-rank="${rank}">
                    <div class="podium-rank" data-rank="${rank}">${rank}</div>
                    <img src="${restaurant.logo}" alt="${name}" class="podium-logo">
                    <div class="podium-name">${name}</div>
                    <div class="podium-score">${restaurant.scoreData.score}</div>
                    <div class="podium-votes">${restaurant.scoreData.totalVotes} votes</div>
                </div>
            `;
        }).join('');
    }

    renderRankingsList() {
        const ranked = this.system.getRankedRestaurants(this.system.currentFilters);
        const container = document.getElementById('rankingsList');

        if (ranked.length === 0) {
            container.innerHTML = '<p style="text-align: center; padding: 3rem; color: #999;">No restaurants match your filters</p>';
            return;
        }

        container.innerHTML = ranked.map(restaurant => {
            const name = this.system.currentLanguage === 'ar' ? restaurant.nameAr : restaurant.nameEn;
            const hasVoted = this.system.userVotes[restaurant.id];
            const canVote = this.system.canVote(restaurant.id);

            return `
                <div class="ranking-item slide-up" data-position="${restaurant.rank}">
                    <div class="ranking-number">#${restaurant.rank}</div>
                    <img src="${restaurant.logo}" alt="${name}" class="ranking-logo">
                    <div class="ranking-info">
                        <div class="ranking-name">${name}</div>
                        <div class="ranking-meta">
                            <span>📍 ${restaurant.area}</span>
                            <span>🍽️ ${restaurant.cuisine}</span>
                            <span>${'QAR'.repeat(restaurant.priceLevel)}</span>
                            <span>⭐ ${restaurant.rating}</span>
                        </div>
                        <div class="ranking-meta">
                            ${restaurant.badges.map(badge => `
                                <span class="ranking-badge">${badge}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="ranking-score-section">
                        <div class="ranking-score">${restaurant.scoreData.score}</div>
                        <div class="ranking-score-label">Score</div>
                    </div>
                    <div class="ranking-actions">
                        <button
                            class="vote-btn ${hasVoted ? 'voted' : ''}"
                            ${!canVote.allowed ? 'disabled' : ''}
                            onclick="ui.handleVote(${restaurant.id}, 1)"
                        >
                            ${hasVoted ? '✓ Voted' : '👍 Vote'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderCompareWidget() {
        const pair = this.system.getRandomPair();
        const container = document.getElementById('compareWidget');

        if (!pair) {
            container.innerHTML = '<p style="text-align: center; color: #999;">Need more votes to enable comparisons</p>';
            return;
        }

        const [restaurant1, restaurant2] = pair;
        const name1 = this.system.currentLanguage === 'ar' ? restaurant1.nameAr : restaurant1.nameEn;
        const name2 = this.system.currentLanguage === 'ar' ? restaurant2.nameAr : restaurant2.nameEn;

        container.innerHTML = `
            <div class="compare-options">
                <div class="compare-option" onclick="ui.handlePairwiseVote(${restaurant1.id}, ${restaurant2.id})">
                    <img src="${restaurant1.logo}" alt="${name1}" class="compare-logo">
                    <div class="compare-name">${name1}</div>
                </div>
                <div class="compare-vs">VS</div>
                <div class="compare-option" onclick="ui.handlePairwiseVote(${restaurant2.id}, ${restaurant1.id})">
                    <img src="${restaurant2.logo}" alt="${name2}" class="compare-logo">
                    <div class="compare-name">${name2}</div>
                </div>
            </div>
        `;
    }

    handleVote(restaurantId, value) {
        const result = this.system.vote(restaurantId, value);

        if (!result.success) {
            const messages = {
                daily_limit: 'You\'ve reached your daily voting limit (20 votes)',
                restaurant_limit: 'You\'ve already voted for this restaurant today',
                already_voted: 'You\'ve already voted for this restaurant'
            };
            alert(messages[result.reason] || 'Cannot vote');
            return;
        }

        this.renderAll();
    }

    handlePairwiseVote(winnerId, loserId) {
        this.system.recordPairwiseComparison(winnerId, loserId);
        this.renderAll();
        this.renderCompareWidget();
    }

    setupEventListeners() {
        // Scroll effect for nav
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
}

// ===================================
// GLOBAL FUNCTIONS
// ===================================
let rankingSystem;
let ui;

document.addEventListener('DOMContentLoaded', () => {
    rankingSystem = new RankingSystem();
    ui = new UIController(rankingSystem);
    ui.init();
});

function toggleLanguage() {
    rankingSystem.currentLanguage = rankingSystem.currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', rankingSystem.currentLanguage);
    ui.applyLanguage();
    ui.renderAll();
    ui.renderCompareWidget();
}

function applyFilters() {
    rankingSystem.currentFilters = {
        area: document.getElementById('filterArea').value,
        cuisine: document.getElementById('filterCuisine').value,
        priceLevel: document.getElementById('filterPrice').value,
        occasion: document.getElementById('filterOccasion').value
    };
    ui.renderPodium();
    ui.renderRankingsList();
}

function resetFilters() {
    document.getElementById('filterArea').value = '';
    document.getElementById('filterCuisine').value = '';
    document.getElementById('filterPrice').value = '';
    document.getElementById('filterOccasion').value = '';
    applyFilters();
}

function setView(view) {
    ui.currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.view-btn').classList.add('active');
    // View toggle would change grid/list layout - simplified for now
}

// ===================================
// CONSOLE BRANDING
// ===================================
console.log('%c🍔 Burger Qatar - Epic Ranking System', 'font-size: 20px; font-weight: bold; color: #8E1537;');
console.log('%cTransparent. Math-backed. No BS.', 'font-size: 14px; color: #666;');
console.log('%cWilson Score + Pairwise + Recency Factor', 'font-size: 12px; color: #999;');
