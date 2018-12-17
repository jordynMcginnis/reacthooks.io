import React, { useState, useEffect, useLayoutEffect, useRef, useMemo, useReducer, useCallback } from 'react';
import { getHook } from './hooks/index.js';
import AceEditor from "react-ace";
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
    <div className='hook'>
      <div> Name : {name} </div>
      <div className='editors'>
        <h3>Implementation:</h3>
        <CopyToClipboard text={implementation}>
          <button>Copy to clipboard</button>
        </CopyToClipboard>
        <AceEditor
          mode="javascript"
          value={implementation}
          theme="cobalt"
          fontSize={15}
          showGutter={false}
          name="UNIQUE_ID_OF_DIV"
          width="80%"
          editorProps={{ $blockScrolling: true }}
          style={{
            borderRadius: "0 5px 5px 5px",
            maxWidth: "900px",
            padding: "5px",
            backgroundColor:'#e8e8e8',
          }}
        />
        <h3>Usage:</h3>
        <AceEditor
          mode="javascript"
          value={usage}
          theme="cobalt"
          fontSize={15}
          showGutter={false}
          name="UNIQUE_ID_OF_DIV"
          width="80%"
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