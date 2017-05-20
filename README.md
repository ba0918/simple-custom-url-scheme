# simple-custom-url-scheme
[![Build Status](https://travis-ci.org/ba0918/simple-custom-url-scheme.svg?branch=master)](https://travis-ci.org/ba0918/simple-custom-url-scheme)

Simple custom URL scheme launcher.

## Install

```
yarn install @ba0918/simple-custom-url-scheme
```

## Usage
for Node.js
```js
import { dispatchFromUserAgent } from '@ba0918/simple-custom-url-scheme'

dispatchFromUserAgent(window.navigator.userAgent, {
  'Android': { url: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
  'iOS': { url: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
  'PC': { url: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
})
```

for Browser
```html
<script src="./simple-custom-url-scheme.js"></script>
<script>
  window.SimpleCustomURLScheme.dispatchFromUserAgent(window.navigator.userAgent, {
    'Android': { url: 'https://www.google.co.jp/', fallback:   'https://www.google.co.jp/' },
    'iOS': { url: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
    'PC': { url: 'https://www.google.co.jp/', fallback: 'https://www.google.co.jp/' },
  });
</script>
```

## Development
### Setup
```sh
yarn install
```

### Build
```sh
yarn run build
```

### Test
```sh
yarn run test
```

### Publish
```sh
yarn run build
cd dist
npm publish
```
