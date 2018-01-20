import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class BookingDatePicker extends React.Component {
  
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      startDate: moment()
    };
    
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={moment(this.props.starts_on, moment.HTML5_FMT.DATETIME_LOCAL_MS)}
        maxDate={moment(this.props.ends_on, moment.HTML5_FMT.DATETIME_LOCAL_MS)}
        disabled={this.props.selectedOptionState}
    />;
  }
}

export default BookingDatePicker;