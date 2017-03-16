import React, { Component } from 'react';
import LocalStorage from '../Services/LocalStorage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] };
    }

    componentDidMount() {
        this.setState({ recipes: LocalStorage.get() });
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    {
                        this.state.recipes.map((recipe, index) => {
                            return <li key={index}>{recipe.name}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Home;