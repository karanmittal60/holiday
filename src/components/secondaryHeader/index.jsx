import React from 'react';
import './secondaryHeader.css';
import Navigation from "../navigation";

const SecondaryHeader = ({black=true}) => {

    if (black){
        return <div className="black-header">
            <div className="row">
                <div className="col-6">
                    <div className="container">
                        <div className="s-h-main-heaing">
                            <span>Fortune</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <Navigation/>
                </div>
            </div>
        </div>
    }
    return (
        <div className="secondary-header">
            <div className="row s-h-wrapper">
                <div className="col-6">
                    <div className="container">
                        <div className="s-h-main-heaing">
                            <span>Fortune</span>
                        </div>
                        <div className="s-h-sec-heaing">
                            <span>
                                TREND <br/>
                                FASHION
                            </span>
                        </div>
                        <div className="s-h-intro">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </span>
                        </div>
                        <div>
                            <button className="shop-now">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <Navigation/>
                </div>
            </div>
        </div>
    );
};

export default SecondaryHeader;