import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

const stringWord = "ciao";
const aNumber = 5;
const array = ["one", "two", "three"];
const obj = {
  name: "Rita",
  lastName: "Petillo",
};

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("app snapshot test", () => {
//   const component = renderer.create(<App />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

test("contains ciao", () => {
  expect(stringWord).toMatch(/cia/);
});

test("it contains ciao", () => {
  expect(stringWord).toContain("ciao");
});

test("the number is greater than 10", () => {
  expect(aNumber).toBeLessThan(10);
});

test("contains one and two", () => {
  expect(["one", "two", "three"]).toEqual(expect.arrayContaining(array));
});

test("it has prop name", () => {
  expect(obj).toHaveProperty("name");
});

test("it has value Rita", () => {
  expect(obj).toHaveProperty("name", "Rita");
});
