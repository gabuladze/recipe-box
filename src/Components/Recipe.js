import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocalStorage from '../Services/LocalStorage';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { recipe: {} };
    }

    componentDidMount() {
        this.setState({ recipe: LocalStorage.get(this.props.match.params.id) });
    }

    render() {
        return (
            <div>
                {this.state.recipe.hasOwnProperty('name') &&
                    <div>
                        <h1>{this.state.recipe.name}</h1>
                        <h3>Ingredients</h3>
                        <ul>
                            {
                                this.state.recipe.ingredients.split(',').map((ingredient, index) => {
                                    return <li key={index}>{ingredient}</li>;
                                })
                            }
                        </ul>
                        <hr />
                        <Link to={`/recipe/${this.state.recipe.id}/edit`} className="btn btn-warning">Edit Recipe</Link>
                        <Link to={`/recipe/${this.state.recipe.id}/delete`} className="btn btn-danger">Delete Recipe</Link>
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;