import React from 'react'
import Slider from "react-slick";

const Trending=() => {

    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                        <div>
                            <img src="images/1.jpg" className="container-fluid" alt="" styles={{ heihgt: "300px" }}></img>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Trending
