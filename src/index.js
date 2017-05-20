const DELAY_TIME = 500

export function launch(url, fallback) {
  window.location.href = url
  if (fallback) {
    setTimeout(() => {
      window.location.href = fallback
    }, DELAY_TIME)
  }
}

export function detectOS(ua) {
  switch (true) {
    case /Android/.test(ua):
      return 'Android'
    case /iPhone|iPad|iPod/.test(ua):
      return 'iOS'
    default:
      return 'PC'
  }
}

export function dispatchFromUserAgent(ua, routes) {
  const name = detectOS(ua)
  if (!routes.hasOwnProperty(name)) {
    throw new Error(`${name} is not defined in routes`)
  }
  launch(routes[name].url, routes[name].fallback)
}
