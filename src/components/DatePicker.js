import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class BookingDatePicker extends React.Component {
  
    constructor (props) {
    super(props)

    const minDate = "2018-01-16T00:00:00.000Z";
    const maxDate = "2018-01-26T00:00:00.000Z";

    this.state = {
      minDate: moment(minDate, moment.HTML5_FMT.DATETIME_LOCAL_MS),
      maxDate: moment(maxDate, moment.HTML5_FMT.DATETIME_LOCAL_MS)
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(date) {
    console.log('change');
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={this.state.minDate}
        maxDate={this.state.maxDate}
    />;
  }
}

export default BookingDatePicker;