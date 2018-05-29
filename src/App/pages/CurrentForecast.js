import React, { Component } from "react";

import { connect } from "react-redux";

import { getWeather } from "../../redux/weather.js";

import CurrentItem from "./CurrentItem.js";

class CurrentForecast extends Component {
    componentDidMount() {
        this.props.getWeather();

    }

    render() {
        const { data, loading, errMsg } = this.props;
        const currentWeather = <CurrentItem{...data}></CurrentItem>

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
                    {currentWeather}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.weather
}

export default connect(mapStateToProps, { getWeather })(CurrentForecast);

