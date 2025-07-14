
const allReserv = document.getElementById("all-reserv")
const deleteModalDate = document.getElementById("delete-modal-date")
const deleteModalHour = document.getElementById("delete-modal-hour")
const deleteModalGuestNumber = document.getElementById("delete-modal-guestNumber")

async function getAllReservs() {
    const userInfo = await getInfosUser()
    const userReservs = userInfo.reservations

    const html = userReservs.map(reserv => {
        const date = new Date(reserv.date)
        const dateFormatted = date.toLocaleDateString("fr-FR")
        const hour = reserv.hour
        const guestNumber = reserv.guestNumber

        return `<div class="card mb-2 shadow-sm">
                    <div class="card-body d-flex justify-content-between align-items-center flex-wrap">
                        <span class="fw-bold text-primary">${dateFormatted}</span>
                        <span class="text-muted">${hour}</span>
                        <span>${guestNumber} personnes</span>
                        <button type="button" class="btn btn-outline-dark btn-delete"
                                data-date="${dateFormatted}" data-hour="${hour}" data-guestnumber="${guestNumber}"
                                data-bs-toggle="modal"
                                data-bs-target="#DeleteReservationModal">
                                <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>`
    }).join("")

    allReserv.innerHTML = html
}

// Fonction pour envoyer à chaque reservation, les données correspondants
function ButtonEvents() {
    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const date = btn.dataset.date
            const hour = btn.dataset.hour
            const guestNumber = btn.dataset.guestnumber

            deleteModalDate.innerText = date
            deleteModalHour.innerText = hour
            deleteModalGuestNumber.innerText = guestNumber
        })
    })
}

// pour charger les deux fonctions
async function loadReservs() {
    await getAllReservs()
    ButtonEvents()
}

loadReservs()