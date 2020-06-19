const KEY = "974478bf";

export const fetchMovie = async (input) => {
    cleanedInput = input.replace(/\s/g, "+");

    const url = `https://www.omdbapi.com/?s=${cleanedInput}&apikey=${KEY}`
    try {
        const response = await fetch(url);
        const results = await response.json()
        return results
    } catch (err) {
        return console.log(err)
    }
}

export const fetchDetails = async (id) => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${KEY}`
    try {
        const response = await fetch(url);
        const results = await response.json();
        return results
        // return console.log(results)
    } catch (err) {
        return console.log(err)
    }
}