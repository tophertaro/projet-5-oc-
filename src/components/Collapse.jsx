import { useState } from 'react';

import ArrowUp from '../assets/arrow-closed.svg'
import ArrowDown from '../assets/arrow-opened.svg'




function Collapse({title, text}) {

  const [isOpen, setIsOpen] = useState(false);

  const openCollapse = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div className='collapse-container'>
      <div className='collapse-elements' onClick={openCollapse}>
        <div className='collapse-title'>{title}</div>
        <div className='collapse-arrow'>
          <img src={isOpen ? ArrowDown : ArrowUp} alt={isOpen ? 'flèche vers le bas' : 'flèche vers le haut'}/>
        </div>
      </div>
      {isOpen && <div className='collapse-text'>{text}</div>}
    </div>
  )
}

export default Collapse;