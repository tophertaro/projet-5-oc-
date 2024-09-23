import React from "react";

function Tags ({tags}) {
  return(
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  )
}

export default Tags;