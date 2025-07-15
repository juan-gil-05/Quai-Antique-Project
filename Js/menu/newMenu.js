const saveMenuTitleInput = document.getElementById("saveMenuTitleInput")
const saveMenuDescriptionInput = document.getElementById("saveMenuDescriptionInput")
const saveMenuPriceInput = document.getElementById("saveMenuPriceInput")
const btnValidation = document.getElementById("saveNewMenu")

saveMenuTitleInput.addEventListener("keyup", validateForm)
saveMenuDescriptionInput.addEventListener("keyup", validateForm)
saveMenuPriceInput.addEventListener("keyup", validateForm)

//Function permettant de valider tout le formulaire
function validateForm() {
    const titleOk = validateRequired(saveMenuTitleInput)
    const descriptionOk = validateRequired(saveMenuDescriptionInput)
    const priceOk = validateRequired(saveMenuPriceInput)

    if (titleOk && descriptionOk && priceOk) {
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

btnValidation.addEventListener("click", verifyMenuForm)

function verifyMenuForm() {
    const newFoodTitle = sanitizeHtml(saveMenuTitleInput.value)
    const newFoodDescription = sanitizeHtml(saveMenuDescriptionInput.value)
    console.log(newFoodTitle)
    console.log(newFoodDescription)
}