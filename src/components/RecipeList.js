import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { Link } from 'react-router-dom';
//import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    console.log('this.props', this.props);

    return (
      <div>
        {this.props.recipes.map(recipe => {
          return <h4>{recipe.title}</h4>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(RecipeList);