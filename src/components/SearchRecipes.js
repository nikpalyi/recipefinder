import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from 'react-bootstrap';

class SearchRecipes extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{' '}
          <FormControl
            type='text'
            placeholder='garlic, chicken'
            onChange={event =>
              this.setState({ ingredients: event.target.value })
            }
          />
        </FormGroup>{' '}
        <FormGroup>
          <FormLabel>Dish</FormLabel>{' '}
          <FormControl
            type='text'
            placeholder='adobo'
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>{' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;

//The onchange event occurs when the value of an element has been changed.
