
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
    <div>
      <button onClick={previousSlide}>&lt;</button>
      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`}  />
      <button onClick={nextSlide}>&gt;</button>
      <span>{currentSlide + 1}/{pictures.length}</span>
    </div>
  )
}

export default Carrousel;