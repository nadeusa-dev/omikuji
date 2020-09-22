# OMIKUJI

## 概要

おみくじWebサービス


## 開発

### 開発サーバーの起動手順

```sh
# docker-compose の起動
make up

# nuxt serverの起動
make yarn
```

* ブラウザでlocalhost:3000を開くと、画面が表示される.


### github pagesへの公開手順

```sh
# gh-pagesブランチが存在する場合、一旦削除する
git branch -D gh-pages

# 今のブランチを元に、gh-pagesブランチを作成する.
git checkout -b gh-pages

# docsに静的ファイルを生成する
make generate-ghpages

# commit & push
git add docs
git commit -m "任意のコメント"
git push origin HEAD
```
