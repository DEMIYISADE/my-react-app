import React from "react";
import axios from "axios";
import App from "./App";
import Weather from "./Weather";

export default function Date(){
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

  <App Time={time} DayTime ={dayTime}/>
}
