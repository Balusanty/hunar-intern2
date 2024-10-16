// Sample movie data (You can replace this with actual API calls)
const trendingMovies = [
    {
        title: "Inception",
        image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
    },
    {
        title: "Interstellar",
        image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqoNMpkrR9QZE5.jpg"
    },
    {
        title: "The Dark Knight",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    }
];

const popularMovies = [
    {
        title: "Joker",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
        title: "Avengers: Endgame",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        title: "Parasite",
        image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
    }
];

function loadMovies(movieArray, containerId) {
    const container = document.getElementById(containerId);

    movieArray.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieImg = document.createElement('img');
        movieImg.src = movie.image;

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        movieCard.appendChild(movieImg);
        movieCard.appendChild(movieTitle);
        container.appendChild(movieCard);
    });
}

// Load movies into respective carousels
loadMovies(trendingMovies, 'trending');
loadMovies(popularMovies, 'popular');
