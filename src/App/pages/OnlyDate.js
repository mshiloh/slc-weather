import React, {Component} from "react";
import Moment from "moment";

export default class OnlyDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFormatted : Moment().locale('fr').format('dddd Do MMMM').toString()
    };
  }
  tick = () => {
    this.setState({
      dateFormatted : Moment().locale('fr').format('dddd, MMMM Do').toString()
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const onlyDate = this.state.dateFormatted;
    return(
      <div className="OnlyDate">{onlyDate}</div>
    );
  }
}