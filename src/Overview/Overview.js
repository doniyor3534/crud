import React from 'react';

const Overview = () => {
    return (
        <div className='overview'>
            <div className="overleft">
                <div className="overcard">
                    <h3>cards</h3>
                    <div className="carta">
                        <h6>cloudcash</h6>
                        <p>PREMIUM ACCOUNT</p>
                        <h4>5789
                            * * * *
                            * * * *
                            2847</h4>
                        <div className="cartbody">
                            <span>Card holder
                                <h5>Mike Smith</h5>
                            </span>
                            <span>Expire date
                                <h5>06/21</h5>
                            </span>
                        </div>
                    </div>
                    <div className="cartalright">
                        <h4>$ 2850.75</h4>
                        <p>Current balance</p>
                        <h5>$ 1500.50</h5>
                        <p>Income</p>
                        <h6>$ 350.60</h6>
                        <p>Outcome</p>
                        
                    </div>
                </div>
                <div className="overcardbody">

                </div>
            </div>
            <div className="overright"></div>
        </div>
    );
};

export default Overview;