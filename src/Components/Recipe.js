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
                    <div className="panel panel-default">
                        <div className="panel-heading">{this.state.recipe.name}</div>
                        <div className="panel-body">
                            <h3>Ingredients</h3>
                            <ul className="list-group">
                                {
                                    this.state.recipe.ingredients.split(',').map((ingredient, index) => {
                                        return <li key={index} className="list-group-item">{ingredient}</li>;
                                    })
                                }
                            </ul>
                        </div>
                        <div className="panel-footer">
                            <Link to={`/recipe/${this.state.recipe.id}/edit`} className="btn btn-warning btn-sm">Edit Recipe</Link>
                            <Link to={`/recipe/${this.state.recipe.id}/delete`} className="btn btn-danger btn-sm right">Delete Recipe</Link>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;