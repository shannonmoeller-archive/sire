'use strict';

var Sire = require('../../lib/Sire');
var assert = require('assert');

describe('Sire', function() {
    it('should', function() {
        // function Foo(foo) { this.foo = foo || {}; console.log('made Foo'); }
        // Foo.prototype.destroy = function() { console.log('bye Foo'); };

        // function Bar(bar) { this.bar = bar || {}; console.log('made Bar'); }
        // Bar.prototype.destroy = function() { console.log('bye Bar'); };

        // function App() {
        //     Sire.apply(this, arguments);

        //     return this
        //         .use(Foo)
        //         .use(Bar)
        //         .start()
        //         .start(
        //             { name: 'Foo', options: { id: 1 } },
        //             { name: 'Foo', options: { id: 2 } },
        //             { name: 'Bar', options: { id: 3 } },
        //             { name: 'Bar', options: { id: 4 } }
        //         );
        // }

        // var proto = App.prototype = Object.create(Sire.prototype);
        // proto.constructor = App;

        // proto._start = function(Module, options) {
        //     return new Module(options);
        // };

        // proto._stop = function(module) {
        //     return module.destroy();
        // };

        // var util = require('util');
        // var app = new App();

        // console.log(1, util.inspect(app, { depth: 10 }));

        // app.stop(app._started[1]);
        // console.log(2, util.inspect(app, { depth: 10 }));

        // app.stop();
        // console.log(3, util.inspect(app, { depth: 10 }));

        assert.ok(Sire);
    });
});

