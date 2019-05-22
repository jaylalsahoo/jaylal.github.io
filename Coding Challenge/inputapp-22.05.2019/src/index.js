import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    constructor(props){
        super(props);

        this.state={
            input:""
        }
        this.UpdateInput=this.UpdateInput.bind(this);
    }

    UpdateInput(event){                                                                                                  
       this.setState({input:event.target.value});
    }
render(){
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-5 offset-md-4">
             <h1>React State Challenge</h1>
             <InputData UpdateInput={this.UpdateInput}/>
             <Showdata input={this.state.input}/>
            </div>
          </div>
        </div>
    );
}
}

class InputData extends React.Component{
    render(){
        
        return (
            <div>
            <label>
                <input  onChange={this.props.UpdateInput} type="text" className="form-control" />
            </label>
           </div>
            
        );
    }

}

class Showdata extends React.Component{
    render(){
        return (
            <h2>{this.props.input}</h2>
        );
    }

}


ReactDOM.render(<App />,document.getElementById("root"));

