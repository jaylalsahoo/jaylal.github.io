import React from 'react';
import ReactDOM from 'react-dom';

class SearchEngine extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           query:"",
           result: [],
           loading:false
        }

        this.OnchangeInput =this.OnchangeInput.bind(this);
        this.OnClickButton =this.OnClickButton.bind(this);
    }


    OnchangeInput(event){
        this.setState({
            query:event.target.value
        });
    }

    OnClickButton(){
        this.setState({loading:true});
        let self=this;
        var url ="https://api.duckduckgo.com/?q="+ this.state.query +"&format=json";
        let request = new XMLHttpRequest();
        request.open("GET",url);
        request.send();
        request.onreadystatechange = function(){
         if(request.status==200 && request.readyState==4){
             var data =JSON.parse(request.responseText);
             console.log(data);
            self.setState({result:data.RelatedTopics,loading:false});
         }
     }

    }
    render(){
        return (
            <div className="conatiner">
              <div className="row">
                <div className="col-md-4 offset-md-4">
                   <h2>Attainu Search Engine</h2>
                   <hr></hr>
                   <label>
                    <input onChange={this.OnchangeInput} type="text" className="form-control" />   
                    </label> 
                    <button onClick={this.OnClickButton} className="btn btn-info">submit</button>
                    <hr></hr>
                    <GenerateResult loading={this.state.loading} query={this.state.query} result={this.state.result}/>
                </div>

              </div>
            </div>
        );
    };
}

class GenerateResult extends React.Component{
    render(){
        let load = this.props.loading;

        if(load){
            return (
              <em>searching for {this.props.query}........</em>
            );
        }


        let resultText =[];
        for(let i=0;i<this.props.result.length;i++){
           let  resultData =this.props.result[i].Text;
            resultText.push(<li>{resultData}</li>);
        }
        return (
            <div>
            <em>search result for {this.props.query}</em>
            <ul>
                {resultText};
            </ul>
            </div>
        );
    }
}

ReactDOM.render(<SearchEngine />,document.getElementById("root"));
