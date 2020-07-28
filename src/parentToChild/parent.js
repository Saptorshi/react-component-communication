import React from 'react';
import Child from './child'

const Parent = (props) => {
  return (
    <div>
      <Child doWhatever={props.doWhatever} title={props.title}/>
      <br /> <br />
      <Child doWhatever={props.playWhatever} title={props.title}/>
    </div>
  )
}

export default Parent;

/**
 * You can entirely pass all the props using spread operator {...props}
 * <Child doWhatever={...props} />
 */