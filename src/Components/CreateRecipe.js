import React, { Component } from 'react';
import { Redirect, Prompt } from 'react-router-dom';
import LocalStorage from '../Services/LocalStorage';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: '',
            redirectToIndex: false
        }

        this.formIsHalfFilled.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        LocalStorage.save(this.state);
        this.setState({ redirectToIndex: true });
    }

    formIsHalfFilled() {
        let name = this.state.name.length >= 1 ? true : false;
        let ingredients = this.state.ingredients.length >= 1 ? true : false;
        return name || ingredients;
    }

    render() {
        const { redirectToIndex } = this.state;
        if (redirectToIndex) return <Redirect to="/" />;

        return (
            <div>
                <Prompt 
                    when={this.formIsHalfFilled()}
                    message="Are you sure you want to leave?" />
                <h1>Create Recipe</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.name} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea
                            className="form-control"
                            rows="10"
                            placeholder="Ingredients, separated, by, commas"
                            name="ingredients"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.ingredients}></textarea>
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateRecipe;