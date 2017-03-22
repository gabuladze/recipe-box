import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import CreateRecipe from './Components/CreateRecipe';
import Recipe from './Components/Recipe';
import EditRecipe from './Components/EditRecipe';
import DeleteRecipe from './Components/DeleteRecipe';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-default">
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
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/recipes/create" component={CreateRecipe}/>

                    <Route exact path="/recipe/:id" component={Recipe} />
                    <Route path="/recipe/:id/edit" component={EditRecipe} />
                    <Route path="/recipe/:id/delete" component={DeleteRecipe} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
