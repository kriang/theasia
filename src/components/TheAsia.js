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
        this.handleOptionChange     = this.handleOptionChange.bind(this);

        this.state = {
            //default values to be replaced with data from the database
            adultPrice: 0,
            childrenPrice: 0,
            adultMinQty: 0,
            adultQty: 0,
            childrenMinQty: 0,
            childrenQty: 0,
            selectedOption: 0,
            selectedOptionState: true,
            starts_on: "",
            ends_on: "",
            variants: [
                {
                    id: 85,
                    name: "Universal Studio Singapore with 1 Day Hopper Pass",
                    starts_on: "2016-12-26T00:00:00.000Z",
                    ends_on: "2017-12-26T00:00:00.000Z",
                    price: {
                        adult_price: 26,
                        child_price: 20.06,
                        pax: 2
                    }
                },
                {
                    id: 176,
                    name: "Universal Studio Singapore with 2 Ways Shuttle",
                    starts_on: "2017-12-29T00:00:00.000Z",
                    ends_on: "2018-03-28T00:00:00.000Z",
                    price: {
                        adult_price: 26,
                        child_price: 21.25,
                        pax: 1
                    }
                }
            ]
        };

    }

    componentDidMount(){
        console.log('Component Mount');
    }

    handleOptionChange(option){

        const variants = this.state.variants;
        variants.map((variant) => {
            if(variant.id == option){
                //console.log(`${variant.id} - ${option}`);
                this.setState(() => {
                    return {
                        adultPrice: variant.price.adult_price,
                        childrenPrice: variant.price.child_price,
                        adultMinQty: variant.price.pax,
                        adultQty: variant.price.pax,
                        selectedOption: variant.id,
                        starts_on: variant.starts_on,
                        ends_on: variant.ends_on,
                        selectedOption: variant.id,
                        selectedOptionState: false

                    }
                });
            }else if(option == 0){
                this.setState(() => {
                    return {
                        adultPrice: 0,
                        childrenPrice: 0,
                        adultMinQty: 0,
                        adultQty: 0,
                        childrenMinQty: 0,
                        childrenQty: 0,
                        selectedOption: 0,
                        selectedOptionState: true
                    }
                });
            }
        })
    

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
                        handleOptionChange={this.handleOptionChange}
                    />
                </main>
            </div>
        );
    }
}

export default TheAsia;