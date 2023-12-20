import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import eevee from "../eevee.json";

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => eevee,
  })
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
