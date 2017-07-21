module.exports = function (grunt) {

grunt.initConfig({
    cssmin: {
            dist: {
                files: [
                    { src: 'src/css/about.css', dest: 'dist/css/about.css' },
                    { src: 'src/css/articles.css', dest: 'dist/css/articles.css' },
                    { src: 'src/css/books.css', dest: 'dist/css/books.css' },
                    { src: 'src/css/combinations.css', dest: 'dist/css/combinations.css' },
                    { src: 'src/css/home.css', dest: 'dist/css/home.css' },
                    { src: 'src/css/normalize.css', dest: 'dist/css/normalize.css' },
                    { src: 'src/css/performance.css', dest: 'dist/css/performance.css' },
                    { src: 'src/css/skeleton.css', dest: 'dist/css/skeleton.css' },
                    { src: 'src/css/tools.css', dest: 'dist/css/tools.css' }
                ]
            }
        },
    copy: {
  main: {
    files: [
                     {src: ['src/index.html'], dest: 'dist/index.html'},
                     {src: ['src/articles.html'], dest: 'dist/articles.html'},
                     {src: ['src/font-performance.html'], dest: 'dist/font-performance.html'},
                     {src: ['src/about.html'], dest: 'dist/about.html'},
                     {src: ['src/typography-books.html'], dest: 'dist/typography-books.html'},
                     {src: ['src/web-font-combinations.html'], dest: 'dist/web-font-combinations.html'},
                     {src: ['src/web-font-tools.html'], dest: 'dist/web-font-tools.html'},
                     {src: ['src/favicon.ico'], dest: 'dist/favicon.ico'},
                     {src: ['src/manifest.json'], dest: 'dist/manifest.json'},
                     {src: ['src/params.json'], dest: 'dist/params.json'},
                     {src: ['src/sitemap.xml'], dest: 'dist/sitemap.xml'},
                     {src: ['src/sw.js'], dest: 'dist/sw.js'},
                     {src: ['src/workbox-sw.prod.v1.1.0.js'], dest: 'dist/workbox-sw.prod.v1.1.0.js'},
                     {src: ['src/icons/github-icon.svg'], dest: 'dist/icons/github-icon.svg'},                    
                     {src: ['src/icons/typography.png'], dest: 'dist/icons/typography.png'}                    
    ],
  },
},
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default tasks.
    grunt.registerTask('default', ['cssmin', 'copy']);

};