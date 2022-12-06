const path = "http://cardio/api/v1/";

function ping(){
    pingAsync()
    .then(function(answer){
        console.log("Ping " + answer)
        return answer;
    })
}

async function pingAsync(){
    let response = await fetch("https://www.breakingbadapi.com/api/1", {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    //console.log("PingAsync" + response)
    return response
}

function login(loginJSON){
    loginAsync(loginJSON)
    .then(function(answer){
        return answer
    })
}

async function loginAsync(loginJSON){
    let response = await fetch(path + "users/login", {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: loginJSON
    })
    return response.json()
}

export default {pingAsync, login}