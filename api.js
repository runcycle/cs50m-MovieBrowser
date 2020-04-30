const key = "974478bf";

const filterData = movie => ({
    title: movie.Title,
    rating: movie.Rated,
    poster: movie.Poster,
    director: movie.Director,
    starring: movie.Actors,
    plot: movie.Plot,
    year: movie.Year,
    id: movie.imdbID
});

export const fetchMovie = async (input) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${input}&apikey=${key}`);
        const results = response.json()
        return results.map(filterData)
        } catch (err) {
        return alert("Error retrieving movie.")
    }
}