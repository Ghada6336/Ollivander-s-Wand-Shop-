import React from 'react';

import './App.css';
import wands from "./wands";
import WandList from "./WandList";
// import WandCard from "./WandCard";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        
        <div className="content col-10">
          <WandList wands={wands} />
        </div>
      </div>
    </div>


  );
}

export default App;
