#!/bin/bash

# VuePressでサイトをビルド
yarn build

# docs/CNAMEをリストア
git restore docs/CNAME

# すべての変更をgitに追加
git add .

# コミット
git commit -m "update"

# リモートリポジトリにプッシュ
git push

