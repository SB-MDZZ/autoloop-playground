/** Capitalizes the first letter of each word. */
export function titleCase(text) {
  return text
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ')
}
