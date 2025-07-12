
const allReserv = document.getElementById("all-reserv")

async function getAllReservs() {
    const userInfo = await getInfosUser()
    const userReservs = userInfo.reservations

    const html = userReservs.map(reserv => {
        const date = new Date(reserv.date)
        const dateFormatted = date.toLocaleDateString("fr-FR")
        return `<div class="card mb-2 shadow-sm">
                    <div class="card-body d-flex justify-content-between align-items-center flex-wrap">
                        <span class="fw-bold text-primary">${dateFormatted}</span>
                        <span class="text-muted">${reserv.hour}</span>
                        <span>${reserv.guestNumber} personnes</span>
                    </div>
                </div>`
    }).join("")

    allReserv.innerHTML = html
}

getAllReservs()
