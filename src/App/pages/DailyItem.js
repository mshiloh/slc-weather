import React from "react";

function DailyItem(props) {
    const { index, summary, icon, precipProbability, temperatureHigh, temperatureLow, humidity, windSpeed } = props;
    let time = new Date((index * 3600000) + new Date().getDate()).toLocaleDateString();
    return (
        <div className="weeklyWrapper">
            <div className="weeklyWeatherContainer">
                <div className="wkTimeContainer">
                    <p className="wtim">{time}</p>
                    <p className="wsum">{summary}</p>
                </div>
                <div className="weeklylyWeatherImageSection">
                    <img className="wicn" src={require(`../../images/${icon}.png`)} alt="Weather Icon" />
                </div>
                <div className="wkTemperatureContainer">
                    <p className="whttl">High</p>
                    <p className="whtmp">{temperatureHigh}°</p>
                    <p className="wlttl">Low</p>
                    <p className="wltmp">{temperatureLow}°</p>
                </div>
                <div className="wkInfoForecastDetails">
                    <p className="whce">Humidity: {humidity}%</p>
                    <p className="wpce">Precipitation: {precipProbability}%</p>
                    <p className="wwce">Wind Speed: {windSpeed} mph</p>
                </div>
                <p className="wkBorder"></p>
            </div>
        </div>
    )
}
export default DailyItem;