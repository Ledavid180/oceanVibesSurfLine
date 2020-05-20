import React from 'react';
import { Link } from 'react-router-dom';

const Rseries = () => {
    return(
        <>
            <div className="hero">
                <img src="media/rseriesHero.webp" width="100%" />
            </div>
            <div className="postHero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 heroBlurb">
                            <p>Our unique high-density foam construction means:<br/>
                            No fiberglass, no wax, no compromises in the<br/>
                            shape, rails, or performance.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-responsive postHeroWithCircles" src="media/forCircles.webp" width="100%" />
                    </div>
                    <div className="col-sm-6 circleList">
                        <div className="row inBetween">
                            <div className="col-xs-3">
                                <img className="img-responsive circles" src="media/circle1.webp" />
                            </div>
                            <div className="col-xs-9">
                                <p> Foam construction—and no fiberglass—means rugged durability and 100% recyclability.</p>
                            </div>
                        </div>
                    <div className="row inBetween">
                        <div className="col-xs-3">
                            <img className="img-responsive circles" src="media/circle2.webp" />
                        </div>
                        <div className="col-xs-9">
                            <p>The R-Series 5'4 Secret Menu proudly feature Futures fin boxes, so you are ready-to-rip on your favorite set of quads.</p>
                        </div>
                    </div>
                    <div className="row inBetween">
                        <div className="col-xs-3">
                            <img className="img-responsive circles" src="media/circle3.webp" />
                        </div>
                        <div className="col-xs-9">
                            <p>Our super-grip deck pad means no wax necessary!</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="usMade">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p>Rugged. Recyclable. Ready-to-Rip.<br/>
                                    R-Series by Almond Surfboards<br/>
                                    
                                    🇺🇸<br/>
                                    Made in the USA<br/>
                                    and ready to go wherever you want to take it.</p>
                            </div>
                        </div>
                    </div>
            </div>
</div>
            </>
        )
    }

    export default Rseries;