# simple-custom-url-scheme

Simple custom URL scheme launcher.

## Usage

```js
import {dispatch} from 'simple-custom-url-scheme'

dispatch(window.navigator.userAgent, {
  'Android': { target: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
  'iOS': { target: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
  'PC': { target: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
})
```

## Tests

```
yarn test
```
