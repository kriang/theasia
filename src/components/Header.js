import React from 'react';
import '../styles/header.scss';

const Header = () => {
        
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 col-md-1">
                            <img src="http://ex.theasia.com/en/images/logo_v2.0.svg" alt="The Asia" className="logo" />
                        </div>
                        <div className="col-xs-8 col-md-3">
                            <div className="input-group header-search">
                                <input type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"><i className="glyphicon glyphicon-search"></i></button>
                                </span>
                            </div>
                        </div>
                        <div className="col-xs-2 col-md-6 pull-right">
                            <ul className="nav nav-pills pull-right hidden-xs hidden-sm">
                                <li role="presentation" className="active"><a href="#">Home</a></li>
                                <li role="presentation"><a href="#">Cities</a></li>
                                <li role="presentation"><a href="#">Blog</a></li>
                                <li role="presentation"><a href="#">English</a></li>
                                <li role="presentation"><a href="#">USD</a></li>
                                <li role="presentation"><a href="#" className="account"><img src="http://ex.theasia.com/en/images/user_v2.0.svg" alt="User Account" width="70%" /></a></li>
                            </ul>
                            <ul className="nav nav-pills pull-right visible-xs">
                                <li role="presentation"><a href="#" className="account"><img src="http://ex.theasia.com/en/images/user_v2.0.svg" alt="User Account" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )

}

export default Header;