import React, { Component } from "react";

import { connect } from "react-redux";

import { getHourly } from "../../redux/hourly.js";

import HourlyItem from "./HourlyItem.js";



class HourlyForecast extends Component {
    componentDidMount() {
        this.props.getHourly();
    }

    render() {
        const { data, loading, errMsg } = this.props;
        const hourlyWeather = data.data.map((hourly, i) => <HourlyItem key={hourly + i} {...hourly} index={i}></HourlyItem>)
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    <p className="forecastByHourHeader">Forecast by the Hour</p>
                    <div className="onlyDate">
                    </div>
                    {hourlyWeather}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.hourly;
}

export default connect(mapStateToProps, { getHourly })(HourlyForecast);