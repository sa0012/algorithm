#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git status
git add .
npm run commit
cd -