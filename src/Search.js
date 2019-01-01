import React from 'react';
import { Link } from 'react-router-dom';
import {
  SearchBox,
  connectMenu,
  Hits,
  Configure
} from 'react-instantsearch-dom';
import { withRouter } from 'react-router-dom'

class MenuSelect extends React.Component {
  state = {
    value: ''
  }
  render() {
    const { history, refine, items } = this.props

    return (
      <select
        className='ais-MenuSelect'
        value={this.state.value}
        onChange={(e) => {
          const hook = e.target.value

          if (hook !== null) {
            history.push(`/${hook}`)
          }

          this.setState({
            value: hook
          })
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
}

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
        <Hits hitComponent={Hook} />
      </div>
      <Configure
        hitsPerPage={999}
      />
    </div>
  );
}


export default Search;