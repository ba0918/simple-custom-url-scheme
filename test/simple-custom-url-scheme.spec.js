import test from 'ava'
import { detectOS } from '../src/simple-custom-url-scheme'

test('detectOS# shoud return OS name from user-agent', t => {
  const cases = [
    {ua: 'Mozilla/5.0 (Linux; Android 5.1.1; KYF33 Build/XXXX; wv) AppleWebkit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36', expected: 'Android'},
    {ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1', expected: 'iOS'},
    {ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.<OS build number>', expected: 'PC'}
  ]
  cases.forEach((data) => {
    t.is(detectOS(data.ua), data.expected)
  })
})
