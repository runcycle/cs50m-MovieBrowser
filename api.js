const KEY = "974478bf";

const filterData = (movie) => ({
    title: movie.Title,
    year: movie.Year,
    key: movie.imdbID,
    poster: movie.Poster
});

export const fetchMovie = async (input) => {
    const url = `https://www.omdbapi.com/?s=${input}&apikey=${KEY}`
    try {
        const response = await fetch(url);
        const results = await response.json()
        return results.Search.map(filterData)
    } catch (err) {
        return console.log(err)
    }
}