# React Testing

- Volg de [guide](https://jestjs.io/docs/tutorial-react)
- `babel.config.js` werkt niet, hernoem naar `babel.config.cjs`
- `.css` doet het niet. Mocken!

```json
// in package.json

{
  "jest": {
    "moduleNameMapper": {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
  }
}
```

- Test environment: [jsdom](https://stackoverflow.com/questions/69227566/consider-using-the-jsdom-test-environment)

## fetch mocken!

In App.test.js

```js
import eevee from "../eevee.json";

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => eevee,
  })
);
```

uit [mock-fetch-jest](https://www.leighhalliday.com/mock-fetch-jest)
