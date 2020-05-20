import React from 'react';

const Footer = () => {
    return(
        <>
            <footer>
            <div className="footerWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 store">
                        <h3>store</h3>
                        <ul>
                            <li>Almond Surfboards</li>
                            <li>1720 Santa Ana Ave., #A</li>
                            <li>Costa Mesa, CA 92627</li>
                            <li>info@almondsurfboards.com</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 global">
                        <h3>global</h3>
                        <ul>
                            <li>USA Wholesale</li>
                            <li>Australia</li>
                            <li>Canada</li>
                            <li>France</li>
                            <li>Germany</li>
                            <li>Italy</li>
                            <li>Japan</li>
                            <li>United Kingdom</li>
                            <li>South Korea</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 subscribe">
                        <h3>subscribe</h3>
                        <p>Sign up for our mailing list</p>
                            <input type="email" placeholder="Your Email" size="15"
                            maxlength="25" className="enterEmail" /><input type="submit" value="OK" className="submitEmail"/>
                    </div>
                </div>
                
            </div>
            </div>
        </footer>

        </>
    )
}

export default Footer;