import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="list-group">
                {
                    this.state.recipes.map((recipe, index) => {
                        return (
                            <Link 
                                to={`/recipe/${recipe.id}`} 
                                key={index} 
                                className="list-group-item">
                                    {recipe.name}
                            </Link>);
                    })
                }
            </div>
        );
    }
}

export default Home;