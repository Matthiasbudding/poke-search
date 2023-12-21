import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FindPokemon from "./FindPokemon";

afterEach(cleanup);

describe("FindPokemon", () => {
  it("renders the correct content", () => {
    const { getByText } = render(<FindPokemon />);
  });

  it("FindPokemon value should change after filling the input", async () => {
    const user = userEvent.setup();
    const { getByLabelText } = render(<FindPokemon />);

    const input = getByLabelText(/search/i);
    await user.type(input, "pikachu");
    expect(input.value).toBe("pikachu");
  });
});
