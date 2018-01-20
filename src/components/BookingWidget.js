import React from 'react';
import moment from 'moment';
import BookingDatePicker from './DatePicker';

import '../styles/bookingwidget.scss';


class BookingWidget extends React.Component {

    constructor(props){
        super(props);

        this.handleAddAdultOne      = this.handleAddAdultOne.bind(this);
        this.handleMinusAdultOne    = this.handleMinusAdultOne.bind(this);
        this.handleAddChildrenOne   = this.handleAddChildrenOne.bind(this);
        this.handleMinusChildrenOne = this.handleMinusChildrenOne.bind(this);
        this.handleOptionChange     = this.handleOptionChange.bind(this);

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

    handleOptionChange(e){
        e.preventDefault();
        const option = e.target.value;
        console.log('handle option change', option);
        this.props.handleOptionChange(option);
    }

    render(){
        return (
            <div>
                    <div>
                        {/* Booking Widget Header With Cost Summary */}
                        <div className="text-center widget--header">Adult {(this.props.values.adultPrice * this.props.values.adultQty).toFixed(2)} USD / Child {(this.props.values.childrenPrice * this.props.values.childrenQty).toFixed(2)} USD <i className="glyphicon glyphicon-question-sign"></i></div>
                    </div>
                    <div className="row widget--wrapper">
                        {/* Booking Widget Form */}
                        { this.props.values.testNumber }
                        
                        <form action="" className="">
                            <div className="form-group margin-header">
                                <div className="row">
                                    <div className="col-xs-12">
                                        {/* Booking Widget Package Selector */}
                                        <select className="form-control input--top-spacing" name="option" id="" onChange={this.handleOptionChange}>
                                            <option value="0">Please Select A Package</option>
                                            {
                                                this.props.values.variants.map((variant, index) => {
                                                    //check dates here if valid
                                                    if(moment().isBetween(`${variant.starts_on}`, `${variant.ends_on}`)){
                                                        return(
                                                            <option value={`${variant.id}`} key={`${variant.id}`}>{ `${variant.name}` }</option>
                                                        );
                                                    }else{
                                                        return(
                                                            <option value={`${variant.id}`} key={`${variant.id}`} disabled="true">{ `${variant.name}` }</option>
                                                    );
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-12">
                                        {/* Booking Widget Date Selector */}
                                        <label htmlFor="input_date"><i className="glyphicon glyphicon-calendar"></i> Select Date</label>
                                        <BookingDatePicker starts_on={this.props.values.starts_on} ends_on={this.props.values.ends_on} selectedOptionState={this.props.values.selectedOptionState} />
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
                                                <button onClick={this.handleMinusAdultOne} className="btn btn-default button--height" type="button" disabled={ this.props.values.selectedOptionState }>-</button>
                                            </span>
                                            <input id="quantity_adult" type="text" className="form-control input--disabled-background" value={this.props.values.adultQty} disabled />
                                            <span className="input-group-btn">
                                                <button onClick={this.handleAddAdultOne} className="btn btn-default button--height" type="button" disabled={ this.props.values.selectedOptionState }>+</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <label htmlFor="quantity_child">Child <i className="glyphicon glyphicon-question-sign"></i></label>
                                        <div className="input-group col-xs-10">
                                            <span className="input-group-btn">
                                                <button onClick={this.handleMinusChildrenOne} className="btn btn-default button--height" type="button" disabled={ this.props.values.selectedOptionState }>-</button>
                                            </span>
                                            <input id="quantity_child" type="text" className="form-control input--disabled-background" value={this.props.values.childrenQty} disabled />
                                            <span className="input-group-btn">
                                                <button onClick={this.handleAddChildrenOne} className="btn btn-default button--height" type="button" disabled={ this.props.values.selectedOptionState }>+</button>
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
                                        <div className="text-center widget--total"><h4>Total Cost: <span className="color--danger"><strong>{ ((this.props.values.adultPrice * this.props.values.adultQty) + (this.props.values.childrenPrice * this.props.values.childrenQty)).toFixed(2) } </strong>USD</span></h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-12">
                                        {/* Booking Widget Booking Button */}
                                        <button className="btn btn-primary btn-lg col-xs-12 button--primary" disabled={ this.props.values.selectedOptionState }>Instant Book</button>
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