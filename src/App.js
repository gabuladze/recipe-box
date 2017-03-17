import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import CreateRecipe from './Components/CreateRecipe';
import Recipe from './Components/Recipe';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">React Recipe box</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/recipes/create">Add recipe</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>

                <Route exact path="/" component={Home}/>
                <Route exact path="/recipes/create" component={CreateRecipe}/>
                <Route path="/recipe/:id" component={Recipe} />
            </div>
        </Router>
    );
  }
}

export default App;
