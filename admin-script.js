// ===================================
// ADMIN AUTHENTICATION
// =================================== */
const ADMIN_PASSWORD = 'burgerqatar2025';
let isAuthenticated = localStorage.getItem('adminAuth') === 'true';

// Check authentication on load
window.addEventListener('DOMContentLoaded', () => {
    if (isAuthenticated) {
        showDashboard();
    } else {
        document.getElementById('loginScreen').style.display = 'flex';
    }
});

// Login form handler
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;

    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('adminAuth', 'true');
        isAuthenticated = true;
        showDashboard();
    } else {
        alert('Incorrect password!');
    }
});

function showDashboard() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    loadDashboard();
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminAuth');
        isAuthenticated = false;
        location.reload();
    }
}

// ===================================
// RESTAURANT DATA MANAGEMENT
// ===================================
function getRestaurants() {
    const data = localStorage.getItem('restaurants');
    return data ? JSON.parse(data) : getDefaultRestaurants();
}

function saveRestaurants(restaurants) {
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
}

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

// ===================================
// DASHBOARD
// ===================================
function loadDashboard() {
    updateStats();
    renderRestaurantList();
    setupFormHandler();
}

function updateStats() {
    const restaurants = getRestaurants();
    const totalRestaurants = restaurants.length;
    const totalVotes = restaurants.reduce((sum, r) => sum + r.votes, 0);
    const avgRating = restaurants.length > 0
        ? (restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length).toFixed(1)
        : 0;
    const topRestaurant = restaurants.length > 0
        ? restaurants.sort((a, b) => b.votes - a.votes)[0].name
        : '-';

    document.getElementById('totalRestaurantsAdmin').textContent = totalRestaurants;
    document.getElementById('totalVotesAdmin').textContent = totalVotes.toLocaleString();
    document.getElementById('avgRatingAdmin').textContent = avgRating;
    document.getElementById('topRestaurantAdmin').textContent = topRestaurant;
}

// ===================================
// RESTAURANT LIST
// ===================================
function renderRestaurantList() {
    const restaurants = getRestaurants();
    const container = document.getElementById('restaurantList');

    if (restaurants.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No restaurants added yet.</p>';
        return;
    }

    container.innerHTML = restaurants
        .sort((a, b) => b.votes - a.votes)
        .map(restaurant => `
            <div class="restaurant-item">
                <img src="${restaurant.logo}" alt="${restaurant.name}" class="restaurant-logo-preview">
                <div class="restaurant-details">
                    <h3>${restaurant.name}</h3>
                    <div class="restaurant-meta">
                        <span>📍 ${restaurant.location}</span>
                        <span>⭐ ${restaurant.rating}</span>
                        <span>👍 ${restaurant.votes.toLocaleString()} votes</span>
                        <span>📞 ${restaurant.phone || 'N/A'}</span>
                    </div>
                </div>
                <div class="restaurant-actions">
                    <button class="btn-edit" onclick="editRestaurant(${restaurant.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteRestaurant(${restaurant.id})">Delete</button>
                </div>
            </div>
        `).join('');
}

// ===================================
// FORM HANDLING
// ===================================
function setupFormHandler() {
    const form = document.getElementById('restaurantForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveRestaurant();
    });
}

function saveRestaurant() {
    const restaurants = getRestaurants();
    const id = document.getElementById('restaurantId').value;

    const restaurant = {
        id: id ? parseInt(id) : Date.now(),
        name: document.getElementById('restaurantName').value,
        location: document.getElementById('restaurantLocation').value,
        logo: document.getElementById('restaurantLogo').value,
        rating: parseFloat(document.getElementById('restaurantRating').value),
        votes: parseInt(document.getElementById('restaurantVotes').value) || 0,
        instagram: document.getElementById('restaurantInstagram').value,
        maps: document.getElementById('restaurantMaps').value,
        phone: document.getElementById('restaurantPhone').value
    };

    if (id) {
        // Update existing
        const index = restaurants.findIndex(r => r.id === parseInt(id));
        if (index !== -1) {
            restaurants[index] = restaurant;
        }
    } else {
        // Add new
        restaurants.push(restaurant);
    }

    saveRestaurants(restaurants);
    resetForm();
    loadDashboard();
    alert(id ? 'Restaurant updated successfully!' : 'Restaurant added successfully!');
}

function editRestaurant(id) {
    const restaurants = getRestaurants();
    const restaurant = restaurants.find(r => r.id === id);

    if (!restaurant) return;

    document.getElementById('restaurantId').value = restaurant.id;
    document.getElementById('restaurantName').value = restaurant.name;
    document.getElementById('restaurantLocation').value = restaurant.location;
    document.getElementById('restaurantLogo').value = restaurant.logo;
    document.getElementById('restaurantRating').value = restaurant.rating;
    document.getElementById('restaurantVotes').value = restaurant.votes;
    document.getElementById('restaurantInstagram').value = restaurant.instagram || '';
    document.getElementById('restaurantMaps').value = restaurant.maps;
    document.getElementById('restaurantPhone').value = restaurant.phone || '';

    document.getElementById('formBtnText').textContent = 'Update Restaurant';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteRestaurant(id) {
    if (!confirm('Are you sure you want to delete this restaurant?')) return;

    let restaurants = getRestaurants();
    restaurants = restaurants.filter(r => r.id !== id);
    saveRestaurants(restaurants);
    loadDashboard();
    alert('Restaurant deleted successfully!');
}

function resetForm() {
    document.getElementById('restaurantForm').reset();
    document.getElementById('restaurantId').value = '';
    document.getElementById('formBtnText').textContent = 'Add Restaurant';
}

// ===================================
// LOGO UPLOAD
// ===================================
function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        event.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('restaurantLogo').value = e.target.result;
        alert('Logo uploaded! Preview will be shown after saving.');
    };
    reader.readAsDataURL(file);
}

// ===================================
// EXPORT DATA
// ===================================
function exportData() {
    const restaurants = getRestaurants();
    const dataStr = JSON.stringify(restaurants, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `burger-qatar-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// ===================================
// SYNC WITH MAIN SITE
// ===================================
// This ensures the main site script.js reads from the same localStorage
console.log('Admin Panel Loaded');
console.log(`Managing ${getRestaurants().length} restaurants`);
