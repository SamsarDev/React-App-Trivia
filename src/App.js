import React, {Component} from "react";
import Introduction from "./views/Introduction";
import Questions from "./views/Questions";
import Results from "./views/Results";
import "./styles/build/App.css";

class App extends Component {
  constructor(props) {
    super(props);    
    this.setNextPage = this.setNextPage.bind(this);
    this.setResults = this.setResults.bind(this);
    this.state = {
      pageActual: 'int',
      listadoRespuestas: null
    }
  }

  setNextPage(who) {
    this.setState({
      pageActual: who,
    })
  }
  setResults(listadoPreguntas) {
    const listadoRespuestas = listadoPreguntas.map(el => { return  { pregunta: el.question, respuesta: el.correct_answer === el.user_answer ? true : false}})

    this.setState({
      listadoRespuestas: listadoRespuestas
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.pageActual === 'int' ? <Introduction nextPage={this.setNextPage} /> : null}
        { this.state.pageActual === 'qst' ? <Questions nextPage={this.setNextPage} setResults={this.setResults} /> : null}
        { this.state.pageActual === 'rst' ? <Results nextPage={this.setNextPage} results={this.state.listadoRespuestas} /> : null}
      </div>
    );
  }
}

export default App;
