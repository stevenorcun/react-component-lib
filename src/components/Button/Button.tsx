import React from "react";

interface ButtonProps {
  label: string;
  variant: string;
}

function Button(props: ButtonProps) {
  return <button className={`btn btn-${props.variant}`}>{props.label}</button>;
}

export default Button;
