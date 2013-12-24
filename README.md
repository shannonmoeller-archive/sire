# Sire

> JavaScript module husbandry. Base class for modules, such as applications and controllers, that will be responsible for managing the lifecycle of other modules, such as models, views, or child controllers. How modules are started and stopped is determined by the implementing class via `_start` and `_stop` methods.

[![Build Status](https://travis-ci.org/shannonmoeller/sire.png?branch=master)](https://travis-ci.org/shannonmoeller/sire)
[![NPM version](https://badge.fury.io/js/sire.png)](http://badge.fury.io/js/sire)
[![Dependency Status](https://gemnasium.com/shannonmoeller/sire.png)](https://gemnasium.com/shannonmoeller/sire)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/shannonmoeller/sire/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Install

With [Node.js](http://nodejs.org):

    $ npm install sire

With [Bower](http://bower.io):

    $ bower install shannonmoeller/sire

With [Component](http://component.io):

    $ component install shannonmoeller/sire

## API for Sire Consumers

### `start( [obj...] ) : Sire`

- `obj...` `Object` _(optional)_

### `stop( [obj...] ) : Sire`

- `obj...` `Object` _(optional)_

### `use( [name], module ) : Sire`

- `name` `String` _(optional)_
- `module` `Object | Function`

## API for Sire Implementors

### `_start( module, [options] ) : instance`

- `module` `Object | Function`
- `options` `Object` _(optional)_

Note: **Implement this function, but do NOT call it directly.**

### `_stop( [instance] )`

- `instance` `Object` _(optional)_

Note: **Implement this function, but do NOT call it directly.**

## Example

    var Sire = require('sire');

    function Foo(options, parent) {
        this.options = options || {};
        this.parent = parent;
    }

    function Bar(options, parent) {
        this.options = options || {};
        this.parent = parent;
    }

    function App() {
        Sire.call(this);

        return this
            .use(Foo)
            .use(Bar)
            .start();
    }

    App.prototype = Object.create(Sire.prototype);
    App.prototype.constructor = App;

    App.prototype._start = function(Module, options) {
        // create instance
        return new Module(options, this);
    };

    App.prototype._stop = function(instance) {
        // destroy instance
    };

    var app = new App();

## Test

    $ npm test

[![Browser Support](http://ci.testling.com/shannonmoeller/sire.png)](http://ci.testling.com/shannonmoeller/sire)

## License

MIT
