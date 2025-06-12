#!/bin/bash

read T

for ((tc  = 1; tc <= T; tc++)); do
    read s
    first=${s:0:1}
    last=${s: -1}
    echo "${first}${last}"
done