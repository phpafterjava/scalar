#!/bin/bash
set -e

if [ ! -d "vendor" ]; then
<<<<<<< HEAD
    composer install --no-interaction
fi
=======
    composer install
>>>>>>> feat/init-backend-symfony

exec php -S 0.0.0.0:8000 -t public/
