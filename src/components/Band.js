import React from "react";

const Band = props => {
  return (
    <li key={props.key}>{props.name}</li>
  );
}

export default Band;