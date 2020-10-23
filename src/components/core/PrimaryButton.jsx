import React, { Fragment } from "react";
import classnames from "classnames";
import { CircularProgress } from "@material-ui/core";

export default function PrimaryButton(props) {
  /**
  |--------------------------------------------------
  | Handlers
  |--------------------------------------------------
  */
  function getClassName() {
    return classnames(
      "px-4 py-2 rounded text-white text-sm",
      {
        "bg-primary hover:bg-primary-dark": !props.disabled,
        "bg-gray-500 cursor-not-allowed": props.disabled,
        "w-32": props.loading,
      },
      props.className
    );
  }

  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  if (props.loading) {
    return (
      <button className={getClassName()}>
        <CircularProgress size={16} color="inherit" />
      </button>
    );
  }

  return (
    <Fragment>
      {props.disabled ? (
        <button className={getClassName()} type={props.type}>
          {props.children}
        </button>
      ) : (
        <button
          className={getClassName()}
          type={props.type}
          onClick={props.onClick}
          data-cy={props["data-cy"]}
        >
          {props.children}
        </button>
      )}
    </Fragment>
  );
}

/**
|--------------------------------------------------
| Default Props
|--------------------------------------------------
*/
PrimaryButton.defaultProps = {
  type: "button",
  onClick: () => {},
};
