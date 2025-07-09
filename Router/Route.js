export default class Route {
    constructor(url, title, pathHtml, authorize, pathJs = "") {
        this.url = url
        this.title = title
        this.pathHtml = pathHtml
        this.authorize = authorize
        this.pathJs = pathJs
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["client"] -> Réserver aux utilisateurs avec le rôle client 
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["admin", "client"] -> Réserver aux utilisateurs avec le rôle client OU admin
*/