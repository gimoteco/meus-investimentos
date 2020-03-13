import React from "react";
import Title from "./Title";

describe("<Title />", () => {
  it("should render like the snapshot", () => {
    expect(<Title>hi</Title>).toMatchSnapshot();
  });
});
