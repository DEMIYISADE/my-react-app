import React, {useState} from "react";
import axios from "axios";
import App from "./App";
import Date from "./Date";

export default function Weather (props){
    const [onload, setOnLoad] = useState(true);

    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    

    if (onload) {
        let query = props.cityName;
        let appkey = "e5t51009395b749oa22101e37e04fc92";
        let apiUrl2 = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${appkey}&units=metric`;
        axios.get(apiUrl2).then(showForeCast);
    }

    function showForeCast(response){
        let maxData = response.data.daily;
        let maxTemp = 8;
        let minTemp = 7; 
    }
    return(
        <div className="row">
        {days.map(function(day, index){
            return (<div className="col-2" key = {index}>
            <div className = "insideCol2">{props.Datetime}</div>
            <span>Tues</span>
            <div className ="insideCol2">
                <img src="./weather2.png" alt = "weather" width ="70"/>
            </div>
            <div className ="insideCol2"> 7℃ <span> | 8℉</span></div>
            </div>)
        })}
    </div>
    )}