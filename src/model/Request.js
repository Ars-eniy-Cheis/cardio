const path = "http://46.181.193.240:8080/kardio/api/";
//const path = "http://localhost:9000/api/";
//http://localhost:9000/api/users/login

async function pingAsync() {
    let response = await fetch(path + "ping", {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    //console.log("PingAsync" + response)
    return response
}

async function loginAsync(loginJSON) {
    let response = await fetch(path + "users/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: loginJSON
    })
    //console.log(await response.json())
    return response
}

export default { pingAsync, loginAsync }