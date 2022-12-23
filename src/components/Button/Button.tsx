import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  variant?: string;
  onClickButton: () => any;
}

function Button(props: ButtonProps) {
  return (
    <button
      className={`btn btn-${props.variant}`}
      onClick={props.onClickButton}
    >
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
};

export default Button;
