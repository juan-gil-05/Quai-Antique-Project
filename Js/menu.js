
const allFood = document.getElementById("allFood")
const allMenus = document.getElementById("allMenus")

function getAllFood() {

    const myHeaders = new Headers
    myHeaders.append("X-AUTH-TOKEN", getToken())

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    fetch(apiUrl + "food/all", requestOptions)
        .then(result => result.json())
        .then(data => {
            const html = data.map(food => {
                console.log(food)
                return `<div class="list-group-item list-group-item-action p-3">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1 fw-semibold">${food.title}</h5>
                                <small>${food.price} €</small>    
                            </div>
                            <p class="mb-1">${food.description}</p>
                        </div>`
            }).join("")

            allFood.innerHTML += html
        })
}

function getAllMenus() {
    const myHeaders = new Headers
    myHeaders.append("X-AUTH-TOKEN", getToken())

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    fetch(apiUrl + "menu/all", requestOptions)
        .then(result => result.json())
        .then(data => {
            const html = data.map(menu => {
                console.log(menu)
                return `<div class="card menu-card shadow-sm mb-4">
                            <div class="card-body">
                                <h5 class="card-title text-success">${menu.title} - ${menu.price} €</h5>
                                <p class="card-text">${menu.description}</p>
                            </div>
                        </div>`
            }).join("")

            allMenus.innerHTML += html
        })
}

getAllFood()
getAllMenus()
