import React, { Component } from "react";
import Slider from "react-slick";


const ImageSlider = () => {

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 1000,
        autoplay: true,
        pauseOnHover: true,
      };


    const images = [
        {
            src: "./images/image1.jpg",
            alt: "Image 1",
        },
        {
            src: "./images/image2.jpg",
            alt: "Image 2",
        },
        {
            src: "./images/image3.jpg",
            alt: "Image 3",
        },
        {
            src: "./images/image4.jpg",
            alt: "Image 4",
        },
        {
            src: "./images/image5.jpg",
            alt: "Image 5",
        },
    ];

    return (
        <div>
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.src}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>
      );
    


};



export default ImageSlider;