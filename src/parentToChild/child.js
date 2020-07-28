import React from 'react';

const Child = (props) => {
  return (
    <button onClick={props.doWhatever}>{props.title}</button>
  )
}

export default Child;
