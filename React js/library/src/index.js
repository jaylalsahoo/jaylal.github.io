import React from 'react';
import ReactDOM from 'react-dom';

class Library extends React.Component{
    constructor(props){
        super(props);

        this.state={
            selectedLanguage:"",
            books:[]
        }
        this.UpdateData=this.UpdateData.bind(this);
        this.UpdateSelectLanguage=this.UpdateSelectLanguage.bind(this);
    }

    UpdateData(books){
        this.setState({books:books});
    }
    UpdateSelectLanguage(newLanguage){
        this.setState({selectedLanguage:newLanguage});
    }
    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col-md-4 offset-md-4">
                   <h2>Attainu Library</h2>
                   <hr></hr>
                   <LanguageSelect UpdateSelectLanguage={ this.UpdateSelectLanguage} books={this.state.books} UpdateData={this.UpdateData} />
                   <SearchResult books={this.state.books} selectedLanguage={this.state.selectedLanguage} />

                </div>
              </div>
            </div>
        );
    }
    
}

class LanguageSelect extends React.Component{
    constructor(props){
        super(props);


        this.selectChanged =this.selectChanged.bind(this);
        
    }
    componentDidMount(){
        let self =this;
        let request= new XMLHttpRequest();
        request.open("get","books.json");
        request.send();
        request.onreadystatechange=function(){
            if(request.readyState==4 && request.status==200){
                let data =JSON.parse(request.responseText);
                self.props.UpdateData(data);

            }
        }
    }
    populateOption(){
      let books = new Set(this.props.books.map(b=>b.language));
      let optionElement=[<option key={"select"} value="select">select a langauge</option>];
     books.forEach(b=>optionElement.push(<option key={b} value={b}>{b}</option>));
     return optionElement;
    }
    selectChanged(event){
    this.props.UpdateSelectLanguage(event.target.value);
    }
    render(){
        return (
            <select onClick={this.selectChanged} className="form-control">
                {this.populateOption()}
            </select>
        );
    }
    
}

class SearchResult extends React.Component{
    populateTable(){
        let selectedLanguage=this.props.selectedLanguage;
        let books =this.props.books;
        let availableBook = books.filter(b=>b.language==selectedLanguage);

        let tableData = availableBook.map(a=>{
            return (
                <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.country}</td>
                <td>{a.language}</td>
            </tr>
            )
        })
        return tableData;
    }
    render(){
        return (
           <table className="table table-striped">
               <thead>
                   <tr>
                       <th>Title</th>
                       <th>Country</th>
                       <th>Langauge</th>
                   </tr>
               </thead>
               <tbody>
                   {this.populateTable()}
               </tbody>
           </table>

        );
    }
    
}
ReactDOM.render(<Library/>,document.getElementById("root"));
