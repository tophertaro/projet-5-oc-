import React from "react";

function AccomodationLayout({carousel, info, hostInfo, tags, rating, details}) {
  return(
    <div className="accomodation-layout">

      <div className="carousel">{carousel}</div>

      <div className="info-and-host">
        <div className="info">{info}</div>
        <div className="host-info">{hostInfo}</div>
      </div>

      <div className="tag-and-rating">
        <div className="tags">{tags}</div>
        <div className="rating">{rating}</div>
      </div>
      
      <div className="details">{details}</div>
    </div>
  )
}

export default AccomodationLayout