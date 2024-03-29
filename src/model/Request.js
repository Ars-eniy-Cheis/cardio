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

async function refreshTokenAsync(refreshToken) {
    let response = await fetch(path + "tokens/refresh", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': refreshToken
        },
    })
    //console.log(await response.json())
    return response
}

async function getPatientsAsync(accessToken) {
    let response = await fetch(path + "patients", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
    })
    //console.log(await response.json())
    return response
}

async function addPatientAsync(refreshToken, patientJSON) {
    let response = await fetch(path + "patients", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': refreshToken
        },
        body: patientJSON
    })
    //console.log(await response.json())
    return response
}

async function getPatientAsync(accessToken, patientID) {
    let response = await fetch(path + "patients/"+patientID, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
    })
    //console.log(await response.json())
    return response
}

async function deletePatientAsync(accessToken, patientID) {
    let response = await fetch(path + "patients/"+patientID, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
    })
    //console.log(await response.json())
    return response
}

async function patchPatientAsync(accessToken, patientID, patientJSON) {
    let response = await fetch(path + "patients/"+patientID, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: patientJSON
    })
    //console.log(await response.json())
    return response
}

async function getParametersAsync(accessToken) {
    let response = await fetch(path + "parameters/", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
    })
    //console.log(await response.json())
    return response
}

export default { 
    pingAsync, loginAsync, refreshTokenAsync, getPatientsAsync, addPatientAsync, 
    getPatientAsync, deletePatientAsync, patchPatientAsync, getParametersAsync
}