import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import CreateRecipe from './Components/CreateRecipe';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes/create">Add recipe</Link></li>
                </ul>

                <Route exact path="/" component={Home}/>
                <Route exact path="/recipes/create" component={CreateRecipe}/>
            </div>
        </Router>
    );
  }
}

export default App;
