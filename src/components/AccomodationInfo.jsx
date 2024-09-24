import React from "react"

function AccomodationInfo({title, location}) {
  return(
    <div className="info">
    <h1>{title}</h1>
    <p className="location">{location}</p>
  </div>
  )
}

export default AccomodationInfo;