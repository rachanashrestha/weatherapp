
export function weatherData(lat, lon){
    const weather_api = import.meta.env.VITE_WEATHER_API
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api}&units=metric`
    return fetch(api_url)
    .then (response=> response.json())
    .then(data=>{console.log(data)
    return data;})
    

}
