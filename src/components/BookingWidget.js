import React from 'react';
import BookingDatePicker from './DatePicker';
import '../styles/bookingwidget.scss';


class BookingWidget extends React.Component {

    constructor(props){
        super(props);

        this.handleAddAdultOne      = this.handleAddAdultOne.bind(this);
        this.handleMinusAdultOne    = this.handleMinusAdultOne.bind(this);
        this.handleAddChildrenOne   = this.handleAddChildrenOne.bind(this);
        this.handleMinusChildrenOne = this.handleMinusChildrenOne.bind(this);
    }

    handleAddAdultOne(){
        console.log('handleAddAdultOne');
        this.props.handleAddAdultOne();
    }

    handleMinusAdultOne(){
        console.log('handleMinusAdultOne');
        this.props.handleMinusAdultOne();
    }

    handleAddChildrenOne(){
        console.log('handleAddChildrenOne');
        this.props.handleAddChildrenOne();
    }

    handleMinusChildrenOne(){
        console.log('handleMinusChildrenOne');
        this.props.handleMinusChildrenOne();
    }

    render(){
        return (
            <div>
                    <div>
                        {/* Booking Widget Header With Cost Summary */}
                        <div className="text-center widget-header">Adult {(this.props.values.adultPrice * this.props.values.adultQty).toFixed(2)} USD / Child {(this.props.values.childrenPrice * this.props.values.childrenQty).toFixed(2)} USD <i className="glyphicon glyphicon-question-sign"></i></div>
                    </div>
                    <div className="row widget-wrapper">
                        {/* Booking Widget Form */}
                        
                        <form action="" className="">
                            <div className="form-group margin-header">
                                <div className="row">
                                    <div className="col-xs-12">
                                        {/* Booking Widget Package Selector */}
                                        <select className="form-control" name="" id="">
                                        <option value="0">Universal Studio Singapore</option>
                                            <option value="1">Universal Studio Singapore with 1 Day Hopper Pass</option>
                                            <option value="2">Universal Studio Singapore with 2 Ways Shuttle</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-12">
                                        {/* Booking Widget Date Selector */}
                                        <label htmlFor="input_date"><i className="glyphicon glyphicon-calendar"></i> Select Date</label>
                                        <BookingDatePicker />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* Booking Widget Quantity Selector */}
                                <div className="row">
                                    <div className="col-xs-6">
                                        <label htmlFor="quantity_adult">Adult</label>
                                        <div className="input-group col-xs-10">
                                            <span className="input-group-btn">
                                                <button onClick={this.handleMinusAdultOne} className="btn btn-default input-height" type="button">-</button>
                                            </span>
                                            <input id="quantity_adult" type="text" className="form-control border-modifier" value={this.props.values.adultQty} disabled />
                                            <span className="input-group-btn">
                                                <button onClick={this.handleAddAdultOne} className="btn btn-default input-height" type="button">+</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <label htmlFor="quantity_child">Child <i className="glyphicon glyphicon-question-sign"></i></label>
                                        <div className="input-group col-xs-10">
                                            <span className="input-group-btn">
                                                <button onClick={this.handleMinusChildrenOne} className="btn btn-default input-height" type="button">-</button>
                                            </span>
                                            <input id="quantity_child" type="text" className="form-control border-modifier" value={this.props.values.childrenQty} disabled />
                                            <span className="input-group-btn">
                                                <button onClick={this.handleAddChildrenOne} className="btn btn-default input-height" type="button">+</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-12">
                                        {/* Booking Widget Booking Selection Summary */}
                                        <table className="table">
                                            <tbody>    
                                                <tr>
                                                    <th></th>
                                                    <th>Price</th>
                                                    <th>Pax</th>
                                                    <th>Total</th>
                                                </tr>
                                                <tr>
                                                    <td>Adult</td>
                                                    <td>{this.props.values.adultPrice}</td>
                                                    <td>{this.props.values.adultQty}</td>
                                                    <td>{(this.props.values.adultPrice * this.props.values.adultQty).toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Children</td>
                                                    <td>{this.props.values.childrenPrice}</td>
                                                    <td>{this.props.values.childrenQty}</td>
                                                    <td>{(this.props.values.childrenPrice * this.props.values.childrenQty).toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* Booking Widget Booking Total Cost */}
                                        <div className="text-center widget-total"><h4>Total Cost: <span className="color-danger"><strong>{((this.props.values.adultPrice * this.props.values.adultQty) + (this.props.values.childrenPrice * this.props.values.childrenQty)).toFixed(2)} </strong>USD</span></h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-12">
                                        {/* Booking Widget Booking Button */}
                                        <button className="btn btn-primary btn-lg col-xs-12 button-primary">Instant Book</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
            </div>
        );
    }

}

export default BookingWidget;