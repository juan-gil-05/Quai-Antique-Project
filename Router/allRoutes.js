import Route from "./Route.js"

export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", []),
    new Route("/accueil", "Accueil", "/Pages/home.html", []),
    new Route("/galerie", "Galerie", "/Pages/galery.html", [], "Js/galery.js"),
    new Route("/login", "Connexion", "/Pages/auth/login.html", ["disconnected"], "Js/auth/login.js"),
    new Route("/signup", "Inscription", "/Pages/auth/signup.html", ["disconnected"], "Js/auth/signup.js"),
    new Route("/account", "Mon compte", "/Pages/account.html", ["admin", "ROLE_USER"], "Js/account.js"),
    new Route("/editPassword", "Modifier le mot de passe", "/Pages/auth/editPassword.html", ["admin", "ROLE_USER"]),
    new Route("/allReservations", "Toutes les réservations", "/Pages/reservations/allReserv.html", ["admin", "ROLE_USER"], "Js/reservation/allReservs.js"),
    new Route("/reserver", "Faire une réservation", "/Pages/reservations/reserver.html", ["admin", "ROLE_USER"], "Js/reservation/reserver.js"),
    new Route("/menu", "La carte ", "/Pages/menu/menu.html", ["admin", "ROLE_USER"], "Js/menu/menu.js"),
    new Route("/nouveauPlat", "La carte ", "/Pages/menu/newFood.html", ["admin", "ROLE_USER"], "Js/menu/newFood.js")
]

export const websiteName = "Quai Antique"
