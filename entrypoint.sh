#!/bin/bash
if [ ! -d "vendor" ]; then
    composer install --no-interaction
fi

php-fpm