/* eslint-disable no-unused-vars */
const tokenCookieName = "accesstoken"
const logoutBtn = document.getElementById("logout-btn")
const RoleCookieName = "role"
const apiUrl = "https://main-bvxea6i-hbxvgtrkal2cs.fr-4.platformsh.site/api/"
const loader = document.getElementById("loader")

/*
ROLES : 
  - disconnected
  - connected
    - admin
    - client
*/
logoutBtn.addEventListener("click", signout)
loaderPage()

function signout() {
    eraseCookie(tokenCookieName)
    eraseCookie(RoleCookieName)
    window.location.reload()
}

function getRole() {
    return getCookie(RoleCookieName)
}

function setToken(token) {
    setCookie(tokenCookieName, token, 7)
}

function getToken() {
    return getCookie(tokenCookieName)
}

function setCookie(name, value, days) {
    let expires = ""
    if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

function getCookie(name) {
    const nameEQ = name + "="
    const ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == " ") {
            c = c.substring(1, c.length)
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length)
        }
    }
    return null
}

function eraseCookie(name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

function isConnected() {
    if (getToken() == null || getToken == undefined) {
        return false
    } else {
        return true
    }
}

function showAndHideElementsForRoles() {
    const userConnected = isConnected()
    const role = getRole()

    const allElementsToEdit = document.querySelectorAll("[data-show]")

    allElementsToEdit.forEach(element => {
        switch (element.dataset.show) {
            case "disconnected":
                if (userConnected) {
                    element.classList.add("d-none")
                }
                break
            case "connected":
                if (!userConnected) {
                    element.classList.add("d-none")
                }
                break
            case "admin":
                if (!userConnected || role != "admin") {
                    element.classList.add("d-none")
                }
                break
            case "client":
                if (!userConnected || role != "client") {
                    element.classList.add("d-none")
                }
                break
        }
    })
}

// Afin d'eviter les ataques XSS (Injections du code malveillant)
function sanitizeHtml(text) {
    const tempHtml = document.createElement("div")
    tempHtml.textContent = text
    return tempHtml.innerHTML
}

function getInfosUser() {
    const myHeaders = new Headers()
    myHeaders.append("X-AUTH-TOKEN", getToken())

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    return fetch(apiUrl + "account/profil", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log("Impossible de récupérer les informations utilisateur")
            }
        })
        .catch(error => {
            console.error("erreur lors de la récupération des données utilisateur", error)
        })
}

function loaderPage() {
    window.addEventListener("load", () => {
        loader.classList.add("loader--hidden")

        loader.addEventListener("transitionend", () => {
            if (loader && loader.parentNode === document.body) {
                document.body.removeChild(loader)
            }
        })
    })
}