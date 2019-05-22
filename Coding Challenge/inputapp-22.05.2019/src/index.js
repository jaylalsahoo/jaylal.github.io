import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-4">
                 <h1>React State Challenge</h1>
                 <InputData />
                 <Showdata/>
                </div>
              </div>
            </div>
        );
    }
}
class InputData extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            query:""
        }
     this.DataHandle=this.DataHandle.bind(this);
    }

    DataHandle(event){
        this.setState({query:event.target.value});
    }
    render(){
        return (
            <div>
            <label>
                <input onChange={this.DataHandle}type="text" className="form-control" />
            </label>
            <Showdata query={this.state.query}/>
           </div>
            
        );
    }

}

class Showdata extends React.Component{
    render(){
        return (
            <h2>{this.props.query}</h2>
        );
    }

}


ReactDOM.render(<App />,document.getElementById("root"));

