import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Boats from './boats';
import Home from './Home';
import Payments from './Payments';
function Headers() {
    return (
        <div className="container">
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/"> Boats Inc </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/boats"> Boats </Link>
                            </li>
                            <li>
                                <Link className="nav-link"  to="/payment"> Payment</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/boats" component={Boats} />
                <Route exact path="/" component={Home}/>
                <Route exact path="/payment" component={Payments}/>
            </Router>
        </div>
    );
}
export default Headers;