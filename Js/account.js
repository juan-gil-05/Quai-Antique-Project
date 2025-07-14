const inputLastname = document.getElementById("input-lastName")
const inputName = document.getElementById("input-name")
const inputAllergy = document.getElementById("input-allergy")
const inputGuestNumber = document.getElementById("input-guestNumber")
const editAccountBtn = document.getElementById("editAccountBtn")

async function getUserInfo() {
    const userInfo = await getInfosUser()

    inputLastname.value = userInfo.lastName
    inputName.value = userInfo.firstName
    inputAllergy.value = userInfo.allergy ?? "Aucune"
    inputGuestNumber.value = userInfo.guestNumber

}

editAccountBtn.addEventListener("click", editAccount)

function editAccount() {
    const lastName = sanitizeHtml(inputLastname.value)
    const name = sanitizeHtml(inputName.value)
    const allergy = sanitizeHtml(inputAllergy.value)
    const guestNumber = sanitizeHtml(inputGuestNumber.value)

    console.log(lastName)
    console.log(name)
    console.log(allergy)
    console.log(guestNumber)
}

getUserInfo()