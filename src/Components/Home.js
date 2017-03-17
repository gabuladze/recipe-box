import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Recipe from './Recipe';
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
                            return (<li key={index}>
                                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                                    </li>);
                        })
                    }
                </ul>

                <Route path="/recipe/:id" component={Recipe} />
            </div>
        );
    }
}

export default Home;