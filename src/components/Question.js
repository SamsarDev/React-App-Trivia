import React, { Fragment } from "react";
import DOMPurify from 'dompurify';
import "../styles/build/Question.css";

function Question(props) {
  return (
    <Fragment>
      <div className="title">{props.title}</div>
      { <div className="sub-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.text)}}></div> }
    </Fragment>
  );
}

export default Question;
