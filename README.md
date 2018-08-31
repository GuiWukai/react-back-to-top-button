# React-back-to-top-button

A React component that scrolls back to the top.

## Installation

With npm:

```sh
npm install react-back-to-top-button
```

With yarn:

```sh
yarn add react-back-to-top-button
```

## Example

```jsx
import React, { Component } from "react";
import BackToTop from "react-back-to-top";

class App extends Component {
  render() {
    return (
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>scroll up</span>
      </BackToTop>
    );
  }
}
```

## Props

| Prop               | Required | Default         | Type                            | Description                                                                       |
| ------------------ | -------- | --------------- | ------------------------------- | --------------------------------------------------------------------------------- |
| **children**       |          | `"UP"`          | `React.ReactElement` / `string` | content of the back to top component                                              |
| **scrollTo**       |          | `0`             | `number`                        | scroll to a certain position on click                                             |
| **showOnScrollUp** |          | `false`         | `boolean`                       | show the back to top button only when the user scrolls up.                        |
| **showAt**         |          | `1000`          | `number`                        | show the button at y position                                                     |
| **speed**          |          | `2000`          | `number`                        | scrolling speed                                                                   |
| **easing**         |          | `"easeOutSine"` | `string`                        | scroll timing function. Options: "easeOutSine", "easeInOutSine", "easeInOutQuint" |
| **style**          |          |                 | `Object`                        | style of the floating button.                                                     |

## License

[MIT](https://github.com/GuiWukai/react-back-to-top-button/blob/master/LICENSE)
