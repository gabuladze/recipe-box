import React, { Component } from 'react';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Create Recipe</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea name="ingredients" id="ingredients" className="form-control" rows="10" placeholder="Ingredients, separated, by, commas"></textarea>
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateRecipe;