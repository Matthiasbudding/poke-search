import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import bulbasaur from "../__mocks__/bulbasaur.json";
import { afterEach } from "node:test";

const mockFetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => bulbasaur,
  })
);

global.fetch = mockFetch;

afterEach(cleanup);

it("renders without crashing", () => {
  render(<App />);
});

it("it should change the title after query", async () => {
  const { queryByLabelText, getByLabelText, getByText } = render(<App />);
  const user = userEvent.setup();

  expect(queryByLabelText(/search/i).value).toBe("");

  const input = getByLabelText(/search/i);

  await user.type(input, "bulbasaur");
  await new Promise((r) => setTimeout(r, 600));

  expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe("bulbasaur");
});
