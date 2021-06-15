import React, { Component } from "react";
import Button from "../components/Button";
import Imagen from "../assets/card-vertical.svg";
import "../styles/build/Introduction.css";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.nextPage('qst');
  }

  render() {
    return (
      <div id="introduction-view" className="card">
        <img src={Imagen} alt="Imagen de prueba"></img>
        <div className="title">Quiz Game</div>
        <div className="sub-title">Do you want to play a game?</div>
        <Button type="default" text="Start the game" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Introduction;
