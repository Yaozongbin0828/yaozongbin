#!/usr/bin/env sh

# 生成静态文件
pnpm build

# 进入生成的文件夹
# cd yaozongbin

git init
git add -A
git commit -m 'deploy'

git push -f https://gitee.com/yaozongbin/yaozongbin.git master:ssh-pages

# cd-