#!/usr/bin/env bash
set -e

echo "Running Campus Connect tests..."

test -f index.html
test -f events.html
test -f css/style.css
test -f js/script.js

grep -q 'js/script.js' index.html
grep -q 'js/script.js' events.html

echo "Campus Connect tests passed."
