'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: require('./package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                force: true
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'lib/**/*.js',
                    'test/**/*-spec.js'
                ]
            }
        },

        browserify: {
            build: {
                options: {
                    standalone: '<%= pkg.name %>'
                },
                src: ['lib/**/*.js'],
                dest: 'index.js'
            },
            test: {
                options: {
                    debug: true
                },
                src: ['test/**/*-spec.js'],
                dest: 'test/index.js'
            }
        },

        simplemocha: {
            options: {
                reporter: 'spec',
                ui: 'bdd'
            },
            all: {
                src: 'test/index.js'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            all: {
                files: [
                    'Gruntfile.js',
                    'lib/**/*.js',
                    'test/**/*-spec.js'
                ],
                tasks: ['default']
            }
        }
    });

    grunt.registerTask('default', ['lint', 'build', 'test']);
    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('test', ['simplemocha']);
};
