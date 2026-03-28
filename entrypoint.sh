#!/bin/bash
set -e

if [ ! -d "vendor" ]; then
    composer install --no-interaction
fi

exec php -S 0.0.0.0:8000 -t public/
