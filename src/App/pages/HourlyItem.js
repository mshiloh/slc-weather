import React from "react";

function HourlyItem(props) {
    const { index, summary, icon, precipProbability, temperature, humidity, windSpeed, apparentTemperature } = props;
    let time = new Date((index * 3600000) + new Date().getTime()).toLocaleTimeString();
    return (
        <div className="hourlyWrapper">
            <div className="hourlyWeatherContainer">
                <div className="hrTimeContainer">
                    <p className="timHr">{time}</p>
                    <p className="sumHr">{summary}</p>
                </div>
                <div className="hourlyWeatherImageSection">
                    <img className="hourlyIcon icnHr" src={require(`../../images/${icon}.png`)} alt="Weather Icon" />
                </div>
                <div className="hrTemperatureContainer">
                    <p className="tmpHr">{temperature}°</p>
                    <p className="feeHr">RealFeel {apparentTemperature}°</p>
                </div>
                <div className="hrHumidityContainer">
                    <p className="humHr">Humidity</p>
                    <p className="hceHr">{humidity}%</p>
                </div>
                <div className="hrPrecipitationContainer">
                    <p className="prcHr">Precipitation</p>
                    <p className="pceHr">{precipProbability}%</p>
                </div>
                <div className="hrWindContainer">
                    <p className="winHr">Wind</p>
                    <p className="wceHr">{windSpeed} mph</p>
                </div>
                <p className="hrBorder"></p>
            </div>
        </div>
    )
}

export default HourlyItem;