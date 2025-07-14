const lastNameInput = document.getElementById("NomInput")
const nameInput = document.getElementById("PrenomInput")

async function getUserInfo() {
    const userInfo = await getInfosUser()

    lastNameInput.placeholder = userInfo.lastName
    nameInput.placeholder = userInfo.firstName

}

getUserInfo()