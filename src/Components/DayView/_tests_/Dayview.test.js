import React from "react";
import { render } from "@testing-library/react";
import Day from "..";

it("Renders with default values", () => {
  const weatherInstance = {
    averageTemprature: 21,
    date: "Today 24th",
    description: "clear sky",
    iconURL: "/icons/01n.svg",
    style: "background: linear-gradient($clear-sky-dark, $clear-sky-light);",
    tempInF: 70,
    type: "clear-sky",
  };
  const { queryByTestId } = render(<Day weatherInstance={weatherInstance}></Day>);

  expect(queryByTestId("averageTemprature").textContent).toBe("21");
  expect(queryByTestId("date").textContent).toBe("Today 24th");
  expect(queryByTestId("description").textContent).toBe("clear sky");
});
