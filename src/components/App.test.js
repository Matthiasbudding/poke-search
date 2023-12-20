import { cleanup, fireEvent, render } from "@testing-library/react";

import App from "./App";
import bulbasaur from "../__mocks__/bulbasaur.json";
import { afterEach } from "node:test";

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => bulbasaur,
  })
);

afterEach(cleanup);

it("renders without crashing", () => {
  render(<App />);
});

it("", () => {
  render(<App />);
});
