import React from 'react';
import { Link } from 'react-router-dom';
import {
  SearchBox,
  InfiniteHits,
  connectMenu
} from 'react-instantsearch-dom';
import { withRouter } from 'react-router-dom'

const MenuSelect = ({ currentRefinement, item, history, refine, items }) => {
  return (
    <select
      className='ais-MenuSelect'
      value={currentRefinement || ''}
      onChange={(e) => {
        const hook = e.target.value
        refine(hook)
        if (hook !== null) {
          history.push(`/${hook}`)
        }
      }}
    >
      <option value="" className='ais-MenuSelect-select'>See all options</option>

      {items.map(item => (

        <option
          key={item.label}
          value={item.isRefined ? currentRefinement : item.value}
          className='ais-MenuSelect-option'
        >
          {item.label}
        </option>
      ))}

    </select>
  )
};

const CustomMenuSelect = connectMenu(withRouter(MenuSelect));

function Hook({ hit }) {
  const { name } = hit;
  return (
    <div>
      <Link to={name} className='hit'>{name}</Link>
    </div>
  )
}

function Search() {
  return (
    <div className="container">
      <div className='menu-select'>
        <CustomMenuSelect
          attribute='name'
          limit={999}
        />
      </div>
      <div className='infinite-hits'>
        <SearchBox />
        <InfiniteHits hitComponent={Hook}/>
      </div>
    </div>
  );
}


export default Search;