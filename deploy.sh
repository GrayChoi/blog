#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd _site

git init
git config user.name "Gray Choi"
git config user.email "gray.choi.1988@gmail.com"

git remote add upstream "https://${GH_TOKEN}@github.com/GrayChoi/blog.git"
git fetch upstream
git reset upstream/gh-pages

echo "purerender.io" > CNAME
mv ../sitemap.txt ./sitemap.txt

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages