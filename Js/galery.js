const galeryImages = document.getElementById("all-images")
const NamePhotoInput = document.getElementById("NamePhotoInput")
const deleteModalImage = document.getElementById("delete-modal-image")
const deleteModalImageName = document.getElementById("delete-modal-image-name")
const saveNamePhotoInput = document.getElementById("saveNamePhotoInput")
const saveNewImageBtn = document.getElementById("saveNewImage")

// Fonction pour appeller l'api (TheMealDb) afin de récuperer les images et noms des repas
async function getImages() {

    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            const foodImagePath = data["meals"][0]["strMealThumb"]
            const foodName = data["meals"][0]["strMeal"]
            // la section avec les images des repas 
            const html = `<div class="col p-3">
                        <div class="image-card text-white">
                            <img src="${foodImagePath}" alt="Repas image" class="rounded w-100" />
                            <p class="titre-image">${foodName}</p>
                            <div class="action-image-buttons" data-show="connected">
                                <button type="button" class="btn btn-outline-light btn-edit"
                                    data-name="${foodName}" data-img="${foodImagePath}" data-bs-toggle="modal"
                                    data-bs-target="#EditionPhoto1Modal">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button type="button" class="btn btn-outline-light btn-delete"
                                    data-name="${foodName}" data-img="${foodImagePath}" data-bs-toggle="modal"
                                    data-bs-target="#DeletePhoto1Modal">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>`

            galeryImages.innerHTML += html
        }).catch(error => {
            console.error("erreur lors de la récupération des données utilisateur", error)
        })
}

// Fonction pour envoyer à chaque plat, les données correspondants
function ButtonEvents() {
    document.querySelectorAll(".btn-edit").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.name

            NamePhotoInput.value = name
        })
    })

    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.name
            const img = btn.dataset.img

            deleteModalImage.src = img
            deleteModalImageName.innerText = name
        })
    })
}

// pour charger les deux fonctions
async function loadImages() {
    for (let i = 0; i < 15; i++) {
        await getImages()
    }
    ButtonEvents()
}

saveNewImageBtn.addEventListener("click", verifyImageName)

function verifyImageName() {
    const newImageName = sanitizeHtml(saveNamePhotoInput.value)
    console.log(newImageName)
}

loadImages()