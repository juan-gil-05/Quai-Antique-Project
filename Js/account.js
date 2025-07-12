const inputLastname = document.getElementById("input-lastName")
const inputName = document.getElementById("input-name")
const inputAllergy = document.getElementById("input-allergy")
const inputGuestNumber = document.getElementById("input-guestNumber")

async function getUserInfo() {
    const userInfo = await getInfosUser()

    inputLastname.placeholder = userInfo.lastName
    inputName.placeholder = userInfo.firstName
    inputAllergy.placeholder = userInfo.allergy ?? "Aucune"
    inputGuestNumber.placeholder = userInfo.guestNumber
    
}

getUserInfo()