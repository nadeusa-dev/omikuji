// seedを元にhash値を生成する.
// 同じseedに対して、常に同じhash値を生成する（はず）
// TODO: ソルトの追加
export function generateHash (seed) {
  const crypto = require('crypto')
  const hashHex = crypto.createHash('sha256').update(seed + '').digest('hex')

  return hashHex
}
