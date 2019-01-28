import React from 'react';
import Search from './Search.js';
import { InstantSearch } from 'react-instantsearch-dom';

export default function Sidebar () {
  return (
    <div className='sidebar'>
      <InstantSearch
        appId="HL2G9DSLG4"
        apiKey="b3debf5c2d7872f333a5e14e776b091d"
        indexName="hooks"
      >
        <Search/>
      </InstantSearch>
    </div>
  );
}