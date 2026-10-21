# Halley's Comet Countdown ☄️

A small React app that counts down the years, days, hours, minutes, and seconds until [Halley's Comet](https://wikipedia.org/wiki/Halley%27s_Comet) returns to the inner solar system on **July 28, 2061**, its next predicted perihelion.

The countdown updates every second.

## Getting started

You'll need [Node.js](https://nodejs.org/) and npm.

```bash
git clone https://github.com/lbeckman314/halley.git
cd halley
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000). The page reloads when you save changes.

## Scripts

| Command         | What it does                                                        |
| --------------- | ------------------------------------------------------------------- |
| `npm start`     | Runs the app in development mode at http://localhost:3000.          |
| `npm test`      | Runs the test runner in interactive watch mode.                     |
| `npm run build` | Builds an optimized production bundle into the `build/` folder.     |

## How it works

Everything lives in [`src/App.js`](src/App.js):

- `countdown()` computes the time remaining between now and the target date and splits it into years, days, hours, minutes, and seconds. A year is counted as 365 days.
- The `App` component calls `countdown()` once a second with `setInterval` and renders the result.

To count down to a different date, change the `then` date in `countdown()`.

Styling is in [`src/App.css`](src/App.css), and the comet image is [`src/halleys.jpg`](src/halleys.jpg).

## Built with

- [React](https://react.dev/) 18
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5)

## License

[Apache License 2.0](LICENSE)
