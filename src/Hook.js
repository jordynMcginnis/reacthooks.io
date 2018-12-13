import React, { useState, useEffect } from 'react';
import { getHook} from './hooks/index.js';

export function Hook (props) {
  const id = props.match.params.id;
  const [name, setName] = useState(null);
  const [implementation, setImplementation] = useState(null);
  const [usage, setUsage] = useState(null);

  useEffect(() => {
    let hook = getHook(id);
    setName(hook.name);
    setImplementation(hook.implementation);
    setUsage(hook.setUsage);
  },[id]);

  return (
    <div>
      <div> Name : {name} </div>
      <div> Implementation: {implementation} </div>
      <div> Usage: {usage} </div>
    </div>
  )
}