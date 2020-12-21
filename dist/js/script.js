document.addEventListener("DOMContentLoaded", function () {

    let connexion = new MovieDB();

    if (document.location.pathname.search("fiche-film.html")>0) {
        let params = new URL(document.location).searchParams;

    } else {
        connexion.requeteDernierFilm();
    }
});

class MovieDB {

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

    requeteInfoFilm(movieId) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("loadend", this.retourRequeteInfoFilm.bind(this));

        //requete.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=8ec3413c6e72c2abaf8cc8645163e2b6&language=fr-CA&page=1");
        xhr.open("GET", this.baseURL + "/movie/" + movieId + "?api_key=" + this.APIkey + "&language=" + this.lang);
        //initialise la requête pour récupérer les films

        xhr.send();
    }

    afficheInfoFilm(data) {
        document.querySelector("h1").innerHTML = data.title;
        document.querySelector("p.revenu").innerHTML = data.revenu;

        this.requeteActeur(data)


    }

    requeteActeur(movieId) {
        //get credits
    }

    retourRequeteActeur(e) {

    }

    afficheActeur(data) {

    }

}









//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBjb25uZXhpb24gPSBuZXcgTW92aWVEQigpO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zZWFyY2goXCJmaWNoZS1maWxtLmh0bWxcIik+MCkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uKS5zZWFyY2hQYXJhbXM7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25uZXhpb24ucmVxdWV0ZURlcm5pZXJGaWxtKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgTW92aWVEQiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RldXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMuQVBJa2V5ID0gXCI4ZWMzNDEzYzZlNzJjMmFiYWY4Y2M4NjQ1MTYzZTJiNlwiO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmcgPSBcImZyLUNBXCJcclxuXHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCI7XHJcblxyXG4gICAgICAgIHRoaXMuaW1nUGF0aCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCI7XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxGaWxtID0gODtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXRlRGVybmllckZpbG0oKSB7XHJcbiAgICAgICAgLy9vYmpldCBxdWkgcGVybWV0IGQnYXBwZWxlciBkZXMgcGFnZXMgd2VicyBzYW5zIHJhZnJhaWNoaXIgbGEgcGFnZVxyXG5cclxuICAgICAgICBsZXQgcmVxdWV0ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICByZXF1ZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIHRoaXMucmV0b3VyUmVxdWV0ZURlcm5pZXJGaWxtLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvL3JlcXVldGUub3BlbihcIkdFVFwiLFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PThlYzM0MTNjNmU3MmMyYWJhZjhjYzg2NDUxNjNlMmI2Jmxhbmd1YWdlPWZyLUNBJnBhZ2U9MVwiKTtcclxuICAgICAgICByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgdGhpcy5iYXNlVVJMICsgXCIvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT1cIiArIHRoaXMuQVBJa2V5ICsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcgKyBcIiZwYWdlPTFcIik7XHJcbiAgICAgICAgLy9pbml0aWFsaXNlIGxhIHJlcXXDqnRlIHBvdXIgcsOpY3Vww6lyZXIgbGVzIGZpbG1zXHJcblxyXG4gICAgICAgIHJlcXVldGUuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTG9yc3F1ZSBsYSByZXF1w6p0ZSByZXZpZW50LCBsJ8OpY291dGV1ciBhcHBlbGxlIGNldHRlIGZvbmN0aW9uXHJcbiAgICByZXRvdXJSZXF1ZXRlRGVybmllckZpbG0oZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3VyIGRlcm5pZXIgZmlsbVwiKTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBsZXQgZGF0YTtcclxuXHJcbiAgICAgICAgLy9sZXMgZG9ubsOpZXMgcmXDp3VlcyBzb250IGVuIGZvcm1hdCB0ZXh0LlxyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5hZmZpY2hlRGVybmllckZpbG0oZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZURlcm5pZXJGaWxtKGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxGaWxtOyBpKyspIHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdW5BcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wbGF0ZT5hcnRpY2xlLmZpbG1cIikuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdW5BcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS5pbm5lckhUTUwgPSBkYXRhW2ldLnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgdW5BcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCJwLmRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IGRhdGFbaV0ub3ZlcnZpZXcgfHwgXCJQYXMgZGUgZGVzY3JpcHRpb24gXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3JjID0gdGhpcy5pbWdQYXRoICsgXCJ3NTAwXCIgKyBkYXRhW2ldLnBvc3Rlcl9wYXRoO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcmMpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVuZUltYWdlID0gdW5BcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIHVuZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xyXG4gICAgICAgICAgICB1bmVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgZGF0YVtpXS50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICB1bkFydGljbGUucXVlcnlTZWxlY3RvcihcImFcIikuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImZpY2hlLWZpbG0uaHRtbD9pZD1cIiArIGRhdGFbaV0uaWQpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ZS1maWxtc1wiKS5hcHBlbmRDaGlsZCh1bkFydGljbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXRlSW5mb0ZpbG0obW92aWVJZCkge1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJSZXF1ZXRlSW5mb0ZpbG0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vcmVxdWV0ZS5vcGVuKFwiR0VUXCIsXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9OGVjMzQxM2M2ZTcyYzJhYmFmOGNjODY0NTE2M2UyYjYmbGFuZ3VhZ2U9ZnItQ0EmcGFnZT0xXCIpO1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHRoaXMuYmFzZVVSTCArIFwiL21vdmllL1wiICsgbW92aWVJZCArIFwiP2FwaV9rZXk9XCIgKyB0aGlzLkFQSWtleSArIFwiJmxhbmd1YWdlPVwiICsgdGhpcy5sYW5nKTtcclxuICAgICAgICAvL2luaXRpYWxpc2UgbGEgcmVxdcOqdGUgcG91ciByw6ljdXDDqXJlciBsZXMgZmlsbXNcclxuXHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlSW5mb0ZpbG0oZGF0YSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS5pbm5lckhUTUwgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwLnJldmVudVwiKS5pbm5lckhUTUwgPSBkYXRhLnJldmVudTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXF1ZXRlQWN0ZXVyKGRhdGEpXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXRlQWN0ZXVyKG1vdmllSWQpIHtcclxuICAgICAgICAvL2dldCBjcmVkaXRzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0b3VyUmVxdWV0ZUFjdGV1cihlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVBY3RldXIoZGF0YSkge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
