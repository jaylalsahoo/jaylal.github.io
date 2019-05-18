import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
  constructor(props){
      super(props);

      this.state ={
          number1 :0,
          number2:0,
          result:""
      };
      this.number1changed=this.number1changed.bind(this);
      this.number2changed=this.number2changed.bind(this);
      this.addhandler=this.addhandler.bind(this);
      this.subhandler=this.subhandler.bind(this);
      this.mulhandler=this.mulhandler.bind(this);
      this.divhandler=this.divhandler.bind(this);
  }

  number1changed(event){
   this.setState({
       number1:parseInt(event.target.value)
   })
  }

  number2changed(event){
    this.setState({
        number2:parseInt(event.target.value)
    })
  }

  addhandler(){
    var number1 = this.state.number1;
    var number2 =this.state.number2;
    this.setState({
        result:number1+number2
    })
  }

  subhandler(){
    var number1 = this.state.number1;
    var number2 =this.state.number2;
    this.setState({
        result:number1-number2
    })
  }

  mulhandler(){
    var number1 = this.state.number1;
    var number2 =this.state.number2;
    this.setState({
        result:number1*number2
    })
  }
  divhandler(){
    var number1 = this.state.number1;
    var number2 =this.state.number2;
    this.setState({
        result:number1/number2
    })
  }
  


    render(){
        return (
            <div className="container">
              <div className="row">
                <div className ="col-md-5 offset-md-4">
                   <h1>React Calculator</h1>
                   <hr></hr>
                   <label>
                       <input onChange={this.number1changed} type="text" className="form-control" />
                   </label>
                   <br></br>
                   <label>
                       <input onChange={this.number2changed} type="text" className="form-control"/>
                   </label>
                   <br></br>
                   <hr></hr>
                   <h1>{this.state.result}</h1>
                   <button onClick={this.addhandler} className="btn btn-info">+</button>
                   <button onClick={this.subhandler} className="btn btn-info ml-1">-</button>
                   <button onClick={this.mulhandler} className="btn btn-info ml-1">*</button>
                   <button onClick={this.divhandler} className="btn btn-info ml-1">/</button>
                </div>
              </div>
            </div>
            );
    }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));

