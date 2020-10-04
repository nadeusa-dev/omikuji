// おみくじ結果の一覧を返却する.
// TODO: 本番のおみくじ結果に差し替える.
export function getResults () {
  return loadResultsFile()
}

// function getMockResults () {
//   // 0~99の配列を生成 => [0, 1, 2, ... 99]
//   return [...Array(100).keys()]
//     // 配列のすべての要素に、1を足す => [1, 2, 3, ... 100]
//     .map(i => i + 1)
//     // 結果[数値]の文字列に変換 => ['結果1', '結果2', ... '結果100']
//     .map(i => `結果${i}`)
// }

// TODO: ファイルから取得するよう変更する
function loadResultsFile () {
  return [
    '穏やかな1日！\n海のような広い心で過ごせるかも！\nウニ、サーモン、蟹味噌を食べよう！\n美味しいからね。',
    '対人運◎！\n気になってはいるけど疎遠になっていた人に連絡してみよう。向こうもきっと気にかけてくれているはず！',
    '新しい発見がある日！\n今日はいつもより周りに意識を向けてみて。世界がぐ〜んと広がるよ！\nふんふん。',
    'あなたの魅力が際立つ日！\nお気に入りの服を着てお出かけしよう。るるる〜♫',
    '昔の作品に縁があり。ドラマ、映画、アニメ、漫画など好きな分野で手を広げよう！',
    '成長が期待できる1日！\n今日は１個だけ目標を決めてみて！\n小さいことでも達成することで自信に繋がるよ！',
    '夢に1歩近づける日！\n子供の頃好きだったものを書き出してみよう！\n今に繋がるヒントが隠されているかも。',
    '日頃の疲れをリセットしよう。好きなことをする時間を確保して！\n明日の活力を蓄えようね！\nえいえいおー！',
    '過去を清算できる日。忘れられなかった嫌なことから学びを見つけてみて！\nそれができたらあの頃よりも成長できた証拠だよ！',
    'いつもより愛情深い日。\n好きな動物の画像を見て癒されてみよう！\nにゃんぴょんわん！',
    '自由を感じられる日！\n仕事終り・学校帰りに美味しいものを食べたり寄り道してみよう！\n日常から離れることも時には大切だよ！',
    '苦手を克服できる日！\nずっと嫌いだったものをどうやったら好きになれるか考えてみよう。\n工夫や気の持ち方次第で見え方は180度変わるよ！'
  ]
}