import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
               
                <div className="headerWrapper">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 miniNavIndex">
                                    <a href="#"><i className="fas fa-search"></i></a>
                                    <a href="#"><i className="fas fa-user"></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 logo ">
                                <Link to ="/"><img src="media/Almond_Website_logo_x100.png"  /></Link>
                            </div>
                        </div>
                            <div className="row "> 
                                <div className="mainNavIndex col-sm-11">
                                    <ul>
                                        <li>
                                            <Link to ="/shop">shop</Link>
                                        </li>
                                        <li>
                                            <Link to ="/surfboardmodels">surfboard models</Link>
                                        </li>
                                        <li>
                                            <Link to ="/rseries">r series</Link>
                                        </li>
                                        <li>
                                            <Link to ="/about">about us</Link>
                                        </li>
                                        <li>
                                            <Link to ="/blog">blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </header>
        </>
    )
}

export default Header;