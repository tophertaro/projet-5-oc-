import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

import bannerImg from '../assets/banner-about.svg'

const collapseContent = [
  {
    title:'Fiabilité',
    text:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    title:'Respect',
    text:'La bienveillance fait partie des valeurs fondactrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme'
  },
  { 
    title:'Service',
    text:'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
  },
  {
    title:'Sécurité',
    text:'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes'
  }
];


function About() {
  return(
    <>
      <Banner bannerImg={bannerImg} />
      <div className="collapse">
        {collapseContent.map((collapseItem, index) => (
          <Collapse key={index} title={collapseItem.title} text={collapseItem.text}/>
        ))}
      </div>
      
      
    </>
   
  )
}

export default About;