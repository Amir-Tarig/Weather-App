function fetchWeather(location){
    const api_key = "f75c8eeb533bd2f9d2cc9cb126f5e7d0";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`, {mode: 'cors'})
    .then(response => {
        if(!response.ok ) {
            throw new Error('Something went wrong : ' +  response.status)
        }
        return response.json()
    })
    .then( displayData)
}

let searchBar = document.querySelector('.searchBar')
searchBar.addEventListener('keypress', (e) =>  {
    if(e.keyCode == 13){
       fetchWeather(searchBar.value)
       searchBar.value = ''
    }
})

function displayData(weather) {
    console.log(weather)
    let now = new Date()

    let date = document.querySelector('.date')
    date.innerHTML = dateBuilder(now)

   let city = document.querySelector('.city')
   city.textContent = `${weather.name}, ${weather.sys.country}`

   let dis = document.querySelector('.dis')
   dis.innerHTML =  `${weather.weather[0].description} <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"></img>`

   let temp = document.querySelector('.temp')
   temp.innerHTML = Math.floor(weather.main.temp) + '&deg;' + 'c'

   let minMax = document.querySelector('.min-max')
   minMax.innerHTML = `${Math.floor(weather.main.temp_min)} &deg;C / ${Math.floor(weather.main.temp_max)} &deg;C`
//    let sun = convertTime(weather.sys.sunrise)
//    console.log(sun)
}

// function convertTime(unixTime){
//     let dt = new Date(unixTime * 1000)
//     let h = dt.getHours()
//     let m = "0" + dt.getMinutes()
//     let t = h + ":" + m.substr(-2)
//     return t
// }

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
}
