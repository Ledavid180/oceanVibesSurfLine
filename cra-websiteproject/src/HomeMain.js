import React from 'react';

const HomeMain = () => {
    return(
        <>
            <main>
            <div class="wavesWrapper">
                    <div class="container">
                        <div class="row">
                            <div class="greetingTwo col-sm-12">
                                <h2>catch waves early and often.</h2>
                                <p>You should be catching waves earlier, and catching them more often - so we built a wide array of surfboard models to help you do just that.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rseriesBlurb">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <img class="img-responsive" src="media/rseriesBoard.PNG" />
                        </div>
                        <div class="col-sm-6">
                            <h2>build your series<br/><span class="price">$372.99</span> </h2>
                            <form action="#Link"> 
                                <p>Model</p>
                                <div class="boardModelWrapper">
                                <select class="boardModel" id="boardModel">
                                    <option >5'4 Secret Menu(Quad)</option>
                                    <option>8'0 Joy(Singlefin)</option>
                                    <option>6'4 Summer 2020</option>                                                                     
                                </select>
                            </div>
                            <div class="boardColorWrapper">
                                <p>Color</p>
                                <select class="boardColor" id="boardColor">
                                    <option value="Black">Black</option>
                                    <option value="Shaka">Shaka</option>
                                    <option value="IndigoSwirl">Indigo Swirl</option>
                                    <option value="Yellow">Yellow</option>
                                </select>
                            </div>
                            </form>
                            
                            <button class="rseriesAddToCart" onclick="addToCart()">add to cart</button>
                        </div>
                    </div>
                </div>
                </div>
            
            <div class="inventoryLinks container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>r-series surfboards</h2>

                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <img class="img-responsive" src="media/boardThree.webp" />
                    </div>
                    <div class="col-sm-3">
                        <img class="img-responsive" src="media/boardFour.webp" />
                    </div>
                    <div class="col-sm-3">
                        <img class="img-responsive" src="media/boardFive.webp" />

                    </div>
                    <div class="col-sm-3">
                        <img class="img-responsive" src="media/boardSeven.webp" />
                    </div>
                </div>
            </div>

                <div class="videoTwoWrapper">
                    <video class="img-responsive videocover" muted="" autoplay="" loop="" poster="https://www.haydenshapes.com/wp-content/themes/haydenshapes/media/loop-shaping-short-poster.jpg">
                        <source src="https://www.haydenshapes.com/wp-content/themes/haydenshapes/media/loop-shaping-short.webm" type="video/webm" />
                        <source src="https://www.haydenshapes.com/wp-content/themes/haydenshapes/media/loop-shaping-short.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="container videoCaption">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2>almond r-series surfboards</h2>
                            <p>A no-wax-necessary, soft shredder made in the USA</p>
                        </div>
                    </div>
                </div>
                

                <div class="rseriesBlub2">
                    <div class="container">
                        <div class="row">
                            
                            <div class="col-sm-7 boardCirclePic">
                                <img class="img-responsive" src="media/circleOfBoards.webp" />
                            </div>
                            <div class="fillWhiteWrapper">
                            <div class="col-sm-5 fillWhite">
                                <h2>purpose-built surfboards</h2>
                                <p>From our 5'4 Recyclable Foamie to our 9'8 classic noseriders, we build surfboards proven to maximize your surfing opportunities, and bring you many, many years of enjoyment.</p>
                        </div>
                    </div> 
                        </div>
                    </div>
                </div>
                    <div class="instagramWrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                            <a href="https://www.instagram.com/almondsurfboards/"><img class="img-responsive" src="media/wave.webp" /></a>
                        </div>
                        <div class="col-sm-3">
                            <a href="https://www.instagram.com/almondsurfboards/"><img class="img-responsive" src="media/footer1.PNG" /></a>
                        </div>
                        <div class="col-sm-3">
                            <a href="https://www.instagram.com/almondsurfboards/"><img class="img-responsive" src="media/footer2.PNG" /></a>
                        </div>
                        <div class="col-sm-3">
                            <a href="https://www.instagram.com/almondsurfboards/"><img class="img-responsive" src="media/footer3.PNG" /></a>
                        </div>
                        <div class="instagramLink">
                        <div class="row">
                            <div class="col-sm-12">
                                <a href="http://www.instagram.com/almondsurfboards/"><p>Follow @almondsurfboards on Instagram</p></a>
                            </div>
                        </div>
                        </div>
                        </div>
                </div>
                </div>
                </main>

        </>
    )
}

export default HomeMain;


               