import Route from "./Route.js"

export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/accueil", "Accueil", "/Pages/home.html"),
    new Route("/galerie", "Galerie", "/Pages/galery.html"),
    new Route("/login", "Connexion", "/Pages/auth/login.html"),
    new Route("/signup", "Inscription", "/Pages/auth/signup.html", "Js/auth/signup.js"),
    new Route("/account", "Mon compte", "/Pages/account.html"),
    new Route("/editPassword", "Modifier le mot de passe", "/Pages/auth/editPassword.html"),
    new Route("/allReservations", "Toutes les réservations", "/Pages/reservations/allReserv.html"),
    new Route("/reserver", "Faire une réservation", "/Pages/reservations/reserver.html"),
]

export const websiteName = "Quai Antique"