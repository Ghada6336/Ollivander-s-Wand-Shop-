import React from 'react';
const WandCard = props => {
    const wand = props.wand;
    const wandName = `${wand.core}`;
    return (
        <div className="card-deck">
  <div className="card">
    
      <img src={wand.imageUrl} className="card-img-top" alt={wand.core}/>
    
    
      <div className="card-body">
        <h5 className="card-title">{wandName}</h5>
        <p className="card-text">{wand.wood}</p>
        <p className="card-text"><small className="text-muted">{wand.length}</small></p>
      </div>
    </div>
  </div>

    
    );
  };
  
  export default WandCard;