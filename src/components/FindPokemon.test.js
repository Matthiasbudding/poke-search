import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FindPokemon from "./FindPokemon";

afterEach(cleanup);

it("FindPokemon should render without problems", () => {
  render(<FindPokemon />);
});

it("FindPokemon value should change after filling input", async () => {
  const user = userEvent.setup();
  const { getByLabelText } = render(<FindPokemon />);

  const input = getByLabelText(/search/i);
  const expectedResult = "pikachu";

  await user.type(input, expectedResult);

  expect(input.value).toBe(expectedResult);
});
