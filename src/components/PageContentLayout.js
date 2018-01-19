import React from 'react';
import Description from './Description';
import BookingWidget from './BookingWidget';

const PageContentLayout = (props) => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-8">

                        <Description />

                    </div>
                    <div className="col-xs-12 col-md-4">

                        <BookingWidget 
                            values={props.values}  
                            handleAddAdultOne={props.handleAddAdultOne} 
                            handleMinusAdultOne={props.handleMinusAdultOne} 
                            handleAddChildrenOne={props.handleAddChildrenOne} 
                            handleMinusChildrenOne={props.handleMinusChildrenOne} 
                        />

                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default PageContentLayout;