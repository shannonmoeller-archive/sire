'use strict';

/**
 * @class Sire
 * @constructor
 */
function Sire() {
    /**
     * @property _modules
     * @type Object
     * @private
     */
    this._modules = {};

    /**
     * @property _started
     * @type Object
     * @private
     */
    this._started = [];
}

/**
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
 * @method _start
 * @param {Function} Module
 * @param {Object} [options]
 */
Sire.prototype._start = function(/* Module, options */) {
    throw new Error('not implemented');
};

/**
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

    // Stop all known modules
    if (length === 0) {
        i = started.length;

        // Stop in reverse order of creation
        while (i--) {
            instance = started[i];
            this._stop(instance);
        }

        started.length = 0;

        return this;
    }

    // Stop specific modules
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
 * @method _stop
 * @param {Object} instance
 */
Sire.prototype._stop = function(/* instance */) {
    throw new Error('not implemented');
};

/**
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

    this._modules[module.name] = module;

    return this;
};

module.exports = Sire;
