import "./WeatherApp.css";
import WeatherCard from "./WeatherCard.jsx";
import SearchBox from "./SeachBox.jsx";
import { useState } from "react";
function WeatherApp(){
    const [weatherData,setWeatherData]=useState({
    city: "Hyderabad",
    feelsLike: 35.53,
    temp: 37.97,
    maxTemp: 37.97,
    minTemp: 37.97,
    humidity: 14,
    weather: "broken clouds",
    });

    let updateData=(newData)=>{
        setWeatherData(newData);
    }
    return (
        <div className="WeatherApp">
            <h1>Weather App</h1>
            <SearchBox updateData={updateData}/>
            <WeatherCard data={weatherData}/>
        </div>
    )
}

export default WeatherApp