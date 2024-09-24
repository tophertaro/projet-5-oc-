import React from "react";

function AccomodationLayout({carousel, info, hostInfo, tags, rating, details}) {
  return(
    <div className="accomodation-layout">

      <div className="carousel">{carousel}</div>

      <section className="location-host-section">
        <div className="info-section">
          <div className="info">{info}</div>
          <div className="tags">{tags}</div>
        </div>

        <div className="host-info-section">
          <div className="host-info">{hostInfo}</div>
          <div className="rating">{rating}</div>
        </div>
      </section>
      
      
      
      
      
      <div className="details">{details}</div>
    </div>
  )
}

export default AccomodationLayout