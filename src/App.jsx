import { useState, useEffect } from 'react'
import { weatherData } from './utils/weatherApi'
import  cutie from './assets/cutie.jpeg'

function App() {
  const getCuteMessage = (condition) => {
    switch (condition) {
      case 'Clear':
        return " It's sunny! Hope you wore sunscreen 🌞";
      case 'Clouds':
        return "Soft cloudy day, let's cuddle up ☁️";
      case 'Rain':
        return "Take your umbrella, cutie! ☔";
      case 'Snow':
        return "Snowy snuggles! Stay warm ❄️";
      case 'Thunderstorm':
        return "Stay inside and be safe ⚡";
      case 'Mist':
      case 'Fog':
        return "A little foggy... Let's eat thuppa and binge watch 🍲";
      default:
        return "Stay cozy and safe! 💖";
    }
  };
  
  const [weather, setWeather] = useState(null);
  const geolocationFunction = () => {
    const getPosition = (position) => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      weatherData(position.coords.latitude, position.coords.longitude).then(data=>setWeather(data))
    }
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getPosition)
    }
  }
  return (
    <>
      <div className='container'>
      <div className="header">
        <h1> Hello Cutie!!!</h1>
        <img src={cutie} alt="cute miffy" />
      </div>
      <div className='find-weather'>
        <button  onClick={geolocationFunction} >Find my Weather</button>
        {weather && (
  <div className="weather-info">
    <h2>Weather in {weather.name}</h2>
    <p>{weather.main.temp}°C</p>
    <p>{weather.weather[0].description}</p>
    <p>{getCuteMessage(weather.weather[0].main)}</p>
  </div>
)}

      </div>
      </div>
    </>
  )
}

export default App
