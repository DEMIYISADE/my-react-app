import React, {useState} from "react";
import axios from "axios";
import App from "./App";

export default function Weather (props){
    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let firstPart = (<div className="col-2">
    <div className = "insideCol2">{props.Datetime}</div>
    <span>Tues</span>
    <div className ="insideCol2">
        <img src="./weather2.png" alt = "weather" width ="70"/>
    </div>
    <div className ="insideCol2"> {props.data.temperature}℃ <span> | 8℉</span></div>
    </div>)
    
    return(
        <div className="row">
        {days.map(function(day, index){
            return (
                    firstPart)
        })}
    </div>
    )}