import React, { Component } from "react";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Question from "../components/Question";
import Imagen from "../assets/card-vertical.svg";
import "../styles/build/Questions.css";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.preguntaActual = this.preguntaActual.bind(this);
    this.state = {
      indicePreguntaActual: 0,
      listadoPreguntas: [{catgory: '', question: '', correct_answer: true, user_answer: false}]
    }
  }

  contadorPreguntaActual() {
    const indiceActual = this.state.indicePreguntaActual, cantidadPreguntas = this.state.listadoPreguntas.length;
    return `${indiceActual + 1} of ${cantidadPreguntas}`;
  }
  preguntaActual() {
    return this.state.listadoPreguntas[this.state.indicePreguntaActual];
  }
  handleClick(value) {
    const indiceActual = this.state.indicePreguntaActual, cantidadPreguntas = this.state.listadoPreguntas.length;

    if((indiceActual + 1) < cantidadPreguntas) {
      const nuevoListadoPreguntas = this.state.listadoPreguntas;
      nuevoListadoPreguntas[indiceActual].user_answer = value;
  
      this.setState({
        listadoPreguntas: nuevoListadoPreguntas
      });
      this.setState({
        indicePreguntaActual: indiceActual + 1
      })
    } else {
      this.props.setResults(this.state.listadoPreguntas);
      this.props.nextPage('rst');
    } 
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean')
      .then(response => response.json())
      .then(data => {
        if (data.response_code === 0) {
          this.setState({
            listadoPreguntas: data.results.map(el => { return {...el, correct_answer: (String(el.correct_answer.toLowerCase()) === 'true'),user_answer: null}})
          });
        } else {
          alert('Lo sentimos ha ocurrido un error al cargar las preguntas');
        }
      });
  }

  render() {
    return (
      <div id="questions-view" className="card">
        <img src={Imagen} alt="Imagen de prueba"></img>
        <Badge type="default" text={this.contadorPreguntaActual()} />
        <Question title={this.preguntaActual().category} text={this.preguntaActual().question} />
        <Button type="accept" text="True" onClick={this.handleClick.bind(this, true)} />
        <Button type="deny" text="False" onClick={this.handleClick.bind(this, false)} />
      </div>
    );
  }
}

export default Questions;
