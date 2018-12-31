import React, { useState, useEffect } from 'react';
import { getHook } from './hooks/index.js';
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

  function longUrl () {
    if(!!url) {
      return url.length > 45;
    }
    return false
  }

  return (
    <div className='hook'>
      <h1>{name}</h1>
      <a href={url} className='url'>{longUrl() === true ? `${url.slice(0,45)}...` : url}</a>
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
            width="99%"
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
            width="99%"
            height='300px'
            editorProps={{ $blockScrolling: true }}
            style={{borderRadius: '3px'}}
          />
        </div>
      </div>
    </div>
  )
}