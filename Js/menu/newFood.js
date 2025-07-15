const saveFoodTitleInput = document.getElementById("saveFoodTitleInput")
const saveFoodDescriptionInput = document.getElementById("saveFoodDescriptionInput")
const saveFoodPriceInput = document.getElementById("saveFoodPriceInput")
const btnValidation = document.getElementById("saveNewFood")

saveFoodTitleInput.addEventListener("keyup", validateForm)
saveFoodDescriptionInput.addEventListener("keyup", validateForm)
saveFoodPriceInput.addEventListener("keyup", validateForm)

//Function permettant de valider tout le formulaire
function validateForm() {
    const titleOk = validateRequired(saveFoodTitleInput)
    const descriptionOk = validateRequired(saveFoodDescriptionInput)
    const priceOk = validateRequired(saveFoodPriceInput)

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

btnValidation.addEventListener("click", verifyFoodForm)

function verifyFoodForm() {
    const newFoodTitle = sanitizeHtml(saveFoodTitleInput.value)
    const newFoodDescription = sanitizeHtml(saveFoodDescriptionInput.value)
    console.log(newFoodTitle)
    console.log(newFoodDescription)
}