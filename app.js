const api_key = "f75c8eeb533bd2f9d2cc9cb126f5e7d0";
fetch(`http://api.openweathermap.org/data/2.5/weather?q=milan&appid=${api_key}`, {mode: 'cors'})
.then(response => {
    if(!response.ok ) {
        throw new Error('Something went wrong : ' +  response.status)
    }
    return response.json()
})
.then(data => {
    console.log(data)
})