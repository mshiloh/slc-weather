import React from "react";

import { Switch, Route } from "react-router-dom";

import Footer from "./Footer.js";

import HourlyForecast from "./pages/HourlyForecast.js";
import Nav from "./pages/Nav.js";
import CurrentForecast from "./pages/CurrentForecast.js";
import LiveWeather from "./pages/LiveWeather.js";
import DailyForecast from "./pages/DailyForecast.js";

function App(props) {
    return (
        <div className="app-wrapper">
            <CurrentForecast />
            <Nav />
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/" component={HourlyForecast}></Route>
                    <Route path="/liveweather" component={LiveWeather}></Route>
                    <Route path="/dailyforecast" component={DailyForecast}></Route>
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App;