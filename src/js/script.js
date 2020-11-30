document.addEventListener("DOMContentLoaded",function(){
let connexion= new MovieDB();

connexion.requeteDernierFilm();
})

class MovieDB{

    constructor() {
        console.log("constructeur");

        this.APIkey="8ec3413c6e72c2abaf8cc8645163e2b6";

        this.lang="fr-CA"

        this.baseURL="https://api.themoviedb.org/3";

        this.imgPath="https://image.tmdb.org/t/p/";

        this.totalFilm=8;
    }
    requeteDernierFilm(){

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this));

        //requete.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=8ec3413c6e72c2abaf8cc8645163e2b6&language=fr-CA&page=1");
        requete.open("GET",this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1");

        requete.send();
    }
    retourRequeteDernierFilm(e){
        console.log("retour dernier film") ;

    let target= e.currentTarget;
    let data;


        data= JSON.parse(target.responseText).results;
        //sert à rendre le text plus lisible
        console.log(data);

        this.afficheDernierFilm(data);
    }
    afficheDernierFilm(data){

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].overview);
        }
        //début cours tp final partie 2
    }

}