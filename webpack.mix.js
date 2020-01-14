const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
    .sass('src/scss/app.scss', 'public/css')
    .browserSync({
        server: './public',
        proxy: null,
        files: [
            './public/index.html',
            './src'
        ]
    });
