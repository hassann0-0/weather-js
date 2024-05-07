const apiKey = "5da53edf8afec7c838fa3e5c5e769202"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lang=in&units=metric&q="

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon = document.querySelector(".weatherIcon")
searchbtn.onclick=function(){
    checkWeather(searchbox.value);
}
searchbox.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
            checkWeather(searchbox.value);
        }
})

async function checkWeather(cityname){
    let response = await fetch(apiURL+cityname+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".card").style.height="145px"
        
        return;
    }
    let data = await response.json();
    document.querySelector(".error").style.display="none";
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".tempmin").innerHTML=data.main.temp_min;
    document.querySelector(".tempmax").innerHTML=data.main.temp_max;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    document.querySelector(".card").style.height="570px"
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="media/clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="media/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="media/mist.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="media/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="media/rain.png"
    }
}
checkWeather(cairo);


