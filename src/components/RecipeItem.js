import React, { Component } from 'react';
//import { connect } from 'react-redux';
// import { favoriteRecipe } from '../actions';

class RecipeItem extends Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       favorited: false
  //     };
  //   }

  //   favorite(recipe) {
  //     this.props.favoriteRecipe(recipe);
  //     this.setState({ favorited: true });
  //   }

  render() {
    let { recipe } = this.props;

    return (
      <div>
        <a href={recipe.href}>
          <h4>{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>
      </div>
    );
  }
}

export default RecipeItem;
