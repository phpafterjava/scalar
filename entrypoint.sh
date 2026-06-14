#!/bin/bash
<<<<<<< HEAD
set -e
=======
if [ ! -d "vendor" ]; then
    composer install --no-interaction
fi
>>>>>>> feat/init-backend-symfony

if [ ! -d "vendor" ]; then
<<<<<<< HEAD
    composer install --no-interaction
fi
=======
    composer install
>>>>>>> feat/init-backend-symfony

exec php -S 0.0.0.0:8000 -t public/
