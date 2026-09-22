#!/usr/bin/env bash
set -e

echo "Running Campus Connect tests..."

test -f index.html
test -f events.html
test -f css/style.css
test -f js/main.js

grep -q 'js/main.js' index.html
grep -q 'js/main.js' events.html

echo "Campus Connect tests passed."
