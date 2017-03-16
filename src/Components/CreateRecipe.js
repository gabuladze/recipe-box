import React, { Component } from 'react';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: ''
        }
    }

    handleChange(name, event) {
        let change = {};
        change[name] = event.target.value;
        this.setState(change);
    }

    render() {
        return (
            <div>
                <h1>Create Recipe</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={this.handleChange.bind(this, 'name')}
                            value={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea 
                            name="ingredients"
                            className="form-control"
                            rows="10"
                            placeholder="Ingredients, separated, by, commas"
                            onChange={this.handleChange.bind(this, 'ingredients')}
                            value={this.state.ingredients}></textarea>
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateRecipe;