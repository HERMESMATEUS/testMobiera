const baseUrl = "10.0.2.2"
// const baseUrl = "192.168.10.17"

export async function login({ user, password }) {
    let response = await fetch(`http://${baseUrl}:3000/users?user=${user}&password=${password}`)
    if (response.status == 200) {
        let data = await response.json()
        if (data.length == 1) return data[0]
        else return false
    } else return false
}

export async function signUp(user) {
    let response = await fetch(`http://${baseUrl}:3000/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (response.status == 201) return true
    else return false
}

export async function updateUser(user, id) {
    let response = await fetch(`http://${baseUrl}:3000/users/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (response.status == 200 || response.status == 201) return true
    else return false
}