/** Adds two numbers. */
export function add(a, b) {
  return a + b
}

/** Formats a duration in seconds as m:ss. */
export function clock(seconds) {
  const whole = Math.max(0, Math.floor(seconds))
  const minutes = Math.floor(whole / 60)
  const rest = whole % 60
  return `${minutes}:${String(rest).padStart(2, '0')}`
}