import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import '../styles/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      indegrients: '',
      dish: ''
    };
  }
  search() {
    const url = 'http://www.recipepuppy.com/api/';
  }

  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
      </div>
    );
  }
}

export default App;
