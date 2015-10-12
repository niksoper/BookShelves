module.exports = (function() {
    
    var buildRoot = './public/';
    
    var config = {
        source: {
            sassMain: './scss/app.scss',
            sassFiles: './scss/**/*.scss'
        },
        build: {
            root: buildRoot,
            allCss: '/stylesheets/bookshelves.min.css'
        },
        watchTasks: ['sass'],
        sass: {
            includePaths: ['public/lib/foundation/scss']
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    };
        
    return config;
})();