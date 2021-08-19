import React from 'react';
import '../App.css';

function Summary(props) {
  return(
    <div className="summary">
      <p>This is a Summary!</p>
      <p>Your items: {props.globalState.cart}</p>
      <p>Your total: ${props.globalState.total}</p>
    </div>
  );
}

export default Summary;
