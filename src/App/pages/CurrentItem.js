import React from "react";
import MyDate from "./MyDate.js";

function CurrentItem(props) {
    const { currently } = props;
    const { summary, icon, precipProbability, temperature, humidity, windSpeed } = currently;
    return (

        <div className="headerWrapper">
            <div className="headerContainer">
                <div className="headerContent">
                    <div className="titleAndDate">
                    <p className="dslc">Salt Lake City, UT</p>
                    <div className="dtim"><MyDate /></div>
                    </div>
                    <div className="forecastInfo">
                        <div className="currentImage">
                            <img className="dicn" src={require(`../../images/${icon}.png`)} alt="Weather Icon" />
                        </div>
                        <p className="dsum">{summary}</p>                                                
                        <p className="dtmp">{temperature}°</p>
                        <div className="forecastDetails">
                            <p className="dprc">Precipitation: {precipProbability}%</p>
                            <p className="dhum">Humidity: {humidity}%</p>
                            <p className="dwin">Wind: {windSpeed} mph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentItem;