const galeryImages = document.getElementById("all-images")

/* Récuperer les informations des images */
const title = "test"
const urlImage = "../Assets/food1.jpg"

const monImage = getImage(title, urlImage)

galeryImages.innerHTML = monImage

function getImage(title, urlImage) {
    title = sanitizeHtml(title)
    urlImage = sanitizeHtml(urlImage)

    return `<div class="col p-3">
            <div class="image-card text-white">
                <img src="${urlImage}" alt="Repas image" class="rounded w-100" />
                <p class="titre-image">${title}</p>
                <div class="action-image-buttons">
                    <button type="button" data-show="admin" class="btn btn-outline-light" data-bs-toggle="modal"
                        data-bs-target="#EditionPhoto1Modal">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button type="button" data-show="admin" class="btn btn-outline-light" data-bs-toggle="modal"
                        data-bs-target="#DeletePhoto1Modal">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>`
}
