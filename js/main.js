// Movie data (simulated)
const movies = [
    { id: 1, title: 'Movie 1', image: 'https://via.placeholder.com/200x300', rank: '8.5', category: 'popular' },
    { id: 2, title: 'Movie 2', image: 'https://via.placeholder.com/200x300', rank: '9.0', category: 'top-ranking' },
    { id: 3, title: 'Movie 3', image: 'https://via.placeholder.com/200x300', rank: '7.8', category: 'upcoming' },
    { id: 4, title: 'Movie 4', image: 'https://via.placeholder.com/200x300', rank: '8.2', category: 'new' },
    { id: 5, title: 'Movie 5', image: 'https://via.placeholder.com/200x300', rank: '8.9', category: 'popular' },
    { id: 6, title: 'Movie 6', image: 'https://via.placeholder.com/200x300', rank: '9.3', category: 'top-ranking' },
    // More movies can be added here...
];

// Function to render movies based on category
function renderMovies(category) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    const filteredMovies = movies.filter(movie => movie.category === category);
    
    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rank: ${movie.rank}</p>
        `;
        
        movieList.appendChild(movieCard);
    });
}

// Function to filter movies based on category
function filterMovies(category) {
    renderMovies(category);
}

// Initial render (default to 'popular' category)
renderMovies('popular');

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rank: ${movie.rank}</p>
        `;
        
        movieList.appendChild(movieCard);
    });
});