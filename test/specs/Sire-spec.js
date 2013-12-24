'use strict';

var Sire = require('../../lib/Sire');
var assert = require('assert');

describe('Sire', function() {
    describe('constructor', function() {
        it('should create an instance', function() {
            var app = new Sire();

            assert.deepEqual(app, {
                _modules: {},
                _started: []
            });
        });
    });

    describe('start()', function() {
        it('should start all registered modules', function() {
            function Bar() {}
            function Foo() {}

            var app = new Sire();

            app._modules = {
                Bar: Bar,
                Foo: Foo
            };

            app._start = function(Module, options) {
                return new Module(options);
            };

            app.start();

            assert.strictEqual(app._started.length, 2);
            assert.ok(app._started[0] instanceof Bar);
            assert.ok(app._started[1] instanceof Foo);
        });

        it('should start a registered module', function() {
            function Bar() {}
            function Foo(options) {
                this.options = options;
            }

            var app = new Sire();

            app._modules = {
                Bar: Bar,
                Foo: Foo
            };

            app._start = function(Module, options) {
                return new Module(options);
            };

            app
                .start({ name: 'Foo', options: { a: 1 } })
                .start({ name: 'Foo', options: { b: 2 } });

            assert.strictEqual(app._started.length, 2);
            assert.ok(app._started[0] instanceof Foo);
            assert.ok(app._started[1] instanceof Foo);
            assert.deepEqual(app._started[0].options, { a: 1 });
            assert.deepEqual(app._started[1].options, { b: 2 });
        });
    });

    describe('_start()', function() {
        it('should throw a not-implemented error', function() {
            var app = new Sire();

            app._modules = {
                Foo: function() {}
            };

            assert.throws(function() {
                app._start();
            });

            assert.throws(function() {
                app.start();
            });
        });
    });

    describe('stop()', function() {
        it('should stop all started modules', function() {
            var bar = { a: 1 };
            var foo = { b: 2 };

            var app = new Sire();

            app._started = [bar, foo];

            app._stop = function(instance) {
                return instance;
            };

            app.stop();

            assert.strictEqual(app._started.length, 0);
            assert.deepEqual(app._started, []);
        });

        it('should stop a started module', function() {
            var bar = { a: 1 };
            var foo = { b: 2 };

            var app = new Sire();

            app._started = [bar, foo];

            app._stop = function(instance) {
                assert.strictEqual(instance, foo);
                return instance;
            };

            app.stop(foo);

            assert.strictEqual(app._started.length, 1);
            assert.deepEqual(app._started, [bar]);
        });
    });

    describe('_stop()', function() {
        it('should throw a not-implemented error', function() {
            var app = new Sire();

            app._started = [{}];

            assert.throws(
                function() { app._stop(); },
                /not implemented/
            );

            assert.throws(
                function() { app.stop(); },
                /not implemented/
            );
        });
    });

    describe('use()', function() {
        it('should throw an invalid-name error', function() {
            var app = new Sire();

            assert.throws(
                function() { app.use(); },
                /invalid name/
            );

            assert.throws(
                function() { app.use({}); },
                /invalid name/
            );

            assert.throws(
                function() { app.use(function() {}); },
                /invalid name/
            );
        });

        it('should throw an invalid-module error', function() {
            var app = new Sire();

            var A;
            var B = null;

            assert.throws(
                function() { app.use('A', A); },
                /invalid module/
            );

            assert.throws(
                function() { app.use('B', B); },
                /invalid module/
            );
        });

        it('should register a module', function() {
            var app = new Sire();

            var A = {};
            var B = function() {};
            var C = { name: 'C' };
            function D() {}

            app
                .use('A', A)
                .use('B', B)
                .use(C)
                .use(D);

            assert.deepEqual(app._modules, {
                'A': A,
                'B': B,
                'C': C,
                'D': D
            });
        });
    });
});
