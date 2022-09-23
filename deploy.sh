#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -add
commit -m 'New Deployment'
git push -f git@github.com:Biokukesi/hobbitonv1.git master:gh-pages

cd -