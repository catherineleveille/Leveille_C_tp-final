document.addEventListener("DOMContentLoaded", function () {
    let connexion = new MovieDB();

    if (document.location.pathname.search("fiche-film.html")>0) {
        let params = new URL(document.location).searchParams;

    } else {
        connexion.requeteDernierFilm();
    }
});

class MovieDB{

    constructor() {
        console.log("constructeur");

        this.APIkey = "8ec3413c6e72c2abaf8cc8645163e2b6";

        this.lang = "fr-CA"

        this.baseURL = "https://api.themoviedb.org/3";

        this.imgPath = "https://image.tmdb.org/t/p/";

        this.totalFilm = 8;
    }

    requeteDernierFilm() {
        //objet qui permet d'appeler des pages webs sans rafraichir la page

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this));

        //requete.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=8ec3413c6e72c2abaf8cc8645163e2b6&language=fr-CA&page=1");
        requete.open("GET", this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1");
        //initialise la requête pour récupérer les films

        requete.send();
    }

    //Lorsque la requête revient, l'écouteur appelle cette fonction
    retourRequeteDernierFilm(e) {
        console.log("retour dernier film");

        let target = e.currentTarget;
        let data;

        //les données reçues sont en format text.
        data = JSON.parse(target.responseText).results;
        console.log(data);
        this.afficheDernierFilm(data);
    }

    afficheDernierFilm(data) {
        for (let i = 0; i < this.totalFilm; i++) {


            let unArticle = document.querySelector(".template>article.film").cloneNode(true);

            unArticle.querySelector("h2").innerHTML = data[i].title;

            unArticle.querySelector("p.description").innerHTML = data[i].overview || "Pas de description ";

            let src = this.imgPath + "w500" + data[i].poster_path;
            console.log(src);

            let uneImage = unArticle.querySelector("img");
            uneImage.setAttribute("src", src);
            uneImage.setAttribute("alt", data[i].title);

            unArticle.querySelector("a").setAttribute("href", "fiche-film.html?id=" + data[i].id);

            document.querySelector(".liste-films").appendChild(unArticle);
        }
    }

requeteInfoFilm(movieId){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", this.retourRequeteInfoFilm.bind(this));

    //requete.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=8ec3413c6e72c2abaf8cc8645163e2b6&language=fr-CA&page=1");
    xhr.open("GET", this.baseURL + "/movie/"+movieId + "?api_key="+this.APIkey+ "&language=" + this.lang);
    //initialise la requête pour récupérer les films

    xhr.send();
}
afficheInfoFilm(data){
    document.querySelector("h1").innerHTML=data.title;
    document.querySelector("p.revenu").innerHTML=data.revenu;


    }

    requeteActeur(movieDB){
      //get credits
    }
    retourRequeteActeur(e){

    }
    afficheActeur(data){

    }
}











