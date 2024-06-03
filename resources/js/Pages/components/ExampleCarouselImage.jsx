import React from "react";
import '../../../css/custom.css';

const ExampleCarouselImage = ({ src, alt }) => {
    return (
        <img
            className="d-block w-100 custom-carousel-img"
            src={src}
            alt={alt}
        />
    );
};

export default ExampleCarouselImage;
