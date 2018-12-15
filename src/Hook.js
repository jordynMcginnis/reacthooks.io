import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { getHook} from './hooks/index.js';

export function Hook (props) {
  const id = props.match.params.id;
  const [name, setName] = useState(null);
  const [implementation, setImplementation] = useState(null);
  const [usage, setUsage] = useState(null);

  useEffect(() => {
    let {name, implementation, usage} = getHook(id);
    setName(name);
    setImplementation(implementation);
    setUsage(usage);
  },[id]);

  return (
    <div>
      <div> Name : {name} </div>
      <div> Implementation: {implementation} </div>
      <div> Usage: {usage} </div>
    </div>
  )
}