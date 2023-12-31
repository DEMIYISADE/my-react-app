import React, {useState} from "react";
import axios from "axios";
import Weather from "./Weather";
import './App.css';
import Date from "./Date"

function App(props) {
  const [city, setCity] = useState(" ");
  const [change, setChange] = useState(" ");
  const [load, setLoad] = useState(true);

  let now = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[(now.getDay())];
  let hour = now.getHours();
  let minute = now.getMinutes();

  function correctMinute(){
    if (minute < 10){
      return minute = ("0" + minute);
    }else {
      return minute
    }
  }
  let dayTime = `${day} ${hour}:${correctMinute()} `;
  let time = `${hour}:${correctMinute()} `;

  
  if (load) {
    
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">

          <div className="border">
            <div className="row">
              <div className="col-3">
                Lisbon
              </div>
              <div className="col-3">
                Paris
              </div>
              <div className="col-3">
                Sydney
              </div>
              <div className="col-3">
                San Francisco
              </div>
            </div>
            <br/>
            <form id = "search-form" onSubmit={handleSubmit}>
            <input type="search" id = "city-selection" placeholder="Select a City" autoComplete="off" className="cityFinder" onChange={citySearch}/>
            <input type="submit" id = "search-click" value ="Search" className="search"/>
            <input type ="submit" id = "current-click" value ="Current" className="current"/>
            </form>
            <br/>
            <br/>
            <h4 className="concentration">
              <span id="city-onpage"> {change.name} </span>
              <br/>
              <span id="getCurrentTime"> {dayTime} </span>
              <br/>
              <span id="weatherDescription"> {change.description}</span>
            </h4>
            <br/>
            <div className="middle1">Humidity: {change.humidity}%</div>
            <div className="middle2"> Wind: {change.wind}km/h</div>
            <img src="/weather2.png" alt="cloud" width="50" className="imageChange" />
            <span className="deg1">{change.temperature}</span>
            <span className="deg2">
              <a href="/" className="active">℃</a>
              <span> | </span>
              <a href ="/" >℉</a>
            </span>
            <br/>
            <br/>
            <div className = "weatherForecast" id="forecast">
              <Weather cityName = {change.name} lon={change.coordinatesLong} lat= {change.coordinatesLat} Datetime={time}/>
            </div>
            <a href="https://github.com/DEMIYISADE/Weather-App-Clean-Coding--" target ="_blank" className="link" rel="noreferrer">
              Open-Source Code by Bidemi Olayisade
            </a>
          </div>
        </div>
      </header>
    </div>
  );
  }else{
    return(
      "Loading..."
    )
  }

  function handleSubmit(event){
    event.preventDefault();
    let apiKey ="bec7afc6a5f297d8e8a36230238a3ff6";
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(weatherApi).then(displayWeatherDetails);
  }

  function citySearch(events){
      setCity(events.target.value);
  }

  function displayWeatherDetails(response){

    if (setCity !== null){

     setChange({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinatesLong: response.data.coord.lon,
      coordinatesLat: response.data.coord.lat,
      name: response.data.name})
    } 
}
}

export default App;
