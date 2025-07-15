
const allFood = document.getElementById("allFood")
const allMenus = document.getElementById("allMenus")
const editFoodTitleInput = document.getElementById("editFoodTitleInput")
const editFoodDescriptionInput = document.getElementById("editFoodDescriptionInput")
const editFoodPriceInput = document.getElementById("editFoodPriceInput")
const deleteFoodTitleInput = document.getElementById("deleteFoodTitleInput")
const deleteFoodDescriptionInput = document.getElementById("deleteFoodDescriptionInput")
const deleteFoodPriceInput = document.getElementById("deleteFoodPriceInput")
const editMenuTitleInput = document.getElementById("editMenuTitleInput")
const editMenuDescriptionInput = document.getElementById("editMenuDescriptionInput")
const editMenuPriceInput = document.getElementById("editMenuPriceInput")
const deleteMenuTitleInput = document.getElementById("deleteMenuTitleInput")
const deleteMenuDescriptionInput = document.getElementById("deleteMenuDescriptionInput")
const deleteMenuPriceInput = document.getElementById("deleteMenuPriceInput")

async function getAllFood() {

    const myHeaders = new Headers
    myHeaders.append("X-AUTH-TOKEN", getToken())

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    await fetch(apiUrl + "food/all", requestOptions)
        .then(result => result.json())
        .then(data => {
            const html = data.map(food => {
                return `<div class="food-list list-group-item list-group-item-action p-3">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1 fw-semibold">${food.title}</h5>
                                <small>${food.price} €</small>    
                            </div>
                            <p class="mb-1">${food.description}</p>
                            <div class="action-buttons" data-show="admin">
                                <button type="button" class="btn btn-outline-dark btn-edit" id="editFoodAction"
                                    data-title="${food.title}" data-description="${food.description}" data-price="${food.price}" data-bs-toggle="modal"
                                    data-bs-target="#EditionFoodModal">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button type="button" class="btn btn-outline-dark btn-delete" id="deleteFoodAction"
                                    data-title="${food.title}" data-description="${food.description}" data-price="${food.price}" data-bs-toggle="modal"
                                    data-bs-target="#DeleteFoodModal">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>`
            }).join("")

            allFood.innerHTML += html
        })
}

async function getAllMenus() {
    const myHeaders = new Headers
    myHeaders.append("X-AUTH-TOKEN", getToken())

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    await fetch(apiUrl + "menu/all", requestOptions)
        .then(result => result.json())
        .then(data => {
            const html = data.map(menu => {
                return `<div class="card menu-card shadow-sm mb-4">
                            <div class="card-body">
                                <h5 class="card-title text-success">${menu.title} - ${menu.price} €</h5>
                                <p class="card-text">${menu.description}</p>
                                <div class="action-buttons" data-show="admin">
                                <button type="button" class="btn btn-outline-dark btn-edit" id="editMenuAction"
                                    data-title="${menu.title}" data-description="${menu.description}" data-price="${menu.price}" data-bs-toggle="modal"
                                    data-bs-target="#EditionMenuModal">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button type="button" class="btn btn-outline-dark btn-delete" id="deleteMenuAction"
                                    data-title="${menu.title}" data-description="${menu.description}" data-price="${menu.price}" data-bs-toggle="modal"
                                    data-bs-target="#DeleteMenuModal">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                            </div>
                        </div>`
            }).join("")

            allMenus.innerHTML += html
        })
}

// Fonction pour envoyer à chaque plat, les données correspondants
function ButtonFoodEvents() {
    document.querySelectorAll(".btn-edit").forEach(btn => {
        btn.addEventListener("click", () => {
            const title = btn.dataset.title
            const description = btn.dataset.description
            const price = btn.dataset.price

            editFoodTitleInput.value = title
            editFoodDescriptionInput.value = description
            editFoodPriceInput.value = price
        })
    })

    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const title = btn.dataset.title
            const description = btn.dataset.description
            const price = btn.dataset.price

            deleteFoodTitleInput.value = title
            deleteFoodDescriptionInput.value = description
            deleteFoodPriceInput.value = price
        })
    })
}
// Fonction pour envoyer à chaque menu, les données correspondants
function ButtonMenuEvents() {
    document.querySelectorAll(".btn-edit").forEach(btn => {
        btn.addEventListener("click", () => {
            const title = btn.dataset.title
            const description = btn.dataset.description
            const price = btn.dataset.price

            editMenuTitleInput.value = title
            editMenuDescriptionInput.value = description
            editMenuPriceInput.value = price
        })
    })

    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const title = btn.dataset.title
            const description = btn.dataset.description
            const price = btn.dataset.price

            deleteMenuTitleInput.value = title
            deleteMenuDescriptionInput.value = description
            deleteMenuPriceInput.value = price
        })
    })
}

// pour charger les deux fonctions
async function loadFullMenu() {

    await getAllFood()
    await getAllMenus()

    ButtonFoodEvents()
    ButtonMenuEvents()
}

loadFullMenu()
