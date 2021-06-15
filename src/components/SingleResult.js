import React from "react";
import DOMPurify from 'dompurify';
import "../styles/build/SingleResult.css";

function SingleResult(props) {
  return (
    <li key={props.index}>
      <span
        className={`question-text ${props.respuesta}`}
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.pregunta)}}
      >
      </span>
    </li>
  );
}

export default SingleResult;
