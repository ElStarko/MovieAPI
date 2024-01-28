class Movie {
    constructor(id, title, genre, available) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.available = available;
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(title, genre) {
        const id = this.movies.length + 1;
        const movie = new Movie(id, title, genre, true);
        this.movies.push(movie);
        return movie;
    }

    getMovies() {
        return this.movies;
    }

    rentMovie(movieId) {
        const movie = this.movies.find((m) => m.id === movieId);

        if (movie && movie.available) {
            movie.available = false;
            return movie;
        } else {
            return null; // Movie not found or already rented
        }
    }

    returnMovie(movieId) {
        const movie = this.movies.find((m) => m.id === movieId);

        if (movie && !movie.available) {
            movie.available = true;
            return movie;
        } else {
            return null; // Movie not found or already available
        }
    }
}

// Example usage
const movieStore = new MovieStore();

const movie1 = movieStore.addMovie("Inception", "Sci-Fi");
const movie2 = movieStore.addMovie("The Shawshank Redemption", "Drama");

console.log("Available Movies:", movieStore.getMovies());

const rentedMovie = movieStore.rentMovie(movie1.id);
console.log("Rented Movie:", rentedMovie);
console.log("Available Movies after renting:", movieStore.getMovies());

const returnedMovie = movieStore.returnMovie(movie1.id);
console.log("Returned Movie:", returnedMovie);
console.log("Available Movies after returning:", movieStore.getMovies());
 