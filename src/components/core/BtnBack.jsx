import React from "react";

export default function BtnBack(props) {
  return (
    <button
      type="button"
      className="buttonBack  btn-block"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
