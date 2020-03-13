import { render, fireEvent, getByText } from "@testing-library/react";
import { RadioField } from "./RadioField";
import React from "react";

describe("RadioField", () => {
  const options = [
    { label: "opt1", value: "opt1" },
    { label: "opt2", value: "opt2" }
  ];

  it("should trigger onChange when changed", () => {
    const onChangeMock = jest.fn();
    const [oldOption, newOption] = options;
    const { getByText } = render(
      <RadioField
        selectedOptionValue={oldOption.value}
        onChange={onChangeMock}
        options={options}
        id="testing"
      />
    );

    fireEvent.click(getByText(newOption.label));

    expect(onChangeMock).toHaveBeenNthCalledWith(1, newOption.value);
  });

  it("should include a field label", () => {
    const label = "someLabel";
    const { getByText } = render(
      <RadioField label={label} options={options} id="testing" />
    );

    expect(getByText(label)).toBeInTheDocument();
  });
});
