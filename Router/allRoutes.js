import Route from "./route.js"

export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", []),
    new Route("/accueil", "Accueil", "/Pages/home.html", []),
    new Route("/galerie", "Galerie", "/Pages/galery.html", [], "Js/galery.js"),
    new Route("/login", "Connexion", "/Pages/auth/login.html", ["disconnected"], "Js/auth/login.js"),
    new Route("/signup", "Inscription", "/Pages/auth/signup.html", ["disconnected"], "Js/auth/signup.js"),
    new Route("/account", "Mon compte", "/Pages/account.html", ["admin", "client"]),
    new Route("/editPassword", "Modifier le mot de passe", "/Pages/auth/editPassword.html", ["admin", "client"]),
    new Route("/allReservations", "Toutes les réservations", "/Pages/reservations/allReserv.html", ["client"]),
    new Route("/reserver", "Faire une réservation", "/Pages/reservations/reserver.html", ["client"])
]

export const websiteName = "Quai Antique"
