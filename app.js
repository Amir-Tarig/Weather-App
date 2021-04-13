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
   let city = document.querySelector('.city').textContent = `${weather.name}, ${weather.sys.country}`
   let dis = document.querySelector('.dis').innerHTML = 
   `${weather.weather[0].description} <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"></img>`
}
