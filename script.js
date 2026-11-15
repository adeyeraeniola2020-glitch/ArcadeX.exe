// ARCADEX.EXE GAME COLLECTION

const categories = [
    { name: "Action", icon: "⚔️" },
    { name: "Adventure", icon: "🗺️" },
    { name: "Racing", icon: "🏎️" },
    { name: "Puzzle", icon: "🧩" },
    { name: "Sports", icon: "⚽" },
    { name: "Arcade", icon: "🕹️" },
    { name: "Strategy", icon: "♟️" },
    { name: "Simulation", icon: "🚀" },
    { name: "Horror", icon: "👻" },
    { name: "Casual", icon: "🎯" }
];

const games = [
    {
        name: "Space Runner",
        category: "Adventure",
        icon: "🚀",
        description: "Explore the galaxy and dodge obstacles.",
        color: "linear-gradient(135deg,#5425a8,#071c54)",
        trending: true,
        isNew: true,
        id: "space-runner"
    },
    {
        name: "Street Racer",
        category: "Racing",
        icon: "🏎️",
        description: "Race through exciting city tracks.",
        color: "linear-gradient(135deg,#ff512f,#dd2476)",
        trending: true,
        isNew: false,
        id: "street-racer"
    },
    {
        name: "Brain Master",
        category: "Puzzle",
        icon: "🧠",
        description: "Challenge your brain with puzzles.",
        color: "linear-gradient(135deg,#11998e,#38ef7d)",
        trending: true,
        isNew: true,
        id: "brain-master"
    },
    {
        name: "Football Stars",
        category: "Sports",
        icon: "⚽",
        description: "Show your football skills.",
        color: "linear-gradient(135deg,#134e5e,#71b280)",
        trending: true,
        isNew: false,
        id: "football-stars"
    },
    {
        name: "Zombie Escape",
        category: "Action",
        icon: "🧟",
        description: "Survive an exciting zombie adventure.",
        color: "linear-gradient(135deg,#232526,#414345)",
        trending: true,
        isNew: true,
        id: "zombie-escape"
    },
    {
        name: "Candy Match",
        category: "Casual",
        icon: "🍬",
        description: "Match colourful candies and earn points.",
        color: "linear-gradient(135deg,#ec008c,#fc6767)",
        trending: false,
        isNew: true,
        id: "candy-match"
    },
    {
        name: "Pixel Fighter",
        category: "Arcade",
        icon: "🥊",
        description: "Enter the pixel fighting arena.",
        color: "linear-gradient(135deg,#654ea3,#eaafc8)",
        trending: true,
        isNew: false,
        id: "pixel-fighter"
    },
    {
        name: "Kingdom Builder",
        category: "Strategy",
        icon: "🏰",
        description: "Build and manage your kingdom.",
        color: "linear-gradient(135deg,#c79036,#493240)",
        trending: false,
        isNew: true,
        id: "kingdom-builder"
    },
    {
        name: "Flight Simulator",
        category: "Simulation",
        icon: "✈️",
        description: "Experience the world of flying.",
        color: "linear-gradient(135deg,#2193b0,#6dd5ed)",
        trending: false,
        isNew: false,
        id: "flight-simulator"
    },
    {
        name: "Mystery Mansion",
        category: "Horror",
        icon: "🏚️",
        description: "Explore a mysterious abandoned mansion.",
        color: "linear-gradient(135deg,#41295a,#2f0743)",
        trending: false,
        isNew: true,
        id: "mystery-mansion"
    },
    {
        name: "Treasure Quest",
        category: "Adventure",
        icon: "💎",
        description: "Discover hidden treasures.",
        color: "linear-gradient(135deg,#f7971e,#ffd200)",
        trending: false,
        isNew: false,
        id: "treasure-quest"
    },
    {
        name: "Speed Drift",
        category: "Racing",
        icon: "🏁",
        description: "Master the art of drifting.",
        color: "linear-gradient(135deg,#00c6ff,#0072ff)",
        trending: true,
        isNew: true,
        id: "speed-drift"
    }
];

// DISPLAY CATEGORIES

const categoryGrid = document.getElementById("category-grid");

categories.forEach(category => {
    categoryGrid.innerHTML += `
        <div class="category-card"
             onclick="filterCategory('${category.name}')">
            <div class="icon">${category.icon}</div>
            <h3>${category.name}</h3>
        </div>
    `;
});

// DISPLAY GAME CARDS

function createGameCard(game) {
    return `
        <div class="game-card">
            <div class="game-image"
                 style="background:${game.color}">
                ${game.icon}
            </div>

            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <a href="game.html?game=${game.id}">
                    PLAY NOW →
                </a>
            </div>
        </div>
    `;
}

// DISPLAY TRENDING GAMES

const trendingContainer =
    document.getElementById("trending-games");

const newContainer =
    document.getElementById("new-games-grid");

function displayGames(list) {
    trendingContainer.innerHTML =
        list.filter(game => game.trending)
            .map(createGameCard).join("");

    newContainer.innerHTML =
        list.filter(game => game.isNew)
            .map(createGameCard).join("");
}

displayGames(games);

// CATEGORY FILTER

function filterCategory(category) {

    const filtered = games.filter(
        game => game.category === category
    );

    trendingContainer.innerHTML =
        filtered.length
        ? filtered.map(createGameCard).join("")
        : "<p>No games found.</p>";

    newContainer.innerHTML = "";
    
    document.getElementById("trending")
        .scrollIntoView({ behavior: "smooth" });
}

// SEARCH FUNCTION

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {

    const searchTerm = this.value.toLowerCase();

    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );

    displayGames(filtered);
});
