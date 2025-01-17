import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterEach(cleanup);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("App", () => {
  it("renders the correct content", () => {
    const { getByText } = render(<App />);
  });

  it("App class API after changes data", async () => {
    const user = userEvent.setup();
    const { getByLabelText } = render(<App />);

    const input = getByLabelText(/search/i);
    await user.type(input, "pikachu");
    await new Promise((r) => setTimeout(r, 600));
    expect(input.value).toBe("pikachu");
  });
});
