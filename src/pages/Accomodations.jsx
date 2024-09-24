import React from "react";
import {useParams} from 'react-router-dom'

import logements from "../../datas/logements.json";

import AccomodationLayout from "../components/layouts/AccomodationLayout";
import Carrousel from "../components/Carousel";
import AccomodationInfo from "../components/AccomodationInfo";
import HostInfo from "../components/HostInfo";
import Tags from "../components/Tags";
import Rating from "../components/Ratings";
import Collapse from "../components/Collapse";

function Accomodations() {
  const {id} = useParams();
  
  const logement = logements.find(item => item.id === id);


  return(
    <AccomodationLayout 
    carousel={<Carrousel pictures={logement.pictures} />}
    info={<AccomodationInfo title={logement.title} location={logement.location} />}
    hostInfo={<HostInfo host={logement.host} />}
    tags={<Tags tags={logement.tags} />}
    rating={<Rating rating={logement.rating} />}

    details={
      <div className="collapse-accomodation">
        <Collapse title='Description' text={logement.description} />
        <Collapse
          title='Équipements'
          text={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    }
    />
    
  )
}


export default Accomodations;