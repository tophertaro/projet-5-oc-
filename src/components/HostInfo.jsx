import React from "react";

function HostInfo({host}) {
  return(
    <div className="host-info">
      <p>{host.name}</p>
      <img src={host.picture} alt={`Image de ${host.name}`} className="host-picture" />
    </div>
  )
}

export default HostInfo