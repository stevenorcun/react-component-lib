import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  variant?: string;
}

function Button(props: ButtonProps) {
  return <button className={`btn btn-${props.variant}`}>{props.label}</button>;
}

Button.defaultProps = {
  variant: "primary",
};

export default Button;
