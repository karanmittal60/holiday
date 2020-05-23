import React from 'react';
import './header.css';
import usePikachu from "../../hooks/usePikachu";

const Divider = () => {
    return (
        <span className="mr-3 ml-3">|</span>
    );
};

const Header = () => {

    const { userDetails} = usePikachu();

    return (
        <div className='header'>
            <div className="header-wrapper">
                <div className="language">
                    <span>Language</span>
                    <Divider/>
                    <span>USD</span>
                </div>
                <div className="right-part d-flex">
                    <div className='text-center'>
                        <input type="text"/>
                        <i className="fas fa-search ml-3"></i>
                    </div>
                    <Divider/>
                    <div>
                        <i className="far fa-heart mr-3"></i>
                        <span>WISHLIST</span>
                    </div>
                    <Divider/>
                    <div>
                        <i className="fa fa-shopping-cart mr-3"></i>
                        <span>CART</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;