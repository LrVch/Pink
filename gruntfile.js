module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt); //  берет таски из package.json

    grunt.initConfig({
        less: { //имя задачи
            source: { //имя текущей конфигурации созданное мной
                files: {
                    "source/css/style.css": ["source/less/style.less"], //  куда и откуда компилировать
                    "source/css/noscript.css": ["source/less/noscript.less"] //  куда и откуда компилировать
                },
            },
            build: {
                files: {
                    "build/css/style.css": ["source/less/style.less"],
                    "build/css/noscript.css": ["source/less/noscript.less"]
                },
            },
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 10']
            },
            build: {
                src: "build/css/style.css"
            },
        },
        cmq: {
            build: {
                files: {
                    "build/css/style.css": ["build/css/style.css"]
                },
            },
        },
        cssmin: {
            build: {
                options: {
                    keepSpecialComments: 0,
                    report: "gzip"
                },
                files: {
                    "build/css/style.min.css": ["build/css/style.css"],
                    "build/css/noscript.min.css": ["build/css/noscript.css"]
                },
            },
        },
        csscomb: {
            less: {
                expand: true,
                src: ["source/less/**/*.less"]
            },
            css: {
                expand: true,
                src: ["source/css/*.css"]
            },
            build: {
                expand: true,
                src: ["build/css/*.css"]
            },
        },
        imagemin: {
            build: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    src: ["build/img/**/*.{png,jpg,gif,svg}"]
                }]
            },
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                caseSensitive: true,
                keepClosingSlash: false
            },
            build: {
                files: {
                    "build/index.min.html": "build/index.html"
                }
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: "source",
                    src: [
                        "img/**",
                        "font/**",
                        "js/**",
                        "*.html",
                        "!img/svg/sprite/**"
                    ],
                    dest: "build"
                }]
            }
        },
        clean: {
            build: ["build"]
        },
        replace: {
            dev: {
                options: {
                    patterns: [{
                        // заменяет /css/ >> css/
                        match: /\/css\//g,
                        replacement: "css/"
                    }, { 
                        // заменяет /js >> js
                        match: /\/js/g,
                        replacement: "js"
                    }]
                },
                files: [{
                    expand: true,
                    src: [
                        "source/index*.html"
                    ]
                }]
            },
            build: {
                options: {
                    patterns: [{
                        match: /\.css/g,
                        replacement: ".min.css"
                    }, { // заменяет .js >> .min.js
                        match: /\.js/g,
                        replacement: ".min.js"
                    }, {
                        match: /\.min\.js/g,
                        replacement: ".js"
                    }]
                },
                files: [{
                    expand: true,
                    src: [
                        "build/index*.html"
                    ]
                }]
            },
            buildstatic: {
                options: {
                    patterns: [{
                        match: /[\"\']img\//g,
                        replacement: '"/static/img/'
                    }, {
                        match: /[\"\']css\//g,
                        replacement: '"/static/css/'
                    }, {
                        match: /[\"\']js\//g,
                        replacement: '"/static/js/'
                    }, {
                        match: /[\"\']\.\.\/img\//g,
                        replacement: '"/static/img/'
                    }, {
                        match: /\.css/g,
                        replacement: ".min.css"
                    }, {
                        match: /\.js/g,
                        replacement: ".min.js"
                    }, {
                        match: /\.min\.js/g,
                        replacement: ".js"
                    }]
                },
                files: [{
                    expand: true,
                    src: [
                        "build/css/style*.css",
                        "build/index*.html"
                    ]
                }]
            }
        },
        uglify: {
            build: {
                files: {
                    "build/js/script.min.js": ["build/js/script.js"]
                }
            }
        },
        "jsbeautifier": {
            "source": {
                src: ["source/js/script.js"]
            },
            "build": {
                src: ["build/js/script.js"]
            },
            grunt: {
                src: ["gruntfile.js"]
            },
        },
        concat: {
            options: {
                separator: ";",
            },
            build: {
                src: [
                    "build/js/respond.min.js",
                    "build/js/tap.min.js",
                    "build/js/scaleFix.min.js",
                    "build/js/script.min.js"
                ],
                dest: "build/js/build.min.js",
            },
        },
        jshint: {
            source: ["source/js/script.js"],
            build: ["build/js/script.js"],
        },
        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    removeEmptyAttrs: false
                }]
            },
            build: {
                files: {
                    "build/img/svg/sprite.svg": "build/img/svg/sprite.svg",
                    "build/img/svg/triangle-white.svg": "build/img/svg/triangle-white.svg",
                }
            }
        },
        watch: {
            less: {
                files: ["source/less/**/*.less"],
                tasks: ["less:source"],
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ["source/css/*.css"],
            },
            js: {
                files: "source/js/script.js",
                tasks: [],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: "source/**/*.html",
                tasks: [],
                options: {
                    livereload: true,
                },
            },
        },
        prettify: {
            options: {
                config: ".prettifyrc"
            },
            dev: {
                expand: true,
                cwd: "source",
                ext: ".html",
                src: ["*.html"],
                dest: "source"
            },
            build: {
                expand: true,
                cwd: "build",
                ext: ".html",
                src: ["*.html"],
                dest: "build"
            }
        },
        usemin: {
            html: "build/*.html", //будет ли вставлять во все?
            options: {
                blockReplacements: {
                    js: function(block) {
                        return '<script src="' + block.dest + '"></script>';
                    }
                }
            }
        },
        injector: {
            options: {
                ignorePath: "<%= bar %>",
            },
            local_dependencies: {
                files: {
                    'source/index.html': ["<%= foo %>"],
                }
            }
        },
        svg_sprite: {
            basic: {
                expand: true,
                cwd: 'source/img/svg/sprite',
                src: ['*.svg'],
                dest: 'source/img/svg/sprite/out',
                options: {
                    mode: {
                        view: {
                            bust: false,
                            render: {
                                less: true
                            },
                            layout: "vertical",
                            //mixin: "sprite"
                        },
                    },
                    shape: {
                        spacing: {
                            box: 'content',
                            padding: [1, 0, 0, 0],
                        },
                        dimension: {
                            //attributes: false,
                            //precision: 1,
                            //maxWidth: 32,
                            //maxHeight: 32,
                        }
                    },
                }
            }
        },
        // для injector
        foo: ["source/js/*.js", "source/css/*.css", "!source/js/picturefill.min.js", "!source/css/noscript.css"],
        bar: ["source/"]
    });

    grunt.registerTask("dev", [
        "less:source",
        "csscomb:less",
        "csscomb:css",
        "jsbeautifier:source",
        //"jshint:source",
        "prettify:dev"
    ]);

    grunt.registerTask("cl", [
        "csscomb:less"
    ]);

    grunt.registerTask("cc", [
        "csscomb:css"
    ]);
    grunt.registerTask("jb", [
        "jsbeautifier:source"
    ]);

    grunt.registerTask("grt", [
        "jsbeautifier:grunt"
    ]);

    grunt.registerTask("hb", [
        "prettify:dev"
    ]);

    grunt.registerTask("inj", [
        "injector",
        "replace:dev"
    ]);

    grunt.registerTask("sptsvg", [
        "svg_sprite",
    ]);

    grunt.registerTask("build", [
        "clean:build",
        "copy:build",
        "less:build",
        "autoprefixer:build",
        "cmq:build",
        "csscomb:build",
        "cssmin:build",
        "jsbeautifier:build",
        //"jshint:build",
        "uglify:build",
        "concat:build",
        "imagemin:build",
        //"svgmin:build",
        "prettify:build",
        "usemin:html", // заменяет блок скриптов на один склеенный
        "replace:build", // переименовывает .js >> .min.js   .css >> .min.css
        //"replace:buildstatic", // переименование .js >> .min.js   .css >> .min.css и вынос статики на поддомен "static"
        "htmlmin:build",
    ]);

    /*grunt.registerTask("buildop", [
        "clean",
        "copy",
        "less",
        "autoprefixer",
        "cmq",
        "csscomb",
        "cssmin",
        "imagemin",
        "htmlmin",
        "replace:build"
    ]);*/

};

// npm install grunt-svg-sprite --save-dev
// npm install grunt-csscomb --save-dev
