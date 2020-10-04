import { generateHash } from './utils/omikuji-utils'
import { getResults } from './results'

// ハッシュ値を元におみくじ結果を返却する.
export function getResultFromHash (hash) {
  const index = getIndexFromHash(hash)

  if (index === null) {
    throw new Error('無効なHash値です')
  }

  return getResult(index)
}

// おみくじ結果に対応するハッシュ値を、ランダムに1つ生成する.
export function generateRandomHash () {
  const results = getResults()
  const randomIndex = Math.floor(Math.random() * results.length)

  return generateHash(randomIndex)
}

// indexに対応するおみくじ結果を返却する.
function getResult (index = null) {
  const results = getResults()
  if (index < 0 || index > results.length - 1) {
    throw new Error('error')
  }

  return results[index]
}

// ハッシュ値を元に、対応するindex値を返却する.
function getIndexFromHash (hash = '') {
  const results = getResults()

  return [...Array(results.length).keys()].find(i => (hash === generateHash(i)))
}
