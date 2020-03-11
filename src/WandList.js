import React from 'react';
import WandCard from "./WandCard";

    const WandList= props => {
        const wandCards = props.wands.map(wand => (
               <WandCard key={wand.core} wand={wand} />
              ));
              return (
                <div className="wands">
                <h3>WANDS.....</h3>
                <div className="row">{wandCards}</div>
                </div>
                 );
                 };
  
  export default WandList;

