import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("Should render the Button component", () => {
    render(
      <Button
        label="Test"
        variant="success"
        onClickButton={() => console.log("click")}
      />
    );
  });
});
