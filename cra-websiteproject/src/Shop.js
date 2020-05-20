import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    return(
        <>
            <div className="boardTypeChips shopChips">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowOne1jpg.jpg" />
                            <p className="type">california bear flag</p>
                            <p className="prices">$85.00</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shoprowOne2.jpg" />
                            <p className="type">decades coffee mug</p>
                            <p className="prices">$15.00</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowOne3.jpg" />
                            <p className="type">primary boardshort</p>
                            <p className="prices">$45.00</p>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowTwo1.jpg" />
                            <p className="type">walnut surfboard wall racks</p>
                            <p className="prices">$150.00</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowTwo2.jpg" />
                            <p className="type">scales boardshorts</p>
                            <p className="prices">$60.00</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowTwo3.jpg" />
                            <p className="type">paradise hat</p>
                            <p className="prices">$25.00</p>
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowThree1.jpg" />
                            <p className="type">decades pullover</p>
                            <p className="prices">$60.00</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowThree2.jpg" />
                            <p className="type">navy fine surfboards trucker hat</p>
                            <p className="prices">$25.00</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive boardModels" src="media/shopRowThree3.jpg" />
                            <p className="type">california guide to coastal camping</p>
                            <p className="prices">$20.00</p>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="img-responsive boardModels" src="media/shopRowFour1jpg.jpg" />
                                <p className="type">the bbf model</p>
                                <p className="prices">$750.00</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="img-responsive boardModels" src="media/shopRowFour2jpg.jpg" />
                                <p className="type">cash-yew II</p>
                                <p className="prices">$1825.00</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="img-responsive boardModels" src="media/shopRowFour3.jpg" />
                                <p className="type">the logistic</p>
                                <p className="prices">$1300.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;