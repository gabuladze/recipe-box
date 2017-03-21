import React, { Component } from 'react';
import { Redirect, Prompt } from 'react-router-dom';
import LocalStorage from '../Services/LocalStorage';

class EditRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {},
            redirectToIndex: false
        };
    }

    componentDidMount() {
        this.setState({ recipe: LocalStorage.get(this.props.match.params.id) });
    }

    handleSubmit(event) {
        event.preventDefault();
        LocalStorage.update(this.state.recipe);
        this.setState({ redirectToIndex: true });
    }

    handleChange(event) {
        const name = event.target.name;
        
        let recipe = this.state.recipe;
        recipe[name] = event.target.value

        this.setState({ recipe: recipe });
    }
    
    formIsHalfFilled() {
        let recipe = this.state.recipe;
        let name = recipe.name.length >= 1 ? true : false;
        let ingredients = recipe.ingredients.length >= 1 ? true : false;
        return name || ingredients;
    }

    render() {
        const { redirectToIndex } = this.state;

        if (redirectToIndex) return <Redirect to="/" />;

        return (
            <div>
                <Prompt 
                    when={this.formIsHalfFilled()}
                    message="Are you sure you want to leave? Any changes will be unsaved." />
                {(this.state.recipe.name) &&
                    <div>
                        <h1>Edit {this.state.recipe.name}</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.recipe.name} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="ingredients">Ingredients</label>
                                <textarea
                                    className="form-control"
                                    rows="10"
                                    placeholder="Ingredients, separated, by, commas"
                                    name="ingredients"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.recipe.ingredients}></textarea>
                            </div>

                            <button type="submit" className="btn btn-default">Save</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default EditRecipe;