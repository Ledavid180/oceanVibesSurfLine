import React from 'react';
import { Link } from 'react-router-dom';
//page not working, error.
//not even loading 'About' into dom
//site crashed when I tried to add a new Route called Aboutus, even with changing all of the references throughout the file
const About = () => {
    return(
        <>
            <div className="hero">
                <div className="aboutUsHero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <img className="img-responsive" src="media/aboutUsOne.webp" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="aboutUsBlurb">Our aim is to be the premier lifestyle brand of the Surfer-Craftsman.<br/>
                            Hand-built surfboards are the foundation of what we do here; but whatever the pursuit may be, we're a brand<br/>
                            that believes in investing the time and committing to the process.<br/>
                            Our aim is to make timeless, essential products for surfers and craftsmen of all varieties.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <img className="img-responsive aboutUsPicTwo" src="media/aboutUsTwo.webp" />
                    </div>
                </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="aboutUsBlurb"> We got our start in 2007, hand-shaping surfboards that we hoped would be lasting<br/>
                                in quality and function. We have been continuing to refine and perfect our process ever since.<br/>
                                We truly hope that the surfboards we build today will be passed down as heirlooms to the next generation.</p>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-sm-12">
                        <img className="img-responsive aboutUsPicTwo" src="media/aboutUsThree.webp" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="aboutUsBlurb">As a team and as a brand, we value well-made purposeful products. We make things that we<br/> 
                            need/want/use, and we make them in California, because this is our home.<br/>
                            Come visit us at our retail store in Costa Mesa, we would love to chat with you.<br/>
                            We are a small team of 5 dedicated friends/family who want to make<br/>
                            good, honest stuff for good, honest people...</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <img className="img-responsive aboutUsPicTwo" src="media/aboutUsFIve.webp" />
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default About;