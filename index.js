// Add your code here
let submitData = (name, email) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        document.body.insertAdjacentHTML("beforeend", `<div>
            <p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.id}</p>
        </div>`)
    })
    .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;
    })
}

