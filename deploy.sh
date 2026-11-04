#!/bin/bash
# 部署到线上 /var/www/html/tools/apple-chip
cd /var/www/html/tools/ &&
if compgen -G "./apple-chip-*.zip" > /dev/null; then
    rm -Rf apple-chip/* &&
    mv apple-chip-*.zip apple-chip &&
    cd apple-chip &&
    unzip apple-chip-* &&
    rm -f apple-chip-*.zip
    echo 'Apple Chip deploy finished.'
else
    echo "apple-chip-*.zip 不存在"
fi
