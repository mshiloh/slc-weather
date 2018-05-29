import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
   return (
            <nav>
                <Link to="/" className="nav">Today's Forecast</Link>
                <Link to="/dailyforecast" className="nav">Weekly Forecast</Link>                
                <Link to="/liveweather" className="nav">Live Weather Stream</Link>
            </nav>
    )
}
export default Nav;