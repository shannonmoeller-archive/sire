(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log("COVERAGE " + "\"/Users/smoeller/Repos/github/shannonmoeller/sire/lib/Sire.js\"" + " " + "[[0,13],[516,520],[516,534],[516,535],[650,654],[650,668],[650,669],[844,858],[884,890],[895,903],[908,919],[938,942],[938,951],[938,951],[924,952],[971,975],[971,984],[971,984],[957,985],[1003,1019],[1003,1019],[990,1020],[1061,1073],[1122,1147],[1167,1186],[1167,1187],[1217,1221],[1217,1236],[1204,1237],[1204,1238],[1279,1283],[1344,1349],[1351,1361],[1363,1366],[1378,1396],[1378,1397],[1430,1438],[1422,1439],[1406,1439],[1406,1440],[1525,1529],[1525,1557],[1512,1558],[1512,1559],[1588,1592],[844,1595],[844,1596],[1755,1769],[1823,1851],[1755,1854],[1755,1855],[1962,1976],[2001,2007],[2012,2022],[2027,2040],[2059,2063],[2059,2072],[2059,2072],[2045,2073],[2091,2107],[2091,2107],[2078,2108],[2150,2162],[2174,2192],[2174,2193],[2255,2258],[2274,2295],[2274,2296],[2309,2313],[2309,2329],[2309,2330],[2373,2391],[2373,2392],[2409,2413],[2468,2473],[2475,2485],[2487,2490],[2502,2525],[2502,2526],[2535,2568],[2535,2569],[2618,2628],[2644,2648],[2644,2664],[2644,2665],[2678,2702],[2678,2703],[2732,2736],[1962,2739],[1962,2740],[2865,2879],[2925,2953],[2865,2956],[2865,2957],[3093,3107],[3147,3163],[3147,3169],[3181,3194],[3181,3195],[3204,3222],[3204,3223],[3239,3251],[3255,3266],[3239,3266],[3284,3309],[3326,3340],[3358,3385],[3398,3402],[3398,3411],[3398,3426],[3398,3427],[3440,3444],[3093,3447],[3093,3448],[3450,3471],[3450,3472]]");var __coverage = {"0":[0,13],"1":[516,520],"2":[516,534],"3":[516,535],"4":[650,654],"5":[650,668],"6":[650,669],"7":[844,858],"8":[884,890],"9":[895,903],"10":[908,919],"11":[938,942],"12":[938,951],"13":[938,951],"14":[924,952],"15":[971,975],"16":[971,984],"17":[971,984],"18":[957,985],"19":[1003,1019],"20":[1003,1019],"21":[990,1020],"22":[1061,1073],"23":[1122,1147],"24":[1167,1186],"25":[1167,1187],"26":[1217,1221],"27":[1217,1236],"28":[1204,1237],"29":[1204,1238],"30":[1279,1283],"31":[1344,1349],"32":[1351,1361],"33":[1363,1366],"34":[1378,1396],"35":[1378,1397],"36":[1430,1438],"37":[1422,1439],"38":[1406,1439],"39":[1406,1440],"40":[1525,1529],"41":[1525,1557],"42":[1512,1558],"43":[1512,1559],"44":[1588,1592],"45":[844,1595],"46":[844,1596],"47":[1755,1769],"48":[1823,1851],"49":[1755,1854],"50":[1755,1855],"51":[1962,1976],"52":[2001,2007],"53":[2012,2022],"54":[2027,2040],"55":[2059,2063],"56":[2059,2072],"57":[2059,2072],"58":[2045,2073],"59":[2091,2107],"60":[2091,2107],"61":[2078,2108],"62":[2150,2162],"63":[2174,2192],"64":[2174,2193],"65":[2255,2258],"66":[2274,2295],"67":[2274,2296],"68":[2309,2313],"69":[2309,2329],"70":[2309,2330],"71":[2373,2391],"72":[2373,2392],"73":[2409,2413],"74":[2468,2473],"75":[2475,2485],"76":[2487,2490],"77":[2502,2525],"78":[2502,2526],"79":[2535,2568],"80":[2535,2569],"81":[2618,2628],"82":[2644,2648],"83":[2644,2664],"84":[2644,2665],"85":[2678,2702],"86":[2678,2703],"87":[2732,2736],"88":[1962,2739],"89":[1962,2740],"90":[2865,2879],"91":[2925,2953],"92":[2865,2956],"93":[2865,2957],"94":[3093,3107],"95":[3147,3163],"96":[3147,3169],"97":[3181,3194],"98":[3181,3195],"99":[3204,3222],"100":[3204,3223],"101":[3239,3251],"102":[3255,3266],"103":[3239,3266],"104":[3284,3309],"105":[3326,3340],"106":[3358,3385],"107":[3398,3402],"108":[3398,3411],"109":[3398,3426],"110":[3398,3427],"111":[3440,3444],"112":[3093,3447],"113":[3093,3448],"114":[3450,3471],"115":[3450,3472]};var __coverageWrap = function (index, value) {if (__coverage[index]) console.log("COVERED " + "\"/Users/smoeller/Repos/github/shannonmoeller/sire/lib/Sire.js\"" + " " + index);delete __coverage[index];return value};
{ __coverageWrap(0);'use strict';};

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
    { __coverageWrap(3);__coverageWrap(2,__coverageWrap(1,this)._modules = {});};

    /**
     * Started modules.
     *
     * @property _started
     * @type Object
     * @private
     */
    { __coverageWrap(6);__coverageWrap(5,__coverageWrap(4,this)._started = []);};
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
{ __coverageWrap(46);__coverageWrap(45,__coverageWrap(7,Sire.prototype).start = function() {
    { __coverageWrap(8);var i;};
    { __coverageWrap(9);var arg;};
    { __coverageWrap(10);var module;};
    { __coverageWrap(14);var modules = __coverageWrap(13,__coverageWrap(12,__coverageWrap(11,this)._modules));};
    { __coverageWrap(18);var started = __coverageWrap(17,__coverageWrap(16,__coverageWrap(15,this)._started));};
    { __coverageWrap(21);var length = __coverageWrap(20,__coverageWrap(19,arguments.length));};

    // Start all known modules
    if (__coverageWrap(22,length === 0)) {
        for (i in modules) {
            if (__coverageWrap(23,modules.hasOwnProperty(i))) {
                { __coverageWrap(25);__coverageWrap(24,module = modules[i]);};
                { __coverageWrap(29);__coverageWrap(28,started.push(__coverageWrap(27,__coverageWrap(26,this)._start(module))));};
            }
        }

        return __coverageWrap(30,this);
    }

    // Start specific modules with options
    for (__coverageWrap(31,i = 0); __coverageWrap(32,i < length); __coverageWrap(33,i++)) {
        { __coverageWrap(35);__coverageWrap(34,arg = arguments[i]);};
        { __coverageWrap(39);__coverageWrap(38,module = arg && __coverageWrap(37,modules[__coverageWrap(36,arg.name)]));};

        // Only start known modules
        if (module) {
            { __coverageWrap(43);__coverageWrap(42,started.push(__coverageWrap(41,__coverageWrap(40,this)._start(module, arg.options))));};
        }
    }

    return __coverageWrap(44,this);
});};

/**
 * Starts a registered module. Sub classes must implement this method.
 *
 * @method _start
 * @param {Function} module
 * @param {Object} [options]
 */
{ __coverageWrap(50);__coverageWrap(49,__coverageWrap(47,Sire.prototype)._start = function(/* module, options */) {
    throw __coverageWrap(48,new Error('not implemented'));
});};

/**
 * Stops some or all started modules.
 *
 * @method stop
 * @param {Object} [arg]*
 * @chainable
 */
{ __coverageWrap(89);__coverageWrap(88,__coverageWrap(51,Sire.prototype).stop = function() {
    { __coverageWrap(52);var i;};
    { __coverageWrap(53);var index;};
    { __coverageWrap(54);var instance;};
    { __coverageWrap(58);var started = __coverageWrap(57,__coverageWrap(56,__coverageWrap(55,this)._started));};
    { __coverageWrap(61);var length = __coverageWrap(60,__coverageWrap(59,arguments.length));};

    // Stop all started modules
    if (__coverageWrap(62,length === 0)) {
        { __coverageWrap(64);__coverageWrap(63,i = started.length);};

        // Stop in reverse order of creation
        while (__coverageWrap(65,i--)) {
            { __coverageWrap(67);__coverageWrap(66,instance = started[i]);};
            { __coverageWrap(70);__coverageWrap(69,__coverageWrap(68,this)._stop(instance));};
        }

        // Empty array
        { __coverageWrap(72);__coverageWrap(71,started.length = 0);};

        return __coverageWrap(73,this);
    }

    // Stop specific started modules
    for (__coverageWrap(74,i = 0); __coverageWrap(75,i < length); __coverageWrap(76,i++)) {
        { __coverageWrap(78);__coverageWrap(77,instance = arguments[i]);};
        { __coverageWrap(80);__coverageWrap(79,index = started.indexOf(instance));};

        // Only stop owned modules
        if (__coverageWrap(81,index >= 0)) {
            { __coverageWrap(84);__coverageWrap(83,__coverageWrap(82,this)._stop(instance));};
            { __coverageWrap(86);__coverageWrap(85,started.splice(index, 1));};
        }
    }

    return __coverageWrap(87,this);
});};

/**
 * Stops a started module. Sub classes must implement this method.
 *
 * @method _stop
 * @param {Object} instance
 */
{ __coverageWrap(93);__coverageWrap(92,__coverageWrap(90,Sire.prototype)._stop = function(/* instance */) {
    throw __coverageWrap(91,new Error('not implemented'));
});};

/**
 * Registers a module to be sired.
 *
 * @method use
 * @param {String|Object} name
 * @param {Object} [module]
 * @chainable
 */
{ __coverageWrap(113);__coverageWrap(112,__coverageWrap(94,Sire.prototype).use = function(name, module) {
    if (__coverageWrap(96,__coverageWrap(95,arguments.length) === 1)) {
        { __coverageWrap(98);__coverageWrap(97,module = name);};
        { __coverageWrap(100);__coverageWrap(99,name = module.name);};
    }

    if (__coverageWrap(103,__coverageWrap(101,name == null) || __coverageWrap(102,name === ''))) {
        throw __coverageWrap(104,new Error('invalid name'));
    }

    if (__coverageWrap(105,module == null)) {
        throw __coverageWrap(106,new Error('invalid module'));
    }

    { __coverageWrap(110);__coverageWrap(109,__coverageWrap(108,__coverageWrap(107,this)._modules)[name] = module);};

    return __coverageWrap(111,this);
});};

{ __coverageWrap(115);__coverageWrap(114,module.exports = Sire);};

},{}],2:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":6}],3:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],4:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],5:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],6:[function(require,module,exports){
var process=require("__browserify_process"),global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

},{"./support/isBuffer":5,"__browserify_process":4,"inherits":3}],7:[function(require,module,exports){
console.log("COVERAGE " + "\"/Users/smoeller/Repos/github/shannonmoeller/sire/test/specs/Sire-spec.js\"" + " " + "[[0,13],[26,51],[26,51],[15,52],[66,83],[66,83],[53,84],[232,242],[232,242],[222,243],[307,309],[337,339],[279,353],[257,354],[257,355],[197,365],[165,366],[165,367],[144,373],[120,374],[120,375],[571,581],[571,581],[561,582],[596,677],[596,678],[756,775],[692,790],[692,791],[805,816],[805,817],[850,862],[831,873],[831,874],[897,909],[897,912],[897,927],[887,928],[887,929],[952,964],[952,967],[952,982],[942,983],[942,984],[475,994],[433,995],[433,996],[1140,1144],[1140,1162],[1140,1163],[1201,1211],[1201,1211],[1191,1212],[1226,1307],[1226,1308],[1386,1405],[1322,1420],[1322,1421],[1486,1494],[1462,1496],[1435,1497],[1545,1553],[1521,1555],[1435,1556],[1435,1557],[1590,1602],[1571,1613],[1571,1614],[1637,1649],[1637,1652],[1637,1667],[1627,1668],[1627,1669],[1692,1704],[1692,1707],[1692,1722],[1682,1723],[1682,1724],[1754,1766],[1754,1769],[1779,1787],[1737,1788],[1737,1789],[1819,1831],[1819,1834],[1844,1852],[1802,1853],[1802,1854],[1045,1864],[1006,1865],[1006,1866],[412,1872],[381,1873],[381,1874],[2014,2015],[2001,2016],[2039,2049],[2039,2049],[2029,2050],[2102,2115],[2064,2129],[2064,2130],[2187,2195],[2187,2196],[2213,2225],[2213,2226],[2158,2240],[2144,2241],[2144,2242],[2299,2307],[2299,2308],[2325,2336],[2325,2337],[2270,2351],[2256,2352],[2256,2353],[2367,2390],[2367,2391],[1976,2401],[1933,2402],[1933,2403],[1912,2409],[1880,2410],[1880,2411],[2541,2549],[2541,2549],[2531,2550],[2573,2581],[2573,2581],[2563,2582],[2606,2616],[2606,2616],[2596,2617],[2631,2656],[2631,2657],[2671,2750],[2671,2751],[2765,2775],[2765,2776],[2809,2821],[2790,2832],[2790,2833],[2877,2879],[2846,2880],[2846,2881],[2506,2891],[2468,2892],[2468,2893],[2973,2981],[2973,2981],[2963,2982],[3005,3013],[3005,3013],[2995,3014],[3038,3048],[3038,3048],[3028,3049],[3063,3088],[3063,3089],[3152,3185],[3152,3186],[3103,3233],[3103,3234],[3248,3261],[3248,3262],[3295,3307],[3276,3318],[3276,3319],[3363,3368],[3332,3369],[3332,3370],[2938,3380],[2903,3381],[2903,3382],[2447,3388],[2417,3389],[2417,3390],[3526,3536],[3526,3536],[3516,3537],[3567,3569],[3551,3570],[3551,3571],[3629,3640],[3629,3641],[3616,3643],[3585,3692],[3585,3693],[3751,3761],[3751,3762],[3738,3764],[3707,3813],[3707,3814],[3491,3824],[3448,3825],[3448,3826],[3427,3832],[3396,3833],[3396,3834],[3966,3976],[3966,3976],[3956,3977],[4035,4044],[4035,4045],[4022,4047],[3991,4093],[3991,4094],[4160,4162],[4152,4163],[4152,4164],[4139,4166],[4108,4212],[4108,4213],[4279,4292],[4271,4293],[4271,4294],[4258,4296],[4227,4342],[4227,4343],[3931,4353],[3890,4354],[3890,4355],[4443,4453],[4443,4453],[4433,4454],[4468,4474],[4495,4499],[4487,4500],[4558,4573],[4558,4574],[4545,4576],[4514,4624],[4514,4625],[4683,4698],[4683,4699],[4670,4701],[4639,4749],[4639,4750],[4408,4760],[4365,4761],[4365,4762],[4838,4848],[4838,4848],[4828,4849],[4871,4873],[4871,4873],[4863,4874],[4895,4908],[4895,4908],[4887,4909],[4930,4943],[4930,4943],[4922,4944],[4986,5018],[4986,5047],[4986,5071],[4986,5095],[4986,5096],[5141,5251],[5110,5252],[5110,5253],[4803,5263],[4772,5264],[4772,5265],[3869,5271],[3840,5272],[3840,5273],[103,5275],[86,5276],[86,5277]]");var __coverage = {"0":[0,13],"1":[26,51],"2":[26,51],"3":[15,52],"4":[66,83],"5":[66,83],"6":[53,84],"7":[232,242],"8":[232,242],"9":[222,243],"10":[307,309],"11":[337,339],"12":[279,353],"13":[257,354],"14":[257,355],"15":[197,365],"16":[165,366],"17":[165,367],"18":[144,373],"19":[120,374],"20":[120,375],"21":[571,581],"22":[571,581],"23":[561,582],"24":[596,677],"25":[596,678],"26":[756,775],"27":[692,790],"28":[692,791],"29":[805,816],"30":[805,817],"31":[850,862],"32":[831,873],"33":[831,874],"34":[897,909],"35":[897,912],"36":[897,927],"37":[887,928],"38":[887,929],"39":[952,964],"40":[952,967],"41":[952,982],"42":[942,983],"43":[942,984],"44":[475,994],"45":[433,995],"46":[433,996],"47":[1140,1144],"48":[1140,1162],"49":[1140,1163],"50":[1201,1211],"51":[1201,1211],"52":[1191,1212],"53":[1226,1307],"54":[1226,1308],"55":[1386,1405],"56":[1322,1420],"57":[1322,1421],"58":[1486,1494],"59":[1462,1496],"60":[1435,1497],"61":[1545,1553],"62":[1521,1555],"63":[1435,1556],"64":[1435,1557],"65":[1590,1602],"66":[1571,1613],"67":[1571,1614],"68":[1637,1649],"69":[1637,1652],"70":[1637,1667],"71":[1627,1668],"72":[1627,1669],"73":[1692,1704],"74":[1692,1707],"75":[1692,1722],"76":[1682,1723],"77":[1682,1724],"78":[1754,1766],"79":[1754,1769],"80":[1779,1787],"81":[1737,1788],"82":[1737,1789],"83":[1819,1831],"84":[1819,1834],"85":[1844,1852],"86":[1802,1853],"87":[1802,1854],"88":[1045,1864],"89":[1006,1865],"90":[1006,1866],"91":[412,1872],"92":[381,1873],"93":[381,1874],"94":[2014,2015],"95":[2001,2016],"96":[2039,2049],"97":[2039,2049],"98":[2029,2050],"99":[2102,2115],"100":[2064,2129],"101":[2064,2130],"102":[2187,2195],"103":[2187,2196],"104":[2213,2225],"105":[2213,2226],"106":[2158,2240],"107":[2144,2241],"108":[2144,2242],"109":[2299,2307],"110":[2299,2308],"111":[2325,2336],"112":[2325,2337],"113":[2270,2351],"114":[2256,2352],"115":[2256,2353],"116":[2367,2390],"117":[2367,2391],"118":[1976,2401],"119":[1933,2402],"120":[1933,2403],"121":[1912,2409],"122":[1880,2410],"123":[1880,2411],"124":[2541,2549],"125":[2541,2549],"126":[2531,2550],"127":[2573,2581],"128":[2573,2581],"129":[2563,2582],"130":[2606,2616],"131":[2606,2616],"132":[2596,2617],"133":[2631,2656],"134":[2631,2657],"135":[2671,2750],"136":[2671,2751],"137":[2765,2775],"138":[2765,2776],"139":[2809,2821],"140":[2790,2832],"141":[2790,2833],"142":[2877,2879],"143":[2846,2880],"144":[2846,2881],"145":[2506,2891],"146":[2468,2892],"147":[2468,2893],"148":[2973,2981],"149":[2973,2981],"150":[2963,2982],"151":[3005,3013],"152":[3005,3013],"153":[2995,3014],"154":[3038,3048],"155":[3038,3048],"156":[3028,3049],"157":[3063,3088],"158":[3063,3089],"159":[3152,3185],"160":[3152,3186],"161":[3103,3233],"162":[3103,3234],"163":[3248,3261],"164":[3248,3262],"165":[3295,3307],"166":[3276,3318],"167":[3276,3319],"168":[3363,3368],"169":[3332,3369],"170":[3332,3370],"171":[2938,3380],"172":[2903,3381],"173":[2903,3382],"174":[2447,3388],"175":[2417,3389],"176":[2417,3390],"177":[3526,3536],"178":[3526,3536],"179":[3516,3537],"180":[3567,3569],"181":[3551,3570],"182":[3551,3571],"183":[3629,3640],"184":[3629,3641],"185":[3616,3643],"186":[3585,3692],"187":[3585,3693],"188":[3751,3761],"189":[3751,3762],"190":[3738,3764],"191":[3707,3813],"192":[3707,3814],"193":[3491,3824],"194":[3448,3825],"195":[3448,3826],"196":[3427,3832],"197":[3396,3833],"198":[3396,3834],"199":[3966,3976],"200":[3966,3976],"201":[3956,3977],"202":[4035,4044],"203":[4035,4045],"204":[4022,4047],"205":[3991,4093],"206":[3991,4094],"207":[4160,4162],"208":[4152,4163],"209":[4152,4164],"210":[4139,4166],"211":[4108,4212],"212":[4108,4213],"213":[4279,4292],"214":[4271,4293],"215":[4271,4294],"216":[4258,4296],"217":[4227,4342],"218":[4227,4343],"219":[3931,4353],"220":[3890,4354],"221":[3890,4355],"222":[4443,4453],"223":[4443,4453],"224":[4433,4454],"225":[4468,4474],"226":[4495,4499],"227":[4487,4500],"228":[4558,4573],"229":[4558,4574],"230":[4545,4576],"231":[4514,4624],"232":[4514,4625],"233":[4683,4698],"234":[4683,4699],"235":[4670,4701],"236":[4639,4749],"237":[4639,4750],"238":[4408,4760],"239":[4365,4761],"240":[4365,4762],"241":[4838,4848],"242":[4838,4848],"243":[4828,4849],"244":[4871,4873],"245":[4871,4873],"246":[4863,4874],"247":[4895,4908],"248":[4895,4908],"249":[4887,4909],"250":[4930,4943],"251":[4930,4943],"252":[4922,4944],"253":[4986,5018],"254":[4986,5047],"255":[4986,5071],"256":[4986,5095],"257":[4986,5096],"258":[5141,5251],"259":[5110,5252],"260":[5110,5253],"261":[4803,5263],"262":[4772,5264],"263":[4772,5265],"264":[3869,5271],"265":[3840,5272],"266":[3840,5273],"267":[103,5275],"268":[86,5276],"269":[86,5277]};var __coverageWrap = function (index, value) {if (__coverage[index]) console.log("COVERED " + "\"/Users/smoeller/Repos/github/shannonmoeller/sire/test/specs/Sire-spec.js\"" + " " + index);delete __coverage[index];return value};
{ __coverageWrap(0);'use strict';};

{ __coverageWrap(3);var Sire = __coverageWrap(2,__coverageWrap(1,require('../../lib/Sire')));};
{ __coverageWrap(6);var assert = __coverageWrap(5,__coverageWrap(4,require('assert')));};

{ __coverageWrap(269);__coverageWrap(268,describe('Sire', __coverageWrap(267,function() {
    { __coverageWrap(20);__coverageWrap(19,describe('constructor', __coverageWrap(18,function() {
        { __coverageWrap(17);__coverageWrap(16,it('should create an instance', __coverageWrap(15,function() {
            { __coverageWrap(9);var app = __coverageWrap(8,__coverageWrap(7,new Sire()));};

            { __coverageWrap(14);__coverageWrap(13,assert.deepEqual(app, __coverageWrap(12,{
                _modules: __coverageWrap(10,{}),
                _started: __coverageWrap(11,[])
            })));};
        })));};
    })));};

    { __coverageWrap(93);__coverageWrap(92,describe('.prototype.start()', __coverageWrap(91,function() {
        { __coverageWrap(46);__coverageWrap(45,it('should start all registered modules', __coverageWrap(44,function() {
            function Bar() {}
            function Foo() {}

            { __coverageWrap(23);var app = __coverageWrap(22,__coverageWrap(21,new Sire()));};

            { __coverageWrap(25);__coverageWrap(24,app._modules = {
                Bar: Bar,
                Foo: Foo
            });};

            { __coverageWrap(28);__coverageWrap(27,app._start = function(Module, options) {
                return __coverageWrap(26,new Module(options));
            });};

            { __coverageWrap(30);__coverageWrap(29,app.start());};

            { __coverageWrap(33);__coverageWrap(32,assert.strictEqual(__coverageWrap(31,app._started).length, 2));};
            { __coverageWrap(38);__coverageWrap(37,assert.ok(__coverageWrap(36,__coverageWrap(35,__coverageWrap(34,app._started)[0]) instanceof Bar)));};
            { __coverageWrap(43);__coverageWrap(42,assert.ok(__coverageWrap(41,__coverageWrap(40,__coverageWrap(39,app._started)[1]) instanceof Foo)));};
        })));};

        { __coverageWrap(90);__coverageWrap(89,it('should start a registered module', __coverageWrap(88,function() {
            function Bar() {}
            function Foo(options) {
                { __coverageWrap(49);__coverageWrap(48,__coverageWrap(47,this).options = options);};
            }

            { __coverageWrap(52);var app = __coverageWrap(51,__coverageWrap(50,new Sire()));};

            { __coverageWrap(54);__coverageWrap(53,app._modules = {
                Bar: Bar,
                Foo: Foo
            });};

            { __coverageWrap(57);__coverageWrap(56,app._start = function(Module, options) {
                return __coverageWrap(55,new Module(options));
            });};

            { __coverageWrap(64);__coverageWrap(63,__coverageWrap(60,app
                .start(__coverageWrap(59,{ name: 'Foo', options: __coverageWrap(58,{ a: 1 }) })))
                .start(__coverageWrap(62,{ name: 'Foo', options: __coverageWrap(61,{ b: 2 }) })));};

            { __coverageWrap(67);__coverageWrap(66,assert.strictEqual(__coverageWrap(65,app._started).length, 2));};
            { __coverageWrap(72);__coverageWrap(71,assert.ok(__coverageWrap(70,__coverageWrap(69,__coverageWrap(68,app._started)[0]) instanceof Foo)));};
            { __coverageWrap(77);__coverageWrap(76,assert.ok(__coverageWrap(75,__coverageWrap(74,__coverageWrap(73,app._started)[1]) instanceof Foo)));};
            { __coverageWrap(82);__coverageWrap(81,assert.deepEqual(__coverageWrap(79,__coverageWrap(78,app._started)[0]).options, __coverageWrap(80,{ a: 1 })));};
            { __coverageWrap(87);__coverageWrap(86,assert.deepEqual(__coverageWrap(84,__coverageWrap(83,app._started)[1]).options, __coverageWrap(85,{ b: 2 })));};
        })));};
    })));};

    { __coverageWrap(123);__coverageWrap(122,describe('.prototype._start()', __coverageWrap(121,function() {
        { __coverageWrap(120);__coverageWrap(119,it('should throw a not-implemented error', __coverageWrap(118,function() {
            { __coverageWrap(95);var expect = __coverageWrap(94,0);};
            { __coverageWrap(98);var app = __coverageWrap(97,__coverageWrap(96,new Sire()));};

            { __coverageWrap(101);__coverageWrap(100,app._modules = {
                Foo: __coverageWrap(99,function() {})
            });};

            { __coverageWrap(108);__coverageWrap(107,assert.throws(__coverageWrap(106,function() {
                { __coverageWrap(103);__coverageWrap(102,expect++);};
                { __coverageWrap(105);__coverageWrap(104,app._start());};
            })));};

            { __coverageWrap(115);__coverageWrap(114,assert.throws(__coverageWrap(113,function() {
                { __coverageWrap(110);__coverageWrap(109,expect++);};
                { __coverageWrap(112);__coverageWrap(111,app.start());};
            })));};

            { __coverageWrap(117);__coverageWrap(116,assert.equal(expect, 2));};
        })));};
    })));};

    { __coverageWrap(176);__coverageWrap(175,describe('.prototype.stop()', __coverageWrap(174,function() {
        { __coverageWrap(147);__coverageWrap(146,it('should stop all started modules', __coverageWrap(145,function() {
            { __coverageWrap(126);var bar = __coverageWrap(125,__coverageWrap(124,{ a: 1 }));};
            { __coverageWrap(129);var foo = __coverageWrap(128,__coverageWrap(127,{ b: 2 }));};

            { __coverageWrap(132);var app = __coverageWrap(131,__coverageWrap(130,new Sire()));};

            { __coverageWrap(134);__coverageWrap(133,app._started = [bar, foo]);};

            { __coverageWrap(136);__coverageWrap(135,app._stop = function(instance) {
                return instance;
            });};

            { __coverageWrap(138);__coverageWrap(137,app.stop());};

            { __coverageWrap(141);__coverageWrap(140,assert.strictEqual(__coverageWrap(139,app._started).length, 0));};
            { __coverageWrap(144);__coverageWrap(143,assert.deepEqual(app._started, __coverageWrap(142,[])));};
        })));};

        { __coverageWrap(173);__coverageWrap(172,it('should stop a started module', __coverageWrap(171,function() {
            { __coverageWrap(150);var bar = __coverageWrap(149,__coverageWrap(148,{ a: 1 }));};
            { __coverageWrap(153);var foo = __coverageWrap(152,__coverageWrap(151,{ b: 2 }));};

            { __coverageWrap(156);var app = __coverageWrap(155,__coverageWrap(154,new Sire()));};

            { __coverageWrap(158);__coverageWrap(157,app._started = [bar, foo]);};

            { __coverageWrap(162);__coverageWrap(161,app._stop = function(instance) {
                { __coverageWrap(160);__coverageWrap(159,assert.strictEqual(instance, foo));};
                return instance;
            });};

            { __coverageWrap(164);__coverageWrap(163,app.stop(foo));};

            { __coverageWrap(167);__coverageWrap(166,assert.strictEqual(__coverageWrap(165,app._started).length, 1));};
            { __coverageWrap(170);__coverageWrap(169,assert.deepEqual(app._started, __coverageWrap(168,[bar])));};
        })));};
    })));};

    { __coverageWrap(198);__coverageWrap(197,describe('.prototype._stop()', __coverageWrap(196,function() {
        { __coverageWrap(195);__coverageWrap(194,it('should throw a not-implemented error', __coverageWrap(193,function() {
            { __coverageWrap(179);var app = __coverageWrap(178,__coverageWrap(177,new Sire()));};

            { __coverageWrap(182);__coverageWrap(181,app._started = [__coverageWrap(180,{})]);};

            { __coverageWrap(187);__coverageWrap(186,assert.throws(
                __coverageWrap(185,function() { { __coverageWrap(184);__coverageWrap(183,app._stop());}; }),
                /not implemented/
            ));};

            { __coverageWrap(192);__coverageWrap(191,assert.throws(
                __coverageWrap(190,function() { { __coverageWrap(189);__coverageWrap(188,app.stop());}; }),
                /not implemented/
            ));};
        })));};
    })));};

    { __coverageWrap(266);__coverageWrap(265,describe('.prototype.use()', __coverageWrap(264,function() {
        { __coverageWrap(221);__coverageWrap(220,it('should throw an invalid-name error', __coverageWrap(219,function() {
            { __coverageWrap(201);var app = __coverageWrap(200,__coverageWrap(199,new Sire()));};

            { __coverageWrap(206);__coverageWrap(205,assert.throws(
                __coverageWrap(204,function() { { __coverageWrap(203);__coverageWrap(202,app.use());}; }),
                /invalid name/
            ));};

            { __coverageWrap(212);__coverageWrap(211,assert.throws(
                __coverageWrap(210,function() { { __coverageWrap(209);__coverageWrap(208,app.use(__coverageWrap(207,{})));}; }),
                /invalid name/
            ));};

            { __coverageWrap(218);__coverageWrap(217,assert.throws(
                __coverageWrap(216,function() { { __coverageWrap(215);__coverageWrap(214,app.use(__coverageWrap(213,function() {})));}; }),
                /invalid name/
            ));};
        })));};

        { __coverageWrap(240);__coverageWrap(239,it('should throw an invalid-module error', __coverageWrap(238,function() {
            { __coverageWrap(224);var app = __coverageWrap(223,__coverageWrap(222,new Sire()));};

            { __coverageWrap(225);var A;};
            { __coverageWrap(227);var B = __coverageWrap(226,null);};

            { __coverageWrap(232);__coverageWrap(231,assert.throws(
                __coverageWrap(230,function() { { __coverageWrap(229);__coverageWrap(228,app.use('A', A));}; }),
                /invalid module/
            ));};

            { __coverageWrap(237);__coverageWrap(236,assert.throws(
                __coverageWrap(235,function() { { __coverageWrap(234);__coverageWrap(233,app.use('B', B));}; }),
                /invalid module/
            ));};
        })));};

        { __coverageWrap(263);__coverageWrap(262,it('should register a module', __coverageWrap(261,function() {
            { __coverageWrap(243);var app = __coverageWrap(242,__coverageWrap(241,new Sire()));};

            { __coverageWrap(246);var A = __coverageWrap(245,__coverageWrap(244,{}));};
            { __coverageWrap(249);var B = __coverageWrap(248,__coverageWrap(247,function() {}));};
            { __coverageWrap(252);var C = __coverageWrap(251,__coverageWrap(250,{ name: 'C' }));};
            function D() {}

            { __coverageWrap(257);__coverageWrap(256,__coverageWrap(255,__coverageWrap(254,__coverageWrap(253,app
                .use('A', A))
                .use('B', B))
                .use(C))
                .use(D));};

            { __coverageWrap(260);__coverageWrap(259,assert.deepEqual(app._modules, __coverageWrap(258,{
                'A': A,
                'B': B,
                'C': C,
                'D': D
            })));};
        })));};
    })));};
})));};

},{"../../lib/Sire":1,"assert":2}]},{},[7])