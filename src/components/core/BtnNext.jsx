import React from "react";

export default function BtnNext(props) {
  return <button type="button" className="buttonLogin btn-block" onClick={props.onClick}>{props.text}</button>;
}


