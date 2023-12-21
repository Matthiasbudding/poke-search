import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

import pikachu from "../__mocks__/pikachu.json";

afterEach(cleanup);

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => pikachu,
  })
);

it("App: should render without problems", () => {
  render(<App />);
});

it("App: changes data after input change", async () => {
  // ARRANGE
  const user = userEvent.setup();
  const { getByRole, getByLabelText } = render(<App />);

  // ACT
  const input = getByLabelText(/search/i);
  const expectedResult = "pikachu";

  await user.type(input, expectedResult);
  await new Promise((r) => setTimeout(r, 600));

  // ASSERT
  const h1 = getByRole("heading", { level: 1 });
  expect(h1.innerHTML).toBe("pikachu");
});
