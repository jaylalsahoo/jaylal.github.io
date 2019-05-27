import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component{
    render(){
        return(
            <Router>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 offset-md-2">
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
            <div className="container-fluid">
                <div className="row">
                   <div className="col-md-12 offset-md-1">
                   <h1>AwesomeCompany.Com</h1>
                   </div>
                 </div>
                 <div className="row">
                 <div className="pt-2 col-md-3">
                    <h3>Feature #1</h3>
                    <hr></hr>
                    <p>some text here</p>
                </div>
                <div className="pt-2 col-md-3">
                    <h3>Feature #2</h3>
                    <hr></hr>
                    <p>some text here</p>
                </div>
                <div className="pt-2  col-md-3">
                        <h3>Feature #3</h3>
                        <hr></hr>
                        <p>some text here</p>
                </div>
                <div className="pt-2 col-md-3">
                        <h3>Feature #4</h3>
                        <hr></hr>
                        <p>some text here</p>
                </div>
                 </div>
             </div>
        );
    }

}

class Aboutus extends React.Component{
    render(){
        return (
            <div className="container">
                <div class="row">
         <div className="col-md-12">
        <h1 className="text-center">About us</h1>
        <hr></hr>
      </div>
      </div>
      <div className="row">
        
          <div className="col-md-8">
            <h3>CEO</h3>
            <p>some text about CEO here</p>
          </div>
          <div className="col-md-4">
              <img src="./images/bill.png" height="100px" width="100px" />
          </div>
          
      </div>
      <div className="pt-2 row">
        
          <div className="col-md-8">
            <h3>CTO</h3>
            <p>some text about CEO here</p>
          </div>
          <div className="col-md-4">
              <img src="./images/cto.png" height="100px" width="100px" />
          </div>
          
      </div>
      <div className="pt-2 row">
        
          <div className="col-md-8">
            <h3>COO</h3>
            <p>some text about CEO here</p>
          </div>
          <div className="col-md-4">
              <img src="./images/coo.png" height="100px" width="100px" />
          </div>
          
      </div>
      </div>
      
        );
    }

}

class Contactus extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
            <div className="col-md-12">
                <h1 className=" text-center">Contact us</h1>
                <hr></hr>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.929419156559!2d77.62950026952207!3d12.972980313785726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a418770391%3A0xb50f46b826501036!2sIndiranagar%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1551870768336" width="1200" height="600" frameborder="0" allowfullscreen></iframe>
    </div>
            </div>
        );
    }

}

ReactDOM.render(<App />,document.getElementById("root"));

