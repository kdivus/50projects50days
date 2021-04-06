const APIURL = "https://api.github.com/users/"

getUser('kdivus')

async function getUser(username) {
    const res = await axios(APIURL + username)

    console.log(res.data)
}