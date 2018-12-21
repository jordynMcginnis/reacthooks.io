import React, { useState, useEffect, useLayoutEffect, useRef, useMemo, useReducer, useCallback } from 'react';
import { getHook } from './hooks/index.js';
import brace from 'brace';
import AceEditor from "react-ace";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export function Hook (props) {
  const id = props.match.params.id;
  const [name, setName] = useState(null);
  const [implementation, setImplementation] = useState(undefined);
  const [usage, setUsage] = useState(undefined);
  const [url, setUrl] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  useEffect(() => {
    let {name, implementation, usage, url, description} = getHook(id);
    setName(name);
    setImplementation(implementation);
    setUsage(usage);
    setUrl(url);
    setDescription(description);
  },[id]);

  return (
    <div className='hook'>
      <h2>{name}</h2>
      <a href={url} className='url'>{url}</a>
      <h5>{description}</h5>
      <div className='editors'>
        <div className='implementation'>
          <div className='options'>
            <h3 className='i-title'>IMPLEMENTATION:</h3>
            <CopyToClipboard text={implementation}>
              <button className='copy'>Copy</button>
            </CopyToClipboard>
          </div>
          <AceEditor
            mode="javascript"
            theme="monokai"
            value={implementation}
            fontSize={15}
            showGutter={false}
            name="UNIQUE_ID_OF_DIV"
            width="90%"
            editorProps={{ $blockScrolling: true }}
            style={{borderRadius: '3px'}}
          />
        </div>
        <div className='usage'>
          <h3 className='u-title'>USAGE:</h3>
          <AceEditor
            mode="javascript"
            value={usage}
            theme="monokai"
            fontSize={15}
            showGutter={false}
            name="UNIQUE_ID_OF_DIV"
            width="90%"
            height='300px'
            editorProps={{ $blockScrolling: true }}
            style={{borderRadius: '3px'}}
          />
         </div>
       </div>
    </div>
  )
}