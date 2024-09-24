import React from "react";

function Rating ({rating}) {

  const totalStars = 5;
  

  return (
    <div className="rating">
      {[...Array(totalStars)].map((star, index) => (
        <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default Rating;