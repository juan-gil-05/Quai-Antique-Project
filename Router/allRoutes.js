import Route from "./Route.js"

export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/accueil", "Accueil", "/Pages/home.html"),
    new Route("/galerie", "Galerie", "/Pages/galery.html"),
    new Route("/login", "Connexion", "/Pages/login.html"),
    new Route("/signup", "Inscription", "/Pages/signup.html"),
]

export const websiteName = "Quai Antique"