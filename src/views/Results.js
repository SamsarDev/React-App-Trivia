import React, { Component } from "react";
import SingleResult from "../components/SingleResult";
import Badge from "../components/Badge";
import Button from '../components/Button';
import Imagen from "../assets/card-horizontal.svg";
import "../styles/build/Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      points: 0
    }
  }

  handleClick(e) {
    window.location.reload();
  }
  setPoints() {
    return this.props.results.filter(x => x.respuesta === true).length;
  }
  setList() {
    return this.props.results.map((item, index) => 
      <SingleResult index={index} respuesta={item.respuesta === true ? 'ok' : 'error'} pregunta={item.pregunta} />
    )
  }

  render() {
    return (
      <div id="results-view" className="card">
        <img src={Imagen} alt="Imagen de prueba"></img>
        <div className="result-area">
          <div className="step">FINAL STEP</div>
          <div className="title">Quiz Results!</div>
          <div className="list">
            <ul>
              {this.setList()}
            </ul>
          </div>
          <Badge type='score' text={this.setPoints()} />
          <Button type="default" text="Play Again!" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Results;
