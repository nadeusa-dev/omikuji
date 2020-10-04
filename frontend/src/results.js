export function getResults () {
  return [...Array(100).keys()]
    .map(i => i + 1)
    .map(i => `結果${i}`)
}
