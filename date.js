var maintenant=new Date();
var jour=maintenant.getDate();
var mois=maintenant.getMonth()+1;
var an=maintenant.getFullYear();
document.write(jour,"/",mois,"/",an);

getWeather();


function getWeather() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let weatherData = JSON.parse(this.responseText)
            if (weatherData) {
                document.getElementById("weather").innerText = weatherData.main.temp + "°C"
            }

        }
    };

    xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?lat=48.5839200&lon=7.7455300&units=metric&APPID=5cb51ce8b8a0b840ba9c6b64206801e1', true);
    xmlhttp.send();
}
