import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Input from "../components/helpers/Input";

describe("Input Component", () => {
  it("renders the component without errors", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    expect(getByText("Select number of Rows :")).toBeInTheDocument();
    expect(getByTestId("inputField")).toBeInTheDocument();
    expect(getByTestId("submitButton")).toBeInTheDocument();
  });

  it("handles a valid submission", () => {
    const { queryByText, getByTestId } = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const inputField = getByTestId("inputField");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputField, { target: { value: "3" } });
    fireEvent.click(submitButton);

    expect(queryByText("Rows must be atleast 2")).toBeNull();
  });

  it("handles an invalid submission", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const inputField = getByTestId("inputField");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputField, { target: { value: "1" } });
    fireEvent.click(submitButton);

    expect(getByText("Rows must be atleast 3")).toBeInTheDocument();
  });
});
