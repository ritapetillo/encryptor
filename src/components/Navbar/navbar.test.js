import Navbar from "./";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Navbar", () => {
  const mockStore = configureStore();
  const initialState = {
    theme: "",
  };
  const store = mockStore(initialState);

  describe("render", () => {
    it("should render container", () => {
      const { container } = render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      );

      expect(container).toBeDefined();
    });

    it("should get navbar container", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      );
      const date = getByTestId("navbar-text");
      expect(date).toHaveTextContent("Encrypted");
    });
  });
});
