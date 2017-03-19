import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LocalStorage from '../Services/LocalStorage';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: '',
            redirectToIndex: false
        }
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

    render() {
        const { redirectToIndex } = this.state;

        if (redirectToIndex) return <Redirect to="/" />;

        return (
            <div>
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