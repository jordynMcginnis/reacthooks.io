import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SearchBox,
  connectMenu,
  Hits,
  Configure
} from 'react-instantsearch-dom';
import { withRouter } from 'react-router-dom';

function MenuSelect (props) {
  const { history, items } = props;
  const [value, setValue] = useState('');
  return (
    <select
      className='ais-MenuSelect'
      value={value}
      onChange={(e) => {
        const hook = e.target.value

        if (hook !== null) {
          history.push(`/${hook}`)
        }

        setValue(hook);
      }}
    >
      <option value="" className='ais-MenuSelect-select'>See all options</option>

      {items.map(item => (
          <option
            key={item.label}
            value={item.value}
            className='ais-MenuSelect-option'
          >
            {item.label}
          </option>
      ))}

    </select>
  )
}

const CustomMenuSelect = connectMenu(withRouter(MenuSelect));

function Hook({ hit }) {
  //console.log({hit})
  const { name } = hit;
  return (
    <div>
      <Link to={`/hooks/${name}`} className='hit'>{name}</Link>
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
        <Hits hitComponent={Hook}/>
      </div>
      <Configure
        hitsPerPage={999}
      />
    </div>
  );
}

export default Search;