'use strict';

/**
 * JavaScript module husbandry. Base class for modules, such as applications and
 * controllers, that will be responsible for managing the lifecycle of other
 * modules, such as models, views, or child controllers. How modules are started
 * and stopped is determined by the implementing class via `_start` and `_stop`
 * methods.
 *
 * @class Sire
 * @constructor
 */
function Sire() {
    /**
     * Used modules.
     *
     * @property _modules
     * @type Object
     * @private
     */
    this._modules = {};

    /**
     * Started modules.
     *
     * @property _started
     * @type Object
     * @private
     */
    this._started = [];
}

/**
 * Starts some or all registered modules.
 *
 * @method start
 * @param {Object} [arg]*
 * @param {String} arg.name
 * @param {Object} [arg.options]
 * @chainable
 */
Sire.prototype.start = function() {
    var i;
    var arg;
    var module;
    var modules = this._modules;
    var started = this._started;
    var length = arguments.length;

    // Stop using
    delete this.use;

    // Start all known modules
    if (length === 0) {
        for (i in modules) {
            if (modules.hasOwnProperty(i)) {
                module = modules[i];
                started.push(this._start(module));
            }
        }

        return this;
    }

    // Start specific modules with options
    for (i = 0; i < length; i++) {
        arg = arguments[i];
        module = arg && modules[arg.name];

        // Only start known modules
        if (module) {
            started.push(this._start(module, arg.options));
        }
    }

    return this;
};

/**
 * Starts a registered module. Sub classes must implement this method.
 *
 * @method _start
 * @param {Function} module
 * @param {Object} [options]
 */
Sire.prototype._start = function(/* module, options */) {
    throw new Error('not implemented');
};

/**
 * Stops some or all started modules.
 *
 * @method stop
 * @param {Object} [arg]*
 * @chainable
 */
Sire.prototype.stop = function() {
    var i;
    var index;
    var instance;
    var started = this._started;
    var length = arguments.length;

    // Stop all started modules
    if (length === 0) {
        i = started.length;

        // Stop in reverse order of creation
        while (i--) {
            instance = started[i];
            this._stop(instance);
        }

        // Empty array
        started.length = 0;

        return this;
    }

    // Stop specific started modules
    for (i = 0; i < length; i++) {
        instance = arguments[i];
        index = started.indexOf(instance);

        // Only stop owned modules
        if (index >= 0) {
            this._stop(instance);
            started.splice(index, 1);
        }
    }

    return this;
};

/**
 * Stops a started module. Sub classes must implement this method.
 *
 * @method _stop
 * @param {Object} instance
 */
Sire.prototype._stop = function(/* instance */) {
    throw new Error('not implemented');
};

/**
 * Registers a module to be sired.
 *
 * @method use
 * @param {String|Object} name
 * @param {Object} [module]
 * @chainable
 */
Sire.prototype.use = function(name, module) {
    if (arguments.length === 1) {
        module = name;
        name = module.name;
    }

    if (name === undefined || name === '') {
        throw new Error('invalid module name');
    }

    if (module === undefined) {
        throw new Error('invalid module');
    }

    this._modules[name] = module;

    return this;
};

module.exports = Sire;
