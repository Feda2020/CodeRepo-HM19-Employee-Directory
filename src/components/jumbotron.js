import React from "react";
import "../styles/jumbotron.css"

function Jumbotron() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i className="fas fa-users"></i> <b>Employee Directory</b></h1>
        <p className="lead">You can search by first or last name or select a column heading arrow to sort</p>
      </div>
    </div>
  </div>
  );
}

export default Jumbotron;