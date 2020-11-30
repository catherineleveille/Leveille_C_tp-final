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


    }

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe1xyXG5sZXQgY29ubmV4aW9uPSBuZXcgTW92aWVEQigpO1xyXG5cclxuY29ubmV4aW9uLnJlcXVldGVEZXJuaWVyRmlsbSgpO1xyXG59KVxyXG5cclxuY2xhc3MgTW92aWVEQntcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdGV1clwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5BUElrZXk9XCI4ZWMzNDEzYzZlNzJjMmFiYWY4Y2M4NjQ1MTYzZTJiNlwiO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmc9XCJmci1DQVwiXHJcblxyXG4gICAgICAgIHRoaXMuYmFzZVVSTD1cImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcclxuXHJcbiAgICAgICAgdGhpcy5pbWdQYXRoPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCI7XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxGaWxtPTg7XHJcbiAgICB9XHJcbiAgICByZXF1ZXRlRGVybmllckZpbG0oKXtcclxuXHJcbiAgICAgICAgbGV0IHJlcXVldGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91clJlcXVldGVEZXJuaWVyRmlsbS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy9yZXF1ZXRlLm9wZW4oXCJHRVRcIixcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT04ZWMzNDEzYzZlNzJjMmFiYWY4Y2M4NjQ1MTYzZTJiNiZsYW5ndWFnZT1mci1DQSZwYWdlPTFcIik7XHJcbiAgICAgICAgcmVxdWV0ZS5vcGVuKFwiR0VUXCIsdGhpcy5iYXNlVVJMICsgXCIvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT1cIiArIHRoaXMuQVBJa2V5ICsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcgKyBcIiZwYWdlPTFcIik7XHJcblxyXG4gICAgICAgIHJlcXVldGUuc2VuZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0b3VyUmVxdWV0ZURlcm5pZXJGaWxtKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3VyIGRlcm5pZXIgZmlsbVwiKSA7XHJcblxyXG4gICAgbGV0IHRhcmdldD0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgbGV0IGRhdGE7XHJcblxyXG5cclxuICAgICAgICBkYXRhPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgLy9zZXJ0IMOgIHJlbmRyZSBsZSB0ZXh0IHBsdXMgbGlzaWJsZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
