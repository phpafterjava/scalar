#!/bin/bash
if [ ! -d "vendor" ]; then
    composer install

php-fpm