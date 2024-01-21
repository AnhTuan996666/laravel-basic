1 cài đặt passport
composer require laravel/passport
2 Chạy Passport migrations:
php artisan migrate
3 Chạy lệnh cài đặt Passport để tạo khóa mã hóa:
php artisan passport:install