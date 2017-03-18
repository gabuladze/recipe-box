import React, { Component } from 'react';
import LocalStorage from '../Services/LocalStorage';

class EditRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { recipe: {} };
    }

    componentDidMount() {
        this.setState({recipe: LocalStorage.get(this.props.match.params.id)});
    }

    handleSubmit(event) {

    }

    handleChange(event, name) {
        let change = {};
        change[name] = event.target.value;
        this.setState(change);
    }

    render() {
        return (
            <div>
                {this.state.recipe.name &&
                    <div>
                        <h1>Edit {this.state.recipe.name}</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    onChange={this.handleChange.bind(this, 'name')}
                                    value={this.state.recipe.name} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="ingredients">Ingredients</label>
                                <textarea
                                    name="ingredients"
                                    className="form-control"
                                    rows="10"
                                    placeholder="Ingredients, separated, by, commas"
                                    onChange={this.handleChange.bind(this, 'ingredients')}
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