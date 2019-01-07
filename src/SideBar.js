import React from 'react';
import Search from './Search.js';
import { InstantSearch } from 'react-instantsearch-dom';

export function SideBar () {
  return (
    <div className='sideBar'>
      <h2 className='title'><span className='r-title'>react</span>Hooks.io</h2>
      <div className='algolia-container'>
        <InstantSearch
          appId="HL2G9DSLG4"
          apiKey="b3debf5c2d7872f333a5e14e776b091d"
          indexName="hooks"
        >
          <Search/>
        </InstantSearch>
      </div>
    </div>
  );
}