import React, {Component} from "react";
import Moment from "moment";

export default class MyDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFormatted : Moment().locale('fr').format('dddd Do MMMM, h:mm A').toString()
    };
  }
  tick = () => {
    this.setState({
      dateFormatted : Moment().locale('fr').format('dddd, MMMM Do, h:mm A').toString()
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const myDate = this.state.dateFormatted;
    return(
      <div className="myDate">{myDate}</div>
    );
  }
}