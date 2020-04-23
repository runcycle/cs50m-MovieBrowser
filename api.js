export const fetchUsers = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=974478bf')
    const {results} = await response.json()
    return results
}