import React, { Component } from "react";

import { connect } from "react-redux";

import { getDaily } from "../../redux/daily.js";

import DailyItem from "./DailyItem.js";

class DailyForecast extends Component {
    componentDidMount() {
        this.props.getDaily();
    }

    render() {
        const { data, loading, errMsg } = this.props;
        const dailyWeather = data.data.map((daily, i) => <DailyItem key={daily + i} {...daily} index={i}></DailyItem> )
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
                    <p className="forecastByWeekHeader">Weather this Week</p>
                    {dailyWeather}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.daily;
}

export default connect(mapStateToProps, { getDaily })(DailyForecast);