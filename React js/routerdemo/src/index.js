import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component{
    render(){
        return(
            <Router>
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-3">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                       <Link className="nav-link active" to="/">Home</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">About Us</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to="/contactus">Contact us</Link>
                     </li>
                </ul>
                <hr></hr>
                <Route path="/" exact={true} component={Home} />
                <Route path="/aboutus" component={Aboutus} />
                <Route path="/contactus" component={Contactus} />

                </div>
              </div>
            </div>
        </Router> 
        );
    }
}

class Home extends React.Component{
    render(){
        return (
            <div>
                <p>Hello , This is the Home page content</p>
            </div>
        );
    }

}

class Aboutus extends React.Component{
    render(){
        return (
            <div>
                <p>This is the Company Details Page</p>
            </div>
        );
    }

}

class Contactus extends React.Component{
    render(){
        return (
            <div>
                <p>This is the Contact us Page</p>
            </div>
        );
    }

}

ReactDOM.render(<App />,document.getElementById("root"));

