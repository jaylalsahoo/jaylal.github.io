import React from 'react';
import ReactDOM from 'react-dom';

class Evenodd extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            number:"",
            output:""
        }

        this.evenoddhandle = this.evenoddhandle.bind(this);
        this.resulthandle = this.resulthandle.bind(this);
    }

    evenoddhandle(event){
      this.setState({
          number:event.target.value
      });
    }

    resulthandle(){
        let number =this.state.number;
        if(number %2 ===0){
            this.setState({
              output:"Even"
            });
        }
        else {
            this.setState({
               output:"Odd"
            });
        }
    }
 render(){
     return (
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
               <h1>Check even or odd number</h1>
               <hr></hr>
               <label>
                   <input onChange={this.evenoddhandle} type="text" className="form-control"/>
               </label>
               <p></p>
               <h3>{this.state.output}</h3>
               <button onClick={this.resulthandle} className="btn btn-info">output</button>
            </div>
          </div>
        </div> 
     );
 }
}

ReactDOM.render(< Evenodd />,document.getElementById("root"));

