
import React, {useState} from "react";


function Carrousel({pictures}) {
  
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
    prevSlide === pictures.length - 1 ? 0 : prevSlide + 1); // si img actuelle = dernier index alors on remet sur le premier sinon on +
  };
  const previousSlide = () => {
    setCurrentSlide((prevSlide) => 
    prevSlide === 0 ? pictures.length - 1 : prevSlide - 1); // si img actuelle = dernier index alors on remet sur le premier sinon on -
  };

  return(
    <div className="carousel-container">
      <img className="carousel-img" src={pictures[currentSlide]} alt="carousel" />
      
      {pictures.length > 1 && (
        <>
          <button className="left-arrow" onClick={previousSlide}>‹</button>
          <button className="right-arrow" onClick={nextSlide}>›</button>
        </>
      )}
      
      {pictures.length > 1 && (
        <div className="carousel-counter">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carrousel;