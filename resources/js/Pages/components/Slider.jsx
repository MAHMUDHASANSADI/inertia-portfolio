import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage"; // Use relative path

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage src="https://via.placeholder.com/800x400" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src="https://via.placeholder.com/800x400" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src="https://via.placeholder.com/800x400" alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
