#!/bin/bash

# VuePressでサイトをビルド
yarn build

# docs/CNAMEをリストア
git restore docs/CNAME

# すべての変更をgitに追加
git add .

# コミット
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# リモートリポジトリにプッシュ
git push

