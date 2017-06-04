// Functional component some argument goes in and JSX is rendered
// {} = pull out from React the Component class
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term : ''
    };

  }
  render(){
    return (
      <div className='search-bar'>
        <input 
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} 
         />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
