
import React, {useState} from "react";


function Carrousel({pictures}) {
  
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
    prevSlide === pictures.length - 1 ? 0 : prevSlide + 1);
  };
  const previousSlide = () => {
    setCurrentSlide((prevSlide) => 
    prevSlide === 0 ? pictures.length - 1 : prevSlide - 1);
  };

  return(
    <div className="carousel-container">
      <button className="left-arrow" onClick={previousSlide}>&lt;</button>
      <img className="carousel-img" src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`}  />
      <button className="right-arrow" onClick={nextSlide}>&gt;</button>
      <span className="carousel-counter">{currentSlide + 1}/{pictures.length}</span>
    </div>
  )
}

export default Carrousel;