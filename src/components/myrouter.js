import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, useHistory, Redirect } from 'react-router-dom';
import { RouteWithSubRoutes } from '../router/create.js'
import { mainRouter } from '../router/config'


class App extends Component {
    mapRouter() {
        const ar = []
        for (let i = 0; i < mainRouter.length; i++) {
            ar.push(RouteWithSubRoutes(mainRouter[i], i))
        }
        return ar
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Product">Product</Link>
                    <hr />

                    {this.mapRouter()}
                    {/* <Route path="/" exact component={(Home)}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/product" component={(Product)}></Route> */}
                </div>
            </Router>
        );
    }
}

export default App;