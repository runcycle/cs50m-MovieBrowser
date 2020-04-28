const key = "974478bf";

export const fetchMovie = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${key}`);
    const results = await response.json()
    // console.log(results)
    return results
}