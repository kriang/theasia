import React from 'react';
import Header from './Header';
import HeroSlider from './HeroSlider';
import PageContentLayout from './PageContentLayout';



class TheAsia extends React.Component {

    constructor(props){
        
        super(props);

        this.handleAddAdultOne      = this.handleAddAdultOne.bind(this);
        this.handleMinusAdultOne    = this.handleMinusAdultOne.bind(this);
        this.handleAddChildrenOne   = this.handleAddChildrenOne.bind(this);
        this.handleMinusChildrenOne = this.handleMinusChildrenOne.bind(this);

        this.state = {
            //default values to be replaced with data from the database
            adultPrice: 26.00,
            childrenPrice: 20.06,
            adultMinQty: 2,
            adultQty: 2,
            childrenMinQty: 0,
            childrenQty: 0
        };

    }

    handleAddAdultOne() {
        
        this.setState((prevState) => {
            return {
                adultQty: prevState.adultQty + 1
            }
        });
        

    }

    handleMinusAdultOne() {

        if(this.state.adultQty > this.state.adultMinQty){
            this.setState((prevState) => {
                return {
                    adultQty: prevState.adultQty - 1
                }
            });
        }

    }

    handleAddChildrenOne() {
            
        this.setState((prevState) => {
            return {
                childrenQty: prevState.childrenQty + 1
            }
        });

    }

    handleMinusChildrenOne() {
            
        if(this.state.childrenQty > this.state.childrenMinQty){
            this.setState((prevState) => {
                return {
                    childrenQty: prevState.childrenQty - 1
                }
            });
        }

    }


    render() {
        return (
            <div>
                <Header />
                <main>
                    <HeroSlider />
                    <PageContentLayout
                        values={this.state} 
                        handleAddAdultOne={this.handleAddAdultOne} 
                        handleMinusAdultOne={this.handleMinusAdultOne} 
                        handleAddChildrenOne={this.handleAddChildrenOne} 
                        handleMinusChildrenOne={this.handleMinusChildrenOne}
                    />
                </main>
            </div>
        );
    }
}

export default TheAsia;