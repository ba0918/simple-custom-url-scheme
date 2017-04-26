// @flow

type OS = 'Android' | 'iOS' | 'PC'

type Context = {
  [OS]: {
    target: string,
    fallback: string
  }
}

const DELAY_TIME = 500

export function detectOS (ua: string): OS {
  switch (true) {
    case /Android/.test(ua):
      return 'Android'
    case /iPhone|iPod|iPad/.test(ua):
      return 'iOS'
    default:
      return 'PC'
  }
}

export function launch (target: string, fallback: string): void {
  window.location.href = (new URL(target)).href
  if (fallback) {
    setTimeout(() => { window.location.href = (new URL(fallback)).href }, DELAY_TIME)
  }
}

export function dispatch (ua: string, context: Context): void {
  const os = detectOS(ua)
  if (!context.hasOwnProperty(os)) {
    throw new Error(`${os} context is not defined`)
  }
  launch(context[os].target, context[os].fallback)
}
