function search(){
    destination=dest.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=5b4bee0ba241d092159faf007e166080`).then(data=>data.json())
    .then(data=>dispayData(data))

}

function dispayData(destinationDetails){
    Destination=destinationDetails.name
    weather=destinationDetails.weather[0].main
    description=destinationDetails.weather[0].description
    temperature=destinationDetails.main.temp
    c = Math.floor(temperature - 273.15)
    humidity=destinationDetails.main.humidity
    pressure=destinationDetails.main.pressure
    wind=destinationDetails.wind.speed
    visibility=destinationDetails.visibility
    l1.innerHTML=`${Destination}`
    t1.innerHTML=`${c}&#176;C`
    m1.innerHTML=`${weather}`
    v1.innerHTML=`${visibility}`
    h1.innerHTML=`${humidity}%`
    w1.innerHTML=`${wind}km/h`
    p1.innerHTML=`${pressure}`
}