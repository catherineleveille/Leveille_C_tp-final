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

    this.requeteActeur(data)


    }

    requeteActeur(movieId){
      //get credits
    }
    retourRequeteActeur(e){

    }
    afficheActeur(data){

    }
}












//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGNvbm5leGlvbiA9IG5ldyBNb3ZpZURCKCk7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNlYXJjaChcImZpY2hlLWZpbG0uaHRtbFwiKT4wKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24pLnNlYXJjaFBhcmFtcztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG0oKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jbGFzcyBNb3ZpZURCe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0ZXVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkFQSWtleSA9IFwiOGVjMzQxM2M2ZTcyYzJhYmFmOGNjODY0NTE2M2UyYjZcIjtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5nID0gXCJmci1DQVwiXHJcblxyXG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvM1wiO1xyXG5cclxuICAgICAgICB0aGlzLmltZ1BhdGggPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsRmlsbSA9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtKCkge1xyXG4gICAgICAgIC8vb2JqZXQgcXVpIHBlcm1ldCBkJ2FwcGVsZXIgZGVzIHBhZ2VzIHdlYnMgc2FucyByYWZyYWljaGlyIGxhIHBhZ2VcclxuXHJcbiAgICAgICAgbGV0IHJlcXVldGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91clJlcXVldGVEZXJuaWVyRmlsbS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy9yZXF1ZXRlLm9wZW4oXCJHRVRcIixcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT04ZWMzNDEzYzZlNzJjMmFiYWY4Y2M4NjQ1MTYzZTJiNiZsYW5ndWFnZT1mci1DQSZwYWdlPTFcIik7XHJcbiAgICAgICAgcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIHRoaXMuYmFzZVVSTCArIFwiL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9XCIgKyB0aGlzLkFQSWtleSArIFwiJmxhbmd1YWdlPVwiICsgdGhpcy5sYW5nICsgXCImcGFnZT0xXCIpO1xyXG4gICAgICAgIC8vaW5pdGlhbGlzZSBsYSByZXF1w6p0ZSBwb3VyIHLDqWN1cMOpcmVyIGxlcyBmaWxtc1xyXG5cclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0xvcnNxdWUgbGEgcmVxdcOqdGUgcmV2aWVudCwgbCfDqWNvdXRldXIgYXBwZWxsZSBjZXR0ZSBmb25jdGlvblxyXG4gICAgcmV0b3VyUmVxdWV0ZURlcm5pZXJGaWxtKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJldG91ciBkZXJuaWVyIGZpbG1cIik7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcblxyXG4gICAgICAgIC8vbGVzIGRvbm7DqWVzIHJlw6d1ZXMgc29udCBlbiBmb3JtYXQgdGV4dC5cclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh0YXJnZXQucmVzcG9uc2VUZXh0KS5yZXN1bHRzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuYWZmaWNoZURlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVEZXJuaWVyRmlsbShkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsRmlsbTsgaSsrKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHVuQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGxhdGU+YXJ0aWNsZS5maWxtXCIpLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiaDJcIikuaW5uZXJIVE1MID0gZGF0YVtpXS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwicC5kZXNjcmlwdGlvblwiKS5pbm5lckhUTUwgPSBkYXRhW2ldLm92ZXJ2aWV3IHx8IFwiUGFzIGRlIGRlc2NyaXB0aW9uIFwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNyYyA9IHRoaXMuaW1nUGF0aCArIFwidzUwMFwiICsgZGF0YVtpXS5wb3N0ZXJfcGF0aDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3JjKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1bmVJbWFnZSA9IHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xyXG4gICAgICAgICAgICB1bmVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcclxuICAgICAgICAgICAgdW5lSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGRhdGFbaV0udGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgdW5BcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJmaWNoZS1maWxtLmh0bWw/aWQ9XCIgKyBkYXRhW2ldLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdGUtZmlsbXNcIikuYXBwZW5kQ2hpbGQodW5BcnRpY2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5yZXF1ZXRlSW5mb0ZpbG0obW92aWVJZCl7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJSZXF1ZXRlSW5mb0ZpbG0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy9yZXF1ZXRlLm9wZW4oXCJHRVRcIixcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT04ZWMzNDEzYzZlNzJjMmFiYWY4Y2M4NjQ1MTYzZTJiNiZsYW5ndWFnZT1mci1DQSZwYWdlPTFcIik7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCB0aGlzLmJhc2VVUkwgKyBcIi9tb3ZpZS9cIittb3ZpZUlkICsgXCI/YXBpX2tleT1cIit0aGlzLkFQSWtleSsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcpO1xyXG4gICAgLy9pbml0aWFsaXNlIGxhIHJlcXXDqnRlIHBvdXIgcsOpY3Vww6lyZXIgbGVzIGZpbG1zXHJcblxyXG4gICAgeGhyLnNlbmQoKTtcclxufVxyXG5hZmZpY2hlSW5mb0ZpbG0oZGF0YSl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikuaW5uZXJIVE1MPWRhdGEudGl0bGU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicC5yZXZlbnVcIikuaW5uZXJIVE1MPWRhdGEucmV2ZW51O1xyXG5cclxuICAgIHRoaXMucmVxdWV0ZUFjdGV1cihkYXRhKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZUFjdGV1cihtb3ZpZUlkKXtcclxuICAgICAgLy9nZXQgY3JlZGl0c1xyXG4gICAgfVxyXG4gICAgcmV0b3VyUmVxdWV0ZUFjdGV1cihlKXtcclxuXHJcbiAgICB9XHJcbiAgICBhZmZpY2hlQWN0ZXVyKGRhdGEpe1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
