import React, { useState, useEffect, useLayoutEffect, useRef, useMemo, useReducer, useCallback } from 'react';
import { getHook } from './hooks/index.js';
import AceEditor from "react-ace";

export function Hook (props) {
  const id = props.match.params.id;
  const [name, setName] = useState(null);
  const [implementation, setImplementation] = useState(undefined);
  const [usage, setUsage] = useState(undefined);

  useEffect(() => {
    let {name, implementation, usage} = getHook(id);
    setName(name);
    setImplementation(implementation);
    setUsage(usage);
  },[id]);

  return (
    <div>
      <div> Name : {name} </div>
      <div>
        <h3>Implementation:</h3>
        <AceEditor
          mode="javascript"
          value={implementation}
          theme="cobalt"
          fontSize={15}
          showGutter={false}
          name="UNIQUE_ID_OF_DIV"
          width="50%"
          editorProps={{ $blockScrolling: true }}
          style={{
            borderRadius: "0 5px 5px 5px",
            maxWidth: "900px",
            padding: "5px",
            backgroundColor:'#e8e8e8',
          }}
        />
      </div>
      <div>
        <h3>Usage:</h3>
        <AceEditor
          mode="javascript"
          value={usage}
          theme="cobalt"
          fontSize={15}
          showGutter={false}
          name="UNIQUE_ID_OF_DIV"
          width="50%"
          height='300px'
          editorProps={{ $blockScrolling: true }}
          style={{
            borderRadius: "0 5px 5px 5px",
            maxWidth: "900px",
            padding: "5px",
            backgroundColor:'#e8e8e8',
          }}
        />
       </div>
    </div>
  )
}