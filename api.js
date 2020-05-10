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
    cleanedInput = input.replace(/\s/g, "+");

    const url = `https://www.omdbapi.com/?s=${cleanedInput}&apikey=${KEY}`
    try {
        const response = await fetch(url);
        const results = await response.json()
        return results.Search.map(filterData)
    } catch (err) {
        return console.log(err)
    }
}