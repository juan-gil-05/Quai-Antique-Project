const lastNameInput = document.getElementById("NomInput")
const nameInput = document.getElementById("PrenomInput")
const NbConvivesInput = document.getElementById("NbConvivesInput")
const AllergieInput = document.getElementById("AllergieInput")
const DateInput = document.getElementById("DateInput")
const midiRadio = document.getElementById("midiRadio")
const soirRadio = document.getElementById("soirRadio")
const selectHour = document.getElementById("selectHour")
const btnValidation = document.getElementById("btn-save-reserv")

const heuresMidi = ["12:00", "12:15", "12:30", "12:45", "13:00"]
const heuresSoir = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]

NbConvivesInput.addEventListener("keyup", validateForm)
DateInput.addEventListener("keyup", validateForm)
midiRadio.addEventListener("change", validateForm)
soirRadio.addEventListener("change", validateForm)

//Function permettant de valider tout le formulaire
function validateForm() {
    const nbConvivesOk = guestNumberValidate(NbConvivesInput)
    const dateOk = validateRequired(DateInput)
    const serviceOk = validateService(midiRadio, soirRadio)

    if (nbConvivesOk && dateOk && serviceOk) {
        btnValidation.disabled = false
    } else {
        btnValidation.disabled = true
    }

}

function validateRequired(input) {
    if (input.value != "") {
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        return true
    } else {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
        return false
    }
}

function guestNumberValidate(input) {
    if (input.value == 0 || input.value == "") {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
        return false
    } else {
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        return true
    }
}

function validateService(midiRadio, soirRadio) {
    if (midiRadio.checked || soirRadio.checked) {
        midiRadio.classList.add("is-valid")
        midiRadio.classList.remove("is-invalid")
        soirRadio.classList.add("is-valid")
        soirRadio.classList.remove("is-invalid")
        return true
    } else {
        midiRadio.classList.remove("is-valid")
        midiRadio.classList.add("is-invalid")
        soirRadio.classList.remove("is-valid")
        soirRadio.classList.add("is-invalid")
        return false
    }
}

// Fonction pour afficher les heures de la reservation selon le service choisi 
function showHours(hours) {
    // Vider les anciennes options
    selectHour.innerHTML = ""

    // Ajouter les nouvelles options
    hours.forEach(hour => {
        const option = document.createElement("option")
        option.value = hour
        option.textContent = hour
        selectHour.appendChild(option)
    })
}

// Afficher les horaires du midi
midiRadio.addEventListener("change", () => {
    if (midiRadio.checked) {
        showHours(heuresMidi)
    }
})

// Afficher les horaires du soir
soirRadio.addEventListener("change", () => {
    if (soirRadio.checked) {
        showHours(heuresSoir)
    }
})

btnValidation.addEventListener("click", saveReserv)

function saveReserv() {
    const allergies = sanitizeHtml(AllergieInput.value)

    console.log(AllergieInput.value)
    console.log(allergies)
}


async function getUserInfo() {
    const userInfo = await getInfosUser()

    lastNameInput.placeholder = userInfo.lastName
    nameInput.placeholder = userInfo.firstName

}

getUserInfo()