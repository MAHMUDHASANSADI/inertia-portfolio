import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import '../../../css/custom.css';
import Image1 from '../../../../public/images/444762939_955355103051069_1272411124508453232_n.jpg';
import Image2 from '../../../../public/images/444762939_955355103051069_1272411124508453232_n.jpg';
import Image3 from '../../../../public/images/444762939_955355103051069_1272411124508453232_n.jpg';
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage src={`${Image1}`} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src={`${Image2}`} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src={`${Image3}`} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
