(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.base/account.base.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/account/account.base/account.base.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-base {\n  height: 8.1em;\n}\n\n.user-photo {\n  display: block;\n  float: left;\n  /* margin-bottom: 1em; */\n  /* margin-top: 5em; */\n  border-radius: 25%;\n  width: 100px;\n  height: 100px;\n}\n\n.user-not-pic {\n  /* margin-top: 3.5em; */\n  margin-left: 0.3em;\n  margin-top: 0.5em;\n  /* font-size: 3em; */\n  display: block;\n  z-index: 2;\n  width: 100px;\n  height: 100px;\n}\n\n.names {\n  margin-right: 60%;\n  padding-right: 0.3em;\n}\n\n.user-base-comp {\n  margin-left: 22%;\n  margin-right: auto;\n}\n\n.user-names {\n  padding-top: 2em;\n  padding-left: 1em;\n  margin-right: 80em;\n  display: block;\n}\n\n.tabs {\n  position: relative;\n  height: 100%;\n  margin-top: -9em;\n  margin-right: 18%;\n  float: right;\n  width: 32%;\n  margin-bottom: 4em;\n}\n\n.user-meta {\n  margin-top: 1%;\n  width: 28%;\n  margin-left: 22%;\n}\n\n.user-info {\n  height: 600px;\n\n  /* margin-bottom: -30%; */\n}\n\n.cropped {\n  margin-top: 0.5em;\n  width: 100%;\n  border-radius: 25%;\n  border: 2px gray solid;\n  /* width: 100%;\n    height: 100%;\n    margin-top: 1em; */\n}\n\n.socialpng{\n    width: 1.5em;\n}\n\n.social_input{\n    width:90%;\n}\n\n.input-f{\n    margin-left: 2em;\n    width:75%;\n}\n\n.edit{\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  transition: all .2s ease-in-out;\n  /* position: sticky; */\n  /* top: 20px;\n  right: 36px; */\n  color: lightseagreen;\n  opacity: 0.4;\n}\n\n.edit:hover{\n  transition: all .2s ease-in-out;\n  opacity: 1;\n}\n\n.save_b{\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  /* transition: all .2s ease-in-out; */\n  /* position: sticky; */\n  /* top: 20px;\n  right: 36px; */\n  color: lightseagreen;\n  /* opacity: 0.4; */\n}\n\n.delete-url{\n  float: right;\n  width: 2%;\n  margin-top: 1em;\n}\n\n.simple-meta{\n  margin-left: 7%;\n  width: 75%;\n}\n\n.info-card{\n  min-height: 400px;\n  margin-bottom: 2em;\n  margin-right: 17px;\n  margin-left: 0.2em;\n}"

/***/ }),

/***/ "./src/app/account/account.base/account.base.component.html":
/*!******************************************************************!*\
  !*** ./src/app/account/account.base/account.base.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"user-base\" color=\"primary\">\n  <div class=\"user-base-comp\">\n    <div class=\"user-photo\" *ngIf=\"photo_unavail else photo_avail\">\n      <button mat-fab color=\"warn\" class=\"user-not-pic\" matTooltip=\"Add photo\" matTooltipPosition=\"below\" (click)=\"addProfilePicDialog()\">\n        <mat-icon>add_a_photo</mat-icon>\n      </button>\n    </div>\n    <ng-template #photo_avail>\n      <div class=\"user-photo\">\n        <a matTooltip=\"Update photo\" matTooltipPosition=\"below\" (click)=\"addProfilePicDialog()\">\n          <img class=\"cropped\" [src]=\"user?.meta?.picture\" />\n        </a>\n      </div>\n    </ng-template>\n  </div>\n  <div class=\"user-names\">\n    <span class=\"names\">{{firstName}} {{familyName}}</span>\n    <p>{{preferedUserName}}</p>\n  </div>\n</mat-toolbar>\n\n\n<div class=\"user-info\">\n\n\n  <mat-tab-group class=\"tabs\">\n    <mat-tab label=\"Organizations\">\n      <mat-card class=\"info-card\">\n        <mat-card-header>\n          <div mat-card-avatar>\n            <mat-icon>business</mat-icon>\n          </div>\n          <mat-card-title>Organizations</mat-card-title>\n          <mat-card-subtitle>Organizations i am a member</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <app-organizations *ngIf=\"user\" [user]=\"user\" (dialogClosed)=\"onDialogClose($event)\"></app-organizations>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button (click)=\"createOrganization()\">CREATE</button>\n        </mat-card-actions>\n      </mat-card>\n    </mat-tab>\n\n    <mat-tab label=\"On the internet\">\n\n      <mat-card class=\"info-card\">\n        <mat-card-header>\n          <div mat-card-avatar>\n            <mat-icon>web</mat-icon>\n          </div>\n          <mat-card-title>WWW</mat-card-title>\n          <mat-card-subtitle>People can find me on</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <app-social-base *ngIf=\"user\" [user]=\"user\" (onUpdateUser)=\"onUpdated($event)\"></app-social-base>\n        </mat-card-content>\n      </mat-card>\n\n    </mat-tab>\n\n    <mat-tab label=\"Quota\">\n\n        <mat-card class=\"info-card\">\n          <mat-card-header>\n            <div mat-card-avatar>\n              <mat-icon>web</mat-icon>\n            </div>\n            <mat-card-title>Quota</mat-card-title>\n            <mat-card-subtitle>My quota</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n              <app-quota *ngIf=\"user\" [user]=\"user\" ></app-quota>\n          </mat-card-content>\n        </mat-card>\n  \n      </mat-tab>\n\n  </mat-tab-group>\n\n  <div class=\"user-meta\">\n\n    <div class=\"meta\">\n      <form *ngIf=\"user\">\n        <mat-icon>info</mat-icon>\n        <mat-form-field class=\"simple-meta\">\n          <input matInput placeholder=\"About\" [disabled]=\"edit\" [ngModel]=\"user?.about \" (ngModelChange)=\"user.about = $event\" name=\"about\"\n            (keyup)=\"onEnter()\">\n        </mat-form-field>\n\n      </form>\n      <form *ngIf=\"user\">\n        <mat-icon>work_outline</mat-icon>\n        <mat-form-field class=\"simple-meta\">\n          <input matInput placeholder=\"Occupation\" [disabled]=\"edit\" [ngModel]=\"user?.occupation \" (ngModelChange)=\"user.occupation = $event\"\n            name=\"occupation\">\n        </mat-form-field>\n\n      </form>\n\n      <form *ngIf=\"user\">\n        <mat-icon>work</mat-icon>\n        <mat-form-field class=\"simple-meta\">\n          <input matInput placeholder=\"Occupation at\" [disabled]=\"edit\" [ngModel]=\"user?.occupationAt \" (ngModelChange)=\"user.occupationAt = $event\"\n            name=\"occupationAt\">\n        </mat-form-field>\n\n      </form>\n\n      <form *ngIf=\"user\">\n        <mat-icon>location_city</mat-icon>\n        <mat-form-field class=\"simple-meta\">\n          <input matInput placeholder=\"Lives at city\" [disabled]=\"edit\" [ngModel]=\"user?.livesAtCity \" (ngModelChange)=\"user.livesAtCity = $event\"\n            name=\"city\">\n        </mat-form-field>\n\n      </form>\n\n\n      <form *ngIf=\"user\">\n        <mat-icon>public</mat-icon>\n        <mat-form-field class=\"simple-meta\">\n          <input matInput placeholder=\"Country\" [disabled]=\"edit\" [ngModel]=\"user?.livesAtCountry \" (ngModelChange)=\"user.livesAtCountry = $event\"\n            name=\"country\">\n        </mat-form-field>\n\n      </form>\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n<span class=\"app-action\">\n  <div *ngIf=\"edit else save_b\">\n    <button class=\"edit\" matTooltip=\"Edit\" matTooltipPosition=\"after\" (click)=\"editForm()\" mat-fab>\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n  <ng-template #save_b>\n    <div>\n      <button class=\"save_b\" matTooltip=\"Save\" matTooltipPosition=\"after\" (click)=\"saveForm()\" mat-fab>\n        <mat-icon>save</mat-icon>\n      </button>\n    </div>\n  </ng-template>\n</span>\n"

/***/ }),

/***/ "./src/app/account/account.base/account.base.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/account/account.base/account.base.component.ts ***!
  \****************************************************************/
/*! exports provided: AccountBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountBaseComponent", function() { return AccountBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jaqpot-client/api/aa.service */ "./src/app/jaqpot-client/api/aa.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jaqpot-client/api/user.service */ "./src/app/jaqpot-client/api/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/profilepic-dialog/profilepic-dialog.component */ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _social_base_social_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../social.base/social.base.component */ "./src/app/account/social.base/social.base.component.ts");
/* harmony import */ var _dialogs_create_organization_create_organization_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dialogs/create-organization/create-organization.component */ "./src/app/dialogs/create-organization/create-organization.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AccountBaseComponent = /** @class */ (function () {
    function AccountBaseComponent(dialog, aaService, sessionService, userService, router, oidcSecurityService, snackBar) {
        var _this = this;
        this.dialog = dialog;
        this.aaService = aaService;
        this.sessionService = sessionService;
        this.userService = userService;
        this.router = router;
        this.oidcSecurityService = oidcSecurityService;
        this.snackBar = snackBar;
        this.edit = true;
        this.username = this.sessionService.get('userName');
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        this.name = userData.name;
        this.familyName = userData.family_name;
        this.firstName = userData.given_name;
        this.email = userData.email;
        this.preferedUserName = userData.preferred_username;
        this.edit_name_is_disabled = true;
        this.edit_familyname_is_disabled = true;
        this.edit_firstyname_is_disabled = true;
        this.edit_preferedname_is_disabled = true;
        this.id = userData.sub;
        this.urlForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]()
        });
        this.userService.getUserById(this.id)
            .subscribe(function (userGot) {
            _this.user = userGot;
            if (_this.user.meta.picture == null) {
                _this.photo_unavail = true;
            }
            else {
                _this.photo_unavail = false;
            }
        });
    }
    AccountBaseComponent.prototype.ngOnInit = function () {
    };
    AccountBaseComponent.prototype.ngAfterViewInit = function () {
    };
    AccountBaseComponent.prototype.addProfilePicDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ProfilepicDialogComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            _this.user.meta.picture = result;
            _this.userService.updateUserById(_this.id, _this.user)
                .subscribe(function (userGot) {
                _this.user = userGot;
                if (_this.user.meta.picture == null) {
                    _this.photo_unavail = true;
                }
                else {
                    _this.photo_unavail = false;
                }
            });
        });
    };
    AccountBaseComponent.prototype.editForm = function () {
        this.edit = false;
        this.urlForm.enable();
    };
    AccountBaseComponent.prototype.saveForm = function () {
        var _this = this;
        this.edit = true;
        this.urlForm.disable();
        this.userService.updateUserById(this.id, this.user)
            .subscribe(function (userGot) {
            _this.user = userGot;
        });
    };
    AccountBaseComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3200,
        });
    };
    AccountBaseComponent.prototype.onUpdated = function (user) {
        var _this = this;
        this.userService.updateUserById(user.id, user)
            .subscribe(function (userGot) {
            _this.user = userGot;
            if (_this.user.meta.picture == null) {
                _this.photo_unavail = true;
            }
            else {
                _this.photo_unavail = false;
            }
        });
    };
    AccountBaseComponent.prototype.onDialogClose = function () {
        // window.location.reload();
    };
    AccountBaseComponent.prototype.createOrganization = function () {
        var dialogRef = this.dialog.open(_dialogs_create_organization_create_organization_component__WEBPACK_IMPORTED_MODULE_10__["CreateOrganizationComponent"], {});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_social_base_social_base_component__WEBPACK_IMPORTED_MODULE_9__["SocialBaseComponent"]),
        __metadata("design:type", Object)
    ], AccountBaseComponent.prototype, "userForS", void 0);
    AccountBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account.base',
            template: __webpack_require__(/*! ./account.base.component.html */ "./src/app/account/account.base/account.base.component.html"),
            styles: [__webpack_require__(/*! ./account.base.component.css */ "./src/app/account/account.base/account.base.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_1__["AaService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["OidcSecurityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], AccountBaseComponent);
    return AccountBaseComponent;
}());



/***/ }),

/***/ "./src/app/account/organizations/organizations.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/account/organizations/organizations.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orgim{\n    width: 2.5em;\n    border-radius: 25%;\n    float: left;\n}\n\n.orgtitle{\n    float: right;\n}\n\n.listItem:hover{\n    cursor: pointer;\n    background-color: lightgray;\n    transition: all .2s ease-in-out;\n}"

/***/ }),

/***/ "./src/app/account/organizations/organizations.component.html":
/*!********************************************************************!*\
  !*** ./src/app/account/organizations/organizations.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-divider></mat-divider>\n  <mat-list-item class=\"listItem\" *ngFor=\"let organization of organizations\" (click)=\"onOrgClicked(organization)\">\n    <div *ngIf=\"organization.meta.picture\">\n      <img class=\"orgim\" [src]=\"organization?.meta?.picture\" />\n    </div>\n    <h4 class=\"orgtitle\" mat-line>{{organization?._id}}</h4>\n    <div *ngIf=\"organization.city\">\n      <p mat-line> {{organization?.city}}, {{organization?.country}} </p>\n    </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/account/organizations/organizations.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/account/organizations/organizations.component.ts ***!
  \******************************************************************/
/*! exports provided: OrganizationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsComponent", function() { return OrganizationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jaqpot-client/api/organization.service */ "./src/app/jaqpot-client/api/organization.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jaqpot-client/api/user.service */ "./src/app/jaqpot-client/api/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationsComponent = /** @class */ (function () {
    function OrganizationsComponent(organizationService, dialogService, userService) {
        this.organizationService = organizationService;
        this.dialogService = dialogService;
        this.userService = userService;
        this.organizations = new Array();
        this.dialogClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OrganizationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.organizations.forEach(function (org) {
            _this.organizationService.getWithIdSecured(org)
                .subscribe(function (organ) {
                _this.organizations.push(organ);
            });
        });
    };
    OrganizationsComponent.prototype.onOrgClicked = function (organization) {
        var _this = this;
        this.dialogService.onOrganizationView(organization, this.organizationService).subscribe(function (result) {
            _this.dialogClosed.emit(true);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrganizationsComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrganizationsComponent.prototype, "dialogClosed", void 0);
    OrganizationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organizations',
            template: __webpack_require__(/*! ./organizations.component.html */ "./src/app/account/organizations/organizations.component.html"),
            styles: [__webpack_require__(/*! ./organizations.component.css */ "./src/app/account/organizations/organizations.component.css")]
        }),
        __metadata("design:paramtypes", [_jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_2__["DialogsService"],
            _jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], OrganizationsComponent);
    return OrganizationsComponent;
}());



/***/ }),

/***/ "./src/app/account/quota/quota.component.css":
/*!***************************************************!*\
  !*** ./src/app/account/quota/quota.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divid{\n    width: 80%;\n    margin-left: 10%;\n}"

/***/ }),

/***/ "./src/app/account/quota/quota.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/quota/quota.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider class=\"divid\"></mat-divider>\n<mat-list>\n  <h3 mat-subheader>Capabilities</h3>\n  <mat-list-item>\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>Models</h4>\n    <p mat-line> {{user.capabilities.models}} </p>\n  </mat-list-item>\n  <mat-list-item>\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>Algorithms</h4>\n    <p mat-line> {{user.capabilities.algorithms}} </p>\n  </mat-list-item>\n  <mat-list-item>\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>Reports</h4>\n    <p mat-line> {{user.capabilities.reports}} </p>\n  </mat-list-item>\n  <mat-list-item>\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>Tasks in parallel</h4>\n    <p mat-line> {{user.capabilities.tasksParallel}} </p>\n  </mat-list-item>\n  <mat-list-item>\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>Datasets</h4>\n    <p mat-line> {{user.capabilities.datasets}} </p>\n  </mat-list-item>\n  <mat-list-item>\n      <mat-icon mat-list-icon>folder</mat-icon>\n      <h4 mat-line>Organizations</h4>\n      <p mat-line> {{user.capabilities.organizations}} </p>\n    </mat-list-item>\n  <mat-divider class=\"divid\"></mat-divider>\n  <h3 mat-subheader>Publication Rate Per Week</h3>\n  <mat-list-item >\n        <mat-icon mat-list-icon>folder</mat-icon>\n        <h4 mat-line>Models</h4>\n        <p mat-line> {{user.publicationRatePerWeek.models}} </p>\n  </mat-list-item>\n  <mat-list-item>\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>Algorithms</h4>\n    <p mat-line> {{user.publicationRatePerWeek.algorithms}} </p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/account/quota/quota.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/quota/quota.component.ts ***!
  \**************************************************/
/*! exports provided: QuotaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotaComponent", function() { return QuotaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuotaComponent = /** @class */ (function () {
    function QuotaComponent() {
    }
    QuotaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuotaComponent.prototype, "user", void 0);
    QuotaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quota',
            template: __webpack_require__(/*! ./quota.component.html */ "./src/app/account/quota/quota.component.html"),
            styles: [__webpack_require__(/*! ./quota.component.css */ "./src/app/account/quota/quota.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotaComponent);
    return QuotaComponent;
}());



/***/ }),

/***/ "./src/app/account/social.base/social.base.component.css":
/*!***************************************************************!*\
  !*** ./src/app/account/social.base/social.base.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".socialpng{\n    margin-top: 1em;\n    width: 1.5em;\n}\n\n.social_input{\n    margin-top: 2em;\n    width:70%;\n}\n\n.input-f{\n    margin-top: 0.5em;\n    margin-left: 2em;\n    width:70%;\n}\n\n.delete-url{\n    margin-right: 4em;\n    float: right;\n    width: 2%;\n    margin-top: 2em;\n  }\n\n.social{margin-top: 2em;}\n\nform{\n    margin-top: 1em;\n}\n\n.save-url{\n    margin-right: 4em;\n    float: right;\n    width: 2%;\n    margin-top: 2em;   \n}"

/***/ }),

/***/ "./src/app/account/social.base/social.base.component.html":
/*!****************************************************************!*\
  !*** ./src/app/account/social.base/social.base.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" id=\"social\">\n  <div>\n  <img class=\"socialpng\" src=\"assets/internet.png\">\n  <mat-form-field class=\"input-f\">\n    <input class=\"social_input\" type=\"url\" matInput #message maxlength=\"256\" placeholder=\"Website url\" required pattern=\"https?://.+\"\n      [ngModel]=\"user?.website \"  [formControl]=\"websiteURL\">\n  </mat-form-field>\n  <div class=\"delete-url\" *ngIf=\"user?.website else editbts\">\n    <button mat-mini-fab matTooltip=\"Delete url\" color=\"warn\" (click)=\"deleteWebsiteUrl()\">\n      <mat-icon>delete</mat-icon>\n    </button>\n\n  </div>\n  <ng-template #editbts>\n    <div class=\"delete-url\" *ngIf=\"editWeb else saveWeb\">\n      <button mat-mini-fab matTooltip=\"Edit url\" color=\"accent\" (click)=\"editWebsiteUrl()\">\n        <mat-icon>edit</mat-icon>\n      </button>\n    </div>\n\n    <ng-template #saveWeb>\n        <div class=\"save-url\" >\n          <button mat-mini-fab matTooltip=\"Save url\" color=\"accent\" (click)=\"saveWebsiteUrl()\">\n            <mat-icon>save</mat-icon>\n          </button>\n        </div>\n      </ng-template>\n\n  </ng-template>\n</div>\n\n\n<div>\n  <img class=\"socialpng\" src=\"assets/github.png\">\n  <mat-form-field class=\"input-f\">\n    <input class=\"social_input\" type=\"url\" matInput #message maxlength=\"256\" placeholder=\"Github url\" required pattern=\"https?://.+\"\n      [ngModel]=\"user?.github \"  [formControl]=\"githubURL\">\n  </mat-form-field>\n  <div class=\"delete-url\" *ngIf=\"user?.github else editgitbts\">\n    <button mat-mini-fab matTooltip=\"Delete url\" color=\"warn\" (click)=\"deleteGithubUrl()\">\n      <mat-icon>delete</mat-icon>\n    </button>\n\n  </div>\n  <ng-template #editgitbts>\n    <div class=\"delete-url\" *ngIf=\"editGithub else saveGit\">\n      <button mat-mini-fab matTooltip=\"Edit url\" color=\"accent\" (click)=\"editGithubUrl()\">\n        <mat-icon>edit</mat-icon>\n      </button>\n    </div>\n\n    <ng-template #saveGit>\n        <div class=\"save-url\" >\n          <button mat-mini-fab matTooltip=\"Save url\" color=\"accent\" (click)=\"saveGithubUrl()\">\n            <mat-icon>save</mat-icon>\n          </button>\n        </div>\n      </ng-template>\n\n  </ng-template>\n</div>\n\n\n<div>\n    <img class=\"socialpng\" src=\"assets/linkedin.png\">\n    <mat-form-field class=\"input-f\">\n      <input class=\"social_input\" type=\"url\" matInput #message maxlength=\"256\" placeholder=\"Linkedin url\" required pattern=\"https?://.+\"\n        [ngModel]=\"user?.linkedin \"  [formControl]=\"linkedinURL\">\n    </mat-form-field>\n    <div class=\"delete-url\" *ngIf=\"user?.linkedin else editlinkbts\">\n      <button mat-mini-fab matTooltip=\"Delete url\" color=\"warn\" (click)=\"deleteLinkedinUrl()\">\n        <mat-icon>delete</mat-icon>\n      </button>\n  \n    </div>\n    <ng-template #editlinkbts>\n      <div class=\"delete-url\" *ngIf=\"editLinkedin else saveLin\">\n        <button mat-mini-fab matTooltip=\"Edit url\" color=\"accent\" (click)=\"editLinkedinUrl()\">\n          <mat-icon>edit</mat-icon>\n        </button>\n      </div>\n  \n      <ng-template #saveLin>\n          <div class=\"save-url\" >\n            <button mat-mini-fab matTooltip=\"Save url\" color=\"accent\" (click)=\"saveLinkedinUrl()\">\n              <mat-icon>save</mat-icon>\n            </button>\n          </div>\n        </ng-template>\n  \n    </ng-template>\n  </div>\n\n\n  <div>\n      <img class=\"socialpng\" src=\"assets/twitter.png\">\n      <mat-form-field class=\"input-f\">\n        <input class=\"social_input\" type=\"url\" matInput #message maxlength=\"256\" placeholder=\"Twitter url\" required pattern=\"https?://.+\"\n          [ngModel]=\"user?.twitter \"  [formControl]=\"twitterURL\">\n      </mat-form-field>\n      <div class=\"delete-url\" *ngIf=\"user?.twitter else edittwitbts\">\n        <button mat-mini-fab matTooltip=\"Delete url\" color=\"warn\" (click)=\"deleteTwitterUrl()\">\n          <mat-icon>delete</mat-icon>\n        </button>\n    \n      </div>\n      <ng-template #edittwitbts>\n        <div class=\"delete-url\" *ngIf=\"editTwitter else saveTwi\">\n          <button mat-mini-fab matTooltip=\"Edit url\" color=\"accent\" (click)=\"editTwitterUrl()\">\n            <mat-icon>edit</mat-icon>\n          </button>\n        </div>\n    \n        <ng-template #saveTwi>\n            <div class=\"save-url\" >\n              <button mat-mini-fab matTooltip=\"Save url\" color=\"accent\" (click)=\"saveTwitterUrl()\">\n                <mat-icon>save</mat-icon>\n              </button>\n            </div>\n          </ng-template>\n    \n      </ng-template>\n    </div>\n\n  </div>\n\n\n  <!-- <div class=\"social-input\" [formGroup]=\"urlForm\">\n\n    <form [formGroup]=\"urlForm\">\n      <img class=\"socialpng\" src=\"assets/github.png\">\n      <mat-form-field class=\"input-f\">\n        <input class=\"social_input\" type=\"url\" matInput #message maxlength=\"256\" placeholder=\"Github url\" required pattern=\"https?://.+\"\n          [ngModel]=\"user?.github \" (ngModelChange)=\"user.github = $event\" formControlName=\"url\">\n      </mat-form-field>\n      <div class=\"delete-url\" *ngIf=\"user?.github\">\n        <button mat-mini-fab matTooltip=\"Delete url\" color=\"warn\" (click)=\"deleteGitubUrl()\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </form>\n  </div>\n\n\n  <div class=\"social-input\" [formGroup]=\"urlForm\">\n\n    <form [formGroup]=\"urlForm\">\n      <img class=\"socialpng\" src=\"assets/linkedin.png\">\n      <mat-form-field class=\"input-f\">\n        <input class=\"social_input\" type=\"url\" matInput #message maxlength=\"256\" placeholder=\"Linkedin url\" required pattern=\"https?://.+\"\n          [ngModel]=\"user?.linkedin \" (ngModelChange)=\"user.linkedin = $event\" formControlName=\"url\">\n      </mat-form-field>\n      <div class=\"delete-url\" *ngIf=\"user?.linkedin\">\n        <button mat-mini-fab matTooltip=\"Delete url\" color=\"warn\" (click)=\"deleteLinkedinUrl()\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </form>\n  </div> -->\n\n\n  <!-- <div class=\"social-input\" [formGroup]=\"urlForm\">\n\n    <form [formGroup]=\"urlForm\">\n      <img class=\"socialpng\" src=\"assets/twitter.png\">\n      <mat-form-field class=\"input-f\">\n        <input class=\"social_input\" type=\"url\" matInput #message maxlength=\"256\" placeholder=\"twitter url\" required pattern=\"https?://.+\"\n          [ngModel]=\"user?.twitter \" (ngModelChange)=\"user.twitter = $event\" formControlName=\"url\">\n      </mat-form-field>\n      <div class=\"delete-url\" *ngIf=\"user?.twitter\">\n        <button mat-mini-fab matTooltip=\"Delete url\" color=\"warn\" (click)=\"deleteTwitterUrl()\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </form>\n  </div> -->\n\n\n"

/***/ }),

/***/ "./src/app/account/social.base/social.base.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/account/social.base/social.base.component.ts ***!
  \**************************************************************/
/*! exports provided: SocialBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialBaseComponent", function() { return SocialBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialBaseComponent = /** @class */ (function () {
    function SocialBaseComponent(snackBar) {
        this.snackBar = snackBar;
        this.editWeb = true;
        this.editGithub = true;
        this.editTwitter = true;
        this.editLinkedin = true;
        this.onUpdateUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.websiteURL = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.githubURL = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.linkedinURL = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.twitterURL = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.urlForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    SocialBaseComponent.prototype.ngOnInit = function () {
    };
    SocialBaseComponent.prototype.editWebsiteUrl = function () {
        this.websiteURL.enable();
        this.editWeb = false;
    };
    SocialBaseComponent.prototype.saveWebsiteUrl = function () {
        this.editWeb = true;
        if (this.websiteURL.valid) {
            this.user.website = this.websiteURL.value;
            this.onUpdateUser.emit(this.user);
        }
        else {
            this.openSnackBar("Invalid Website Url. Please check ", "OK");
        }
        this.websiteURL.disable();
    };
    SocialBaseComponent.prototype.deleteWebsiteUrl = function () {
        this.user.website = null;
        this.onUpdateUser.emit(this.user);
    };
    SocialBaseComponent.prototype.editGithubUrl = function () {
        this.githubURL.enable();
        this.editGithub = false;
    };
    SocialBaseComponent.prototype.saveGithubUrl = function () {
        this.editGithub = true;
        if (this.githubURL.valid) {
            this.user.github = this.githubURL.value;
            this.onUpdateUser.emit(this.user);
        }
        else {
            this.openSnackBar("Invalid Github Url. Please check ", "OK");
        }
        this.githubURL.disable();
    };
    SocialBaseComponent.prototype.deleteGithubUrl = function () {
        this.user.github = null;
        this.onUpdateUser.emit(this.user);
    };
    SocialBaseComponent.prototype.editLinkedinUrl = function () {
        this.linkedinURL.enable();
        this.editLinkedin = false;
    };
    SocialBaseComponent.prototype.saveLinkedinUrl = function () {
        this.editLinkedin = true;
        if (this.linkedinURL.valid) {
            this.user.linkedin = this.linkedinURL.value;
            this.onUpdateUser.emit(this.user);
        }
        else {
            this.openSnackBar("Invalid LinkedIn Url. Please check ", "OK");
        }
        this.linkedinURL.disable();
    };
    SocialBaseComponent.prototype.deleteLinkedinUrl = function () {
        this.user.linkedin = null;
        this.onUpdateUser.emit(this.user);
    };
    SocialBaseComponent.prototype.editTwitterUrl = function () {
        this.twitterURL.enable();
        this.editTwitter = false;
    };
    SocialBaseComponent.prototype.saveTwitterUrl = function () {
        this.editTwitter = true;
        if (this.twitterURL.valid) {
            this.user.twitter = this.twitterURL.value;
            this.onUpdateUser.emit(this.user);
        }
        else {
            this.openSnackBar("Invalid Twitter Url. Please check ", "OK");
        }
        this.twitterURL.disable();
    };
    SocialBaseComponent.prototype.deleteTwitterUrl = function () {
        this.user.twitter = null;
        this.onUpdateUser.emit(this.user);
    };
    SocialBaseComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3200,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SocialBaseComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SocialBaseComponent.prototype, "onUpdateUser", void 0);
    SocialBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-base',
            template: __webpack_require__(/*! ./social.base.component.html */ "./src/app/account/social.base/social.base.component.html"),
            styles: [__webpack_require__(/*! ./social.base.component.css */ "./src/app/account/social.base/social.base.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], SocialBaseComponent);
    return SocialBaseComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/algorithm-detail/algorithm-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/algorithms/algorithm-detail/algorithm-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algorithm_card{\n    width: 400px;\n    float: left;\n}\n\n\n.meta{\n    padding-right: 4em;\n}\n\n\n.algo_det{\n    /* margin: 2em; */\n    margin-top: 2em;\n}\n\n\nmat-list{\n    overflow: scroll;\n    max-height: 10em;\n}\n\n\n.firstexpr{\n    margin-top: 1em;\n}\n\n\n.chosen{\n    transition: all .8s ease-in-out;\n    opacity: 0.8;\n    float: left;\n}\n\n\n/* .label{\n    color: lightgreen\n} */\n\n\n/* .sub{\n    float: left;\n}\n\n.des{\n    float: right;\n} */"

/***/ }),

/***/ "./src/app/algorithms/algorithm-detail/algorithm-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/algorithms/algorithm-detail/algorithm-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"algorithm\" class=\"algo_det\">\n    <mat-card class=\"algorithm_card\">\n        <mat-card-header>\n            <mat-card-title>Algorithm id: {{ algorithm._id }}</mat-card-title>\n            <mat-card-subtitle>{{ algorithm.meta.descriptions[0] }}</mat-card-subtitle>\n                <mat-icon *ngIf=\"checkAlgoModel\" color=\"warn\"\n                        matTooltip=\"Is used for modeling\"\n                        matTooltipPosition=\"above\" >\n                    <i class=\"material-icons\" class=\"chosen\">done</i>\n                </mat-icon>\n        </mat-card-header>\n\n        <mat-card-content>\n            \n            <mat-accordion>\n                <mat-expansion-panel class=\"firstexpr\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Titles\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Algorithm titles\n                        </mat-panel-description>\n                        \n                    </mat-expansion-panel-header>\n                    <p *ngFor=\"let tit of algorithm.meta.titles\" >\n                            {{ tit }}\n                    </p>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Subjects\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Algorithm Subjects\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p *ngFor=\"let sub of algorithm.meta.subjects\" >\n                            {{ sub }}\n                    </p>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Parameters\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Algorithm Parameters\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <mat-list>\n                        <mat-list-item *ngFor=\"let param of algorithm.parameters\">\n                            <p mat-line>\n                                <span>{{ param.name }}</span>\n                                <span class=\"demo-2\"> {{ param.value }} </span>\n                                <span class=\"demo-2\"> {{ param.scope | lowercase }} </span>\n                            </p>\n                        </mat-list-item>\n                    </mat-list>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Ontology\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                Ontological classes\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <mat-list>\n                            <p *ngFor=\"let onto of algorithm.ontologicalClasses\" >\n                                {{ onto }}\n                            </p>\n                        </mat-list>\n                    </mat-expansion-panel>\n            </mat-accordion>\n        </mat-card-content>\n        <mat-card-actions>\n            <div *ngIf=\"checkAlgoModel; else clearButton\">\n                <button matTooltip=\"Clear from modeling\"\n                    (click)=\"clearFromModeling()\" mat-button>CLEAR</button>\n            </div>\n\n            <ng-template #clearButton><button matTooltip=\"Use for modeling\"\n                (click)=\"useForModeling()\" mat-button>USE</button>\n            </ng-template>\n            <button (click)=\"clearCard()\" mat-button>Close</button>\n\n        </mat-card-actions>\n        \n    </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/algorithms/algorithm-detail/algorithm-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/algorithms/algorithm-detail/algorithm-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlgorithmDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmDetailComponent", function() { return AlgorithmDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlgorithmDetailComponent = /** @class */ (function () {
    function AlgorithmDetailComponent(sessionService) {
        this.sessionService = sessionService;
        this.panelOpenState = false;
        this.checkAlgoModel = false;
    }
    AlgorithmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.sessionService.getAlgorithm()
            .subscribe(function (algo) {
            _this.algorithm = algo;
            if (_this.algoForModel != undefined && algo != undefined) {
                if (algo._id === _this.algoForModel._id) {
                    _this.checkAlgoModel = true;
                }
                else {
                    _this.checkAlgoModel = false;
                }
            }
        });
        this.subscription = this.sessionService.getModelingAlgorithm()
            .subscribe(function (algoM) {
            // console.log(algoM);
            _this.algoForModel = algoM;
            if (algoM === _this.algorithm && algoM != undefined) {
                _this.checkAlgoModel = true;
            }
            else {
                _this.checkAlgoModel = false;
            }
        });
    };
    AlgorithmDetailComponent.prototype.clearCard = function () {
        this.sessionService.clearAlgorithm();
    };
    AlgorithmDetailComponent.prototype.useForModeling = function () {
        this.sessionService.setModelingAlgorithm(this.algorithm);
    };
    AlgorithmDetailComponent.prototype.clearFromModeling = function () {
        this.sessionService.clearModelingAlgorithm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlgorithmDetailComponent.prototype, "algorithm", void 0);
    AlgorithmDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algorithm-detail',
            template: __webpack_require__(/*! ./algorithm-detail.component.html */ "./src/app/algorithms/algorithm-detail/algorithm-detail.component.html"),
            styles: [__webpack_require__(/*! ./algorithm-detail.component.css */ "./src/app/algorithms/algorithm-detail/algorithm-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], AlgorithmDetailComponent);
    return AlgorithmDetailComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/algorithms-component/algorithms.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/algorithms/algorithms-component/algorithms.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algogrid{\n    /* margin-left: 20px; */\n    margin: 20px;\n    /* overflow: auto; */\n}\n\n\n\n\n.algowrap{\n    display: flex;\n    width: 1000px;\n    height: 80%;\n}\n\n\n\n\n.algolist{\n    float: left;\n    width:75%;\n}\n\n\n\n\n.algodet{\n    float: left;\n    width:25%;\n}\n\n\n\n\nbutton{\n    display: inline-block;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    transition: all .2s ease-in-out;\n    /* position: sticky; */\n    /* top: 20px;\n    right: 36px; */\n    color: lightseagreen;\n    opacity: 0.4;\n}\n\n\n\n\nbutton:hover{\n    transition: all .2s ease-in-out;\n    opacity: 1;\n}"

/***/ }),

/***/ "./src/app/algorithms/algorithms-component/algorithms.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/algorithms/algorithms-component/algorithms.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-grid-list cols=\"9\" rowHeight=\"4:3\" class=\"algogrid\" fxLayoutAlign=\"end center\">\n  <mat-grid-tile [colspan]=\"5\" [rowspan]=\"7\">\n    <app-algorithms-list></app-algorithms-list>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"4\" [rowspan]=\"6\">\n    <app-algorithm-detail [algorithm]=\"selectedAlgorithm\"></app-algorithm-detail>\n  </mat-grid-tile>\n  <span class=\"app-action\">\n      <button matTooltip=\"Add Algorithm\"\n              matTooltipPosition=\"after\"\n              (click)=\"addAlgoDialog()\"\n              mat-fab>\n          <mat-icon>add</mat-icon>\n      </button>\n  </span>\n</mat-grid-list> -->\n\n<div class=\"algowrap\">\n  <app-algorithms-list class=\"algolist\"></app-algorithms-list>\n  <app-algorithm-detail class=\"algodet\" ></app-algorithm-detail>\n</div>\n\n  <span class=\"app-action\">\n    <button matTooltip=\"Add Algorithm\"\n            matTooltipPosition=\"after\"\n            (click)=\"addAlgoDialog()\"\n            mat-fab>\n        <mat-icon>add</mat-icon>\n    </button>\n  </span>\n\n"

/***/ }),

/***/ "./src/app/algorithms/algorithms-component/algorithms.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/algorithms/algorithms-component/algorithms.component.ts ***!
  \*************************************************************************/
/*! exports provided: AlgorithmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmsComponent", function() { return AlgorithmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_add_algorithm_dialog_add_algorithm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/add-algorithm-dialog/add-algorithm-dialog.component */ "./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlgorithmsComponent = /** @class */ (function () {
    function AlgorithmsComponent(dialog) {
        this.dialog = dialog;
    }
    AlgorithmsComponent.prototype.ngOnInit = function () {
    };
    AlgorithmsComponent.prototype.addAlgoDialog = function () {
        var dialogRef = this.dialog.open(_dialogs_add_algorithm_dialog_add_algorithm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddAlgorithmDialogComponent"], {});
    };
    AlgorithmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algorithms',
            template: __webpack_require__(/*! ./algorithms.component.html */ "./src/app/algorithms/algorithms-component/algorithms.component.html"),
            styles: [__webpack_require__(/*! ./algorithms.component.css */ "./src/app/algorithms/algorithms-component/algorithms.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/algorithms-list/algorithms-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/algorithms/algorithms-list/algorithms-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.algocard{\n  display: inline-block;\n  vertical-align: top;\n  min-height: 600px;\n  min-width: 40%;\n  margin: 2em;\n }\n\n.algo-table {\n  /* display: flex; */\n  flex-direction: column;\n  max-width: 100%;\n  min-width: 640px;\n  /* min-height: 100%; */\n  /* height: 550px; */\n}\n\n.mat-card{\n  min-width: 40%;\n}\n\n/* mat-card-content{\n  min-width: 90%;\n} */\n\nmat-form-field{\n  min-height: 20px;\n  padding: 8px 24px 0;\n  min-width: 100%;\n  width: 90%;\n  min-width: 90%;\n  min-height: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 420px;\n  /* min-width: 600px; */\n  min-width: 100%;\n  min-height: 90%;\n}\n\n.mat-row:hover {\n  transition: all .2s ease-in-out;\n  background-color: lightgray;\n  cursor: pointer;\n}\n\n.loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"

/***/ }),

/***/ "./src/app/algorithms/algorithms-list/algorithms-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/algorithms/algorithms-list/algorithms-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<mat-card class=\"algocard mat-elevation-z8\">\n    <mat-card-header >\n        <mat-card-title class=\"algocardheader\">Algorithms</mat-card-title>\n        <mat-card-subtitle class=\"algocardheader\">provided by jaqpot</mat-card-subtitle>\n    </mat-card-header>\n      <mat-card-content >\n        <div class=\"algo-table mat-elevation-z8\" >\n\n          <div class=\"example-container \">\n\n              <div class=\"loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n\n                  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n                  <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n                    Jaqpot Api rate is limmited! Please try again later.\n                  </div>\n\n              </div>\n         \n                  <div class=\"filter\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n\n\n                  <mat-table #table [dataSource]=\"dataSource\">\n                \n                    <!-- Id Column -->\n                    <ng-container matColumnDef=\"Id\">\n                      <mat-header-cell *matHeaderCellDef> Id </mat-header-cell>\n                      <mat-cell *matCellDef=\"let algorithm\"> {{algorithm._id}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Descriptions Column -->\n                    <ng-container matColumnDef=\"Descriptions\">\n                      <mat-header-cell *matHeaderCellDef> Descriptions </mat-header-cell>\n                      <mat-cell *matCellDef=\"let algorithm\"> {{algorithm.meta.descriptions[0]}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Titles Column -->\n                    <ng-container matColumnDef=\"Titles\">\n                      <mat-header-cell *matHeaderCellDef> Titles </mat-header-cell>\n                      <mat-cell *matCellDef=\"let algorithm\"> {{algorithm.meta.titles[0]}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Subjects Column -->\n                    <ng-container matColumnDef=\"Subjects\">\n                      <mat-header-cell *matHeaderCellDef> Subjects </mat-header-cell>\n                      <mat-cell *matCellDef=\"let algorithm\"> {{algorithm.meta.subjects[0]}} </mat-cell>\n                    </ng-container>\n                \n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row (click)=\"onSelect(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                  </mat-table>\n                \n                  <mat-paginator #paginator\n                                [length]=\"resultsLength\"\n                                [pageSize]=\"10\"\n                                [pageSizeOptions]=\"[10, 20, 30]\"\n                                >\n                  </mat-paginator>\n           \n              \n          </div>\n\n        </div>\n            \n      </mat-card-content>\n\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/algorithms/algorithms-list/algorithms-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/algorithms/algorithms-list/algorithms-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: AlgorithmsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmsListComponent", function() { return AlgorithmsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jaqpot_client_api_algorithm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jaqpot-client/api/algorithm.service */ "./src/app/jaqpot-client/api/algorithm.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlgorithmsListComponent = /** @class */ (function () {
    // sessionService:SessionService;
    function AlgorithmsListComponent(_algoService, sessionService) {
        this._algoService = _algoService;
        this.sessionService = sessionService;
        // private subscription:Subscription;
        this.displayedColumns = ['Id', 'Descriptions', 'Titles', 'Subjects'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this._algorithms);
        this.resultsLength = 0;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
    }
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    AlgorithmsListComponent.prototype.ngOnInit = function () {
        this.getCount();
        this.resultsLength = Number(this._count);
    };
    AlgorithmsListComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource.paginator = this.paginator;
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.paginator.page);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this._algoService.getAlgorithms(null, _this.paginator._pageIndex * _this.paginator.pageSize, _this.paginator.pageSize);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = Number(_this._count);
            return data;
        });
        // ,catchError(err => {
        //   this.isLoadingResults = false;
        //   this.isRateLimitReached = true;
        //   // return Observable.of([]);
        // })
        // subscribe(data => this.dataSource.data = data);
    };
    AlgorithmsListComponent.prototype.ngOnDestroy = function () {
        this.clearMem();
    };
    AlgorithmsListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AlgorithmsListComponent.prototype.clearMem = function () {
        this._algorithms = null;
    };
    AlgorithmsListComponent.prototype.getAlgos = function () {
        var _this = this;
        this._algoService
            .getAlgorithms(null, this.paginator._pageIndex, this.paginator.pageSize)
            .subscribe(function (algos) {
            _this._algorithms = algos;
        });
    };
    AlgorithmsListComponent.prototype.onSelect = function (algorithm) {
        this.sessionService.setAlgorithm(algorithm);
    };
    AlgorithmsListComponent.prototype.getCount = function () {
        var _this = this;
        this._algoService.getAlgorithmsCount()
            .subscribe(function (res) {
            _this._count = res.headers.get('total');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AlgorithmsListComponent.prototype, "paginator", void 0);
    AlgorithmsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algorithms-list',
            template: __webpack_require__(/*! ./algorithms-list.component.html */ "./src/app/algorithms/algorithms-list/algorithms-list.component.html"),
            styles: [__webpack_require__(/*! ./algorithms-list.component.css */ "./src/app/algorithms/algorithms-list/algorithms-list.component.css")]
        }),
        __metadata("design:paramtypes", [_jaqpot_client_api_algorithm_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
    ], AlgorithmsListComponent);
    return AlgorithmsListComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _algorithms_algorithms_component_algorithms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/algorithms-component/algorithms.component */ "./src/app/algorithms/algorithms-component/algorithms.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dataset_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataset/dataset-detail/dataset-detail.component */ "./src/app/dataset/dataset-detail/dataset-detail.component.ts");
/* harmony import */ var _dataset_dataset_list_dataset_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataset/dataset-list/dataset-list.component */ "./src/app/dataset/dataset-list/dataset-list.component.ts");
/* harmony import */ var _session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./session/auth-guard.service */ "./src/app/session/auth-guard.service.ts");
/* harmony import */ var _httk_base_httk_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./httk/base/httk.base.component */ "./src/app/httk/base/httk.base.component.ts");
/* harmony import */ var _httk_createhttkmodel_createhttkmodel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./httk/createhttkmodel/createhttkmodel.component */ "./src/app/httk/createhttkmodel/createhttkmodel.component.ts");
/* harmony import */ var _account_account_base_account_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.base/account.base.component */ "./src/app/account/account.base/account.base.component.ts");
/* harmony import */ var _organization_organization_base_organization_base_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./organization/organization-base/organization-base.component */ "./src/app/organization/organization-base/organization-base.component.ts");
/* harmony import */ var _front_front_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./front/front.component */ "./src/app/front/front.component.ts");
/* harmony import */ var _home_datasethome_datasethome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/datasethome/datasethome.component */ "./src/app/home/datasethome/datasethome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'account', component: _account_account_base_account_base_component__WEBPACK_IMPORTED_MODULE_11__["AccountBaseComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'algorithms', component: _algorithms_algorithms_component_algorithms_component__WEBPACK_IMPORTED_MODULE_3__["AlgorithmsComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'datasets', component: _dataset_dataset_list_dataset_list_component__WEBPACK_IMPORTED_MODULE_7__["DatasetListComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'models', component: _models_models_component__WEBPACK_IMPORTED_MODULE_4__["ModelsComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'dataset/detail', component: _dataset_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_6__["DatasetDetailComponent"], data: { dataset: 'some value' } },
    { path: 'httk', component: _httk_base_httk_base_component__WEBPACK_IMPORTED_MODULE_9__["HttkBaseComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'httk/createmodel', component: _httk_createhttkmodel_createhttkmodel_component__WEBPACK_IMPORTED_MODULE_10__["CreatehttkmodelComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'organization/:id', component: _organization_organization_base_organization_base_component__WEBPACK_IMPORTED_MODULE_12__["OrganizationBaseComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'home/dataset', component: _home_datasethome_datasethome_component__WEBPACK_IMPORTED_MODULE_14__["DatasethomeComponent"], canActivate: [_session_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: '', component: _front_front_component__WEBPACK_IMPORTED_MODULE_13__["FrontComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n    flex: 1 1 auto;\n  }\n\nh2{\n  font-family: Courier;\n  font-size: 1.5em;\n}\n\nmain{\n  height: 100%;\n  width: 100%;\n}\n\n.app{\n  margin:0; \n  padding:0;\n  overflow: auto;\n  margin: 0;\n  padding: 0em 0em;\n}\n\n.image{\n  margin-left: 8px;\n  margin-top: 10px;\n  height: 30%;\n  width: 30%;\n}\n\n.side_menu{\n  margin-right: 1em;\n  margin-top: 8px;\n}\n\n.login{\n  margin-top: 3px;\n}\n\n.logout{\n  margin-top: 8px;\n}\n\nmat-toolbar{\n  /* min-height: 24px; */\n  max-height: 54px; \n  /* min-height: 6vh;  */\n  min-height: 54px;\n  /* max-height: 6vh; */\n}\n\n.app_content{\n  /* height: 94vh; */\n  min-height: calc(100vh - 54px);\n  max-height: calc(100vh - 54px);\n}\n\n.side_menu{\n  margin-top: 0%;\n}\n\n.sidenav_cont{\n  z-index: 0;\n  min-height: calc(100vh - 54px);\n  max-height: calc(100vh - 54px);\n  overflow: auto;\n}\n\n.list_item{\n  min-height: 2em;\n  height: 2em;\n  margin: 0;\n}\n\n.sidenav{\n  min-width: 12% !important;\n}\n\n.toolbar{\n  /* position: fixed; */\n  overflow: hidden;\n  position: -webkit-sticky;\n  position: sticky;\n  align-items: center;\n  -webkit-box-align: center;  \n  box-shadow: 0px 5px 24px black;\n  top: 0;\n  overflow: hidden;\n  z-index: 1;\n}\n\ni{\n  font-size: 130%;\n  margin-right: 40px;\n}\n\n.login {\n  transition: all .2s ease-in-out;\n  margin-right: 4px;\n  }\n\n.login:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  cursor: pointer;\n}\n\n.app-action{\n  margin-right: 20px;\n}\n\n.notifications{\n  margin-right: 10px;\n}\n\n.notif-icon{\n  color: lightrey;\n}\n\n.d3intro{\n  display: block;\n  margin: auto;\n  width: 100%;\n  height: 90%;  \n}\n\n.side_nav_a{\n\n}\n\n.side_nav_a:hover{\n  background-color: lightgray;\n  transition: all .2s ease-in-out;\n}\n\n.side_header{\n  margin-top: 4em;\n  padding-top: 4em;\n}\n\n.side_icon{\n  color: dimgrey;\n  margin-right: 1em;\n  margin-left: 0.5em;\n  font-size: 1.8em;\n  margin-bottom: 6px;\n}\n\n/* .toxi_icon{\n  color: dimgrey;\n  margin-right: 1em;\n  margin-left: 0.5em;\n  font-size: 0.1em;\n  margin-bottom: 6px;\n} */\n\n.toxi_pic{\n  color: dimgrey;\n  /* margin-right: 1em;\n  margin-left: 0.5em; */\n  font-size: 5px;\n  margin-bottom: 6px;\n}\n\n.toxi_img{\n  /* margin-right: 1em; */\n  margin-left: 0.8em;\n  padding-right: 1.3em; \n  width: 18%\n}\n\n.account{\n  margin-top: 8px;\n  margin-right: 4px;\n  font-size: 1.4em;\n  color: beige;\n}\n\n.settings{\n  /* margin-left: 2em; */\n  margin-bottom: 12px;\n  margin-right: 0.5em;\n  font-size: 0.95em;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [class.dark-theme]=\"isDarkTheme\" class=\"app\">\n\n\n\n  <mat-toolbar class=\"toolbar\" color=\"primary\">\n    <mat-toolbar-row>\n\n      <div *ngIf=\"loggedIn\">\n        <button mat-icon-button class=\"side_menu\" (click)=\"sidenav.toggle()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n\n      </div>\n\n      <h2>Jaqpot</h2>\n      <span>\n        <img class=\"image\" src=\"../../assets/favicon.ico\">\n      </span>\n      <span class=\"example-spacer\"></span>\n\n\n      <span class=\"notifications\">\n        <div *ngIf=\"loggedIn\">\n          <app-notification></app-notification>\n        </div>\n      </span>\n      <span class=\"app-action\">\n        <button mat-icon-button color=\"accent\" (click)=\"changeTheme()\">\n          <mat-icon>invert_colors</mat-icon>\n        </button>\n      </span>\n\n\n      <div *ngIf=\"loggedIn; else logout\">\n        <a routerLink=\"/account\" matTooltip=\"Account\" matTooltipPosition=\"below\">\n          <mat-icon class=\"account\">\n            <i class=\"material-icons\">account_circle</i>\n          </mat-icon>\n        </a>\n      </div>\n      <ng-template #logout>\n        <a class=\"login\" (click)=\"trySSO()\" matTooltip=\"Login\" matTooltipPosition=\"below\">\n          <mat-icon class=\"login\">\n            <i class=\"material-icons\">account_circle</i>\n          </mat-icon>\n        </a>\n      </ng-template>\n    </mat-toolbar-row>\n\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"sidenav_cont\">\n\n    <mat-sidenav class=\"sidenav\" #sidenav mode=\"over\">\n      <mat-nav-list>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">home</mat-icon>\n          Home\n        </a>\n        <mat-divider></mat-divider>\n        <h2 mat-subheader class=\"side_header\">API's</h2>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">repeat</mat-icon>\n          Models\n        </a>\n        <h2 mat-subheader class=\"side_header\">STORAGE</h2>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">view_comfy</mat-icon>\n          Data Tables\n        </a>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">storage</mat-icon>\n          Q Blob\n        </a>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">format_align_center</mat-icon>\n          Linque\n        </a>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">bubble_chart</mat-icon>\n          Qraph\n        </a>\n        <h2 mat-subheader class=\"side_header\">STATISTICS</h2>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">show_chart</mat-icon>\n          Visualization\n        </a>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">linear_scale</mat-icon>\n          Generalized M\n        </a>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">select_all</mat-icon>\n          DoE\n        </a>\n        <h2 mat-subheader class=\"side_header\">MACHINE LEARNING</h2>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">visibility</mat-icon>\n          Computer Vision\n        </a>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">timeline</mat-icon>\n          Chronicles\n        </a>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">nature</mat-icon>\n          Trees\n        </a>\n        <h2 mat-subheader class=\"side_header\">BIOKINETICS</h2>\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">pie_chart_outlined</mat-icon>\n          PkSim\n        </a>\n        <!-- <a mat-list-item class=\"side_nav_a\" routerLink=\"/home\" (click)=\"sidenav.toggle()\">\n          <img class=\"toxi_img\" src=\"../../assets/toxikin2.ico\">\n          Httk\n        </a> -->\n        <a mat-list-item class=\"side_nav_a\" routerLink=\"/httk\" (click)=\"sidenav.toggle()\">\n          <mat-icon class=\"side_icon\">healing</mat-icon>\n          Httk\n        </a>\n\n        <h2 mat-subheader class=\"side_header\">Info</h2>\n      </mat-nav-list>\n\n    </mat-sidenav>\n    <mat-sidenav-content class=\"app_content\">\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n\n\n  </mat-sidenav-container>\n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jaqpot-client/api/aa.service */ "./src/app/jaqpot-client/api/aa.service.ts");
/* harmony import */ var _dialogs_login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/login-logout-dialog/login-dialog.component */ "./src/app/dialogs/login-logout-dialog/login-dialog.component.ts");
/* harmony import */ var _dialogs_login_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/login-logout-dialog/logout-dialog.component */ "./src/app/dialogs/login-logout-dialog/logout-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AccountDialogComponent } from './dialogs/account-dialog/account-dialog.component'





// import { Store } from '@ngrx/store';
var AppComponent = /** @class */ (function () {
    function AppComponent(oidcSecurityService, dialog, sessionService, aaService, router) {
        var _this = this;
        this.oidcSecurityService = oidcSecurityService;
        this.dialog = dialog;
        this.sessionService = sessionService;
        this.aaService = aaService;
        this.router = router;
        var theme = sessionService.get('theme');
        if (theme === 'dark-theme') {
            this.isDarkTheme = true;
        }
        else {
            this.isDarkTheme = false;
        }
        this.subscription = this.sessionService
            .getTheme().subscribe(function (theme) {
            var the = Object.values(theme);
            if (the[0] === 'default-theme') {
                _this.isDarkTheme = false;
            }
            else {
                _this.isDarkTheme = true;
            }
        });
        if (this.oidcSecurityService.moduleSetup) {
            this.doCallbackLogicIfRequired();
        }
        else {
            this.oidcSecurityService.onModuleSetup.subscribe(function () {
                _this.doCallbackLogicIfRequired();
            });
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(function (isAuthorized) {
            if (isAuthorized === true) {
                _this.loggedIn = true;
            }
            else {
                _this.loggedIn = false;
            }
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var svg = d3__WEBPACK_IMPORTED_MODULE_8__["select"]("svg");
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // this.oidcSecurityService.onModuleSetup.unsubscribe();
    };
    AppComponent.prototype.openLoginDialog = function () {
        var dialogRef = this.dialog.open(_dialogs_login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"], {});
    };
    AppComponent.prototype.openLogoutDialog = function () {
        var dialogRef = this.dialog.open(_dialogs_login_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LogoutDialogComponent"], {});
    };
    // openAccountDialog(){
    //   let dialogRef = this.dialog.open(AccountDialogComponent,{
    //     height: '100%',
    //     width: '100%',
    //     maxHeight:'100%',
    //     maxWidth:'100%',
    //     panelClass: 'account_dialog'
    //   });
    // }
    AppComponent.prototype.changeTheme = function () {
        if (this.isDarkTheme === true) {
            this.sessionService.set('theme', 'default-theme');
        }
        else {
            this.sessionService.set('theme', 'dark-theme');
        }
    };
    AppComponent.prototype.trySSO = function () {
        this.oidcSecurityService.authorize();
    };
    AppComponent.prototype.doCallbackLogicIfRequired = function () {
        if (window.location.hash) {
            this.oidcSecurityService.authorizedCallback();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcSecurityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_1__["AaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _algorithms_algorithms_component_algorithms_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./algorithms/algorithms-component/algorithms.component */ "./src/app/algorithms/algorithms-component/algorithms.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _dataset_dataset_component_dataset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dataset/dataset-component/dataset.component */ "./src/app/dataset/dataset-component/dataset.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _models_models_module_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./models/models-module.module */ "./src/app/models/models-module.module.ts");
/* harmony import */ var _algorithms_algorithms_list_algorithms_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./algorithms/algorithms-list/algorithms-list.component */ "./src/app/algorithms/algorithms-list/algorithms-list.component.ts");
/* harmony import */ var _dataset_dataset_list_dataset_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dataset/dataset-list/dataset-list.component */ "./src/app/dataset/dataset-list/dataset-list.component.ts");
/* harmony import */ var _algorithms_algorithm_detail_algorithm_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./algorithms/algorithm-detail/algorithm-detail.component */ "./src/app/algorithms/algorithm-detail/algorithm-detail.component.ts");
/* harmony import */ var _dataset_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dataset/dataset-detail/dataset-detail.component */ "./src/app/dataset/dataset-detail/dataset-detail.component.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _httk_base_httk_base_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./httk/base/httk.base.component */ "./src/app/httk/base/httk.base.component.ts");
/* harmony import */ var _httk_createhttkmodel_createhttkmodel_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./httk/createhttkmodel/createhttkmodel.component */ "./src/app/httk/createhttkmodel/createhttkmodel.component.ts");
/* harmony import */ var _base_components_parameterlist_parameterlist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./base/components/parameterlist/parameterlist.component */ "./src/app/base/components/parameterlist/parameterlist.component.ts");
/* harmony import */ var _base_components_parametersteps_parametersteps_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./base/components/parametersteps/parametersteps.component */ "./src/app/base/components/parametersteps/parametersteps.component.ts");
/* harmony import */ var _account_account_base_account_base_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./account/account.base/account.base.component */ "./src/app/account/account.base/account.base.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var _account_social_base_social_base_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./account/social.base/social.base.component */ "./src/app/account/social.base/social.base.component.ts");
/* harmony import */ var _account_quota_quota_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./account/quota/quota.component */ "./src/app/account/quota/quota.component.ts");
/* harmony import */ var _account_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./account/organizations/organizations.component */ "./src/app/account/organizations/organizations.component.ts");
/* harmony import */ var _organization_organization_base_organization_base_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./organization/organization-base/organization-base.component */ "./src/app/organization/organization-base/organization-base.component.ts");
/* harmony import */ var _organization_organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./organization/organization-details/organization-details.component */ "./src/app/organization/organization-details/organization-details.component.ts");
/* harmony import */ var _organization_organization_users_organization_users_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./organization/organization-users/organization-users.component */ "./src/app/organization/organization-users/organization-users.component.ts");
/* harmony import */ var _bar_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./bar-components/notification/notification.component */ "./src/app/bar-components/notification/notification.component.ts");
/* harmony import */ var _front_front_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./front/front.component */ "./src/app/front/front.component.ts");
/* harmony import */ var _home_datasethome_datasethome_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./home/datasethome/datasethome.component */ "./src/app/home/datasethome/datasethome.component.ts");
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dialogs/dialogs.module */ "./src/app/dialogs/dialogs.module.ts");
/* harmony import */ var _home_data_model_view_data_model_view_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./home/data-model-view/data-model-view.component */ "./src/app/home/data-model-view/data-model-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// import { DialogsModule } from './dialogs/dialogs.module';










// import { AlgorithmsModuleModule } from './algorithms/algorithms-module.module';
// import { DatasetModuleModule } from './dataset/dataset-module.module';
























/**
 * NgModule that includes all Material modules that are required to serve
 * the Plunker.
 */
// export function loadConfig(oidcConfigService: OidcConfigService) {
//   console.log('APP_INITIALIZER STARTING');
//   return () => oidcConfigService.load_using_stsServer('http://147.102.86.129:30008/auth/realms/Jaqpan');
// }
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [
                // CDK
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatchModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__["CdkTableModule"],
                // Material
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"]
            ],
            declarations: [],
            providers: [
            // OidcConfigService,
            // {
            //     provide: APP_INITIALIZER,
            //     useFactory: loadConfig,
            //     deps: [OidcConfigService],
            //     multi: true
            // }
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule(overlayContainer, sessionService, oidcConfigService, oidcSecurityService) {
        var _this = this;
        this.overlayContainer = overlayContainer;
        this.sessionService = sessionService;
        this.oidcConfigService = oidcConfigService;
        this.oidcSecurityService = oidcSecurityService;
        var _theme = sessionService.get('theme');
        if (_theme === 'dark-theme') {
            this.overlayContainer.getContainerElement().classList.remove('default-theme');
            this.overlayContainer.getContainerElement().classList.add('dark-theme');
        }
        else {
            this.overlayContainer.getContainerElement().classList.remove('dark-theme');
            this.overlayContainer.getContainerElement().classList.add('default-theme');
        }
        this.subscription = this.sessionService
            .getTheme().subscribe(function (theme) {
            var the = Object.values(theme);
            if (the[0] === 'dark-theme') {
                _this.theme = 'dark-theme';
                _this.overlayContainer.getContainerElement().classList.remove('default-theme');
                _this.overlayContainer.getContainerElement().classList.add('dark-theme');
            }
            else {
                _this.theme = 'default-theme';
                _this.overlayContainer.getContainerElement().classList.remove('dark-theme');
                _this.overlayContainer.getContainerElement().classList.add('default-theme');
            }
        });
        var openIDImplicitFlowConfiguration = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_31__["OpenIDImplicitFlowConfiguration"]();
        openIDImplicitFlowConfiguration.stsServer = 'https://login.jaqpot.org/auth/realms/jaqpot';
        openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:4200/home';
        openIDImplicitFlowConfiguration.client_id = 'jaqpot-ui';
        openIDImplicitFlowConfiguration.response_type = 'id_token token';
        openIDImplicitFlowConfiguration.scope = 'openid email profile';
        openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'https://login.jaqpot.org/auth/realms/jaqpot/Unauthorized';
        openIDImplicitFlowConfiguration.start_checksession = false;
        openIDImplicitFlowConfiguration.silent_renew = true;
        openIDImplicitFlowConfiguration.silent_renew_offset_in_seconds = 0;
        openIDImplicitFlowConfiguration.post_login_route = '/home';
        openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
        openIDImplicitFlowConfiguration.unauthorized_route = '/home';
        openIDImplicitFlowConfiguration.auto_userinfo = true;
        openIDImplicitFlowConfiguration.log_console_warning_active = true;
        openIDImplicitFlowConfiguration.log_console_debug_active = false;
        openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 10;
        // openIDImplicitFlowConfiguration.override_well_known_configuration = false;
        // openIDImplicitFlowConfiguration.override_well_known_configuration_url = 'http://147.102.86.129:30008/auth/realms/Jaqpan/.well-known/openid-configuration';
        // openIDImplicitFlowConfiguration.storage = localStorage;
        var authWellKnownEndpoints = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_31__["AuthWellKnownEndpoints"]();
        authWellKnownEndpoints.issuer = 'https://login.jaqpot.org/auth/realms/jaqpot';
        authWellKnownEndpoints.jwks_uri = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/certs';
        authWellKnownEndpoints.authorization_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/auth';
        authWellKnownEndpoints.token_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/token';
        authWellKnownEndpoints.userinfo_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/userinfo';
        authWellKnownEndpoints.end_session_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/logout';
        authWellKnownEndpoints.check_session_iframe = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/login-status-iframe.html';
        // authWellKnownEndpoints.revocation_endpoint = 'http://147.102.86.129:30008/auth/realms/Jaqpan/.well-known/openid-configuration/revocation';
        authWellKnownEndpoints.introspection_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/token/introspect';
        this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);
    }
    AppModule.prototype.changeTheme = function (theme) {
        this.overlayContainer.getContainerElement().classList.add(theme);
    };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                MaterialModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_48__["DialogsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                _models_models_module_module__WEBPACK_IMPORTED_MODULE_26__["ModelsModuleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_38__["ImageCropperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                // AuthModule.forRoot( { storage:SecurityStorage } ),
                angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_31__["AuthModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ],
            exports: [_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_48__["DialogsModule"], MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _base_base_component__WEBPACK_IMPORTED_MODULE_19__["BaseComponent"],
                _algorithms_algorithms_component_algorithms_component__WEBPACK_IMPORTED_MODULE_22__["AlgorithmsComponent"],
                _algorithms_algorithms_list_algorithms_list_component__WEBPACK_IMPORTED_MODULE_27__["AlgorithmsListComponent"],
                _algorithms_algorithm_detail_algorithm_detail_component__WEBPACK_IMPORTED_MODULE_29__["AlgorithmDetailComponent"],
                _dataset_dataset_component_dataset_component__WEBPACK_IMPORTED_MODULE_24__["DatasetComponent"],
                _dataset_dataset_list_dataset_list_component__WEBPACK_IMPORTED_MODULE_28__["DatasetListComponent"],
                _dataset_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_30__["DatasetDetailComponent"],
                _models_models_component__WEBPACK_IMPORTED_MODULE_23__["ModelsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _httk_base_httk_base_component__WEBPACK_IMPORTED_MODULE_33__["HttkBaseComponent"],
                _httk_createhttkmodel_createhttkmodel_component__WEBPACK_IMPORTED_MODULE_34__["CreatehttkmodelComponent"],
                _base_components_parameterlist_parameterlist_component__WEBPACK_IMPORTED_MODULE_35__["ParameterlistComponent"],
                _base_components_parametersteps_parametersteps_component__WEBPACK_IMPORTED_MODULE_36__["ParameterstepsComponent"],
                _account_account_base_account_base_component__WEBPACK_IMPORTED_MODULE_37__["AccountBaseComponent"],
                _account_social_base_social_base_component__WEBPACK_IMPORTED_MODULE_39__["SocialBaseComponent"],
                _account_quota_quota_component__WEBPACK_IMPORTED_MODULE_40__["QuotaComponent"],
                _account_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_41__["OrganizationsComponent"],
                _organization_organization_base_organization_base_component__WEBPACK_IMPORTED_MODULE_42__["OrganizationBaseComponent"],
                _organization_organization_details_organization_details_component__WEBPACK_IMPORTED_MODULE_43__["OrganizationDetailsComponent"],
                _organization_organization_users_organization_users_component__WEBPACK_IMPORTED_MODULE_44__["OrganizationUsersComponent"],
                _bar_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_45__["NotificationComponent"],
                _home_datasethome_datasethome_component__WEBPACK_IMPORTED_MODULE_47__["DatasethomeComponent"],
                _front_front_component__WEBPACK_IMPORTED_MODULE_46__["FrontComponent"],
                _home_data_model_view_data_model_view_component__WEBPACK_IMPORTED_MODULE_49__["DataModelViewComponent"]
                //
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
            providers: [_session_session_service__WEBPACK_IMPORTED_MODULE_18__["SessionService"]],
            entryComponents: []
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_18__["SessionService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_31__["OidcConfigService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_31__["OidcSecurityService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-components/notification/notification.component.css":
/*!************************************************************************!*\
  !*** ./src/app/bar-components/notification/notification.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-menu-panel.notif-menu {\n    min-width: 300px;\n    margin-top: 3em;\n}\n\n.notif-icon-b{\n    margin-top:0.5em;\n}"

/***/ }),

/***/ "./src/app/bar-components/notification/notification.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/bar-components/notification/notification.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button matTooltip=\"Notifications\"\n        matTooltipPosition=\"below\"\n        mat-icon-button\n        [matMenuTriggerFor]=\"notsshortmenu\">\n  <div *ngIf=\"notifications.length > 0 else without_badge\">\n    <mat-icon matBadge=\"{{notificationCount}}\" matBadgeColor=\"warn\" class=\"notif-icon-b\" >notifications</mat-icon> \n  </div>\n  <ng-template #without_badge>\n    <mat-icon matBadgeColor=\"warn\" class=\"notif-icon\" >notifications</mat-icon>\n  </ng-template>\n</button>\n<mat-menu #notsshortmenu=\"matMenu\" class=\"notif-menu\">\n  <div *ngFor=\"let notif of notifications\">\n  <div *ngIf=\"notif.type=='INVITATION'\"> \n  <button mat-menu-item (click)=\"openNotifDialog(notif)\">\n    <mat-icon>group</mat-icon>\n    <span *ngIf=\"notif.viewed==false else no_bold\">\n       <b> Invitation to join {{notif.invitationTo}} </b>\n    </span>\n    <ng-template #no_bold><span>Invitation to join {{notif.invitationTo}}</span></ng-template>\n  </button>\n</div>\n </div>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/bar-components/notification/notification.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bar-components/notification/notification.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _jaqpot_client_api_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jaqpot-client/api/notification.service */ "./src/app/jaqpot-client/api/notification.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jaqpot-client/api/organization.service */ "./src/app/jaqpot-client/api/organization.service.ts");
/* harmony import */ var _jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jaqpot-client/api/user.service */ "./src/app/jaqpot-client/api/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService, organizationService, userService, dialogsService) {
        this.notificationService = notificationService;
        this.organizationService = organizationService;
        this.userService = userService;
        this.dialogsService = dialogsService;
        this.notifications = new Array();
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1__["interval"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.notificationService.getUnreadNotifications(); })).subscribe(function (notifsGot) {
            _this.notifications = notifsGot;
            _this.notificationCount = _this.notifications.length;
        });
    };
    NotificationComponent.prototype.openNotifDialog = function (notif) {
        this.dialogsService.openActualNotifDialog(notif, this.organizationService, this.notificationService, this.userService);
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/bar-components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/bar-components/notification/notification.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_jaqpot_client_api_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"],
            _jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__["DialogsService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/base/base.component.css":
/*!*****************************************!*\
  !*** ./src/app/base/base.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    float: right;\n}\n\n/* .base-toolbar{\n    position: relative;\n} */\n\n.example-spacer {\n    flex: 1 1 auto;\n  }\n\n.modeling_session{\n    margin-left: 8em;\n    margin-right: 1em;\n    opacity: 0.8;\n}\n\n.session_bar{\n    /* background-color: grey; */\n    padding-top: 0px;\n    font-family: sans-serif;\n    max-height: 25px;\n    font-size: 0.8em;\n    \n    /* opacity: 0.4; */\n}"

/***/ }),

/***/ "./src/app/base/base.component.html":
/*!******************************************!*\
  !*** ./src/app/base/base.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <mat-toolbar class=\"base-toolbar\" color=\"primary\">\n    <mat-toolbar-row>\n\n    \n\n    <h3>{{group.value}}</h3>\n\n    <span class=\"example-spacer\"></span>\n\n    \n    \n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" value=\"Home\">\n      <mat-button-toggle  \n              routerLink=\"/home\" \n              matTooltip=\"Home\"\n              matTooltipPosition=\"below\"\n              value=\"Home\">\n        <i class=\"material-icons\">&#xE88A;</i>\n      </mat-button-toggle>\n      <mat-button-toggle\n        routerLink=\"/algorithms\"\n        matTooltip=\"Algorithms\"\n        matTooltipPosition=\"below\"\n        value=\"Algorithms\">\n        <i class=\"material-icons\">&#xE3A5;</i>\n      </mat-button-toggle>\n      <mat-button-toggle\n        routerLink=\"/models\"\n        matTooltip=\"Models\" \n        matTooltipPosition=\"below\"\n        value=\"Models\">\n        <i class=\"material-icons\">&#xE01D;</i>\n      </mat-button-toggle>\n      <mat-button-toggle  \n        routerLink=\"/datasets\" \n        matTooltip=\"Datasets\" \n        matTooltipPosition=\"below\"\n        value=\"Datasets\">\n        <i class=\"material-icons\">&#xE2C7;</i>\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n\n\n    \n    <button mat-icon-button\n           [matMenuTriggerFor]=\"menu\"\n           matTooltip=\"Modeling parameters\" \n           matTooltipPosition=\"below\"\n           class=\"modeling_session\"\n           *ngIf=\"notReady; else okButton\">\n        <mat-icon color=\"warn\">compare_arrows</mat-icon>\n      </button>\n      <ng-template #okButton>\n        <button mat-icon-button \n            class=\"modeling_session\"\n            matTooltip=\"Ready for modeling!\" \n            matTooltipPosition=\"below\">\n            <mat-icon >done_all</mat-icon>\n        </button>\n      </ng-template>\n\n        <mat-menu #menu=\"matMenu\" y-position=\"below\" x-position=\"before\" >\n            <p *ngIf=\"datasetIsNotChosen else dataChosen\" mat-menu-item>Dataset is not chosen</p>\n            <ng-template #dataChosen>\n              <p mat-menu-item>Dataset {{datasetForModel.meta.titles[0]}}</p>\n            </ng-template>\n\n            <p *ngIf=\"algoIsNotChosen else algoChosen\" mat-menu-item>Algorithm is not chosen</p>\n            <ng-template #algoChosen>\n              <p mat-menu-item>Algorithm: {{ algoForModel._id }}</p>\n            </ng-template>\n        </mat-menu>\n      </mat-toolbar-row>\n\n     \n\n  </mat-toolbar>\n\n  <!-- <div class=\"session_bar mat-elevation-z8\">session: </div> -->\n\n  <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/base/base.component.ts":
/*!****************************************!*\
  !*** ./src/app/base/base.component.ts ***!
  \****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session/session.service */ "./src/app/session/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseComponent = /** @class */ (function () {
    function BaseComponent(_sessionService) {
        this._sessionService = _sessionService;
        this.active = 'home';
        this.algoIsNotChosen = true;
        this.datasetIsNotChosen = true;
        this.notReady = true;
    }
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._sessionService
            .getModelingAlgorithm().subscribe(function (algo) {
            if (algo) {
                _this.algoIsNotChosen = false;
            }
            else {
                _this.algoIsNotChosen = true;
            }
            _this.algoForModel = algo;
        });
        this.subscription = this._sessionService
            .getModelingDataset().subscribe(function (dataset) {
            if (dataset) {
                _this.datasetIsNotChosen = false;
            }
            else {
                _this.datasetIsNotChosen = true;
            }
            _this.datasetForModel = dataset;
        });
    };
    BaseComponent.prototype.changeActive = function (string) {
        this.active = string;
    };
    BaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/base/base.component.html"),
            styles: [__webpack_require__(/*! ./base.component.css */ "./src/app/base/base.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/base/components/parameterlist/parameterlist.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/base/components/parameterlist/parameterlist.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paramaccordion{\n    min-height: 100%;\n    /* margin-bottom: 6em; */\n    padding-bottom: 4em;\n    /* position: absolute; */\n    /* top: 0; bottom: 0; left: 0; right: 0; */\n    overflow: hidden;\n    /* margin: 1em; */\n    padding-right: 17px;\n    /* background: blue; */\n    /* border: 1px solid red; */\n}\n.paramaccordion:hover{\n    overflow: auto;\n}\n::-webkit-scrollbar {\n    width: 10px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey; \n    border-radius: 10px;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: grey; \n    border-radius: 12px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555; \n}\n.acc{\n    margin-bottom: 4em;\n}\n.hea{\n    padding-left: 1em;\n}\n.param-cont{\n    /* position: absolute; */\n    /* top: 0; bottom: 0; left: 0; right: 0; */\n    margin-top: 10%;\n    height: 80vh;\n    overflow: auto;\n    /* border: 1px solid rgb(202, 193, 193); */\n}"

/***/ }),

/***/ "./src/app/base/components/parameterlist/parameterlist.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/base/components/parameterlist/parameterlist.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"param-cont\">\n  <h3 class=\"hea\">\n    Parameter description\n  </h3>\n\n\n  <div class=\"paramaccordion\">\n    <mat-accordion class=\"acc\">\n      <mat-expansion-panel *ngFor=\"let parameter of parameters\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{parameter.name}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{parameter.name}} description\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <p>{{parameter.description}}</p>\n        <mat-divider></mat-divider>\n        <p>Default value: {{parameter.value}}</p>\n        <mat-divider></mat-divider>\n        <p>Input value is: {{parameter.scope}}</p>\n        <mat-divider></mat-divider>\n        <p>Allowed value's are: {{parameter.allowedValues}}</p>\n\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/base/components/parameterlist/parameterlist.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/base/components/parameterlist/parameterlist.component.ts ***!
  \**************************************************************************/
/*! exports provided: ParameterlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterlistComponent", function() { return ParameterlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParameterlistComponent = /** @class */ (function () {
    function ParameterlistComponent() {
    }
    ParameterlistComponent.prototype.ngOnInit = function () {
        // console.log(this.parameters);
        // this.parameters.forEach(par =>{
        //   console.log(par.name)
        // })
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ParameterlistComponent.prototype, "parameters", void 0);
    ParameterlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parameterlist',
            template: __webpack_require__(/*! ./parameterlist.component.html */ "./src/app/base/components/parameterlist/parameterlist.component.html"),
            styles: [__webpack_require__(/*! ./parameterlist.component.css */ "./src/app/base/components/parameterlist/parameterlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParameterlistComponent);
    return ParameterlistComponent;
}());



/***/ }),

/***/ "./src/app/base/components/parametersteps/parametersteps.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/base/components/parametersteps/parametersteps.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base/components/parametersteps/parametersteps.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/base/components/parametersteps/parametersteps.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  parametersteps works!\n</p> -->\n<mat-vertical-stepper [linear]=\"true\" #stepper>\n\n    <mat-step *ngFor=\"let parameter of parameters\" [stepControl]=\"parametersFormGroup\">\n        <ng-template matStepLabel>{{parameter.name}}</ng-template>\n\n    </mat-step>\n</mat-vertical-stepper>"

/***/ }),

/***/ "./src/app/base/components/parametersteps/parametersteps.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/base/components/parametersteps/parametersteps.component.ts ***!
  \****************************************************************************/
/*! exports provided: ParameterstepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterstepsComponent", function() { return ParameterstepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParameterstepsComponent = /** @class */ (function () {
    function ParameterstepsComponent() {
    }
    ParameterstepsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ParameterstepsComponent.prototype, "parameters", void 0);
    ParameterstepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametersteps',
            template: __webpack_require__(/*! ./parametersteps.component.html */ "./src/app/base/components/parametersteps/parametersteps.component.html"),
            styles: [__webpack_require__(/*! ./parametersteps.component.css */ "./src/app/base/components/parametersteps/parametersteps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParameterstepsComponent);
    return ParameterstepsComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = {
    // "JaqpotBase":"https://api.jaqpot.org/jaqpot/services"
    'JaqpotBase': 'http://localhost:8080/jaqpot/services'
};


/***/ }),

/***/ "./src/app/dataset/dataset-component/dataset.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dataset/dataset-component/dataset.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datasetwrap{\n    display: flex;\n    width: 1000px;\n    height: 90%;\n} \n\n\n.data_featured{\n    display: inline-block;\n    position: fixed;\n    top: 40px;\n    left: 20px;\n    transition: all .2s ease-in-out;\n    /* position: sticky; */\n    /* top: 20px;\n    right: 36px; */\n    color: lightseagreen;\n    opacity: 0.4;\n\n} \n\n\n.data_featured:hover{\n    transition: all .2s ease-in-out;\n    opacity: 1;\n} \n\n\n.add_data{\n    display: inline-block;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    transition: all .2s ease-in-out;\n    /* position: sticky; */\n    /* top: 20px;\n    right: 36px; */\n    color: lightseagreen;\n    opacity: 0.4;\n} \n\n\n.add_data:hover{\n    transition: all .2s ease-in-out;\n    opacity: 1;\n}"

/***/ }),

/***/ "./src/app/dataset/dataset-component/dataset.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dataset/dataset-component/dataset.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div *ngIf=\"datasetChosen;then dataset else datasetwrap\" class=\"dataset\"></div>\n  \n\n  <ng-template #datasetwrap> -->\n\n\n      <!-- <div class=\"datasetwrap\">\n        <app-dataset-list></app-dataset-list>\n        <app-dataset-detail></app-dataset-detail>\n      </div>\n        <span>\n          <button matTooltip=\"Add Dataset\"\n                  matTooltipPosition=\"after\"\n                  class=\"add_data\"\n                  mat-fab>\n              <mat-icon>add</mat-icon>\n          </button>\n        </span> -->\n\n  <!-- </ng-template>\n\n  <ng-template #dataset>\n    <app-dataset-detail [dataset]=\"dataset\"></app-dataset-detail>\n  </ng-template> -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dataset/dataset-component/dataset.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dataset/dataset-component/dataset.component.ts ***!
  \****************************************************************/
/*! exports provided: DatasetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetComponent", function() { return DatasetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatasetComponent = /** @class */ (function () {
    function DatasetComponent() {
    }
    DatasetComponent.prototype.ngOnInit = function () {
    };
    DatasetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataset',
            template: __webpack_require__(/*! ./dataset.component.html */ "./src/app/dataset/dataset-component/dataset.component.html"),
            styles: [__webpack_require__(/*! ./dataset.component.css */ "./src/app/dataset/dataset-component/dataset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatasetComponent);
    return DatasetComponent;
}());



/***/ }),

/***/ "./src/app/dataset/dataset-detail/dataset-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dataset/dataset-detail/dataset-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dataset_detail{\n    margin: 1em;\n    min-height: 80%;\n    max-width: 70%;\n    min-width: 70%;\n    float: left;\n}\n\n\n.loading-shade {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 1em;\n    margin-top: 8em;\n    margin-bottom: 3em;\n    min-height: 80%;\n    max-width: 70%;\n    min-width: 70%;\n    float: left;\n  }\n\n\n.title{\n    /* margin: 1em; */\n    /* background-color: lightgray; */\n    /* opacity: 0.3; */\n    padding-top: 0.1em;\n    /* padding-bottom: 0.1em; */\n    text-align: center left;\n}\n\n\n.header{\n    opacity: 1;\n    padding-left: 1em;\n    /* float: left; */\n    /* min-width: 100%; */\n}\n\n\n.basic_table{\n    border: 1px solid rgb(92, 92, 92);\n}\n\n\n.backb{\n    float: right;\n    margin-top: 1em;\n}\n\n\n.mat-table {\n    overflow: auto;\n    max-height: 300px;\n    margin-top: 0.3em;\n    /* min-width: 90%; */\n    /* margin: 1em; */\n  }\n\n\n.mat-header-cell{\n    min-width: 140px;\n    max-width: 160px;\n    overflow: auto;\n}\n\n\n.mat-cell{\n    min-width: 140px;\n    max-width: 160px;\n    overflow: auto;\n}\n\n\n.mat-row{\n    min-width: 100%\n}\n\n\n.mat-header-row{\n    min-width: 100%;\n}\n\n\n.mat-row:hover {\n    transition: all .2s ease-in-out;\n    background-color: lightgray;\n  }\n\n\n.example-container{\n    margin-left: 1em;\n    margin-right: 1em;\n    min-width: 60%;\n}\n\n\n.apimenu{\n    text-align: left;\n}\n\n\n.apim{\n    margin-right: 1em;\n    margin-left: 1em;\n}\n\n\n.apia{\n    margin-right: 1em;\n    margin-left: 1em;\n    min-width: 100px;\n    word-wrap: break-word;\n    text-align: center;\n}\n\n\nul {\n    list-style-type: none;\n    margin-bottom: 0.5em;\n    padding: 0;\n    overflow: hidden;\n    align-items: center;\n    /* border: 1px solid; */\n}\n\n\nli {\n    float: left;\n    margin:0.4em;\n    margin-left: 1em;\n}\n\n\nli.second{\n    float: right;\n    margin-right: 2em;\n}\n\n\nli a {\n    display: block;\n    color: #666;\n    text-align: center;\n    padding: 14px 18px;\n    text-decoration: none;\n}\n\n\nli a:hover:not(.active) {\n    /* background-color: #ddd; */\n    transition: all .2s ease-in-out;\n    background-color: lightgray;\n}\n\n\nli a.active {\n    color: white;\n    background-color: #4CAF50;\n}\n\n\nli.second.chosen{\n\n    padding-top: 2.5em;\n}"

/***/ }),

/***/ "./src/app/dataset/dataset-detail/dataset-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dataset/dataset-detail/dataset-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"dataset_detail\" class=\"mat-elevation-z8\">\n\n  <div class=\"title\">\n    <ul>\n      <li>\n          <h3 class=\"header\">\n              Dataset {{dataset_chosen.meta.titles[0]}} \n          </h3>\n      </li>\n      <li class=\"second\"> \n        <mat-icon *ngIf=\"checkDatasetModel\" color=\"warn\"\n                matTooltip=\"Is used for modeling\"\n                matTooltipPosition=\"above\" >\n            <i class=\"material-icons\" class=\"chosen\">done</i>\n        </mat-icon>\n      </li>\n\n    </ul>\n\n  </div>\n\n  <div class=\"loading-shade\" *ngIf=\"isLoading; else dataset_display\">\n    <mat-spinner class=\"spinner\" ></mat-spinner>\n  </div>\n\n  <ng-template class=\"dataset\" #dataset_display>\n\n    <ul>\n      <li>  <button mat-mini-fab  \n        color=\"primary\"\n        matTooltip=\"Back\"\n        matTooltipPosition=\"below\"\n        class=\"first\"\n        value=\"Back\"\n        (click)=\"closeDataset()\">\n            <i class=\"material-icons\">&#xE5C4;</i>\n          </button>\n      </li>\n\n      <li class=\"second\">\n        <button mat-icon-button\n            matTooltip=\"Use for modeling\"\n            matTooltipPosition=\"below\"\n            (click)=\"useDataset()\"\n            >\n          Use\n        </button>\n      </li>\n\n      <li class=\"second\">\n        <button mat-icon-button\n            [matMenuTriggerFor]=\"menu\"\n            matTooltip=\"Api endpoint details\"\n            matTooltipPosition=\"below\"\n            >\n          Api\n        </button>\n        <mat-menu class=\"apimenu\" #menu=\"matMenu\">\n          <p class=\"apim\">Datasets uri is: </p>\n          <a [attr.href]=\"dataset_uri\" target=\"_blank\" class=\"apia\"> {{server_base}}/dataset/{{ dataset_chosen._id }}</a>\n        </mat-menu>\n      </li>\n      \n      <li class=\"second\">\n          <button mat-icon-button\n              matTooltip=\"Download csv\"\n              matTooltipPosition=\"below\"\n              >\n              <i class=\"material-icons\">&#xE2C4;</i>\n          </button>\n          \n      </li>\n\n    </ul>\n    \n    <div class=\"example-container mat-elevation-z8\">\n\n        <mat-table #table [dataSource]=\"dataSource\">\n            \n            <mat-header-row [style.width]=\"rowwidth+'px'\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row [style.width]=\"rowwidth+'px'\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n            <ng-container *ngFor=\"let col of displayedColumns\" cdkColumnDef={{col}}>\n              <mat-header-cell  *cdkHeaderCellDef > {{ col }}</mat-header-cell>\n              <mat-cell  *cdkCellDef=\"let row\"> {{row[col]}}</mat-cell>\n            </ng-container>\n            \n        </mat-table>\n        <mat-paginator #paginator\n            [length]=\"totalRows\"\n            [pageSize]=\"10\"\n            [pageSizeOptions]=\"[5, 10, 20]\">\n        </mat-paginator>\n\n      </div>\n\n\n\n  </ng-template>\n  \n</div>"

/***/ }),

/***/ "./src/app/dataset/dataset-detail/dataset-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dataset/dataset-detail/dataset-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: DatasetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetDetailComponent", function() { return DatasetDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jaqpot_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jaqpot-client */ "./src/app/jaqpot-client/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatasetDetailComponent = /** @class */ (function () {
    function DatasetDetailComponent() {
        this.displayedColumns = [];
        this.columns = [];
        this.isLoading = true;
        this.checkDatasetModel = true;
        this.rowwidth = 400;
        this.dataRows = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataRows);
    }
    DatasetDetailComponent.prototype.ngOnInit = function () {
        // this._dataService
        //     .getDataset(this.dataset_chosen._id, null)
        //     .subscribe(datasetGot =>{
        //         this.totalRows = datasetGot.totalRows;
        //         let featureMap:Map<string, string> = new Map();
        //         datasetGot.features.forEach(feat =>{
        //           featureMap.set(feat.uri, feat.name)
        //         })
        //         // console.log(featureMap);
        //         datasetGot.dataEntry.forEach(dat =>{
        //           let dataRow:IDataRow = {};
        //           dataRow.values = {['substance']:dat.entryId.name};
        //           var dict: { [index: string]: string; } = {};
        //           dict["Substance"] = dat.entryId.name;
        //           for(let key in dat.values ){
        //             let featName = featureMap.get(key);
        //             let concat = key.split("/");
        //             dict[featName] = dat.values[key];
        //           }
        //           this.dataRows.push(dict);
        //         })
        //         let dict = this.dataRows[0];
        //         for (let key in dict) {
        //           this.displayedColumns.push(key);
        //         }
        //         this.isLoading = false;
        //         this.rowwidth = this.displayedColumns.length * 140;
        //     }, err=>{ this._dialogsService.onError(err) })
    };
    // ngOnChanges(){
    // }
    // ngAfterViewInit(){
    //   this.dataSource.paginator = this.paginator;
    // }
    DatasetDetailComponent.prototype.closeDataset = function () {
        // this._sessionService.clearModelingDataset();
        // this._router.navigate(['/datasets']);
    };
    DatasetDetailComponent.prototype.useDataset = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DatasetDetailComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatasetDetailComponent.prototype, "_dataset", void 0);
    DatasetDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataset-detail',
            template: __webpack_require__(/*! ./dataset-detail.component.html */ "./src/app/dataset/dataset-detail/dataset-detail.component.html"),
            styles: [__webpack_require__(/*! ./dataset-detail.component.css */ "./src/app/dataset/dataset-detail/dataset-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatasetDetailComponent);
    return DatasetDetailComponent;
}());



/***/ }),

/***/ "./src/app/dataset/dataset-list/dataset-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dataset/dataset-list/dataset-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.wrapper{\n  display: flex;\n  width: 1000px;\n  height: 90%;\n}\n\n.datasetcard{\n    /* display: inline-block;\n    vertical-align: top; */\n    /* height: 400px; */\n    /* min-height: 600px;\n    min-width: 40%;\n    margin-left: 2em;\n    margin-top: 2em; */\n    /* max-height: 90%; */\n    /* float: left; */\n    display: inline-block;\n    vertical-align: top;\n    min-height: 600px;\n    min-width: 40%;\n    margin: 2em;\n   }\n\n.data-table {\n    /* display: flex; */\n    flex-direction: column;\n    max-width: 100%;\n    min-width: 880px;    \n    /* min-height: 100%; */\n    /* height: 550px; */\n  }\n\n.mat-card{\n    min-width: 40%;\n  }\n\n/* mat-card-content{\n    min-width: 90%;\n  } */\n\nmat-form-field{\n    min-height: 20px;\n    padding: 8px 24px 0;\n    min-width: 100%;\n    width: 90%;\n    min-width: 90%;\n    min-height: 100%;\n  }\n\n.mat-table {\n    overflow: auto;\n    max-height: 420px;\n    /* min-width: 600px; */\n    min-width: 100%;\n    min-height: 90%;\n  }\n\nbutton{\n    float: left;\n    margin-top: 4em;\n    /* margin-right: 1em; */\n    margin-left: 2em;\n    opacity: 0.8;\n  }\n\n/* .first{\n    margin-left: 3em;\n  }\n\n  .last{\n    margin-right: 20em;\n  } */\n\n.mat-row:hover {\n    transition: all .2s ease-in-out;\n    background-color: lightgray;\n    cursor: pointer;\n  }\n\n.loading-shade {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n.datawrap{\n  display: flex;\n  width: 1000px;\n  height: 80%;\n}\n\n.databutw{\n    float: left;\n    width:7%;\n}\n\n.datalist{\n    float: left;\n    width:93%;\n}"

/***/ }),

/***/ "./src/app/dataset/dataset-list/dataset-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dataset/dataset-list/dataset-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"visible\" class=\"wrapper\">\n\n  <div class=\"databutw\">\n    <span class=\"databut\">\n      <button mat-mini-fab  \n          color=\"primary\"\n          matTooltip=\"Featured\"\n          matTooltipPosition=\"below\"\n          class=\"first\"\n          value=\"Featured Datasets\"\n          (click)=\"changeDatasets('Featured')\">\n            <i class=\"material-icons\">featured_play_list</i>\n        </button>\n        <button\n          color=\"primary\"\n          mat-mini-fab\n          matTooltip=\"All\"\n          matTooltipPosition=\"below\"\n          class=\"last\"\n          value=\"All Datasets\"\n          (click)=\"changeDatasets('All')\">\n            <i class=\"material-icons\">all_inclusive</i>\n      </button>\n    </span>\n  </div>\n\n  <div class=\"datalist\">\n    <mat-card class=\"datasetcard mat-elevation-z8\">\n      <mat-card-header >\n          \n          <mat-card-title class=\"datasetcardheader\">Datasets</mat-card-title>\n          <mat-card-subtitle class=\"datacardheader\">\n            {{data_in}} in jaqpot\n          </mat-card-subtitle>\n                \n\n      </mat-card-header>\n        <mat-card-content >\n          <div class=\"data-table mat-elevation-z8\" >\n\n            <div class=\"example-container \">\n\n                <div class=\"loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n\n                    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n                    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n                      Jaqpot Api rate is limmited! Please try again later.\n                    </div>\n\n                </div>\n          \n                    <div class=\"filter\">\n                      <mat-form-field>\n                          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                      </mat-form-field>\n                    </div>\n\n\n                    <mat-table #table [dataSource]=\"dataSource\">\n                  \n                      <!-- Id Column -->\n                      <ng-container matColumnDef=\"Titles\">\n                        <mat-header-cell *matHeaderCellDef> Id </mat-header-cell>\n                        <mat-cell *matCellDef=\"let dataset\"> {{dataset.meta.titles[0]}} </mat-cell>\n                      </ng-container>\n                  \n                      <!-- Descriptions Column -->\n                      <ng-container matColumnDef=\"Subjects\">\n                        <mat-header-cell *matHeaderCellDef> Subjects </mat-header-cell>\n                        <mat-cell *matCellDef=\"let dataset\"> {{dataset.meta.subjects}} </mat-cell>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Descriptions\">\n                        <mat-header-cell *matHeaderCellDef> Descriptions </mat-header-cell>\n                        <mat-cell *matCellDef=\"let dataset\"> {{dataset.meta.descriptions[0]}} </mat-cell>\n                      </ng-container>\n                  \n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                      <mat-row (click)=\"onSelect(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n                  \n                    <mat-paginator #paginator\n                                  [length]=\"resultsLength\"\n                                  [pageSize]=\"10\"\n                                  [pageSizeOptions]=\"[10, 20, 30]\">\n                    </mat-paginator>\n            \n                \n            </div>\n\n          </div>\n              \n        </mat-card-content>\n    </mat-card>\n  </div>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/dataset/dataset-list/dataset-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dataset/dataset-list/dataset-list.component.ts ***!
  \****************************************************************/
/*! exports provided: DatasetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetListComponent", function() { return DatasetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jaqpot_client_api_dataset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jaqpot-client/api/dataset.service */ "./src/app/jaqpot-client/api/dataset.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DatasetListComponent = /** @class */ (function () {
    function DatasetListComponent(_dataService, _sessionService, _dialogsService, _router) {
        // this.subscription = this._sessionService.getDataset()
        //     .subscribe(dataset =>{
        //       if(dataset === undefined){
        //         this.visible = true;
        //       }else{
        //         this.visible = false;
        //       }
        //     })
        this._dataService = _dataService;
        this._sessionService = _sessionService;
        this._dialogsService = _dialogsService;
        this._router = _router;
        this.visible = true;
        this.data_to_fetch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.displayedColumns = ['Titles', 'Descriptions', 'Subjects'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this._datasets);
        this.resultsLength = 0;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
    }
    DatasetListComponent.prototype.ngOnInit = function () {
        // this.getFeaturedCount();
        // this.data_in = 'Featured';
    };
    DatasetListComponent.prototype.ngAfterViewInit = function () {
        // merge(this.data_to_fetch, this.paginator.page)
        //   ,startWith(null)
        //   ,switchMap(() => {
        //     this.isLoadingResults = true;
        //     if(this.data_in === 'Featured'){
        //       this.getFeaturedCount();
        //       return this._dataService.getFeaturedDatasets(
        //         this.paginator._pageIndex * this.paginator.pageSize,
        //         this.paginator.pageSize);
        //     }else{
        //       this.getAllCount();
        //       return this._dataService.getAllDatasets(
        //         this.paginator._pageIndex * this.paginator.pageSize,
        //         this.paginator.pageSize);
        //     }
        //     }),map(data => {
        //       this.isLoadingResults = false;
        //       this.isRateLimitReached = false;
        //       this.resultsLength = Number(this._count);
        //       return data
        //     })
        // .catch(() => {
        //   this.isLoadingResults = false;
        //   this.isRateLimitReached = true;
        //   return Observable.of([]);
        // })
        // ,subscribe(data => this.dataSource.data = data);
    };
    // getFeaturedCount(){
    //   this._dataService.getFeaturedDatasetCount()
    //   .subscribe(res => {
    //     this._count = res.headers.get('total');
    //   })    
    // }
    // getAllCount(){
    //   this._dataService.getAllDatasetCount()
    //     .subscribe(res => {
    //       this._count = res.headers.get('total');
    //     })
    // }
    DatasetListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DatasetListComponent.prototype.changeDatasets = function (value) {
        this.data_in = value;
        this.data_to_fetch.next(0);
    };
    DatasetListComponent.prototype.onSelect = function (dataset) {
        this._sessionService.setDataset(dataset);
        this.navigate();
    };
    DatasetListComponent.prototype.navigate = function () {
        this._router.navigate(['/dataset/detail']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DatasetListComponent.prototype, "paginator", void 0);
    DatasetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataset-list',
            template: __webpack_require__(/*! ./dataset-list.component.html */ "./src/app/dataset/dataset-list/dataset-list.component.html"),
            styles: [__webpack_require__(/*! ./dataset-list.component.css */ "./src/app/dataset/dataset-list/dataset-list.component.css")]
        }),
        __metadata("design:paramtypes", [_jaqpot_client_api_dataset_service__WEBPACK_IMPORTED_MODULE_3__["DatasetService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_5__["DialogsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], DatasetListComponent);
    return DatasetListComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/account-dialog/account-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/account-dialog/account-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoutb {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  float: right;\n}\n\n.acc_toolbar {}\n\n.back_button {\n  margin-right: 1em;\n}\n\n.close {\n  position: absolute;\n  right: 4em;\n  bottom: 4em;\n}\n\n.account_dialog .mat-dialog-container {\n  padding: 0;\n  /* overflow: hidden; */\n}\n\n.myClass .mat-dialog-content {\n  margin: 0;\n  text-align: center;\n  height: 100%;\n}\n\n.myClass .mat-dialog-actions {\n  margin-bottom: 0px !important;\n  padding: 20px 30px;\n}\n\nmat-toolbar {\n  min-height: 24px;\n  max-height: 54px;\n}\n\n.account-form {\n  float: left;\n  display: flex;\n  flex-direction: column;\n  margin-left: 15%;\n  /* margin-right: 4em; */\n  margin-top: 8em;\n  vertical-align: middle;\n  text-align: center;\n  min-width: 400px;\n}\n\n/* .account-form>* {\n  width: 100%;\n} */\n\n.mat-dialog-content{\n  min-height: 80%;\n  max-height: 80%;\n}\n\n.myClass .account-container {\n  height: 100%;\n  min-height: 100%;\n  overflow: visible;\n  /* display: flex; */\n}\n\n.example-card {\n  float: right;\n  margin-right: 15%;\n  margin-top: 2em;\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"

/***/ }),

/***/ "./src/app/dialogs/account-dialog/account-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/account-dialog/account-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [color]=\"['primary']\" class=\"acc_toolbar\">\n  <button class=\"back_button\" mat-icon-button color=\"accent\" (click)=\"close()\">\n    <mat-icon>expand_more</mat-icon>\n  </button>\n  Account\n</mat-toolbar>\n<mat-divider></mat-divider>\n<mat-dialog-content id=\"account-container\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\n\n  <form class=\"account-form\">\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Name\" matTextareaAutosize matAutosizeMinRows=\"1\" matAutosizeMaxRows=\"5\" [disabled]=edit_name_is_disabled>{{name}}</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Family Name\" matTextareaAutosize matAutosizeMinRows=\"1\" matAutosizeMaxRows=\"5\" [disabled]=edit_familyname_is_disabled>{{familyName}}</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"First Name\" matTextareaAutosize matAutosizeMinRows=\"1\" matAutosizeMaxRows=\"5\" [disabled]=edit_firstyname_is_disabled>{{firstName}}</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Prefered Username\" matTextareaAutosize matAutosizeMinRows=\"1\" matAutosizeMaxRows=\"5\" [disabled]=\"edit_preferedname_is_disabled\">{{preferedUserName}}</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Email\" matTextareaAutosize matAutosizeMinRows=\"1\" matAutosizeMaxRows=\"5\" disabled>{{email}}</textarea>\n    </mat-form-field>\n  </form>\n  <!-- <mat-divider [vertical]=\"true\"></mat-divider> -->\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Organizations</mat-card-title>\n      <mat-card-subtitle>Organizations</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        Organizations\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-icon-button color=\"primary\" class=\"close\">\n    <button mat-fab color=\"warn\" (click)=\"close()\">Close</button>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/account-dialog/account-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/account-dialog/account-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDialogComponent", function() { return AccountDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jaqpot-client/api/aa.service */ "./src/app/jaqpot-client/api/aa.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AccountDialogComponent = /** @class */ (function () {
    function AccountDialogComponent(dialogRef, aaService, sessionService, router, oidcSecurityService) {
        this.dialogRef = dialogRef;
        this.aaService = aaService;
        this.sessionService = sessionService;
        this.router = router;
        this.oidcSecurityService = oidcSecurityService;
    }
    AccountDialogComponent.prototype.ngOnInit = function () {
        this.id = this.sessionService.get('subjectId');
        this.username = this.sessionService.get('userName');
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        this.name = userData.name;
        this.familyName = userData.family_name;
        this.firstName = userData.given_name;
        this.email = userData.email;
        this.preferedUserName = userData.preferred_username;
        this.edit_name_is_disabled = true;
        this.edit_familyname_is_disabled = true;
        this.edit_firstyname_is_disabled = true;
        this.edit_preferedname_is_disabled = true;
    };
    AccountDialogComponent.prototype.logout = function () {
        this.aaService.logout(this.id);
        this.router.navigate(['/']);
        this.sessionService.remove('loggedIn');
        this.sessionService.clear();
        this.dialogRef.close();
    };
    AccountDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AccountDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-dialog',
            template: __webpack_require__(/*! ./account-dialog.component.html */ "./src/app/dialogs/account-dialog/account-dialog.component.html"),
            styles: [__webpack_require__(/*! ./account-dialog.component.css */ "./src/app/dialogs/account-dialog/account-dialog.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            // providers: [Credentials]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_2__["AaService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__["OidcSecurityService"]])
    ], AccountDialogComponent);
    return AccountDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea{\n    min-width: 90%;\n    min-height: 100%;\n    max-height: 600px;\n    /* min-width: 400px;\n    min-height: 200px; */\n    font-family: \"Times New Roman\", Georgia, Serif;\n}\n\nmat-form-field{\n    min-width: 100%;\n    overflow: scroll;\n}\n\nbutton{\n    margin-top: 2em;\n}"

/***/ }),

/***/ "./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addAlgoCard\">\n  <h3>\n    Add an algorithm!\n  </h3>\n  <p>This Section of the Application has to do with supervisors. Please be  cautious!</p>\n\n    <mat-accordion>\n        <mat-expansion-panel class=\"firstexpr\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Titles\n                </mat-panel-title>\n                <mat-panel-description>\n                    Algorithm titles\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Title\">\n            </mat-form-field>\n\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Subjects\n                </mat-panel-title>\n                <mat-panel-description>\n                    Algorithm Subjects\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            \n            <mat-form-field>\n                <input matInput placeholder=\"Subjects\">\n            </mat-form-field>\n\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Parameters\n                </mat-panel-title>\n                <mat-panel-description>\n                    Algorithm Parameters\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            \n            <mat-form-field>\n                <input matInput placeholder=\"Parameters\">\n            </mat-form-field>\n\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Ontology\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Ontological classes\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                \n                <mat-form-field>\n                    <input matInput placeholder=\"Ontology\">\n                </mat-form-field>\n\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Endpoints\n                </mat-panel-title>\n                <mat-panel-description>\n                    Training endpoint\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Training endpoint\">\n            </mat-form-field>\n\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Endpoint\n                </mat-panel-title>\n                <mat-panel-description>\n                    Prediction endpoint\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            \n            <mat-form-field>\n                <input matInput placeholder=\"Prediction endpoint\">\n            </mat-form-field>\n\n        </mat-expansion-panel>\n    </mat-accordion>\n\n    <button mat-raised-button color=\"warn\" disabled>Create</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddAlgorithmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAlgorithmDialogComponent", function() { return AddAlgorithmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddAlgorithmDialogComponent = /** @class */ (function () {
    function AddAlgorithmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.algo = {};
    }
    AddAlgorithmDialogComponent.prototype.ngOnInit = function () {
    };
    AddAlgorithmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-algorithm-dialog',
            template: __webpack_require__(/*! ./add-algorithm-dialog.component.html */ "./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-algorithm-dialog.component.css */ "./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], AddAlgorithmDialogComponent);
    return AddAlgorithmDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog_content{\n    width:1100px;\n    max-height: 600px;\n}\n\n.meta{\n    width:20%;\n    /* height:1000px; */\n    float: left;\n}\n\n.data{\n    min-width: 50%;\n    max-width: 50%;\n    overflow: auto; \n    float: left;\n    max-height: 560px;\n    /* min-height: 600px; */\n    overflow: auto;\n    margin-bottom: 2em;\n    margin-top: 1em;\n    /* margin-left: 2em;\n    /* overflow: auto; */\n}\n\n.features{\n    width: 30%;\n    margin-top: 1em;\n    /* margin-left: 2em; */\n    /* padding-right: 5em; */\n    float: left;\n    max-height: 560px;\n    overflow: auto;\n}\n\n.feat_header{\n    position: -webkit-sticky;\n    position: sticky;\n}\n\n.feat_card{\n    width: 80%;\n    margin: 1em;\n    padding-right: 17px;\n}\n\ntable{\n    width: 100%;\n    height:100%;\n    /* margin-bottom: 2em; */\n}\n\n.feat_header{\n    margin-left: 1em;\n}\n\n.dataset_photo{\n    width:100%;\n    margin-top: 2em;\n    float: left;\n}\n\n.image-crop{\n    margin-top: 2em;\n}\n\n.upload-btn-wrapper {\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n\n  }\n\n.upload-btn-wrapper input[type=file] {\n    font-size: 100px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n  }\n\n.cropped{\n    border-radius: 25%;\n    margin-top: 3%;\n    width:80%;\n}\n\n.submit-btn{\n    float:right;\n}\n\n.spinner{\n    display: table;\n    margin: 0 auto;\n}\n\n.dataset_image{\n    margin-top: 0.5em;\n    width: 100%;\n    border-radius: 25%;\n    border: 2px gray solid;\n}\n\n"

/***/ }),

/***/ "./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>Dataset</h4>\n\n<mat-dialog-content *ngIf=\"content; else spinner\" class=\"dialog_content\">\n  <div class=\"meta\">\n    <p>Filename: {{file_name}}</p>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Dataset's id\" [(value)]=\"selected\" (selectionChange)=\"idChanged($event)\">\n        <mat-option *ngFor=\"let id of possible_ids\" [value]=\"id\">\n          {{id}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <p>Dataset's id from csv: {{selected}}</p>\n\n    <div *ngIf=\"data_available\">\n      <form class=\"meta_input\" [formGroup]=\"datasetMetaForm\">\n        <mat-form-field>\n          <input matInput placeholder=\"Title\" [(ngModel)]=\"dataset_to_check.meta.titles[0]\" formControlName=\"datasetTitle\"\n            required>\n        </mat-form-field>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Description\" [(ngModel)]=\"dataset_to_check.meta.descriptions[0]\"\n            formControlName=\"datasetDiscription\" required></textarea>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"dataset_to_check.meta.subjects[0]\"\n            placeholder=\"Subjects\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"dataset_to_check.meta.audiences[0]\"\n            placeholder=\"Audiences\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"dataset_to_check.meta.tags[0]\" placeholder=\"Tags\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"dataset_to_check.meta.comments[0]\"\n            placeholder=\"Leave a comment\"></textarea>\n        </mat-form-field>\n      </form>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"data_available\" class=\"data mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n      <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n        <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <div *ngIf=\"features_available\" class=\"features\">\n    <h4 class=\"feat_header\">Features</h4>\n    <mat-devider></mat-devider>\n    <div *ngFor=\"let feat of features_to_edit\">\n      <mat-card class=\"feat_card\">\n        <mat-card-header>\n          <mat-card-title>{{feat.meta.titles}}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <form>\n            <mat-form-field>\n              <textarea matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"feat.meta.descriptions[0]\" placeholder=\"Description\"></textarea>\n            </mat-form-field>\n            <mat-form-field>\n              <textarea matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"feat.meta.units\" placeholder=\"Units\"></textarea>\n            </mat-form-field>\n            <mat-form-field>\n              <textarea matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"feat.ontologicalClasses[0]\"\n                placeholder=\"Ontological Classes\"></textarea>\n            </mat-form-field>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  <div *ngIf=\"data_available\" class=\"dataset_photo\">\n    <div class=\"upload-btn-wrapper\">\n      <button mat-button>Add Dataset picture</button>\n      <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\n    </div>\n\n    <div style=\"width: 1000px;\">\n      <div style=\"float: left; width: 50%;\">\n        <h3 style=\"float:left; margin-left: 1em;\">Pic chosen</h3>\n        <div class=\"image-crop\">\n          <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"2 / 2\"\n            [resizeToWidth]=\"128\" format=\"jpeg\" (imageCroppedBase64)=\"imageCroppedBase64($event)\" (imageLoaded)=\"imageLoaded()\"\n            (loadImageFailed)=\"loadImageFailed()\" style=\"max-height: 33vh\" [style.display]=\"cropperReady ? null : 'none'\"></image-cropper>\n        </div>\n      </div>\n      <div style=\"float: left; width: 30%; margin-left: 17%;\">\n        <h3>Pic will look like</h3>\n        <img class=\"cropped\" [src]=\"croppedImage\" />\n      </div>\n    </div>\n  </div>\n\n</mat-dialog-content>\n\n<ng-template #spinner>\n  <mat-dialog-content *ngIf=\"!dataset_uploaded else new_dataset\" class=\"dialog_content\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n  </mat-dialog-content>\n\n  <ng-template #new_dataset>\n      <mat-dialog-content>\n        Dataset created!\n        <h3>Dataset id: {{datasetUploaded._id}}</h3>\n        <h4>Dataset title: {{datasetUploaded.meta.titles[0]}}</h4>\n        <div *ngIf=\"datasetUploaded.meta.picture\">\n            <img class=\"dataset_image\" [src]=\"datasetUploaded.meta.picture\" />\n        </div>\n      </mat-dialog-content>\n  </ng-template>\n</ng-template>\n\n\n<mat-dialog-actions>\n  <button *ngIf=\"submit\" class=\"submit-btn\" color=\"primary\" mat-raised-button type=\"submit\" [disabled]=\"!datasetMetaForm.valid\"\n    (click)=\"uplodDataset()\">Submit</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddDatasetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDatasetDialogComponent", function() { return AddDatasetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_dataset_to_viewdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dataset-to-viewdata.service */ "./src/app/services/dataset-to-viewdata.service.ts");
/* harmony import */ var _jaqpot_client_factories_feature_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jaqpot-client/factories/feature-factory.service */ "./src/app/jaqpot-client/factories/feature-factory.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddDatasetDialogComponent = /** @class */ (function () {
    function AddDatasetDialogComponent(datasetViewService, featFactory) {
        this.datasetViewService = datasetViewService;
        this.featFactory = featFactory;
        this.dataset_id = "";
        this.possible_ids = [];
        this.selected = "";
        this.selectedId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.data_available = false;
        this.features_available = false;
        this.displayedColumns = [];
        this.dataSource = {};
        this.features_to_edit = [];
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.loadImageFailed = '';
        this.cropperReady = false;
        this.content = true;
        this.dataset_uploaded = false;
        this.submit = true;
        this.datasetMetaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            datasetTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            datasetDiscription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        // this.datasetApiFacade._featureApi = this.featureApi
    }
    AddDatasetDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasetMetaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            datasetTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            datasetDiscription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        var rows = this.csv.split(/\r?\n/);
        var ids = rows[0].split(/,|;/);
        this.possible_ids.push("None");
        ids.forEach(function (id) {
            _this.possible_ids.push(id);
        });
        rows[0].length;
        var rows_number = rows.length;
        this.selectedId.subscribe();
    };
    AddDatasetDialogComponent.prototype.idChanged = function ($event) {
        var _this = this;
        this.data_available = false;
        this.features_available = false;
        var dataset_id = this.selected;
        this.dataset_to_check = {};
        this.displayedColumns = [];
        this.dataSource = [];
        this.features_to_edit = [];
        this.dataset_to_check = this.datasetFactory.createDummyFromCsv(this.csv, dataset_id);
        this.dataSource = this.datasetViewService.createViewData(this.dataset_to_check, 10);
        this.dataset_to_check.features.forEach(function (fi) {
            _this.features_to_edit.push(_this.featFactory.featFromFeatInfo(fi));
        });
        for (var key in this.dataSource[0]) {
            this.displayedColumns.push(key);
        }
        this.data_available = true;
        this.features_available = true;
    };
    AddDatasetDialogComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    AddDatasetDialogComponent.prototype.imageCroppedBase64 = function (image) {
        this.dataset_to_check.meta.picture = image;
        this.croppedImage = image;
    };
    AddDatasetDialogComponent.prototype.imageLoaded = function () {
        this.cropperReady = true;
    };
    AddDatasetDialogComponent.prototype.imageLoadFailed = function () {
        console.log('Load failed');
    };
    AddDatasetDialogComponent.prototype.uplodDataset = function () {
        var _this = this;
        var _temp_actual_ids = {};
        var feat_length = this.features_to_edit.length;
        // console.log(feat_length)
        var i = 0;
        this.content = false;
        this.submit = false;
        this.features_to_edit.forEach(function (feat) {
            _this.featureApi.postEntity(feat).subscribe(function (feature) {
                _temp_actual_ids[feature.meta.titles[0]] = feature._id;
                i += 1;
                if (i === feat_length) {
                    var _loop_1 = function (key) {
                        var data_entry = _this.dataset_to_check.dataEntry;
                        data_entry.forEach(function (de) {
                            // let values: { [key: string]: any; } = {}
                            for (var de_key in de.values) {
                                var key_name = de_key.split("/");
                                if (key_name[1] === key) {
                                    var data_entry_new_key = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].JaqpotBase + '/feature/' + _temp_actual_ids[key];
                                    de.values[data_entry_new_key] = de.values[de_key];
                                    delete de.values[de_key];
                                    // values[data_entry_new_key] = de.values[de_key]
                                    // console.log(values)
                                }
                            }
                        });
                        // console.log(this.dataset_to_check)
                    };
                    for (var key in _temp_actual_ids) {
                        _loop_1(key);
                    }
                    var featurInf = _this.dataset_to_check.features;
                    featurInf.forEach(function (fi) {
                        fi.uri = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].JaqpotBase + '/feature/' + _temp_actual_ids[fi.name];
                    });
                    _this.datasetApi.uploadNewDataset(_this.dataset_to_check).subscribe(function (dataset_posted) {
                        _this.datasetUploaded = dataset_posted;
                        _this.dataset_uploaded = true;
                    });
                }
            });
        });
    };
    AddDatasetDialogComponent.prototype.ngOnDestroy = function () {
        this.selectedId.unsubscribe();
        this.csv = "";
        this.dataset_to_check = {};
    };
    AddDatasetDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-dataset-dialog',
            template: __webpack_require__(/*! ./add-dataset-dialog.component.html */ "./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-dataset-dialog.component.css */ "./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dataset_to_viewdata_service__WEBPACK_IMPORTED_MODULE_2__["DatasetToViewdataService"],
            _jaqpot_client_factories_feature_factory_service__WEBPACK_IMPORTED_MODULE_3__["FeatureFactoryService"]])
    ], AddDatasetDialogComponent);
    return AddDatasetDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title>Confirm</h2>\n  <mat-dialog-content>\n    Are you sure you want to delete??\n    <br><br>\n  </mat-dialog-content>\n  <mat-divider></mat-divider>\n  <mat-dialog-actions>\n    <button mat-raised-button color=\"warn\" (click)=\"onCloseConfirm()\">DELETE</button>&nbsp;\n    <button mat-button (click)=\"onCloseCancel()\">CANCEL</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(thisDialogRef) {
        this.thisDialogRef = thisDialogRef;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close(true);
    };
    ConfirmationDialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close(false);
    };
    ConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/create-organization/create-organization.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dialogs/create-organization/create-organization.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all{\n    width:400px;\n}\n.orgpic{\n    margin-top: 1em;\n    border-radius: 10%;\n    float: left;\n}\n.basis{\n    float: left;\n    height: 100%;\n}\n.orgtitle{\n    margin-left: 1em;\n}\n.orgsite{\n    margin-left: 1em;\n}\n.contact{\n    margin-left: 1em;\n}\n.orgwhere{\n    margin-left: 1em;\n}\n.orgcont{\n    width:600px;\n    margin-top: 2em;\n}\n.orgid{\n    width:540px;\n}\n.org-id{\n    width: 80%;\n}\n"

/***/ }),

/***/ "./src/app/dialogs/create-organization/create-organization.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/create-organization/create-organization.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>\n  Create Organization\n</h2>\n<div class=\"orgid\">\n  <mat-form-field class=\"org-id\">\n    <textarea matInput placeholder=\"Organization name\" [(ngModel)]=\"orgId\">{{orgId}}</textarea>\n  </mat-form-field>\n</div>\n\n<p> Your organization will have the url: {{hostPath}}/organization/{{orgId}} </p>\n\n<mat-dialog-actions>\n  <button mat-button (click)=\"createOrganization()\">Create</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/create-organization/create-organization.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/create-organization/create-organization.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrganizationComponent", function() { return CreateOrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jaqpot-client/api/organization.service */ "./src/app/jaqpot-client/api/organization.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateOrganizationComponent = /** @class */ (function () {
    function CreateOrganizationComponent(dialogRef, oidcService, platformLocation, organizationService, router) {
        this.dialogRef = dialogRef;
        this.oidcService = oidcService;
        this.organizationService = organizationService;
        this.router = router;
        this.organization = {};
        this.hostPath = window.location.host;
    }
    CreateOrganizationComponent.prototype.ngOnInit = function () {
    };
    CreateOrganizationComponent.prototype.createOrganization = function () {
        var _this = this;
        this.organization._id = this.orgId;
        console.log(this.organization);
        this.organizationService.postEntity(this.organization)
            .subscribe(function (orgCreated) {
            var route = "/organization/" + _this.organization._id;
            _this.dialogRef.close();
            _this.router.navigate([route]);
        });
    };
    CreateOrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-organization',
            template: __webpack_require__(/*! ./create-organization.component.html */ "./src/app/dialogs/create-organization/create-organization.component.html"),
            styles: [__webpack_require__(/*! ./create-organization.component.css */ "./src/app/dialogs/create-organization/create-organization.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__["OidcSecurityService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"],
            _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateOrganizationComponent);
    return CreateOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/dialogs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/dialogs/dialogs.module.ts ***!
  \*******************************************/
/*! exports provided: DialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsModule", function() { return DialogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-logout-dialog/login-dialog.component */ "./src/app/dialogs/login-logout-dialog/login-dialog.component.ts");
/* harmony import */ var _dialogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jaqpot_client_jaqpot_client_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jaqpot-client/jaqpot-client.module */ "./src/app/jaqpot-client/jaqpot-client.module.ts");
/* harmony import */ var _ui_models_ui_models_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui-models/ui-models.module */ "./src/app/ui-models/ui-models.module.ts");
/* harmony import */ var _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jaqpot-client/api/aa.service */ "./src/app/jaqpot-client/api/aa.service.ts");
/* harmony import */ var _login_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-logout-dialog/logout-dialog.component */ "./src/app/dialogs/login-logout-dialog/logout-dialog.component.ts");
/* harmony import */ var _add_algorithm_dialog_add_algorithm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-algorithm-dialog/add-algorithm-dialog.component */ "./src/app/dialogs/add-algorithm-dialog/add-algorithm-dialog.component.ts");
/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var _account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-dialog/account-dialog.component */ "./src/app/dialogs/account-dialog/account-dialog.component.ts");
/* harmony import */ var _profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profilepic-dialog/profilepic-dialog.component */ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var _organization_dialog_organization_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./organization-dialog/organization-dialog.component */ "./src/app/dialogs/organization-dialog/organization-dialog.component.ts");
/* harmony import */ var _create_organization_create_organization_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-organization/create-organization.component */ "./src/app/dialogs/create-organization/create-organization.component.ts");
/* harmony import */ var _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../jaqpot-client/api/organization.service */ "./src/app/jaqpot-client/api/organization.service.ts");
/* harmony import */ var _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./invite-dialog/invite-dialog.component */ "./src/app/dialogs/invite-dialog/invite-dialog.component.ts");
/* harmony import */ var _notification_dialogs_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notification-dialogs/notification-dialog/notification-dialog.component */ "./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _notification_dialogs_invitation_notif_dialog_invitation_notif_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component */ "./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.ts");
/* harmony import */ var _add_dataset_dialog_add_dataset_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-dataset-dialog/add-dataset-dialog.component */ "./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { RouterModule } from '@angular/router/src/router_module';
var DialogsModule = /** @class */ (function () {
    function DialogsModule() {
    }
    DialogsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _jaqpot_client_jaqpot_client_module__WEBPACK_IMPORTED_MODULE_6__["JaqpotClientModule"],
                _ui_models_ui_models_module__WEBPACK_IMPORTED_MODULE_7__["UiModelsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__["ImageCropperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]
                // DatasetDetailComponent
                // RouterModule
            ],
            declarations: [_login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"],
                _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ErrorDialogComponent"],
                _login_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_9__["LogoutDialogComponent"],
                _add_algorithm_dialog_add_algorithm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddAlgorithmDialogComponent"],
                _account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AccountDialogComponent"],
                _profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ProfilepicDialogComponent"],
                _organization_dialog_organization_dialog_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationDialogComponent"],
                _create_organization_create_organization_component__WEBPACK_IMPORTED_MODULE_16__["CreateOrganizationComponent"],
                _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_18__["InviteDialogComponent"],
                _notification_dialogs_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_19__["NotificationDialogComponent"],
                _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationDialogComponent"],
                _notification_dialogs_invitation_notif_dialog_invitation_notif_dialog_component__WEBPACK_IMPORTED_MODULE_21__["InvitationNotifDialogComponent"],
                _add_dataset_dialog_add_dataset_dialog_component__WEBPACK_IMPORTED_MODULE_22__["AddDatasetDialogComponent"]],
            exports: [_login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"],
                _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ErrorDialogComponent"],
                _login_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_9__["LogoutDialogComponent"],
                _add_algorithm_dialog_add_algorithm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddAlgorithmDialogComponent"],
                _account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AccountDialogComponent"],
                _profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ProfilepicDialogComponent"],
                _organization_dialog_organization_dialog_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationDialogComponent"],
                _create_organization_create_organization_component__WEBPACK_IMPORTED_MODULE_16__["CreateOrganizationComponent"],
                _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_18__["InviteDialogComponent"],
                _notification_dialogs_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_19__["NotificationDialogComponent"],
                _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationDialogComponent"],
                _notification_dialogs_invitation_notif_dialog_invitation_notif_dialog_component__WEBPACK_IMPORTED_MODULE_21__["InvitationNotifDialogComponent"],
                _add_dataset_dialog_add_dataset_dialog_component__WEBPACK_IMPORTED_MODULE_22__["AddDatasetDialogComponent"]],
            entryComponents: [_login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"],
                _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ErrorDialogComponent"],
                _login_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_9__["LogoutDialogComponent"],
                _add_algorithm_dialog_add_algorithm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddAlgorithmDialogComponent"],
                _account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AccountDialogComponent"],
                _profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ProfilepicDialogComponent"],
                _organization_dialog_organization_dialog_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationDialogComponent"],
                _create_organization_create_organization_component__WEBPACK_IMPORTED_MODULE_16__["CreateOrganizationComponent"],
                _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_18__["InviteDialogComponent"],
                _notification_dialogs_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_19__["NotificationDialogComponent"],
                _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationDialogComponent"],
                _notification_dialogs_invitation_notif_dialog_invitation_notif_dialog_component__WEBPACK_IMPORTED_MODULE_21__["InvitationNotifDialogComponent"],
                _add_dataset_dialog_add_dataset_dialog_component__WEBPACK_IMPORTED_MODULE_22__["AddDatasetDialogComponent"]],
            providers: [
                _dialogs_service__WEBPACK_IMPORTED_MODULE_3__["DialogsService"], _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_8__["AaService"], _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_17__["OrganizationService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DialogsModule);
    return DialogsModule;
}());



/***/ }),

/***/ "./src/app/dialogs/dialogs.service.ts":
/*!********************************************!*\
  !*** ./src/app/dialogs/dialogs.service.ts ***!
  \********************************************/
/*! exports provided: DialogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsService", function() { return DialogsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-logout-dialog/login-dialog.component */ "./src/app/dialogs/login-logout-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var _organization_dialog_organization_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-dialog/organization-dialog.component */ "./src/app/dialogs/organization-dialog/organization-dialog.component.ts");
/* harmony import */ var _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite-dialog/invite-dialog.component */ "./src/app/dialogs/invite-dialog/invite-dialog.component.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _notification_dialogs_invitation_notif_dialog_invitation_notif_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component */ "./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.ts");
/* harmony import */ var _add_dataset_dialog_add_dataset_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-dataset-dialog/add-dataset-dialog.component */ "./src/app/dialogs/add-dataset-dialog/add-dataset-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DialogsService = /** @class */ (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function () {
        var dialogRef;
        dialogRef = this.dialog.open(_login_logout_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__["LoginDialogComponent"]);
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.close = function () {
        this.dialog.closeAll();
    };
    DialogsService.prototype.addDataset = function (csv, filename, datasetFactory, featureApi, datasetApi) {
        var dialogRef;
        dialogRef = this.dialog.open(_add_dataset_dialog_add_dataset_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddDatasetDialogComponent"]);
        dialogRef.componentInstance.csv = csv;
        dialogRef.componentInstance.file_name = filename;
        dialogRef.componentInstance.datasetFactory = datasetFactory;
        dialogRef.componentInstance.featureApi = featureApi;
        dialogRef.componentInstance.datasetApi = datasetApi;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.confirmDeletion = function () {
        var dialogRef;
        dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"]);
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.openActualNotifDialog = function (notification, organizationService, notificationService, userService) {
        if (notification.type === "INVITATION") {
            var dialogRef = void 0;
            dialogRef = this.dialog.open(_notification_dialogs_invitation_notif_dialog_invitation_notif_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InvitationNotifDialogComponent"]);
            dialogRef.componentInstance.organizationService = organizationService;
            dialogRef.componentInstance.notificationService = notificationService;
            dialogRef.componentInstance.userService = userService;
            dialogRef.componentInstance.notification = notification;
            return dialogRef.afterClosed();
        }
    };
    DialogsService.prototype.onOrganizationView = function (organization, organizationService) {
        var dialogRef;
        dialogRef = this.dialog.open(_organization_dialog_organization_dialog_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationDialogComponent"]);
        dialogRef.componentInstance.organization = organization;
        dialogRef.componentInstance.organizationService = organizationService;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.inviteToOrganization = function (userService, notifFactory, organization, notificationService) {
        var dialogRef;
        dialogRef = this.dialog.open(_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_5__["InviteDialogComponent"]);
        dialogRef.componentInstance.userService = userService;
        dialogRef.componentInstance.notifFactory = notifFactory;
        dialogRef.componentInstance.organization = organization;
        dialogRef.componentInstance.notificationService = notificationService;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.onError = function (error) {
        var dialogRef;
        dialogRef = this.dialog.open(_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogComponent"]);
        dialogRef.componentInstance.httpStatus = error.json().httpStatus;
        dialogRef.componentInstance.details = error.json().details;
        dialogRef.componentInstance.message = error.json().message;
        return dialogRef.afterClosed();
    };
    DialogsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogsService);
    return DialogsService;
}());



/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.error_dialog{\n    max-height: 400px;\n}\n\n.details{\n    max-height: 200px;\n    overflow: scroll;\n}"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"error_dialog\">\n    <h3>Oups!! </h3>\n    <h4>Something gone wrong and it has the number {{httpStatus}}</h4>\n    <p>What gone wrong is that {{message}}</p>\n    <p class=\"details\" *ngIf=\"_env;\" >And the details is that {{details}}</p>\n    <button mat-button (click)=\"dialogRef.close()\">OK</button>\n</div>"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production === true) {
            this._env = false;
        }
        else {
            this._env = true;
        }
    }
    ErrorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-dialog',
            template: __webpack_require__(/*! ./error-dialog.component.html */ "./src/app/dialogs/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__(/*! ./error-dialog.component.css */ "./src/app/dialogs/error-dialog/error-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/invite-dialog/invite-dialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/invite-dialog/invite-dialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputusername{\n    width: 100%;\n}\n\n.userim{\n    width:2em;\n    border-radius: 50%;\n    vertical-align: middle;\n}\n\n.username{\n    margin-left: 1em;\n    vertical-align: middle;\n}\n\n.invite-message{\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/dialogs/invite-dialog/invite-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/invite-dialog/invite-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Invite Users to your Organization</h2>\n<mat-dialog-content>\n  <form>\n    <mat-form-field class=\"inputusername\">\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"user\" (keypress)=\"inputChanged($event.target.value)\" [matAutocomplete]=\"auto\" [formControl]=\"userInputCtrl\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n\n        <mat-option *ngFor=\"let user of users\" [value]=\"user.name\">\n              <img class=\"userim\" *ngIf=\"user?.meta?.picture\" [src]=\"user.meta.picture\" />\n              <span class=\"username\">{{ user.name }}</span>\n              <small *ngIf=\"user.occupation\" class=\"username\">| {{ user.occupation}} at {{user.occupationAt}}</small>\n              \n        </mat-option>\n      </mat-autocomplete>\n\n    </mat-form-field>\n\n    <div *ngIf=\"addBodyB; else noBody\">\n        <mat-form-field class=\"invite-message\">\n            <textarea matInput placeholder=\"Invitation Message\" [(ngModel)]=\"inviteMessage\"[ngModelOptions]=\"{standalone: true}\" >{{inviteMessage}}</textarea>\n          </mat-form-field>\n      <button mat-button  (click)=\"cancelBody()\">Cancel Message</button>\n    </div>\n    <ng-template #noBody>\n      <button mat-button  (click)=\"addBody()\">Add Message</button>\n    </ng-template>\n    \n  </form>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button [mat-dialog-close]=\"true\" (click)=\"invite()\">Invite</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/invite-dialog/invite-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/invite-dialog/invite-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: InviteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteDialogComponent", function() { return InviteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InviteDialogComponent = /** @class */ (function () {
    function InviteDialogComponent(oidcService) {
        this.usersTemp = new Array();
        this.users = new Array();
        this.addBodyB = false;
        this.userInputCtrl = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: false }, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    InviteDialogComponent.prototype.ngOnInit = function () {
    };
    InviteDialogComponent.prototype.inputChanged = function (username) {
        var _this = this;
        if (username.length > 1) {
            this.userService.searchUserByName(username)
                .subscribe(function (idsGot) {
                _this.users = new Array();
                _this.usersTemp = idsGot;
                _this.usersTemp.forEach(function (e) {
                    var user = {};
                    var tempuser = {};
                    var mius = {};
                    var miustemp = {};
                    user.meta = mius;
                    user.meta = miustemp;
                    _this.userService.getPropertyWithIdSecured(e._id, "name").subscribe(function (username) {
                        tempuser = username;
                        user.name = tempuser.name;
                        user._id = tempuser._id;
                    });
                    _this.userService.getPropertyWithIdSecured(e._id, "occupation").subscribe(function (occupation) {
                        tempuser = occupation;
                        user.occupation = tempuser.occupation;
                    });
                    _this.userService.getPropertyWithIdSecured(e._id, "occupationat").subscribe(function (occupatioAt) {
                        tempuser = occupatioAt;
                        user.occupationAt = tempuser.occupationAt;
                    });
                    _this.userService.getPropertyWithIdSecured(e._id, "picture").subscribe(function (profPic) {
                        tempuser = profPic;
                        user.meta.picture = tempuser.meta.picture;
                    });
                    _this.users.push(user);
                });
            });
        }
    };
    InviteDialogComponent.prototype.invite = function () {
        var _this = this;
        var userToInv = {};
        userToInv = this.users.find(function (users) { return users.name === _this.user; });
        if (userToInv == null) {
            console.log("Canot find user");
        }
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        this.notification = this.notifFactory.invitationNotification(userData.sub, userToInv._id, this.organization._id);
        if (this.addBodyB === true && this.inviteMessage != null) {
            this.notification.body = this.inviteMessage;
        }
        console.log(this.notification);
        this.notificationService.postEntity(this.notification)
            .subscribe(function (notifGot) {
            _this.notification = notifGot;
        });
    };
    InviteDialogComponent.prototype.addBody = function () {
        this.addBodyB = true;
    };
    InviteDialogComponent.prototype.cancelBody = function () {
        this.addBodyB = false;
    };
    InviteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite-dialog',
            template: __webpack_require__(/*! ./invite-dialog.component.html */ "./src/app/dialogs/invite-dialog/invite-dialog.component.html"),
            styles: [__webpack_require__(/*! ./invite-dialog.component.css */ "./src/app/dialogs/invite-dialog/invite-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__["OidcSecurityService"]])
    ], InviteDialogComponent);
    return InviteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/login-logout-dialog/login-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/login-logout-dialog/login-dialog.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n  }\n  \n.example-container > * {\n  width: 100%;\n}\n  \n.email{\n  width: 300px;\n  margin-right: 36px;\n}\n  \n.pass{\n  width: 300px;\n  margin-right: 36px;\n}\n  \n.error{\n  color: red;\n  font-weight: bold;\n  margin-left: 22px;\n}\n  \n.success{\n  color: green;\n  font-weight: bold;\n  margin-left: 22px;\n}\n"

/***/ }),

/***/ "./src/app/dialogs/login-logout-dialog/login-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dialogs/login-logout-dialog/login-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"example-container\">\n    <form class=\"example-form\" #loginForm=\"ngForm\" (ngSubmit)=\"login($event, credentials)\" >\n        <ol>\n            <li>\n                <mat-form-field class=\"email\">\n                    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"[(ngModel)]=\"credentials.username\" name=\"email\">\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                        Please enter a valid email address\n                        </mat-error>\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                        Email is <strong>required</strong>\n                        </mat-error>\n                </mat-form-field>\n            </li>\n            <li>   \n                <mat-form-field class=\"pass\">\n                    <input matInput placeholder=\"Enter your password\" [(ngModel)]=\"credentials.password\" name=\"password\"[type]=\"hide ? 'password' : 'text'\">\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                </mat-form-field>\n            </li>\n\n            <mat-dialog-actions>\n                <button type=\"button\" mat-raised-button \n                    type=\"ngSubmit\" >Login</button>\n                <button type=\"button\" mat-button \n                    (click)=\"dialogRef.close()\">Cancel</button>\n            </mat-dialog-actions>\n        </ol>\n        \n    </form>\n    <p class=\"error\" *ngIf=\"errorReport\">{{errorReport.message}}</p>\n    <p class=\"success\" *ngIf=\"ok\">\"Logged in!!\"</p>\n</div>"

/***/ }),

/***/ "./src/app/dialogs/login-logout-dialog/login-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/login-logout-dialog/login-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ui_models_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui-models/credentials */ "./src/app/ui-models/credentials.ts");
/* harmony import */ var _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jaqpot-client/api/aa.service */ "./src/app/jaqpot-client/api/aa.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(credentials, dialogRef, aaService, router) {
        this.dialogRef = dialogRef;
        this.aaService = aaService;
        this.router = router;
        // private _authToken:AuthToken;
        // private subjectId:string;
        this.ok = false;
        this.credentials = new _ui_models_credentials__WEBPACK_IMPORTED_MODULE_3__["Credentials"]();
        this.hide = true;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
    }
    LoginDialogComponent.prototype.login = function (event, credentials) {
        var _this = this;
        this.aaService.login(credentials.username, credentials.password)
            .subscribe(function (authToken) {
            _this.ok = true;
            _this.dialogRef.close();
            _this.router.navigate(['/home']);
        }, function (err) { return _this.errorReport = err; });
    };
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-dialog',
            template: __webpack_require__(/*! ./login-dialog.component.html */ "./src/app/dialogs/login-logout-dialog/login-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-dialog.component.css */ "./src/app/dialogs/login-logout-dialog/login-dialog.component.css")],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_ui_models_credentials__WEBPACK_IMPORTED_MODULE_3__["Credentials"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_4__["AaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/login-logout-dialog/logout-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dialogs/login-logout-dialog/logout-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userinfo{\n    margin-top: 20px;\n    width: 400px;\n    /* text-align: center; */\n}\n\np{\n    word-wrap: break-word;\n    position: relative;\n    display: block;\n\n}\n\n.logoutb{\n    margin-top: 20px; \n    margin-bottom: 10px;\n    margin-right: 10px;\n    float: right;\n}\n\n.id{\n    color: royalblue;\n}"

/***/ }),

/***/ "./src/app/dialogs/login-logout-dialog/logout-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/login-logout-dialog/logout-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Logout </h2>\n<div class=\"userinfo\">\n    <p> You are currently logged in with the id: </p>\n    <p class=\"id\">{{id}}</p>\n    <p> And the username </p>\n    <p class=\"id\"> {{ username }} </p>\n</div>\n<button mat-icon-button color=\"primary\" class=\"logoutb\">\n    <button mat-fab color=\"warn\" (click)=\"logout()\">Logout</button>\n</button>"

/***/ }),

/***/ "./src/app/dialogs/login-logout-dialog/logout-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/login-logout-dialog/logout-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: LogoutDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDialogComponent", function() { return LogoutDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jaqpot-client/api/aa.service */ "./src/app/jaqpot-client/api/aa.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LogoutDialogComponent = /** @class */ (function () {
    function LogoutDialogComponent(dialogRef, aaService, sessionService, router) {
        this.dialogRef = dialogRef;
        this.aaService = aaService;
        this.sessionService = sessionService;
        this.router = router;
        this.hide = true;
    }
    LogoutDialogComponent.prototype.ngOnInit = function () {
        this.id = this.sessionService.get('subjectId');
        this.username = this.sessionService.get('userName');
    };
    LogoutDialogComponent.prototype.logout = function () {
        this.aaService.logout(this.id);
        this.router.navigate(['/']);
        this.sessionService.remove('loggedIn');
        this.sessionService.clear();
        this.dialogRef.close();
    };
    LogoutDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout-dialog',
            template: __webpack_require__(/*! ./logout-dialog.component.html */ "./src/app/dialogs/login-logout-dialog/logout-dialog.component.html"),
            styles: [__webpack_require__(/*! ./logout-dialog.component.css */ "./src/app/dialogs/login-logout-dialog/logout-dialog.component.css")],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _jaqpot_client_api_aa_service__WEBPACK_IMPORTED_MODULE_2__["AaService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LogoutDialogComponent);
    return LogoutDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    float: left;\n    width:100%;\n}\n\n.base-content{\n    float: left;\n    /* width: 20%; */\n}\n\n.from-content{\n    /* width:30%; */\n    margin-top: 4em;\n    padding-bottom: 2em;\n}\n\n.organ-content{\n    float:left;\n    /* width:40%; */\n}\n\n.cont-all{\n    width: 100%;\n    display: flex;\n}\n\n/* .cont-all > div {\n    flex: 1; \n  } */\n\n.user-photo{\n    width:20%;\n    float: left;\n}\n\n.from-im{\n    margin-top: 1em;\n    border-radius: 25%;\n    height: 4em;\n    border: 1px solid lightgray;\n}\n\n.user-cont{\n    margin-left: 1em;\n}\n\n.organ-photo{\n    width:20%;\n    float: left;\n}\n\n.organ-im{\n    margin-top: 1em;\n    border-radius: 25%;\n    height: 4em;\n    border: 1px solid lightgray;\n}\n\n.resolve-button{\n    margin-right: 25%;\n}\n\n.organ-cont{\n    margin-left: 1em;\n}"

/***/ }),

/***/ "./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 mat-dialog-title>Invitation</h2>\n\n\n</div>\n<mat-dialog-content>\n  <!-- <mat-divider></mat-divider> -->\n\n  <div class=\"base-content\">\n    <p>{{notification.body}}</p>\n  </div>\n\n  <div class=\"from-content\" *ngIf=\"organ && from\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            From user\n          </mat-panel-title>\n          <mat-panel-description>\n            {{from.name}}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class=\"cont-all\">\n          <div class=\"user-photo\" *ngIf=\"from.profilePic\">\n            <img class=\"from-im\" [src]=\"from.profilePic\" />\n          </div>\n\n          <div class=\"user-cont\">\n            <p>{{from.name}} <span *ngIf=\"from.occupation\">| {{from.occupation }} </span><span *ngIf=\"from.occupationAt\">at\n                {{from.occupationAt }} </span></p>\n            <p *ngIf=\"from.livesAtCity\"> {{from.livesAtCity}} <span *ngIf=\"from.livesAtCountry\">{{from.livesAtCountry}}\n              </span></p>\n          </div>\n        </div>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Join\n        </mat-panel-title>\n        <mat-panel-description>\n          {{organ._id}}\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <div class=\"cont-all\">\n        <div class=\"organ-photo\" *ngIf=\"organ.organizationPic\">\n          <img class=\"organ-im\" [src]=\"organ.organizationPic\" />\n        </div>\n\n        <div class=\"organ-cont\">\n          <p>{{organ.city}} <span *ngIf=\"organ.country\"> {{organ.country}}</span> </p>\n          <p>{{organ.about}} </p>\n        </div>\n      </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n\n\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button color=\"accent\" matTooltip=\"Accept invitation\" [mat-dialog-close]=\"true\" (click)=\"acceptInvitation()\">Accept</button>\n    <button mat-raised-button color=\"warn\" matTooltip=\"Decline invitation\" [mat-dialog-close]=\"true\" (click)=\"declineInvitation()\">Decline</button>\n    <button mat-button matTooltip=\"Notification won't appear\" [mat-dialog-close]=\"true\" (click)=\"resolveNotification()\">Ignore</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InvitationNotifDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationNotifDialogComponent", function() { return InvitationNotifDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvitationNotifDialogComponent = /** @class */ (function () {
    function InvitationNotifDialogComponent(snackBar) {
        this.snackBar = snackBar;
    }
    InvitationNotifDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.notification);
        this.userService.getUserById(this.notification.from).subscribe(function (user) {
            _this.from = user;
            console.log(_this.from);
        });
        this.organizationService.getWithIdSecured(this.notification.invitationTo).subscribe(function (organization) {
            _this.organ = organization;
            console.log(_this.organ);
        });
    };
    InvitationNotifDialogComponent.prototype.acceptInvitation = function () {
        var _this = this;
        this.userService.getUserById(this.notification.owner).subscribe(function (user) {
            _this.me = user;
            if (!_this.me.organizations.some(function (c) { return c === _this.organ._id; })) {
                _this.me.organizations.push(_this.organ._id);
                _this.userService.putWithIdSecured(_this.me._id, _this.me).subscribe(function (userUpdated) {
                    _this.me = userUpdated;
                    _this.organ.userIds.push(_this.me._id);
                    _this.organizationService.putWithIdSecured(_this.organ._id, _this.organ).subscribe(function (organUpdated) {
                        _this.openSnackBar("You are now a member of the Organization" + _this.organ._id, "Congrats!");
                    });
                });
            }
            else {
                _this.notification.viewed = true;
                _this.notificationService.putEntitySecured(_this.notification).subscribe(function (notif) {
                    _this.openSnackBar("Seems to be allready a member of this organization", "Notification Resolved");
                });
            }
        });
    };
    InvitationNotifDialogComponent.prototype.declineInvitation = function () {
        console.log("decline");
    };
    InvitationNotifDialogComponent.prototype.resolveNotification = function () {
        var _this = this;
        this.notification.viewed = true;
        this.notificationService.putEntitySecured(this.notification).subscribe(function (notifNew) {
            _this.openSnackBar("Notification won't appear any more", "");
        });
    };
    InvitationNotifDialogComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3200,
        });
    };
    InvitationNotifDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invitation-notif-dialog',
            template: __webpack_require__(/*! ./invitation-notif-dialog.component.html */ "./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.html"),
            styles: [__webpack_require__(/*! ./invitation-notif-dialog.component.css */ "./src/app/dialogs/notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], InvitationNotifDialogComponent);
    return InvitationNotifDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notification-dialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NotificationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDialogComponent", function() { return NotificationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationDialogComponent = /** @class */ (function () {
    function NotificationDialogComponent() {
    }
    NotificationDialogComponent.prototype.ngOnInit = function () {
    };
    NotificationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-dialog',
            template: __webpack_require__(/*! ./notification-dialog.component.html */ "./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.html"),
            styles: [__webpack_require__(/*! ./notification-dialog.component.css */ "./src/app/dialogs/notification-dialogs/notification-dialog/notification-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationDialogComponent);
    return NotificationDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/organization-dialog/organization-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dialogs/organization-dialog/organization-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all{\n    width:400px;\n}\n.orgpic{\n    margin-top: 1em;\n    border-radius: 10%;\n    float: left;\n}\n.basis{\n    float: left;\n    height: 100%;\n}\n.orgtitle{\n    margin-left: 1em;\n}\n.orgsite{\n    margin-left: 1em;\n}\n.contact{\n    margin-left: 1em;\n}\n.orgwhere{\n    margin-left: 1em;\n}\n.orgcont{\n    width:600px;\n    margin-top: 2em;\n}\n.vieworg{\n    margin-top: 1em;\n    float: right;\n}\n"

/***/ }),

/***/ "./src/app/dialogs/organization-dialog/organization-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/organization-dialog/organization-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n  <div *ngIf=\"organization.meta.picture\">\n    <img class=\"orgpic\" [src]=\"organization?.meta?.picture\" />\n  </div>\n  <div class=\"basis\">\n    <h3 mat-dialog-title class=\"orgtitle\">{{organization?._id}}</h3>\n    <p class=\"orgsite\">{{organization?.website}}</p>\n    <div *ngIf=\"organization.city\">\n      <p class=\"orgwhere\">{{organization?.city}}, {{organization?.country}}</p>\n    </div>\n    <p class=\"contact\">Contact: {{organization?.contact}}</p>\n  </div>\n\n</div>\n\n<mat-dialog-content class=\"orgcont\">\n  <h3 class=\"about\">About</h3>\n  {{organization?.about}}\n</mat-dialog-content>\n\n<button mat-button class=\"vieworg\" (click)=\"goToOrganization()\">View</button>\n\n<mat-dialog-actions *ngIf=\"edit\">\n  <button mat-button (click)=\"goToOrganization()\">Edit</button>\n  <!-- <button mat-button color=\"warn\" (click)=\"deleteOrganization()\">Delete</button> -->\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/organization-dialog/organization-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/organization-dialog/organization-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrganizationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDialogComponent", function() { return OrganizationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationDialogComponent = /** @class */ (function () {
    function OrganizationDialogComponent(dialogRef, oidcService, router) {
        this.dialogRef = dialogRef;
        this.oidcService = oidcService;
        this.router = router;
        this.edit = false;
    }
    OrganizationDialogComponent.prototype.ngOnInit = function () {
    };
    OrganizationDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        if (userData.groups.includes('/Administrator') && this.organization._id === 'Jaqpot') {
            setTimeout(function (_) { return _this.edit = true; });
        }
        if (this.organization.meta
            && this.organization.meta.creators
            && this.organization.meta.creators.includes(userData.sub)) {
            setTimeout(function (_) { return _this.edit = true; });
        }
    };
    OrganizationDialogComponent.prototype.goToOrganization = function () {
        var route = "/organization/" + this.organization._id;
        this.dialogRef.close();
        this.router.navigate([route]);
    };
    OrganizationDialogComponent.prototype.deleteOrganization = function () {
        var _this = this;
        this.organizationService.deleteEntity(this.organization._id).subscribe(function (resp) {
            _this.dialogRef.close();
        });
    };
    OrganizationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-dialog',
            template: __webpack_require__(/*! ./organization-dialog.component.html */ "./src/app/dialogs/organization-dialog/organization-dialog.component.html"),
            styles: [__webpack_require__(/*! ./organization-dialog.component.css */ "./src/app/dialogs/organization-dialog/organization-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__["OidcSecurityService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OrganizationDialogComponent);
    return OrganizationDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-crop{\n    margin-top: 2em;\n    /* min-width: 220px;\n    min-height: 200px;\n    border: 1px dotted gray; */\n}\n\n.upload-btn-wrapper {\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n  }\n\n.upload-btn-wrapper input[type=file] {\n    font-size: 100px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n  }\n\n.cropped{\n    border-radius: 25%;\n    margin-top: 25%;\n    /* width: 100%;\n    height: 100%;\n    margin-top: 1em; */\n}\n\n.action{\n    padding-top: 40%;\n    float: right;\n    bottom: 20px;\n    right: 20px;\n}"

/***/ }),

/***/ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-btn-wrapper\">\n  <button mat-button>Upload pic</button>\n  <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\n</div>\n\n<div style=\"width: 600px;\">\n  <div style=\"float: left; width: 50%;\">\n    <h3 style=\"margin-left: 35%;\" >Pic chosen</h3>\n    <div class=\"image-crop\">\n      <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"2 / 2\" [resizeToWidth]=\"128\"\n        format=\"jpeg\" (imageCroppedBase64)=\"imageCroppedBase64($event)\" (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"\n        style=\"max-height: 33vh\" [style.display]=\"cropperReady ? null : 'none'\"></image-cropper>\n    </div>\n  </div>\n  <div style=\"float: left; width: 30%; margin-left: 18%;\">\n    <h3>Pic will look like</h3>\n    <img class=\"cropped\" [src]=\"croppedImage\" />\n  </div>\n</div>\n<div class=\"action\">\n  <button (click)=\"onCloseConfirm()\" \n      mat-raised-button color=\"accent\" \n      [disabled]=\"saveDisactivated\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfilepicDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicDialogComponent", function() { return ProfilepicDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProfilepicDialogComponent = /** @class */ (function () {
    function ProfilepicDialogComponent(dialogRef, profPic) {
        this.dialogRef = dialogRef;
        this.profPic = profPic;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.loadImageFailed = '';
        this.cropperReady = false;
        this.saveDisactivated = true;
    }
    ProfilepicDialogComponent.prototype.ngOnInit = function () {
    };
    ProfilepicDialogComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    ProfilepicDialogComponent.prototype.imageCroppedBase64 = function (image) {
        this.croppedImage = image;
        this.saveDisactivated = false;
    };
    ProfilepicDialogComponent.prototype.imageLoaded = function () {
        this.cropperReady = true;
    };
    ProfilepicDialogComponent.prototype.imageLoadFailed = function () {
        console.log('Load failed');
    };
    ProfilepicDialogComponent.prototype.onCloseConfirm = function () {
        this.dialogRef.close(this.croppedImage);
    };
    ProfilepicDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profilepic-dialog',
            template: __webpack_require__(/*! ./profilepic-dialog.component.html */ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.html"),
            styles: [__webpack_require__(/*! ./profilepic-dialog.component.css */ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], ProfilepicDialogComponent);
    return ProfilepicDialogComponent;
}());



/***/ }),

/***/ "./src/app/front/front.component.css":
/*!*******************************************!*\
  !*** ./src/app/front/front.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/front/front.component.html":
/*!********************************************!*\
  !*** ./src/app/front/front.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  front works!\n</p>\n"

/***/ }),

/***/ "./src/app/front/front.component.ts":
/*!******************************************!*\
  !*** ./src/app/front/front.component.ts ***!
  \******************************************/
/*! exports provided: FrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontComponent", function() { return FrontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontComponent = /** @class */ (function () {
    function FrontComponent() {
    }
    FrontComponent.prototype.ngOnInit = function () {
    };
    FrontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front',
            template: __webpack_require__(/*! ./front.component.html */ "./src/app/front/front.component.html"),
            styles: [__webpack_require__(/*! ./front.component.css */ "./src/app/front/front.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontComponent);
    return FrontComponent;
}());



/***/ }),

/***/ "./src/app/home/data-model-view/data-model-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/data-model-view/data-model-view.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid_tile{\n    margin: 1em;\n    \n}\n\n.grid_list{\n    position: absolute;\n    min-height: 80vh;\n    max-height: 80vh;\n    overflow: auto;\n    /* float: left; */\n    width:100%;\n\n    /* display: inline-block; */\n}\n\n/* .item_card{\n    width: 60%;\n    height: 80%;\n} */\n\n.card{\n    margin: 1em;\n    border-radius:4%; \n}\n\n.card_header{\n    width:14em;\n}\n\n.entity_image{\n    height: 128px;\n    width:128px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    /* padding-top: 1em; */\n    border-radius:4%; \n}\n\n.entity_asset_image{\n    height: 128px;\n    width:128px;\n}\n\n.description{\n    overflow: hidden;\n    width:100%;\n}\n\n.title{\n    overflow: hidden;\n    width:40%;\n}\n\n/* .image_div{\n    margin-top:2em; \n    width:20em;\n} */"

/***/ }),

/***/ "./src/app/home/data-model-view/data-model-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/data-model-view/data-model-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"grid_view; else list_view\" class=\"grid_list\">\n  <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"32px\" fxLayoutAlign=\"space-around center\" >\n    <ng-container *ngFor=\"let item of view_items\">\n      <mat-card  fxFlex.xl=\"12%\" fxFlex.lg=\"18%\" fxFlex.md=\"24%\" fxFlex.sm=\"42%\" class=\"card\">\n          <mat-card-header class=\"card_header\">\n              <mat-card-title class=\"title\">Title: {{item.meta.titles[0]}} </mat-card-title>\n              <mat-card-subtitle>{{item.meta.date | date}}</mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <div *ngIf=\"item.meta.picture; else no_image\" class=\"image_div\">\n                    <img class=\"entity_image\" src=\"{{item.meta.picture}}\">\n                  </div>\n                  <ng-template #no_image>\n                      <img class=\"entity_image\" src=\"assets/dataset3.png\">\n                  </ng-template>\n              <h4>{{item.type}}</h4>\n              <p class=\"description\">\n                {{item.meta.descriptions[0]}}\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              <!-- <button mat-button>LIKE</button>\n                      <button mat-button>SHARE</button> -->\n            </mat-card-actions>\n      </mat-card>\n    </ng-container>\n  </div>\n\n\n  <!-- <mat-grid-list cols=\"4\" rowHeight=\"280px\" class=\"grid_list\">\n    <mat-grid-tile class=\"grid_tile\" *ngFor=\"let item of view_items\" [colspan]=\"item.cols\" [rowspan]=\"item.rows\">\n      <mat-card class=\"item_card\">\n        <mat-card-header>\n          <mat-card-title>{{item.meta.titles[0]}}</mat-card-title>\n          <mat-card-subtitle>{{item.meta.date | date}}</mat-card-subtitle>\n        </mat-card-header>\n        <div *ngIf=\"item.meta.picture; else no_image\">\n          <img class=\"entity_image\" mat-card-image src=\"{{item.meta.picture}}\" alt=\"Photo of a Shiba Inu\">\n        </div>\n        <ng-template #no_image>\n          <mat-icon>format_align_justify</mat-icon>\n        </ng-template>\n        <mat-card-content>\n          <p>\n            {{item.meta.descriptions[0]}}\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n        </mat-card-actions>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list> -->\n</div>\n<ng-template #list_view>\n  <mat-list>\n    <mat-list-item *ngFor=\"let item of view_items\">\n      <h4 mat-line>{{item.meta.titles[0]}}</h4>\n      <p mat-line> {{item.meta.date | date}} </p>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n    \n  </mat-list>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/home/data-model-view/data-model-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/data-model-view/data-model-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataModelViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModelViewComponent", function() { return DataModelViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataModelViewComponent = /** @class */ (function () {
    function DataModelViewComponent() {
        this.grid_view = true;
        this.view_items = [];
    }
    DataModelViewComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.view_items = [];
        if (this.view_type === "grid") {
            this.grid_view = true;
        }
        else {
            this.grid_view = false;
        }
        this.datasets_to_view.forEach(function (dataset) {
            var _view_item = {};
            _view_item.type = "Dataset";
            _view_item.color = "lightblue";
            _view_item.meta = dataset.meta;
            _view_item._id = dataset._id;
            _view_item.cols = 1;
            _view_item.rows = 1;
            _this.view_items.push(_view_item);
        });
        this.models_to_view.forEach(function (model) {
            var _view_item = {};
            _view_item.type = "Model";
            _view_item.color = "lightred";
            _view_item.meta = model.meta;
            _view_item._id = model._id;
            _view_item.cols = 1;
            _view_item.rows = 1;
            _this.view_items.push(_view_item);
        });
        console.log(this.view_items);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DataModelViewComponent.prototype, "datasets_to_view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DataModelViewComponent.prototype, "models_to_view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DataModelViewComponent.prototype, "view_type", void 0);
    DataModelViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-model-view',
            template: __webpack_require__(/*! ./data-model-view.component.html */ "./src/app/home/data-model-view/data-model-view.component.html"),
            styles: [__webpack_require__(/*! ./data-model-view.component.css */ "./src/app/home/data-model-view/data-model-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataModelViewComponent);
    return DataModelViewComponent;
}());



/***/ }),

/***/ "./src/app/home/datasethome/datasethome.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/datasethome/datasethome.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/datasethome/datasethome.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/datasethome/datasethome.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  datasethome works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/datasethome/datasethome.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/datasethome/datasethome.component.ts ***!
  \***********************************************************/
/*! exports provided: DatasethomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasethomeComponent", function() { return DatasethomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatasethomeComponent = /** @class */ (function () {
    function DatasethomeComponent() {
    }
    DatasethomeComponent.prototype.ngOnInit = function () {
    };
    DatasethomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datasethome',
            template: __webpack_require__(/*! ./datasethome.component.html */ "./src/app/home/datasethome/datasethome.component.html"),
            styles: [__webpack_require__(/*! ./datasethome.component.css */ "./src/app/home/datasethome/datasethome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatasethomeComponent);
    return DatasethomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.header {\n  padding-left: 1em;\n}\n\n.home_icon {\n  padding-left: 0.3em;\n}\n\n.list_icon {\n  margin-left: 0.2em;\n}\n\n/* .home_toolbar{\n    height : 6em;\n} */\n\n.home_div {\n  width: 100%\n}\n\n.home_card {\n  width: 74%;\n  float: left;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\na{\n  width: 100%;\n  border-radius:  5px 40px 40px 5px;\n}\n\na:hover {\n  cursor: pointer;\n  background-color: lightgray;\n  transition: all .2s ease-in-out;\n}\n\na:active{\n  cursor: pointer;\n  background-color: lightgray;\n  transition: all .2s ease-in-out;\n}\n\n.query_menu {\n  padding-right: 1em;\n}\n\n/* .query_chose{\n    margin-left: 100px;\n} */\n\n.view_enabled{\n    margin-left: 100px;\n}\n\n.add_dataset{\n    padding-right: 1em;\n}\n\n.home_all{\n  width:100%;\n  min-height:91vh;\n  max-height: 91vh;\n  position: relative;\n}\n\n.home_content{\n  width:80%;\n  min-height:91vh;\n  max-height: 91vh;\n  display:inline-block;\n  position:absolute;\n  right: 0;\n  bottom: 0;\n  margin-right:5%;\n  z-index:1;\n}\n\n.home_nav {\n  width: 15%;\n  height: 85vh;\n  display:inline-block;\n  position:absolute;\n  left:0px;\n  z-index:2;\n}\n\n/* .test{\n  width:100%;\n  float:right;\n} */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"home_toolbar\">\n  <mat-icon class=\"home_icon\">home</mat-icon>\n  <span class=\"header\">\n    Home\n  </span>\n\n  <span *ngIf=\"queries_enabled\">\n    <p class=\"view_enabled\">{{queries_for}}</p>\n  </span>\n  <mat-icon *ngIf=\"queries_enabled\">arrow_right</mat-icon>\n  <span *ngIf=\"queries_enabled\">\n    <p class=\"query_chose\">{{query}}</p>\n  </span>\n  <button *ngIf=\"queries_enabled\" mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"query_menu\">\n    <mat-icon *ngIf=\"queries_enabled\">arrow_drop_down</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"mineChosen()\">\n      <mat-icon>folder</mat-icon>\n      <span>Mine</span>\n    </button>\n    <button mat-menu-item (click)=\"sharedChosen()\">\n      <mat-icon>folder_shared</mat-icon>\n      <span>Shared</span>\n    </button>\n  </mat-menu>\n\n  <span class=\"example-spacer\"></span>\n  <div class=\"add_dataset\">\n    <!-- <button *ngIf=\"add_dataset\" mat-icon-button matTooltip=\"Add dataset\" (click)=\"addDatasetDialog()\">\n      <mat-icon>add</mat-icon>\n    </button> -->\n    <button *ngIf=\"add_dataset\" mat-mini-fab type=\"button\" matTooltip=\"Add dataset\" onclick=\"document.getElementById('fileToUpload').click()\">\n      <mat-icon>add</mat-icon>\n    </button>\n    <input id=\"fileToUpload\" type=\"file\" style=\"display:none;\" (change)=\"changeListener($event.target.files)\">\n\n  </div>\n\n  <div *ngIf=\"listView; else gridView\">\n    <button mat-icon-button matTooltip=\"Switch to grid view\" (click)=\"changeToGridView()\">\n      <mat-icon>format_list_bulleted</mat-icon>\n    </button>\n  </div>\n  <ng-template #gridView>\n    <button mat-icon-button matTooltip=\"Switch to list view\" (click)=\"changeToListView()\">\n      <mat-icon>view_compact</mat-icon>\n    </button>\n  </ng-template>\n\n</mat-toolbar>\n\n<div class=\"home_all\">\n  <div class=\"home_nav\">\n    <mat-list role=\"list\">\n      <a mat-list-item role=\"listitem\" (click)=\"goToDatasetView()\" class=\"nav_item\">\n        <mat-icon mat-list-icon class=\"list_icon\">attachment</mat-icon>\n        <h4 mat-line>Datasets</h4>\n        <p mat-line> Shared / Private </p>\n      </a>\n      <a mat-list-item role=\"listitem\" (click)=\"goToModelView()\">\n        <mat-icon mat-list-icon class=\"list_icon\">note</mat-icon>\n        <h4 mat-line>Models</h4>\n        <p mat-line> Shared / Private </p>\n      </a>\n    </mat-list>\n  </div>\n  <div class=\"home_content\">\n    <app-data-model-view *ngIf=\"datasets_to_view || models_to_view\" [datasets_to_view]=\"datasets_to_view\"\n      [models_to_view]=\"models_to_view\" [view_type]=\"view_type\"></app-data-model-view>\n  </div>\n</div>\n  <!-- <div class=\"test\">\n      <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n          <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns2\">\n            <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n          </ng-container>\n        \n          <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay2\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay2;\"></tr>\n        </table>\n  </div> -->\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _jaqpot_client_factories_dataset_factory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jaqpot-client/factories/dataset-factory.service */ "./src/app/jaqpot-client/factories/dataset-factory.service.ts");
/* harmony import */ var _jaqpot_client_api_feature_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jaqpot-client/api/feature.service */ "./src/app/jaqpot-client/api/feature.service.ts");
/* harmony import */ var _jaqpot_client_api_dataset_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jaqpot-client/api/dataset.service */ "./src/app/jaqpot-client/api/dataset.service.ts");
/* harmony import */ var _jaqpot_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jaqpot-client */ "./src/app/jaqpot-client/index.ts");
/* harmony import */ var _jaqpot_client_api_model_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jaqpot-client/api/model.service */ "./src/app/jaqpot-client/api/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// export interface Queries{
//   value: string;
//   viewValue: string;
// }
var HomeComponent = /** @class */ (function () {
    // queries: Queries[] = [
    //   {value: 'private', viewValue: 'Mine'},
    //   {value: 'shared', viewValue: 'Shared'},
    //   {value: 'organizations', viewValue: 'Organizations'}
    // ];
    function HomeComponent(oidcSecurityService, sessionService, router, location, dialogsService, datasetFactory, featureApi, datasetApi, modelApi, elRef) {
        this.oidcSecurityService = oidcSecurityService;
        this.sessionService = sessionService;
        this.router = router;
        this.location = location;
        this.dialogsService = dialogsService;
        this.datasetFactory = datasetFactory;
        this.featureApi = featureApi;
        this.datasetApi = datasetApi;
        this.modelApi = modelApi;
        this.elRef = elRef;
        this.listView = true;
        this.query = "Mine";
        this.queries_enabled = false;
        this.add_dataset = false;
        this.datasets_to_view = [];
        this.models_to_view = [];
        this.view_type = "list";
        // var path = this.location.path();
        // console.log(path)
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = new Map();
        params.set("min", 0);
        params.set("max", 10);
        params.set("existence", _jaqpot_client__WEBPACK_IMPORTED_MODULE_9__["Dataset"].ExistenceEnum.UPLOADED);
        this.datasetApi.getList(params).subscribe(function (datasets) {
            _this.datasets_to_view = datasets;
        });
        this.modelApi.getList(params).subscribe(function (models) {
            _this.models_to_view = models;
        });
    };
    HomeComponent.prototype.ngOnAfterViewInit = function () {
        var div = this.elRef.nativeElement.querySelector('div');
    };
    HomeComponent.prototype.changeToListView = function () {
        this.listView = true;
        this.view_type = "list";
    };
    HomeComponent.prototype.changeToGridView = function () {
        this.listView = false;
        this.view_type = "grid";
    };
    HomeComponent.prototype.sharedChosen = function () {
        this.query = "Shared";
    };
    HomeComponent.prototype.mineChosen = function () {
        this.query = "Mine";
    };
    HomeComponent.prototype.goToDatasetView = function () {
        this.queries_for = "Datasets";
        this.queries_enabled = true;
        this.add_dataset = true;
    };
    HomeComponent.prototype.goToModelView = function () {
        this.queries_for = "Models";
        this.queries_enabled = true;
        this.add_dataset = false;
    };
    // addDatasetDialog(){
    //   this.dialogsService.addDataset();
    // }
    HomeComponent.prototype.changeListener = function (files) {
        var _this = this;
        // console.log(files);
        if (files && files.length > 0) {
            var file_1 = files.item(0);
            var reader_1 = new FileReader();
            reader_1.readAsText(file_1);
            reader_1.onload = function (e) {
                var _csv = reader_1.result;
                _csv = _csv.toString();
                _this.dialogsService.addDataset(_csv, file_1.name, _this.datasetFactory, _this.featureApi, _this.datasetApi).subscribe(function (result) {
                    reader_1.abort();
                });
            };
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__["OidcSecurityService"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_5__["DialogsService"],
            _jaqpot_client_factories_dataset_factory_service__WEBPACK_IMPORTED_MODULE_6__["DatasetFactoryService"],
            _jaqpot_client_api_feature_service__WEBPACK_IMPORTED_MODULE_7__["FeatureApiService"],
            _jaqpot_client_api_dataset_service__WEBPACK_IMPORTED_MODULE_8__["DatasetService"],
            _jaqpot_client_api_model_service__WEBPACK_IMPORTED_MODULE_10__["ModelApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/httk/base/httk.base.component.css":
/*!***************************************************!*\
  !*** ./src/app/httk/base/httk.base.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.info {\n  padding: 1em;\n}\n\n.head {\n  padding-left: 1em;\n}\n\n.implemented {\n  padding: 1em;\n  float: left;\n  width: 50%;\n}\n\n.impim {\n  margin-top: 0.7em;\n}\n\n.Rimg {\n  width: 16%;\n  height: 16%;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container>* {\n  width: 100%;\n}\n\n.example-spacer-2 {\n  flex: 12 1 auto;\n}\n\n.mat-list .mat-list-item {\n    height: 8em;\n    /* padding-right: 1em; */\n}\n\n.mat-divider.mat-divider-vertical{\n    height: 30px;\n    padding: 8px;\n}\n\n.httk-rout{\n    max-width: 6em;\n    float: left;\n    min-height: 90%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    /* position: absolute; */\n    flex: 0 0 65%;\n}\n\n.httk-list {\n  /* min-width: 20%;\n  max-width: 20%;\n  min-height: 100%; */\n  /* margin-top: 4em; */\n  height: 100%;\n  position: fixed;\n  /* overflow: hidden; */\n  flex: 0 0 65%;\n\n  /* border-right: 1px solid gray; */\n}\n\n.httk-routes{\n  flex: 1;\n  /* float: left; */\n  position: fixed;\n  margin-left: 4em;\n  margin-left: 4em;\n  overflow: hidden;\n  /* margin-left: 2em; */\n}\n\n.divider{\n  position: fixed;\n  margin-top: 4em;\n}\n\n.mat-divider.mat-divider-vertical.second{\n    height: 38.85em;\n    margin-left: -17px;\n    z-index: -1;\n    /* padding: 8px; */\n}\n\n.mat-divider.first-div{\n  margin-top: 4em;\n  position: -webkit-sticky;\n  position: sticky;\n  /* position: relative; */\n}\n\n.mat-toolbar{\n  position: fixed;\n  z-index: 1;\n}\n\n/* .first-div{\n  position: fixed;\n  margin-top: 8em;\n}  */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey; \n  border-radius: 10px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: grey; \n  border-radius: 12px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; \n}\n"

/***/ }),

/***/ "./src/app/httk/base/httk.base.component.html":
/*!****************************************************!*\
  !*** ./src/app/httk/base/httk.base.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Httk</span>\n\n  <mat-divider [vertical]=\"true\"></mat-divider>\n  <span class=\"example-spacer-2\"></span>\n\n  <span class=\"example-spacer\"></span>\n\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon matTooltip=\"Info about Httk\">info</mat-icon>\n  </button>\n\n  <mat-menu #menu=\"matMenu\">\n    <mat-card class=\"card\">\n\n      <section class=\"mat-typography\">\n        <mat-card-title>Info </mat-card-title>\n        <mat-divider></mat-divider>\n\n        <div class=\"info accent-color\">\n\n          Functions and data tables for simulation and statistical analysis of chemical toxicokinetics (\"TK\") using\n          data obtained from\n          relatively high throughput, in vitro studies. Both physiologically-based (\"PBTK\") and empirical (e.g., one\n          compartment)\n          \"TK\" models can be parameterized for several hundred chemicals and multiple species. These models are solved\n          efficiently,\n          often using compiled (C-based) code. A Monte Carlo sampler is included for simulating biological variability\n          and\n          measurement limitations. Functions are also provided for exporting \"PBTK\" models to \"SBML\" and \"JARNAC\" for\n          use\n          with other simulation software. These functions and data provide a set of tools for in vitro-in vivo\n          extrapolation\n          (\"IVIVE\") of high throughput screening data (e.g., ToxCast) to real-world exposures via reverse dosimetry\n          (also\n          known as \"RTK\").\n\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <div class=\"implemented\">\n          <h3>Implemented in </h3>\n        </div>\n        <div class=\"impim\">\n          <img class=\"Rimg\" src=\"assets/R.png\">\n        </div>\n\n      </section>\n    </mat-card>\n  </mat-menu>\n\n</mat-toolbar>\n<mat-divider class=\"first-div\"></mat-divider>\n<div class=\"httk-rout\">\n  <mat-list role=\"list\" class=\"httk-list\">\n\n    <mat-list-item role=\"listitem\">\n\n      <button mat-mini-fab color=\"primary\" matTooltip=\"Create httk model\" routerLink=\"/httk/createmodel\">\n        <mat-icon class=\"side_icon\">add</mat-icon>\n      </button>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <button mat-mini-fab color=\"primary\" matTooltip=\"Create predictions\">\n        <mat-icon class=\"side_icon\">cached</mat-icon>\n      </button>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <button mat-mini-fab color=\"primary\" matTooltip=\"My models\">\n        <mat-icon class=\"side_icon\">archive</mat-icon>\n\n      </button>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <mat-divider [vertical]=\"true\" class=\"second\"></mat-divider>\n    </mat-list-item>\n\n  </mat-list>\n\n</div>\n\n<div class=\"httk-routes\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/httk/base/httk.base.component.ts":
/*!**************************************************!*\
  !*** ./src/app/httk/base/httk.base.component.ts ***!
  \**************************************************/
/*! exports provided: HttkBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttkBaseComponent", function() { return HttkBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttkBaseComponent = /** @class */ (function () {
    function HttkBaseComponent() {
    }
    HttkBaseComponent.prototype.ngOnInit = function () {
    };
    HttkBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-httk-base',
            template: __webpack_require__(/*! ./httk.base.component.html */ "./src/app/httk/base/httk.base.component.html"),
            styles: [__webpack_require__(/*! ./httk.base.component.css */ "./src/app/httk/base/httk.base.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HttkBaseComponent);
    return HttkBaseComponent;
}());



/***/ }),

/***/ "./src/app/httk/createhttkmodel/createhttkmodel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/httk/createhttkmodel/createhttkmodel.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".model-steps{\n    float: left; \n    width: 100%;\n    /* margin-left: 2.5em; */\n    /* margin-right: 2.5em; */\n    /* position: relative; */\n    /* overflow: scroll; */\n    /* z-index: -2; */\n    /* flex-grow: 1; */\n}\n\n.example-header-image {\n    background-image: url('https://app.jaqpot.org/assets/R.png');\n    background-size: cover;\n    margin-right: 2em;\n}\n\n.mat-card-avatar {\n    height: 35px;\n    width: 40px;\n    border-radius: 60%;\n    flex-shrink: 2;\n}\n\n.card-s{\n    /* min-height: 100%;\n    height: 100%; */\n    /* height: 82vh; */\n    /* margin-left: 5%; */\n    overflow: auto;\n    width: 80%;\n    position: absolute;\n    top: 0; bottom: 0; left: 0; right: 0;\n    /* display: table; */\n}\n\n.titl{\n    margin-left: 4%;\n}\n\n.step-card{\n    /* display: table-row; */\n    float: left; \n    width: 90%;\n    /* margin-top: 2.7em; */\n    /* height: 80%; */\n    /* margin-left: 4%; */\n    margin-bottom: 4em;\n    margin-right: 0.5em;\n    margin-left: 2em;\n    /* overflow: auto; */\n}\n\n.car-list{\n    \n    width: 60%;\n    overflow: auto;\n    height: 1800px;\n}\n\n.card-div{\n    margin-right: 2em;\n    max-width: 94%;\n    /* margin-left: 5%; */\n    margin-left: 2em;\n}\n\n.container{\n    position: fixed;\n    float: left; \n    width: 90%;\n    /* margin-left: 5.5em; */\n    margin-top: 1em;\n    min-height: 86%;\n    margin-left: 4.2em;\n    margin-bottom: 4em;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n\n.paramlist{\n    float: right;\n    min-height: 100%;\n    width: 20%;\n}\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey; \n    border-radius: 10px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n    background: grey; \n    border-radius: 12px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n    background: #555; \n}"

/***/ }),

/***/ "./src/app/httk/createhttkmodel/createhttkmodel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/httk/createhttkmodel/createhttkmodel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-httk-base></app-httk-base>\n\n<div class=\"container\">\n\n  <div class=\"card-s\">\n    <h3 class=\"titl\">\n      Model Creation\n    </h3>\n    <mat-card class=\"step-card\">\n\n      <mat-card-header>\n\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>\n          Create httk model\n        </mat-card-title>\n        <mat-card-subtitle>\n          Follow steps to create an httk model\n        </mat-card-subtitle>\n\n      </mat-card-header>\n      <mat-divider class=\"card-div\"></mat-divider>\n      <mat-card-content>\n        <!-- <app-parametersteps *ngIf=\"parameters\" [parameters]=\"parameters\"></app-parametersteps> -->\n        <mat-horizontal-stepper class=\"model-steps\" [linear]=\"true\" #stepper>\n\n          <!-- <mat-step *ngFor=\"let parameter of parameters\" [stepControl]=\"parametersFormGroup\"></mat-step> -->\n\n          <mat-step [stepControl]=\"parametersFormGroup\">\n            <form [formGroup]=\"parametersFormGroup\">\n              <ng-template matStepLabel>Select species</ng-template>\n              <mat-form-field>\n                <mat-select [(value)]=\"species\">\n                  <mat-option value=\"option1\">Human</mat-option>\n                  <mat-option value=\"option2\">Rat</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n\n          <!-- <mat-step [stepControl]=\"parametersFormGroup\">\n            <form [formGroup]=\"parametersFormGroup\">\n              <mat-form-field class=\"example-full-width\">\n                <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\"\n                  [matAutocomplete]=\"auto\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                    {{option}}\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step> -->\n\n          <mat-step [stepControl]=\"firstFormGroup\">\n            <form [formGroup]=\"firstFormGroup\">\n              <ng-template matStepLabel>Fill out models title</ng-template>\n              <mat-form-field>\n                <input matInput placeholder=\"Model Title\" formControlName=\"firstCtrl\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"secondFormGroup\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel>Fill out your address</ng-template>\n              <mat-form-field>\n                <input matInput placeholder=\"Address\" formControlName=\"secCtrl\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n\n          <mat-step>\n            <ng-template matStepLabel>Create Model</ng-template>\n            You can start the creation of the model\n            <div>\n              <button mat-button matStepperPrevious>Start</button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n          </mat-step>\n\n        </mat-horizontal-stepper>\n      </mat-card-content>\n      <mat-card-actions>\n        <!-- <button mat-button>Create</button> -->\n        <!-- <button mat-button>SHARE</button> -->\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n\n</div>\n<div class=\"paramlist\" *ngIf=\"parameters\">\n  <app-parameterlist [parameters]=\"parameters\"></app-parameterlist>\n</div>\n"

/***/ }),

/***/ "./src/app/httk/createhttkmodel/createhttkmodel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/httk/createhttkmodel/createhttkmodel.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreatehttkmodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatehttkmodelComponent", function() { return CreatehttkmodelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jaqpot_client_api_algorithm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jaqpot-client/api/algorithm.service */ "./src/app/jaqpot-client/api/algorithm.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_components_parameterlist_parameterlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/components/parameterlist/parameterlist.component */ "./src/app/base/components/parameterlist/parameterlist.component.ts");
/* harmony import */ var _base_components_parametersteps_parametersteps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/components/parametersteps/parametersteps.component */ "./src/app/base/components/parametersteps/parametersteps.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ParameterListComponent } from '../../base/components/parameterlist';


var CreatehttkmodelComponent = /** @class */ (function () {
    function CreatehttkmodelComponent(algoService, _formBuilder) {
        this.algoService = algoService;
        this._formBuilder = _formBuilder;
    }
    CreatehttkmodelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametersFormGroup = this._formBuilder.group({});
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.algoService.getAlgorithmById('httk')
            .subscribe(function (algoGot) {
            _this.algo = algoGot;
            // console.log(algoGot._id);
            _this.parameters = algoGot.parameters;
            console.log(algoGot.parameters);
            console.log(_this.parameters);
            // this.parameters = this.parametersList.parameters
        });
    };
    CreatehttkmodelComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_base_components_parameterlist_parameterlist_component__WEBPACK_IMPORTED_MODULE_3__["ParameterlistComponent"]),
        __metadata("design:type", Object)
    ], CreatehttkmodelComponent.prototype, "parametersList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_base_components_parametersteps_parametersteps_component__WEBPACK_IMPORTED_MODULE_4__["ParameterstepsComponent"]),
        __metadata("design:type", Object)
    ], CreatehttkmodelComponent.prototype, "parameterSteps", void 0);
    CreatehttkmodelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createhttkmodel',
            template: __webpack_require__(/*! ./createhttkmodel.component.html */ "./src/app/httk/createhttkmodel/createhttkmodel.component.html"),
            styles: [__webpack_require__(/*! ./createhttkmodel.component.css */ "./src/app/httk/createhttkmodel/createhttkmodel.component.css")]
        }),
        __metadata("design:paramtypes", [_jaqpot_client_api_algorithm_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreatehttkmodelComponent);
    return CreatehttkmodelComponent;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/api/aa.service.ts":
/*!*************************************************!*\
  !*** ./src/app/jaqpot-client/api/aa.service.ts ***!
  \*************************************************/
/*! exports provided: AaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AaService", function() { return AaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operator/map */ "./node_modules/rxjs-compat/_esm5/operator/map.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { ErrorReport } from '../../ui-models/ErrorReport';

var AaService = /** @class */ (function () {
    function AaService(http, sessionService) {
        this.http = http;
        this.sessionService = sessionService;
        this._defaultHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this._basePath = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].JaqpotBase;
        this._authenticateEndpoint = this._basePath + "/aa/login";
        this._authorizeEndpoint = this._basePath + "/aa/authorize";
        this._logoutEndpoint = this._basePath + "/aa/logout";
        this._validateEndpoint = this._basePath + "/aa/validate";
    }
    AaService.prototype.login = function (username, password) {
        var _this = this;
        var body = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        body.set('username', username);
        body.set('password', password);
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(this._authenticateEndpoint, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            _this._authToken = res.json();
            if (res.status === 200) {
                _this.sessionService.set('subjectId', _this._authToken.authToken);
                _this.sessionService.set('userName', _this._authToken.userName);
                _this.sessionService.set('loggedIn', 'true');
            }
            return _this._authToken;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return _this.handleError(err); }));
    };
    AaService.prototype.vallidate = function (subjectId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        headers.set('subjectid', subjectId);
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this._validateEndpoint, null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return _this.handleError(err); }));
    };
    AaService.prototype.logout = function (subjectId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        headers.set('subjectid', subjectId);
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this._logoutEndpoint, null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return _this.handleError(err); }));
    };
    /**
     *
     * @param error
     *
     *
     * private hanlde error only aplyies at the login module of the application
     */
    AaService.prototype.handleError = function (error) {
        var err = {
            httpStatus: error.json().httpStatus,
            details: error.json().details,
            message: error.json().message
        };
        return Promise.reject(this._errorReport || err);
    };
    AaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]])
    ], AaService);
    return AaService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/api/algorithm.service.ts":
/*!********************************************************!*\
  !*** ./src/app/jaqpot-client/api/algorithm.service.ts ***!
  \********************************************************/
/*! exports provided: AlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmService", function() { return AlgorithmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
// /**
//  * Jaqpot API
//  * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
//  *
//  * OpenAPI spec version: 4.0.3
//  * Contact: hampos@me.com
//  *
//  * NOTE: This class is auto generated by the swagger code generator program.
//  * https://github.com/swagger-api/swagger-codegen.git
//  * Do not edit the class manually.
//  */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// /* tslint:disable:no-unused-variable member-ordering */




// import { BASE_PATH, COLLECTION_FORMATS } from '../variables';




var AlgorithmService = /** @class */ (function () {
    function AlgorithmService(http, sessionServise, dialogsService, oidcSecurityService) {
        this.http = http;
        this.sessionServise = sessionServise;
        this.dialogsService = dialogsService;
        this.oidcSecurityService = oidcSecurityService;
        this._defaultHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this._basePath = _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].JaqpotBase;
        this._getAlgorithmsEndpoint = this._basePath + "/algorithm";
        this._getAlgorithmById = this._basePath + "/algorithm/";
        this._postAlgorithmEndpoint = this._basePath + "/algorithm";
        this._deleteAlgorithmEndpoint = this._basePath + "/algorithm";
        this._getAlgorithmByIdEndpoint = this._basePath + "/algotithm";
        this._modifyAlgorithmEndpoint = this._basePath + "/algorithm";
        this._createModelEndpoint = this._basePath + "/algorithm";
    }
    AlgorithmService.prototype.getAlgorithms = function (_class, start, max) {
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        params.set('class', _class);
        params.set('start', start.toString());
        params.set('max', max.toString());
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        headers.set('subjectid', this._subjectId);
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        return this.http.get(this._getAlgorithmsEndpoint, { headers: headers, search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.dialogsService.onError));
    };
    AlgorithmService.prototype.getAlgorithmsCount = function (_class, start, max) {
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        params.set('class', _class);
        params.set('start', "0");
        params.set('max', "1");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        return this.http.get(this._getAlgorithmsEndpoint, { headers: headers, search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var total = res.headers.get('total');
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.dialogsService.onError));
    };
    AlgorithmService.prototype.getAlgorithmById = function (id) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        return this.http.get(this._getAlgorithmById + id, { headers: headers, search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    AlgorithmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcSecurityService"]])
    ], AlgorithmService);
    return AlgorithmService;
}());

//     protected basePath = 'http://dev.jaqpot.org:8081/jaqpot/services';
//     public defaultHeaders: Headers = new Headers();
//     public configuration: Configuration = new Configuration();
//     constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
//         if (basePath) {
//             this.basePath = basePath;
//         }
//         if (configuration) {
//             this.configuration = configuration;
// 			this.basePath = basePath || configuration.basePath || this.basePath;
//         }
//     }
//     /**
//      *
//      * Extends object by coping non-existing properties.
//      * @param objA object to be extended
//      * @param objB source object
//      */
//     private extendObj<T1,T2>(objA: T1, objB: T2) {
//         for(let key in objB){
//             if(objB.hasOwnProperty(key)){
//                 (objA as any)[key] = (objB as any)[key];
//             }
//         }
//         return <T1&T2>objA;
//     }
//     /**
//      * @param consumes string[] mime-types
//      * @return true: consumes contains 'multipart/form-data', false: otherwise
//      */
//     private canConsumeForm(consumes: string[]): boolean {
//         const form = 'multipart/form-data';
//         for (let consume of consumes) {
//             if (form === consume) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     /**
//      * Creates Algorithm
//      * Registers a new JPDI-compliant algorithm service. When registering a new JPDI-compliant algorithm web service it is crucial to propertly annotate your algorithm with appropriate ontological classes following the &lt;a href&#x3D;\&quot;http://opentox.org/dev/apis/api-1.1/Algorithms\&quot;&gt;OpenTox algorithms ontology&lt;/a&gt;. For instance, a Clustering algorithm must be annotated with &lt;code&gt;ot:Clustering&lt;/code&gt;. It is also important for discoverability to add tags to your algorithm using the &lt;code&gt;meta.subjects&lt;/code&gt; field. An example is provided below.
//      * @param body Algorithm in JSON
//      * @param subjectid Authorization token
//      * @param title Title of your algorithm
//      * @param description Short description of your algorithm
//      * @param tags Tags for your algorithm (in a comma separated list) to facilitate look-up
//      */
//     public createAlgorithm(body: Algorithm, subjectid?: string, title?: string, description?: string, tags?: string, extraHttpRequestParams?: any): Observable<Algorithm> {
//         return this.createAlgorithmWithHttpInfo(body, subjectid, title, description, tags, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Unregisters an algorithm of given ID
//      * Deletes an algorithm of given ID. The application of this method requires authentication and assumes certain priviledges.
//      * @param id ID of the algorithm which is to be deleted.
//      * @param subjectid
//      */
//     public deleteAlgorithm(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.deleteAlgorithmWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds Algorithm
//      * Finds Algorithm with provided name
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getAlgorithm(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Algorithm> {
//         return this.getAlgorithmWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds all Algorithms
//      * Finds all Algorithms JaqpotQuattro supports
//      * @param subjectid Authorization token
//      * @param _class class
//      * @param start start
//      * @param max max
//      */
//     public getAlgorithms(subjectid?: string, _class?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Array<Algorithm>> {
//         return this.getAlgorithmsWithHttpInfo(subjectid, _class, start, max, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Modifies a particular Algorithm resource
//      * Modifies (applies a patch on) an Algorithm resource of a given ID. This implementation of PATCH follows the RFC 6902 proposed standard. See https://tools.ietf.org/rfc/rfc6902.txt for details.
//      * @param id ID of an existing BibTeX.
//      * @param body The patch in JSON according to the RFC 6902 specs
//      * @param subjectid Clients need to authenticate in order to create resources on the server
//      */
//     public modifyAlgorithm(id: string, body: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Algorithm> {
//         return this.modifyAlgorithmWithHttpInfo(id, body, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates Model
//      * Applies Dataset and Parameters on Algorithm and creates Model.
//      * @param title
//      * @param description
//      * @param id
//      * @param datasetUri
//      * @param predictionFeature
//      * @param parameters
//      * @param transformations
//      * @param scaling
//      * @param doa
//      * @param subjectid
//      */
//     public trainModel(title: string, description: string, id: string, datasetUri?: string, predictionFeature?: string, parameters?: string, transformations?: string, scaling?: string, doa?: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Task> {
//         return this.trainModelWithHttpInfo(title, description, id, datasetUri, predictionFeature, parameters, transformations, scaling, doa, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates Algorithm
//      * Registers a new JPDI-compliant algorithm service. When registering a new JPDI-compliant algorithm web service it is crucial to propertly annotate your algorithm with appropriate ontological classes following the &lt;a href&#x3D;\&quot;http://opentox.org/dev/apis/api-1.1/Algorithms\&quot;&gt;OpenTox algorithms ontology&lt;/a&gt;. For instance, a Clustering algorithm must be annotated with &lt;code&gt;ot:Clustering&lt;/code&gt;. It is also important for discoverability to add tags to your algorithm using the &lt;code&gt;meta.subjects&lt;/code&gt; field. An example is provided below.
//      * @param body Algorithm in JSON
//      * @param subjectid Authorization token
//      * @param title Title of your algorithm
//      * @param description Short description of your algorithm
//      * @param tags Tags for your algorithm (in a comma separated list) to facilitate look-up
//      */
//     public createAlgorithmWithHttpInfo(body: Algorithm, subjectid?: string, title?: string, description?: string, tags?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'body' is not null or undefined
//         if (body === null || body === undefined) {
//             throw new Error('Required parameter body was null or undefined when calling createAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         if (title !== undefined && title !== null) {
//             headers.set('title', String(title));
//         }
//         if (description !== undefined && description !== null) {
//             headers.set('description', String(description));
//         }
//         if (tags !== undefined && tags !== null) {
//             headers.set('tags', String(tags));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         headers.set('Content-Type', 'application/json');
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Unregisters an algorithm of given ID
//      * Deletes an algorithm of given ID. The application of this method requires authentication and assumes certain priviledges.
//      * @param id ID of the algorithm which is to be deleted.
//      * @param subjectid
//      */
//     public deleteAlgorithmWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling deleteAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Delete,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds Algorithm
//      * Finds Algorithm with provided name
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getAlgorithmWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list',
//             'application/ld+json'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds all Algorithms
//      * Finds all Algorithms JaqpotQuattro supports
//      * @param subjectid Authorization token
//      * @param _class class
//      * @param start start
//      * @param max max
//      */
//     public getAlgorithmsWithHttpInfo(subjectid?: string, _class?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (_class !== undefined) {
//             queryParameters.set('class', <any>_class);
//         }
//         if (start !== undefined) {
//             queryParameters.set('start', <any>start);
//         }
//         if (max !== undefined) {
//             queryParameters.set('max', <any>max);
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Modifies a particular Algorithm resource
//      * Modifies (applies a patch on) an Algorithm resource of a given ID. This implementation of PATCH follows the RFC 6902 proposed standard. See https://tools.ietf.org/rfc/rfc6902.txt for details.
//      * @param id ID of an existing BibTeX.
//      * @param body The patch in JSON according to the RFC 6902 specs
//      * @param subjectid Clients need to authenticate in order to create resources on the server
//      */
//     public modifyAlgorithmWithHttpInfo(id: string, body: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling modifyAlgorithm.');
//         }
//         // verify required parameter 'body' is not null or undefined
//         if (body === null || body === undefined) {
//             throw new Error('Required parameter body was null or undefined when calling modifyAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Patch,
//             headers: headers,
//             body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Creates Model
//      * Applies Dataset and Parameters on Algorithm and creates Model.
//      * @param title
//      * @param description
//      * @param id
//      * @param datasetUri
//      * @param predictionFeature
//      * @param parameters
//      * @param transformations
//      * @param scaling
//      * @param doa
//      * @param subjectid
//      */
//     public trainModelWithHttpInfo(title: string, description: string, id: string, datasetUri?: string, predictionFeature?: string, parameters?: string, transformations?: string, scaling?: string, doa?: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         console.log(title, description, id, datasetUri, predictionFeature, subjectid);
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'title' is not null or undefined
//         if (title === null || title === undefined) {
//             throw new Error('Required parameter title was null or undefined when calling trainModel.');
//         }
//         // verify required parameter 'description' is not null or undefined
//         if (description === null || description === undefined) {
//             throw new Error('Required parameter description was null or undefined when calling trainModel.');
//         }
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling trainModel.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };
//         headers.set('Content-Type', 'application/x-www-form-urlencoded');
//       // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         if (title !== undefined) {
//             formParams.set('title', <any>title);
//         }
//         if (description !== undefined) {
//             formParams.set('description', <any>description);
//         }
//         if (datasetUri !== undefined) {
//             formParams.set('dataset_uri', <any>datasetUri);
//         }
//         if (predictionFeature !== undefined) {
//             formParams.set('prediction_feature', <any>predictionFeature);
//         }
//         if (parameters !== undefined) {
//             formParams.set('parameters', <any>parameters);
//         }
//         if (transformations !== undefined) {
//             formParams.set('transformations', <any>transformations);
//         }
//         if (scaling !== undefined) {
//             formParams.set('scaling', <any>scaling);
//         }
//         if (doa !== undefined) {
//             formParams.set('doa', <any>doa);
//         }
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
// }


/***/ }),

/***/ "./src/app/jaqpot-client/api/base.client.ts":
/*!**************************************************!*\
  !*** ./src/app/jaqpot-client/api/base.client.ts ***!
  \**************************************************/
/*! exports provided: BaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return BaseClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BaseClient = /** @class */ (function () {
    function BaseClient(http, dialogsService, oidcSecurityService, requestPath) {
        this.http = http;
        this.dialogsService = dialogsService;
        this.oidcSecurityService = oidcSecurityService;
        this.requestPath = requestPath;
        this._defaultHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this._basePath = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].JaqpotBase;
        this._path = this._basePath + this.requestPath;
    }
    BaseClient.prototype.getWithIdSecured = function (id) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        var pathFormed = this._path + id;
        return this.http.get(pathFormed, { headers: headers, search: params }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    BaseClient.prototype.getList = function (pars) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        return this.http.get(this._path, { headers: headers, search: params }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    BaseClient.prototype.getPropertyWithIdSecured = function (id, property) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        var pathFormed = this._path + id + "/" + property;
        return this.http.get(pathFormed, { headers: headers, search: params }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    BaseClient.prototype.putWithIdSecured = function (id, updateIt) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        var pathFormed = this._path + id;
        return this.http.put(pathFormed, updateIt, { headers: headers, search: params }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    BaseClient.prototype.putEntitySecured = function (updateIt) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        var pathFormed = this._path;
        return this.http.put(pathFormed, updateIt, { headers: headers, search: params }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    BaseClient.prototype.postEntity = function (entity) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        var pathFormed = this._path;
        return this.http.post(pathFormed, entity, { headers: headers }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    BaseClient.prototype.deleteEntity = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        var pathFormed = this._path + id;
        return this.http.delete(pathFormed, { headers: headers }).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    BaseClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"],
            _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["OidcSecurityService"], String])
    ], BaseClient);
    return BaseClient;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/api/dataset.service.ts":
/*!******************************************************!*\
  !*** ./src/app/jaqpot-client/api/dataset.service.ts ***!
  \******************************************************/
/*! exports provided: DatasetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetService", function() { return DatasetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_dataset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/dataset */ "./src/app/jaqpot-client/model/dataset.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _base_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base.client */ "./src/app/jaqpot-client/api/base.client.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { BASE_PATH, COLLECTION_FORMATS } from '../variables';





var DatasetService = /** @class */ (function (_super) {
    __extends(DatasetService, _super);
    function DatasetService(http, sessionServise, dialogsService, oidcSecurityService) {
        var _this = _super.call(this, http, dialogsService, oidcSecurityService, "/dataset/") || this;
        _this.sessionServise = sessionServise;
        _this.dialogsService = dialogsService;
        _this.oidcSecurityService = oidcSecurityService;
        _this._datasetBase = "/dataset/";
        return _this;
    }
    DatasetService.prototype.uploadNewDataset = function (dataset) {
        var _this = this;
        dataset.existence = _model_dataset__WEBPACK_IMPORTED_MODULE_4__["Dataset"].ExistenceEnum.UPLOADED;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        var pathFormed = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].JaqpotBase + this._datasetBase;
        return this.http.post(pathFormed, dataset, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    DatasetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_9__["OidcSecurityService"]])
    ], DatasetService);
    return DatasetService;
}(_base_client__WEBPACK_IMPORTED_MODULE_8__["BaseClient"]));

// public getFeaturedDatasets(start?: number, max?: number): Observable<Array<Dataset>> {
//     let params = new URLSearchParams();
//     params.set('start', start.toString());
//     params.set('max', max.toString());
//     let headers = new Headers({'Content-Type':'application/json'});
//     headers.set('subjectid', this._subjectId);
//     return this.http.get(this._allFeaturedDatasetsEndpoint, { headers: headers, search: params }).pipe(
//         map((res : Response) => {
//             return res.json();
//         }),catchError(this.dialogsService.onError));
// }
// public getAllDatasets(start?: number, max?: number): Observable<Array<Dataset>> {
//     let params = new URLSearchParams();
//     params.set('start', start.toString());
//     params.set('max', max.toString());
//     let headers = new Headers({'Content-Type':'application/json'});
//     headers.set('subjectid', this._subjectId);
//     return this.http.get(this._allDatasetsEndpoint, { headers: headers, search: params }).pipe(
//         map((res : Response) => {
//             return res.json();
//         }),catchError(this.dialogsService.onError));
// }
// public getFeaturedDatasetCount(): Observable<Response> {
//     let params = new URLSearchParams();
//     params.set('start', '0');
//     params.set('max', '1');
//     let headers = new Headers({'Content-Type':'application/json'});
//     headers.set('subjectid', this._subjectId);
//     return this.http.get(this._allFeaturedDatasetsEndpoint, { headers: headers, search: params }).pipe(
//         map((res : Response) => {
//             return res;
//         }), catchError(this.dialogsService.onError));
// }
// public getAllDatasetCount(): Observable<Response> {
//     let params = new URLSearchParams();
//     params.set('start', '0');
//     params.set('max', '1');
//     let headers = new Headers({'Content-Type':'application/json'});
//     headers.set('subjectid', this._subjectId);
//     return this.http.get(this._allDatasetsEndpoint, { headers: headers, search: params }).pipe(
//         map((res : Response) => {
//             return res;
//         }), catchError(this.dialogsService.onError));
// }
// /**
//  * Finds Dataset by Id
//  * Finds specified Dataset
//  * @param id
//  * @param subjectid Authorization token
//  * @param rowStart: number 
//  * @param rowMax :number
//  * @param colStart :number
//  * @param colMax :number
//  * @param stratify :string
//  * @param seed :number
//  * @param folds :number
//  * @param targetFeature :string
//  */
// public getDataset(id: string,
//                 queryParams :Map<string, any>): Observable<Dataset> {
//     let params = new URLSearchParams();
//     if(queryParams != null){
//         queryParams.forEach((key:string, value:any) =>{
//             params.set(key, value.toString());
//         })
//     }
//     let headers = new Headers({'Content-Type':'application/json'});
//     headers.set('subjectid', this._subjectId);
//     let options = new RequestOptions({ headers: headers, params: params });
//     return this.http.get(this._basePath + `/dataset/${id}`, options).pipe(
//         map((res : Response) => {
//             return res.json();
//         }), catchError((error:any)=>{
//             return observableThrowError(error);
//         }));
// }
//     protected basePath = 'http://dev.jaqpot.org:8081/jaqpot/services';
//     public defaultHeaders: Headers = new Headers();
//     public configuration: Configuration = new Configuration();
//     constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
//         if (basePath) {
//             this.basePath = basePath;
//         }
//         if (configuration) {
//             this.configuration = configuration;
// 			this.basePath = basePath || configuration.basePath || this.basePath;
//         }
//     }
//     /**
//      *
//      * Extends object by coping non-existing properties.
//      * @param objA object to be extended
//      * @param objB source object
//      */
//     private extendObj<T1,T2>(objA: T1, objB: T2) {
//         for(let key in objB){
//             if(objB.hasOwnProperty(key)){
//                 (objA as any)[key] = (objB as any)[key];
//             }
//         }
//         return <T1&T2>objA;
//     }
//     /**
//      * @param consumes string[] mime-types
//      * @return true: consumes contains 'multipart/form-data', false: otherwise
//      */
//     private canConsumeForm(consumes: string[]): boolean {
//         const form = 'multipart/form-data';
//         for (let consume of consumes) {
//             if (form === consume) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     /**
//      * Creates a new Dataset
//      * The new Dataset created will be assigned on a random generated Id
//      * @param subjectid Authorization token
//      * @param body
//      */
//     public createDataset(subjectid?: string, body?: Dataset, extraHttpRequestParams?: any): Observable<Dataset> {
//         return this.createDatasetWithHttpInfo(subjectid, body, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates dummy dataset By .csv document
//      * Creates dummy features/substances, returns Dataset
//      * @param file xls[m,x] file
//      * @param title Title of dataset
//      * @param description Description of dataset
//      * @param subjectid
//      */
//     public createDummyDataset(file: Blob, title: string, description: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Dataset> {
//         return this.createDummyDatasetWithHttpInfo(file, title, description, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates a new empty Dataset
//      * The new empty Dataset created will be assigned on a random generated Id
//      * @param subjectid Authorization token
//      * @param title
//      * @param description
//      */
//     public createEmptyDataset(subjectid?: string, title?: string, description?: string, extraHttpRequestParams?: any): Observable<Dataset> {
//         return this.createEmptyDatasetWithHttpInfo(subjectid, title, description, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates QPRF Report
//      *
//      * @param id
//      * @param subjectid Authorization token
//      * @param substanceUri
//      * @param title
//      * @param description
//      */
//     public createQPRFReport(id: string, subjectid?: string, substanceUri?: string, title?: string, description?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.createQPRFReportWithHttpInfo(id, subjectid, substanceUri, title, description, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates QPRF Dummy Report
//      *
//      * @param id
//      * @param subjectid Authorization token
//      * @param substanceUri
//      * @param title
//      * @param description
//      */
//     public createQPRFReportDummy(id: string, subjectid?: string, substanceUri?: string, title?: string, description?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.createQPRFReportDummyWithHttpInfo(id, subjectid, substanceUri, title, description, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Deletes dataset
//      *
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public deleteDataset(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.deleteDatasetWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds Dataset by Id
//      * Finds specified Dataset
//      * @param id
//      * @param subjectid Authorization token
//      * @param rowStart
//      * @param rowMax
//      * @param colStart
//      * @param colMax
//      * @param stratify
//      * @param seed
//      * @param folds
//      * @param targetFeature
//      */
//     public getDataset(id: string, subjectid?: string, rowStart?: number, rowMax?: number, colStart?: number, colMax?: number, stratify?: string, seed?: number, folds?: number, targetFeature?: string, extraHttpRequestParams?: any): Observable<Response> {
//         return this.getDatasetWithHttpInfo(id, subjectid, rowStart, rowMax, colStart, colMax, stratify, seed, folds, targetFeature, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response || {};
//                 }
//             });
//     }
//     /**
//      * Finds Features of Dataset by Id
//      * Finds specified Dataset&#39;s features
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getDatasetFeatures(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Dataset> {
//         return this.getDatasetFeaturesWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds MetaData of Dataset by Id
//      * Finds specified Dataset&#39;s MetaData
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getDatasetMeta(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Dataset> {
//         return this.getDatasetMetaWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds all Datasets
//      * Finds all Datasets in the DB of Jaqpot and returns them in a list. Results can be obtained either in the form of a URI list or as a JSON list as specified by the Accept HTTP header. In the latter case, a list will be returned containing only the IDs of the datasets, their metadata and their ontological classes. The parameter max, which specifies the maximum number of IDs to be listed is limited to 500; if the client specifies a larger value, an HTTP Warning Header will be returned (RFC 2616) with code P670.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listDatasets(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Array<Dataset>> {
//         return this.listDatasetsWithHttpInfo(subjectid, start, max, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds all Datasets
//      * Finds Featured Datasets in the DB of Jaqpot and returns them in a list. Results can be obtained either in the form of a URI list or as a JSON list as specified by the Accept HTTP header. In the latter case, a list will be returned containing only the IDs of the datasets, their metadata and their ontological classes. The parameter max, which specifies the maximum number of IDs to be listed is limited to 500; if the client specifies a larger value, an HTTP Warning Header will be returned (RFC 2616) with code P670.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listFeaturedDatasets(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Array<Dataset>> {
//         return this.listFeaturedDatasetsWithHttpInfo(subjectid, start, max, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Merges Datasets
//      * The new intersected Dataset created will be assigned on a random generated Id
//      * @param datasetUris
//      * @param subjectid
//      */
//     public mergeDatasets(datasetUris?: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Dataset> {
//         return this.mergeDatasetsWithHttpInfo(datasetUris, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates a new Dataset
//      * The new Dataset created will be assigned on a random generated Id
//      * @param subjectid Authorization token
//      * @param body
//      */
//     public createDatasetWithHttpInfo(subjectid?: string, body?: Dataset, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'text/uri-list',
//             'application/json'
//         ];
//         headers.set('Content-Type', 'application/json');
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Creates dummy dataset By .csv document
//      * Creates dummy features/substances, returns Dataset
//      * @param file xls[m,x] file
//      * @param title Title of dataset
//      * @param description Description of dataset
//      * @param subjectid
//      */
//     public createDummyDatasetWithHttpInfo(file: Blob, title: string, description: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/createDummyDataset';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'file' is not null or undefined
//         if (file === null || file === undefined) {
//             throw new Error('Required parameter file was null or undefined when calling createDummyDataset.');
//         }
//         // verify required parameter 'title' is not null or undefined
//         if (title === null || title === undefined) {
//             throw new Error('Required parameter title was null or undefined when calling createDummyDataset.');
//         }
//         // verify required parameter 'description' is not null or undefined
//         if (description === null || description === undefined) {
//             throw new Error('Required parameter description was null or undefined when calling createDummyDataset.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Content-Type header
//         let consumes: string[] = [
//           'multipart/form-data',
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         useForm = canConsumeForm;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//         ];
//       const formData = new FormData();
//         if (file !== undefined) {
//           formData.append('file', <any>file);
//           // formParams.set('file', <any>file);
//         }
//         if (title !== undefined) {
//           formData.append('title', <any>title);
//           // formParams.set('title', <any>title);
//         }
//         if (description !== undefined) {
//           formData.append('description', <any>description);
//           // formParams.set('description', <any>description);
//         }
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formData,
//             search: queryParameters,
//             withCredentials: this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Creates a new empty Dataset
//      * The new empty Dataset created will be assigned on a random generated Id
//      * @param subjectid Authorization token
//      * @param title
//      * @param description
//      */
//     public createEmptyDatasetWithHttpInfo(subjectid?: string, title?: string, description?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/empty';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };
//         // to determine the Accept header
//         let produces: string[] = [
//             'text/uri-list',
//             'application/json'
//         ];
//         if (title !== undefined) {
//             formParams.set('title', <any>title);
//         }
//         if (description !== undefined) {
//             formParams.set('description', <any>description);
//         }
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Creates QPRF Report
//      *
//      * @param id
//      * @param subjectid Authorization token
//      * @param substanceUri
//      * @param title
//      * @param description
//      */
//     public createQPRFReportWithHttpInfo(id: string, subjectid?: string, substanceUri?: string, title?: string, description?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/${id}/qprf'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling createQPRFReport.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         if (substanceUri !== undefined) {
//             formParams.set('substance_uri', <any>substanceUri);
//         }
//         if (title !== undefined) {
//             formParams.set('title', <any>title);
//         }
//         if (description !== undefined) {
//             formParams.set('description', <any>description);
//         }
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Creates QPRF Dummy Report
//      *
//      * @param id
//      * @param subjectid Authorization token
//      * @param substanceUri
//      * @param title
//      * @param description
//      */
//     public createQPRFReportDummyWithHttpInfo(id: string, subjectid?: string, substanceUri?: string, title?: string, description?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/${id}/qprf-dummy'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling createQPRFReportDummy.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         if (substanceUri !== undefined) {
//             formParams.set('substance_uri', <any>substanceUri);
//         }
//         if (title !== undefined) {
//             formParams.set('title', <any>title);
//         }
//         if (description !== undefined) {
//             formParams.set('description', <any>description);
//         }
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Deletes dataset
//      *
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public deleteDatasetWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling deleteDataset.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Delete,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds Dataset by Id
//      * Finds specified Dataset
//      * @param id
//      * @param subjectid Authorization token
//      * @param rowStart
//      * @param rowMax
//      * @param colStart
//      * @param colMax
//      * @param stratify
//      * @param seed
//      * @param folds
//      * @param targetFeature
//      */
//     public getDatasetWithHttpInfo(id: string, subjectid?: string, rowStart?: number, rowMax?: number, colStart?: number, colMax?: number, stratify?: string, seed?: number, folds?: number, targetFeature?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getDataset.');
//         }
//         if (rowStart !== undefined) {
//             queryParameters.set('rowStart', <any>rowStart);
//         }
//         if (rowMax !== undefined) {
//             queryParameters.set('rowMax', <any>rowMax);
//         }
//         if (colStart !== undefined) {
//             queryParameters.set('colStart', <any>colStart);
//         }
//         if (colMax !== undefined) {
//             queryParameters.set('colMax', <any>colMax);
//         }
//         if (stratify !== undefined) {
//             queryParameters.set('stratify', <any>stratify);
//         }
//         if (seed !== undefined) {
//             queryParameters.set('seed', <any>seed);
//         }
//         if (folds !== undefined) {
//             queryParameters.set('folds', <any>folds);
//         }
//         if (targetFeature !== undefined) {
//             queryParameters.set('target_feature', <any>targetFeature);
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'text/csv',
//         ];
//         headers.set('Accept', 'text/csv');
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds Features of Dataset by Id
//      * Finds specified Dataset&#39;s features
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getDatasetFeaturesWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/${id}/features'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getDatasetFeatures.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds MetaData of Dataset by Id
//      * Finds specified Dataset&#39;s MetaData
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getDatasetMetaWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/${id}/meta'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getDatasetMeta.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds all Datasets
//      * Finds all Datasets in the DB of Jaqpot and returns them in a list. Results can be obtained either in the form of a URI list or as a JSON list as specified by the Accept HTTP header. In the latter case, a list will be returned containing only the IDs of the datasets, their metadata and their ontological classes. The parameter max, which specifies the maximum number of IDs to be listed is limited to 500; if the client specifies a larger value, an HTTP Warning Header will be returned (RFC 2616) with code P670.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listDatasetsWithHttpInfo(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (start !== undefined) {
//             queryParameters.set('start', <any>start);
//         }
//         if (max !== undefined) {
//             queryParameters.set('max', <any>max);
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds all Datasets
//      * Finds Featured Datasets in the DB of Jaqpot and returns them in a list. Results can be obtained either in the form of a URI list or as a JSON list as specified by the Accept HTTP header. In the latter case, a list will be returned containing only the IDs of the datasets, their metadata and their ontological classes. The parameter max, which specifies the maximum number of IDs to be listed is limited to 500; if the client specifies a larger value, an HTTP Warning Header will be returned (RFC 2616) with code P670.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listFeaturedDatasetsWithHttpInfo(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/featured';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (start !== undefined) {
//             queryParameters.set('start', <any>start);
//         }
//         if (max !== undefined) {
//             queryParameters.set('max', <any>max);
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Merges Datasets
//      * The new intersected Dataset created will be assigned on a random generated Id
//      * @param datasetUris
//      * @param subjectid
//      */
//     public mergeDatasetsWithHttpInfo(datasetUris?: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/dataset/merge';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         if (datasetUris !== undefined) {
//             formParams.set('dataset_uris', <any>datasetUris);
//         }
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
// }


/***/ }),

/***/ "./src/app/jaqpot-client/api/feature.service.ts":
/*!******************************************************!*\
  !*** ./src/app/jaqpot-client/api/feature.service.ts ***!
  \******************************************************/
/*! exports provided: FeatureApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureApiService", function() { return FeatureApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _base_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.client */ "./src/app/jaqpot-client/api/base.client.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeatureApiService = /** @class */ (function (_super) {
    __extends(FeatureApiService, _super);
    function FeatureApiService(http, sessionServise, dialogsService, oidcSecurityService) {
        var _this = _super.call(this, http, dialogsService, oidcSecurityService, "/feature/") || this;
        _this.sessionServise = sessionServise;
        _this.dialogsService = dialogsService;
        _this.oidcSecurityService = oidcSecurityService;
        _this._featureBase = "/feature/";
        return _this;
    }
    FeatureApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__["DialogsService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__["OidcSecurityService"]])
    ], FeatureApiService);
    return FeatureApiService;
}(_base_client__WEBPACK_IMPORTED_MODULE_6__["BaseClient"]));



/***/ }),

/***/ "./src/app/jaqpot-client/api/model.service.ts":
/*!****************************************************!*\
  !*** ./src/app/jaqpot-client/api/model.service.ts ***!
  \****************************************************/
/*! exports provided: ModelApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelApiService", function() { return ModelApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _base_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.client */ "./src/app/jaqpot-client/api/base.client.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModelApiService = /** @class */ (function (_super) {
    __extends(ModelApiService, _super);
    function ModelApiService(http, sessionServise, dialogsService, oidcSecurityService) {
        var _this = _super.call(this, http, dialogsService, oidcSecurityService, "/model/") || this;
        _this.sessionServise = sessionServise;
        _this.dialogsService = dialogsService;
        _this.oidcSecurityService = oidcSecurityService;
        _this._datasetBase = "/model/";
        return _this;
    }
    ModelApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__["DialogsService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_6__["OidcSecurityService"]])
    ], ModelApiService);
    return ModelApiService;
}(_base_client__WEBPACK_IMPORTED_MODULE_5__["BaseClient"]));

// /**
//  * Jaqpot API
//  * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
//  *
//  * OpenAPI spec version: 4.0.3
//  * Contact: hampos@me.com
//  *
//  * NOTE: This class is auto generated by the swagger code generator program.
//  * https://github.com/swagger-api/swagger-codegen.git
//  * Do not edit the class manually.
//  */
// /* tslint:disable:no-unused-variable member-ordering */
// import { Inject, Injectable, Optional }                      from '@angular/core';
// import { Http, Headers, URLSearchParams }                    from '@angular/http';
// import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
// import { Response, ResponseContentType }                     from '@angular/http';
// import { Observable }                                        from 'rxjs/Observable';
// import '../rxjs-operators';
// import { Model } from '../model/model';
// import { Task } from '../model/task';
// import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
// import { Configuration }                                     from '../configuration';
// @Injectable()
// export class ModelService {
//     protected basePath = 'http://dev.jaqpot.org:8081/jaqpot/services';
//     public defaultHeaders: Headers = new Headers();
//     public configuration: Configuration = new Configuration();
//     constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
//         if (basePath) {
//             this.basePath = basePath;
//         }
//         if (configuration) {
//             this.configuration = configuration;
// 			this.basePath = basePath || configuration.basePath || this.basePath;
//         }
//     }
//     /**
//      *
//      * Extends object by coping non-existing properties.
//      * @param objA object to be extended
//      * @param objB source object
//      */
//     private extendObj<T1,T2>(objA: T1, objB: T2) {
//         for(let key in objB){
//             if(objB.hasOwnProperty(key)){
//                 (objA as any)[key] = (objB as any)[key];
//             }
//         }
//         return <T1&T2>objA;
//     }
//     /**
//      * @param consumes string[] mime-types
//      * @return true: consumes contains 'multipart/form-data', false: otherwise
//      */
//     private canConsumeForm(consumes: string[]): boolean {
//         const form = 'multipart/form-data';
//         for (let consume of consumes) {
//             if (form === consume) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     /**
//      * Deletes a particular Model resource
//      * Deletes a Model of a given ID. The method is idempondent, that is it can be used more than once without triggering an exception/error. If the Model does not exist, the method will return without errors. Authentication and authorization requirements apply, so clients that are not authenticated with a valid token or do not have sufficient priviledges will not be able to delete Models using this method.
//      * @param id ID of the Model.
//      * @param subjectid Clients need to authenticate in order to create resources on the server
//      */
//     public deleteModel(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<undefined> {
//         return this.deleteModelWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204 || response.status ===  200)  {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds Model by Id
//      * Finds specified Model
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public getModel(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Model> {
//         return this.getModelWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds Model by Id
//      * Finds specified Model
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public getModelPmml(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.getModelPmmlWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds all Models
//      * Finds featured Models from Jaqpot database. The response will list all models and will return either a URI list of a list of JSON model objects. In the latter case, only the IDs, metadata, ontological classes and reliability of the models will be returned. Use the parameters start and max to get paginated results.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listFeaturedModels(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<{}> {
//         return this.listFeaturedModelsWithHttpInfo(subjectid, start, max, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Lists the dependent features of a Model
//      * Lists the dependent features of a Model identified by its ID. The result is available as a URI list.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public listModelDependentFeatures(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.listModelDependentFeaturesWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Lists the independent features of a Model
//      * Lists the independent features of a Model. The result is available as a URI list.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public listModelIndependentFeatures(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.listModelIndependentFeaturesWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Lists the dependent features of a Model
//      * Lists the predicted features of a Model identified by its ID. The result is available as a URI list.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public listModelPredictedFeatures(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.listModelPredictedFeaturesWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Lists the required features of a Model
//      * Lists the required features of a Model identified by its ID. The result is available as a URI list.
//      * @param id
//      * @param subjectId
//      */
//     public listModelRequiredFeatures(id: string, subjectId?: string, extraHttpRequestParams?: any): Observable<Array<string>> {
//         return this.listModelRequiredFeaturesWithHttpInfo(id, subjectId, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds all Models
//      * Finds all Models from Jaqpot Dataset. The response will list all models and will return either a URI list of a list of JSON model objects. In the latter case, only the IDs, metadata, ontological classes and reliability of the models will be returned. Use the parameters start and max to get paginated results.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listModels(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<{}> {
//         return this.listModelsWithHttpInfo(subjectid, start, max, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Creates Prediction
//      * Creates Prediction
//      * @param datasetUri
//      * @param id
//      * @param visible
//      * @param subjectid
//      */
//     public makePrediction(datasetUri: string, id: string, visible?: boolean, subjectid?: string, extraHttpRequestParams?: any): Observable<Task> {
//         return this.makePredictionWithHttpInfo(datasetUri, id, visible, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Deletes a particular Model resource
//      * Deletes a Model of a given ID. The method is idempondent, that is it can be used more than once without triggering an exception/error. If the Model does not exist, the method will return without errors. Authentication and authorization requirements apply, so clients that are not authenticated with a valid token or do not have sufficient priviledges will not be able to delete Models using this method.
//      * @param id ID of the Model.
//      * @param subjectid Clients need to authenticate in order to create resources on the server
//      */
//     public deleteModelWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling deleteModel.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//       headers.set('Content-Type', 'application/json');
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Delete,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds Model by Id
//      * Finds specified Model
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public getModelWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getModel.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list',
//             'application/ld+json'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds Model by Id
//      * Finds specified Model
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public getModelPmmlWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}/pmml'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getModelPmml.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/xml'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds all Models
//      * Finds featured Models from Jaqpot database. The response will list all models and will return either a URI list of a list of JSON model objects. In the latter case, only the IDs, metadata, ontological classes and reliability of the models will be returned. Use the parameters start and max to get paginated results.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listFeaturedModelsWithHttpInfo(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/featured';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (start !== undefined) {
//             queryParameters.set('start', <any>start);
//         }
//         if (max !== undefined) {
//             queryParameters.set('max', <any>max);
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Lists the dependent features of a Model
//      * Lists the dependent features of a Model identified by its ID. The result is available as a URI list.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public listModelDependentFeaturesWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}/dependent'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling listModelDependentFeatures.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Lists the independent features of a Model
//      * Lists the independent features of a Model. The result is available as a URI list.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public listModelIndependentFeaturesWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}/independent'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling listModelIndependentFeatures.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Lists the dependent features of a Model
//      * Lists the predicted features of a Model identified by its ID. The result is available as a URI list.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access models
//      */
//     public listModelPredictedFeaturesWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}/predicted'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling listModelPredictedFeatures.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Lists the required features of a Model
//      * Lists the required features of a Model identified by its ID. The result is available as a URI list.
//      * @param id
//      * @param subjectId
//      */
//     public listModelRequiredFeaturesWithHttpInfo(id: string, subjectId?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}/required'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling listModelRequiredFeatures.');
//         }
//         if (subjectId !== undefined && subjectId !== null) {
//             headers.set('subjectId', String(subjectId));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Finds all Models
//      * Finds all Models from Jaqpot Dataset. The response will list all models and will return either a URI list of a list of JSON model objects. In the latter case, only the IDs, metadata, ontological classes and reliability of the models will be returned. Use the parameters start and max to get paginated results.
//      * @param subjectid Authorization token
//      * @param start start
//      * @param max max - the server imposes an upper limit of 500 on this parameter.
//      */
//     public listModelsWithHttpInfo(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (start !== undefined) {
//             queryParameters.set('start', <any>start);
//         }
//         if (max !== undefined) {
//             queryParameters.set('max', <any>max);
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Creates Prediction
//      * Creates Prediction
//      * @param datasetUri
//      * @param id
//      * @param visible
//      * @param subjectid
//      */
//     public makePredictionWithHttpInfo(datasetUri: string, id: string, visible?: boolean, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/model/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'datasetUri' is not null or undefined
//         if (datasetUri === null || datasetUri === undefined) {
//             throw new Error('Required parameter datasetUri was null or undefined when calling makePrediction.');
//         }
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling makePrediction.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];
//       headers.set('Content-Type', 'application/x-www-form-urlencoded');
//       if (datasetUri !== undefined) {
//             formParams.set('dataset_uri', <any>datasetUri);
//         }
//         if (visible !== undefined) {
//             formParams.set('visible', <any>visible);
//         }
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
// }


/***/ }),

/***/ "./src/app/jaqpot-client/api/notification.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/jaqpot-client/api/notification.service.ts ***!
  \***********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _base_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base.client */ "./src/app/jaqpot-client/api/base.client.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { BASE_PATH, COLLECTION_FORMATS } from '../variables';





var NotificationService = /** @class */ (function (_super) {
    __extends(NotificationService, _super);
    function NotificationService(http, sessionServise, dialogsService, oidcSecurityService) {
        var _this = _super.call(this, http, dialogsService, oidcSecurityService, "/notification/") || this;
        _this.sessionServise = sessionServise;
        _this.dialogsService = dialogsService;
        _this.oidcSecurityService = oidcSecurityService;
        _this._notificationBase = "/notification/";
        _this._privateBasePath = _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].JaqpotBase + _this._notificationBase;
        return _this;
    }
    NotificationService.prototype.getUnreadNotifications = function () {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        params.set("query", "UNREAD");
        var pathFormed = this._privateBasePath;
        return this.http.get(pathFormed, { headers: headers, search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcSecurityService"]])
    ], NotificationService);
    return NotificationService;
}(_base_client__WEBPACK_IMPORTED_MODULE_8__["BaseClient"]));



/***/ }),

/***/ "./src/app/jaqpot-client/api/organization.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/jaqpot-client/api/organization.service.ts ***!
  \***********************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _base_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.client */ "./src/app/jaqpot-client/api/base.client.ts");
/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:no-unused-variable member-ordering */







var OrganizationService = /** @class */ (function (_super) {
    __extends(OrganizationService, _super);
    function OrganizationService(http, sessionServise, dialogsService, oidcSecurityService) {
        var _this = _super.call(this, http, dialogsService, oidcSecurityService, "/organization/") || this;
        _this.sessionServise = sessionServise;
        _this.dialogsService = dialogsService;
        _this.oidcSecurityService = oidcSecurityService;
        _this._organizationBase = "/organization/";
        return _this;
    }
    OrganizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__["DialogsService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__["OidcSecurityService"]])
    ], OrganizationService);
    return OrganizationService;
}(_base_client__WEBPACK_IMPORTED_MODULE_6__["BaseClient"]));



/***/ }),

/***/ "./src/app/jaqpot-client/api/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/jaqpot-client/api/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jaqpot-client/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _base_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base.client */ "./src/app/jaqpot-client/api/base.client.ts");
/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:no-unused-variable member-ordering */




// import { BASE_PATH, COLLECTION_FORMATS } from '../variables';





var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    // private _getUsers : string;
    // private _getUserID : string;
    // private _getUserIdQuota : string;
    function UserService(http, sessionServise, dialogsService, oidcSecurityService) {
        var _this = _super.call(this, http, dialogsService, oidcSecurityService, "/user/") || this;
        _this.http = http;
        _this.sessionServise = sessionServise;
        _this.dialogsService = dialogsService;
        _this.oidcSecurityService = oidcSecurityService;
        _this._privateBasePath = _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].JaqpotBase;
        _this._userBase = _this._privateBasePath + "/user/";
        return _this;
    }
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        return this.http.get(this._userBase + id, { headers: headers, search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    UserService.prototype.updateUserById = function (id, user) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        return this.http.put(this._userBase + id, user, { headers: headers, search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    UserService.prototype.searchUserByName = function (name) {
        var _this = this;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var token = this.oidcSecurityService.getToken();
        var tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        params.set('name', name);
        return this.http.get(this._userBase + "ids", { headers: headers, search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.dialogsService.onError(err); }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcSecurityService"]])
    ], UserService);
    return UserService;
}(_base_client__WEBPACK_IMPORTED_MODULE_8__["BaseClient"]));

//     protected basePath = 'http://dev.jaqpot.org:8081/jaqpot/services';
//     public defaultHeaders: Headers = new Headers();
//     public configuration: Configuration = new Configuration();
//     constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
//         if (basePath) {
//             this.basePath = basePath;
//         }
//         if (configuration) {
//             this.configuration = configuration;
// 			this.basePath = basePath || configuration.basePath || this.basePath;
//         }
//     }
//     /**
//      *
//      * Extends object by coping non-existing properties.
//      * @param objA object to be extended
//      * @param objB source object
//      */
//     private extendObj<T1,T2>(objA: T1, objB: T2) {
//         for(let key in objB){
//             if(objB.hasOwnProperty(key)){
//                 (objA as any)[key] = (objB as any)[key];
//             }
//         }
//         return <T1&T2>objA;
//     }
//     /**
//      * @param consumes string[] mime-types
//      * @return true: consumes contains 'multipart/form-data', false: otherwise
//      */
//     private canConsumeForm(consumes: string[]): boolean {
//         const form = 'multipart/form-data';
//         for (let consume of consumes) {
//             if (form === consume) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     /**
//      * Finds User by Id
//      * Finds specified user
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access this resource
//      */
//     public getUser(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.getUserWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Retrieves user&#39;s quota
//      * Returns user&#39;s quota given the user&#39;s ID. Authenicated users can access only their own quota. Jaqpot administrators can access the quota of all Jaqpot users.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access this resource
//      */
//     public getUserQuota(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.getUserQuotaWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Lists all Users (admins only)
//      * Lists all Users of Jaqpot Quattro. This operation can only be performed by the system administrators.
//      * @param subjectid Clients need to authenticate in order to access models
//      * @param start start
//      * @param max max
//      */
//     public listUsers(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<{}> {
//         return this.listUsersWithHttpInfo(subjectid, start, max, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }
//     /**
//      * Finds User by Id
//      * Finds specified user
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access this resource
//      */
//     public getUserWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/user/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getUser.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Retrieves user&#39;s quota
//      * Returns user&#39;s quota given the user&#39;s ID. Authenicated users can access only their own quota. Jaqpot administrators can access the quota of all Jaqpot users.
//      * @param id
//      * @param subjectid Clients need to authenticate in order to access this resource
//      */
//     public getUserQuotaWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/user/${id}/quota'
//                     .replace('${' + 'id' + '}', String(id));
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getUserQuota.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
//     /**
//      * Lists all Users (admins only)
//      * Lists all Users of Jaqpot Quattro. This operation can only be performed by the system administrators.
//      * @param subjectid Clients need to authenticate in order to access models
//      * @param start start
//      * @param max max
//      */
//     public listUsersWithHttpInfo(subjectid?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/user';
//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
//         if (start !== undefined) {
//             queryParameters.set('start', <any>start);
//         }
//         if (max !== undefined) {
//             queryParameters.set('max', <any>max);
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }
//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];
//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }
//         return this.http.request(path, requestOptions);
//     }
// }


/***/ }),

/***/ "./src/app/jaqpot-client/builders/data-entry-builder.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/jaqpot-client/builders/data-entry-builder.service.ts ***!
  \**********************************************************************/
/*! exports provided: DataEntryBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataEntryBuilderService", function() { return DataEntryBuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataEntryBuilderService = /** @class */ (function () {
    function DataEntryBuilderService() {
        this.dataEntry = {};
        this.entryId = {};
        this.dataEntry.entryId = this.entryId;
    }
    DataEntryBuilderService.prototype.setEntryIdName = function (name) {
        this.dataEntry.entryId.name = name;
    };
    DataEntryBuilderService.prototype.setOwnerUUID = function (uuid) {
        this.dataEntry.entryId.ownerUUID = uuid;
    };
    DataEntryBuilderService.prototype.setEntryIdType = function (type) {
        this.dataEntry.entryId.type = type;
    };
    DataEntryBuilderService.prototype.setURI = function (uri) {
        this.dataEntry.entryId.URI = uri;
    };
    DataEntryBuilderService.prototype.setDataEntry = function (values) {
        this.dataEntry.values = values;
    };
    DataEntryBuilderService.prototype.build = function () {
        return this.dataEntry;
    };
    DataEntryBuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataEntryBuilderService);
    return DataEntryBuilderService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/builders/dataset-builder.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/jaqpot-client/builders/dataset-builder.service.ts ***!
  \*******************************************************************/
/*! exports provided: DatasetBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetBuilderService", function() { return DatasetBuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetBuilderService = /** @class */ (function () {
    function DatasetBuilderService() {
        this.dataset = {};
        this.dataset.features = [];
        this.dataset.dataEntry = [];
    }
    DatasetBuilderService.prototype.setMeta = function (metaInfo) {
        this.dataset.meta = metaInfo;
    };
    DatasetBuilderService.prototype.setFeatureInfoFromFeatures = function (_features) {
        var _feat_infos = [];
        _features.forEach(function (f) {
            var _feat_info = {};
            if (f.id != null) {
                _feat_info.uri = _config_config__WEBPACK_IMPORTED_MODULE_1__["Config"].JaqpotBase + "/feature/" + f.id;
            }
            if (f.units != null) {
                _feat_info.units = f.units;
            }
            _feat_info.name = f.meta.titles[0];
            _feat_infos.push(_feat_info);
        });
        this.dataset.features = _feat_infos;
    };
    DatasetBuilderService.prototype.appendfeatureInfo = function (featInfo) {
        this.dataset.features.push(featInfo);
    };
    DatasetBuilderService.prototype.setTotalRows = function (rows) {
        this.dataset.totalRows = rows;
    };
    DatasetBuilderService.prototype.setTotalCols = function (cols) {
        this.dataset.totalColumns = cols;
    };
    DatasetBuilderService.prototype.setExistenceUploaded = function (existence) {
        this.dataset.existence = existence;
    };
    DatasetBuilderService.prototype.appendDataEntry = function (dataEntry) {
        this.dataset.dataEntry.push(dataEntry);
    };
    DatasetBuilderService.prototype.build = function () {
        return this.dataset;
    };
    DatasetBuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatasetBuilderService);
    return DatasetBuilderService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/builders/feature-info-builder.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/jaqpot-client/builders/feature-info-builder.service.ts ***!
  \************************************************************************/
/*! exports provided: FeatureInfoBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureInfoBuilderService", function() { return FeatureInfoBuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureInfoBuilderService = /** @class */ (function () {
    function FeatureInfoBuilderService() {
        this.feature_info = {};
    }
    FeatureInfoBuilderService.prototype.setName = function (name) {
        this.feature_info.name = name;
    };
    FeatureInfoBuilderService.prototype.setUnits = function (units) {
        this.feature_info.units = units;
    };
    FeatureInfoBuilderService.prototype.setCategory = function (categ) {
        this.feature_info.category = categ;
    };
    FeatureInfoBuilderService.prototype.setUri = function (uri) {
        this.feature_info.uri = uri;
    };
    FeatureInfoBuilderService.prototype.setConditions = function (conditions) {
        this.feature_info.conditions = conditions;
    };
    FeatureInfoBuilderService.prototype.build = function () {
        return this.feature_info;
    };
    FeatureInfoBuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FeatureInfoBuilderService);
    return FeatureInfoBuilderService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/builders/meta-builder.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/jaqpot-client/builders/meta-builder.service.ts ***!
  \****************************************************************/
/*! exports provided: MetaBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaBuilderService", function() { return MetaBuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetaBuilderService = /** @class */ (function () {
    function MetaBuilderService() {
        this.metaInfo = {};
    }
    MetaBuilderService.prototype.setTitles = function (title) {
        var titles = [];
        this.metaInfo.titles.push(title);
    };
    MetaBuilderService.prototype.initilizeTitles = function () {
        this.metaInfo.titles = [];
    };
    MetaBuilderService.prototype.initializeDescriptions = function () {
        this.metaInfo.descriptions = [];
    };
    MetaBuilderService.prototype.initializeAudiences = function () {
        this.metaInfo.audiences = [];
    };
    MetaBuilderService.prototype.initializeComments = function () {
        this.metaInfo.comments = [];
    };
    MetaBuilderService.prototype.initializeTags = function () {
        this.metaInfo.tags = [];
    };
    MetaBuilderService.prototype.initializeSubjects = function () {
        this.metaInfo.subjects = [];
    };
    MetaBuilderService.prototype.setCreators = function (creator) {
        var creators = [];
        creators.push(creator);
        this.metaInfo.creators = creators;
    };
    MetaBuilderService.prototype.setAudiences = function (audiences) {
        var _audiences = [];
        _audiences.push(audiences);
        this.metaInfo.audiences = _audiences;
    };
    MetaBuilderService.prototype.setComments = function (comment) {
        var _comments = [];
        _comments.push(comment);
        this.metaInfo.comments = _comments;
    };
    MetaBuilderService.prototype.setContributtors = function (contributors) {
        var _contributors = [];
        _contributors.push(contributors);
        this.metaInfo.contributors = _contributors;
    };
    MetaBuilderService.prototype.setDescriptions = function (description) {
        var _descriptions = [];
        _descriptions.push(description);
        this.metaInfo.descriptions = _descriptions;
    };
    MetaBuilderService.prototype.setTags = function (tag) {
        var _tag = [];
        _tag.push(tag);
        this.metaInfo.tags = _tag;
    };
    MetaBuilderService.prototype.build = function () {
        return this.metaInfo;
    };
    MetaBuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MetaBuilderService);
    return MetaBuilderService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/builders/notification-builder.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/jaqpot-client/builders/notification-builder.service.ts ***!
  \************************************************************************/
/*! exports provided: NotificationBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBuilderService", function() { return NotificationBuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationBuilderService = /** @class */ (function () {
    function NotificationBuilderService() {
        this.notification = {};
    }
    NotificationBuilderService.prototype.setOwner = function (owner) {
        this.notification.owner = owner;
    };
    NotificationBuilderService.prototype.setFrom = function (from) {
        this.notification.from = from;
    };
    NotificationBuilderService.prototype.setTo = function (to) {
        this.notification.to = to;
    };
    NotificationBuilderService.prototype.setType = function (type) {
        this.notification.type = type.toString();
    };
    NotificationBuilderService.prototype.setAnswer = function (answer) {
        this.notification.answer = answer.toString();
    };
    NotificationBuilderService.prototype.setBody = function (body) {
        this.notification.body = body;
    };
    NotificationBuilderService.prototype.setOrganizationInv = function (org) {
        this.notification.invitationTo = org;
    };
    NotificationBuilderService.prototype.setEntityShared = function (entityId) {
        this.notification.entityShared = entityId;
    };
    NotificationBuilderService.prototype.setViewd = function (viewed) {
        this.notification.viewed = viewed;
    };
    NotificationBuilderService.prototype.build = function () {
        return this.notification;
    };
    NotificationBuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationBuilderService);
    return NotificationBuilderService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/factories/dataset-factory.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/jaqpot-client/factories/dataset-factory.service.ts ***!
  \********************************************************************/
/*! exports provided: DatasetFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetFactoryService", function() { return DatasetFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _builders_dataset_builder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builders/dataset-builder.service */ "./src/app/jaqpot-client/builders/dataset-builder.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _builders_meta_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../builders/meta-builder.service */ "./src/app/jaqpot-client/builders/meta-builder.service.ts");
/* harmony import */ var _builders_feature_info_builder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../builders/feature-info-builder.service */ "./src/app/jaqpot-client/builders/feature-info-builder.service.ts");
/* harmony import */ var _builders_data_entry_builder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../builders/data-entry-builder.service */ "./src/app/jaqpot-client/builders/data-entry-builder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DatasetFactoryService = /** @class */ (function () {
    function DatasetFactoryService(sessionService) {
        this.sessionService = sessionService;
    }
    DatasetFactoryService.prototype.createDummyFromCsv = function (csv, id) {
        var _this = this;
        var _datasetBuilder = new _builders_dataset_builder_service__WEBPACK_IMPORTED_MODULE_1__["DatasetBuilderService"]();
        var _metaBuilder = new _builders_meta_builder_service__WEBPACK_IMPORTED_MODULE_3__["MetaBuilderService"]();
        var rows = csv.split(/\r?\n/);
        rows.forEach(function (r) {
            var data = r.split(/,|;/);
            if (data.length === 1) {
                var remove = rows.indexOf(r);
                rows.splice(remove, 1);
            }
        });
        var ids = rows[0].split(/,|;/);
        var id_index;
        if (id != "None") {
            id_index = ids.indexOf(id, 0);
            if (id_index > -1) {
                ids.splice(id_index, 1);
            }
        }
        rows.splice(0, 1);
        var userid = this.sessionService.getUserId();
        _metaBuilder.setCreators(userid);
        _metaBuilder.initializeAudiences();
        _metaBuilder.initializeComments();
        _metaBuilder.initializeDescriptions();
        _metaBuilder.initializeTags();
        _metaBuilder.initilizeTitles();
        _metaBuilder.initializeSubjects();
        var meta = _metaBuilder.build();
        _datasetBuilder.setMeta(meta);
        var featureInfos = [];
        ids.forEach(function (id) {
            var _featureInfoBuilder = new _builders_feature_info_builder_service__WEBPACK_IMPORTED_MODULE_4__["FeatureInfoBuilderService"]();
            _featureInfoBuilder.setName(id);
            _featureInfoBuilder.setUri('temporary/' + id);
            var featInfo = _featureInfoBuilder.build();
            _datasetBuilder.appendfeatureInfo(featInfo);
            featureInfos.push(featInfo);
        });
        var i = 1;
        rows.forEach(function (r) {
            var data_to_enter = r.split(/,|;/);
            if (id_index > -1) {
                var _dataEntryBuilder = new _builders_data_entry_builder_service__WEBPACK_IMPORTED_MODULE_5__["DataEntryBuilderService"]();
                _dataEntryBuilder.setEntryIdName(data_to_enter[id_index].toString());
                _dataEntryBuilder.setOwnerUUID(_this.sessionService.getUserId());
                data_to_enter.splice(id_index, 1);
                var values = {};
                for (var _i = 0; _i < data_to_enter.length; _i++) {
                    var featInfo = featureInfos[_i];
                    values[featInfo.uri] = data_to_enter[_i];
                }
                _dataEntryBuilder.setDataEntry(values);
                var _dataEntry = _dataEntryBuilder.build();
                _datasetBuilder.appendDataEntry(_dataEntry);
            }
            else {
                var _dataEntryBuilder = new _builders_data_entry_builder_service__WEBPACK_IMPORTED_MODULE_5__["DataEntryBuilderService"]();
                _dataEntryBuilder.setEntryIdName(i.toString());
                _dataEntryBuilder.setOwnerUUID(_this.sessionService.getUserId());
                var values = {};
                for (var _i = 0; _i < data_to_enter.length; _i++) {
                    var featInfo = featureInfos[_i];
                    values[featInfo.uri] = data_to_enter[_i];
                }
                _dataEntryBuilder.setDataEntry(values);
                var _dataEntry = _dataEntryBuilder.build();
                _datasetBuilder.appendDataEntry(_dataEntry);
            }
            i += 1;
        });
        var dataset = _datasetBuilder.build();
        return dataset;
    };
    DatasetFactoryService.prototype.createEmty = function () {
    };
    DatasetFactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DatasetFactoryService);
    return DatasetFactoryService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/factories/feature-factory.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/jaqpot-client/factories/feature-factory.service.ts ***!
  \********************************************************************/
/*! exports provided: FeatureFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureFactoryService", function() { return FeatureFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../session/session.service */ "./src/app/session/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureFactoryService = /** @class */ (function () {
    function FeatureFactoryService(_sessionService) {
        this._sessionService = _sessionService;
    }
    FeatureFactoryService.prototype.featFromFeatInfo = function (feature) {
        var _feature = {};
        var _meta = {};
        _meta.creators = [];
        _meta.titles = [];
        _meta.descriptions = [];
        _meta.comments = [];
        _meta.creators.push(this._sessionService.getUserId());
        _meta.titles.push(feature.name);
        _feature.ontologicalClasses = [];
        _feature.meta = _meta;
        return _feature;
    };
    FeatureFactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_session_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], FeatureFactoryService);
    return FeatureFactoryService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/factories/notification-factory.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/jaqpot-client/factories/notification-factory.service.ts ***!
  \*************************************************************************/
/*! exports provided: NotificationFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationFactoryService", function() { return NotificationFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _builders_notification_builder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builders/notification-builder.service */ "./src/app/jaqpot-client/builders/notification-builder.service.ts");
/* harmony import */ var _model_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/notification */ "./src/app/jaqpot-client/model/notification.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationFactoryService = /** @class */ (function () {
    function NotificationFactoryService() {
    }
    NotificationFactoryService.prototype.emptyNotification = function () {
        var notifBuilder = new _builders_notification_builder_service__WEBPACK_IMPORTED_MODULE_1__["NotificationBuilderService"]();
        this.notification = notifBuilder.build();
        return this.notification;
    };
    NotificationFactoryService.prototype.invitationNotification = function (from, to, invitationToOrg) {
        var body = "Invitation to become a member of the Organization " + invitationToOrg;
        var notifBuilder = new _builders_notification_builder_service__WEBPACK_IMPORTED_MODULE_1__["NotificationBuilderService"]();
        notifBuilder.setFrom(from);
        notifBuilder.setBody(body);
        notifBuilder.setTo(to);
        notifBuilder.setOwner(to);
        notifBuilder.setType(_model_notification__WEBPACK_IMPORTED_MODULE_2__["TYPE"].INVITATION);
        notifBuilder.setOrganizationInv(invitationToOrg);
        notifBuilder.setViewd(false);
        this.notification = notifBuilder.build();
        return this.notification;
    };
    NotificationFactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationFactoryService);
    return NotificationFactoryService;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/index.ts":
/*!****************************************!*\
  !*** ./src/app/jaqpot-client/index.ts ***!
  \****************************************/
/*! exports provided: Dataset, BASE_PATH, COLLECTION_FORMATS, JaqpotClientModule, BibTeX, FeatureInfo, Parameter, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/models */ "./src/app/jaqpot-client/model/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dataset", function() { return _model_models__WEBPACK_IMPORTED_MODULE_0__["Dataset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BibTeX", function() { return _model_models__WEBPACK_IMPORTED_MODULE_0__["BibTeX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureInfo", function() { return _model_models__WEBPACK_IMPORTED_MODULE_0__["FeatureInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return _model_models__WEBPACK_IMPORTED_MODULE_0__["Parameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _model_models__WEBPACK_IMPORTED_MODULE_0__["Task"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/app/jaqpot-client/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"]; });

/* harmony import */ var _jaqpot_client_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jaqpot-client.module */ "./src/app/jaqpot-client/jaqpot-client.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JaqpotClientModule", function() { return _jaqpot_client_module__WEBPACK_IMPORTED_MODULE_2__["JaqpotClientModule"]; });

// export * from './api/api';





/***/ }),

/***/ "./src/app/jaqpot-client/jaqpot-client.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/jaqpot-client/jaqpot-client.module.ts ***!
  \*******************************************************/
/*! exports provided: JaqpotClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JaqpotClientModule", function() { return JaqpotClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _api_aa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/aa.service */ "./src/app/jaqpot-client/api/aa.service.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session/session.service */ "./src/app/session/session.service.ts");
/* harmony import */ var _session_session_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../session/session.module */ "./src/app/session/session.module.ts");
/* harmony import */ var _api_algorithm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/algorithm.service */ "./src/app/jaqpot-client/api/algorithm.service.ts");
/* harmony import */ var _api_dataset_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/dataset.service */ "./src/app/jaqpot-client/api/dataset.service.ts");
/* harmony import */ var _api_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/model.service */ "./src/app/jaqpot-client/api/model.service.ts");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/user.service */ "./src/app/jaqpot-client/api/user.service.ts");
/* harmony import */ var _api_organization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/organization.service */ "./src/app/jaqpot-client/api/organization.service.ts");
/* harmony import */ var _factories_notification_factory_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factories/notification-factory.service */ "./src/app/jaqpot-client/factories/notification-factory.service.ts");
/* harmony import */ var _builders_notification_builder_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./builders/notification-builder.service */ "./src/app/jaqpot-client/builders/notification-builder.service.ts");
/* harmony import */ var _api_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/notification.service */ "./src/app/jaqpot-client/api/notification.service.ts");
/* harmony import */ var _builders_dataset_builder_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./builders/dataset-builder.service */ "./src/app/jaqpot-client/builders/dataset-builder.service.ts");
/* harmony import */ var _factories_dataset_factory_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./factories/dataset-factory.service */ "./src/app/jaqpot-client/factories/dataset-factory.service.ts");
/* harmony import */ var _factories_feature_factory_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./factories/feature-factory.service */ "./src/app/jaqpot-client/factories/feature-factory.service.ts");
/* harmony import */ var _api_feature_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api/feature.service */ "./src/app/jaqpot-client/api/feature.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ConfigService } from '../app.';




// import { AlgorithmService } from './api/algorithm.service';
// import { BibtexService } from './api/bibtex.service';

// import { DoseresponseService } from './api/doseresponse.service';
// import { EnmService } from './api/enm.service';
// import { FeatureService } from './api/feature.service';
// import { InterlabService } from './api/interlab.service';

// import { OpenrisknetService } from './api/openrisknet.service';
// import { PmmlService } from './api/pmml.service';
// import { ReadacrossService } from './api/readacross.service';
// import { ReportService } from './api/report.service';
// import { TaskService } from './api/task.service';









// import { DatasetApiFacadeService } from './facades/dataset-api-facade.service';
// import { ValidationService } from './api/validation.service';
var JaqpotClientModule = /** @class */ (function () {
    function JaqpotClientModule() {
    }
    JaqpotClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"], _session_session_module__WEBPACK_IMPORTED_MODULE_4__["SessionModule"]],
            declarations: [],
            exports: [],
            providers: [
                _api_aa_service__WEBPACK_IMPORTED_MODULE_2__["AaService"],
                _session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
                _api_algorithm_service__WEBPACK_IMPORTED_MODULE_5__["AlgorithmService"],
                _api_feature_service__WEBPACK_IMPORTED_MODULE_16__["FeatureApiService"],
                // AlgorithmService, 
                // BibtexService, 
                _api_dataset_service__WEBPACK_IMPORTED_MODULE_6__["DatasetService"],
                // DoseresponseService, 
                // EnmService, 
                // FeatureService, 
                // InterlabService, 
                _api_model_service__WEBPACK_IMPORTED_MODULE_7__["ModelApiService"],
                // OpenrisknetService, 
                // PmmlService, 
                // ReadacrossService, 
                // ReportService, 
                // TaskService, 
                _api_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
                _api_organization_service__WEBPACK_IMPORTED_MODULE_9__["OrganizationService"],
                _api_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
                // ValidationService 
                _factories_notification_factory_service__WEBPACK_IMPORTED_MODULE_10__["NotificationFactoryService"],
                _builders_notification_builder_service__WEBPACK_IMPORTED_MODULE_11__["NotificationBuilderService"],
                _builders_dataset_builder_service__WEBPACK_IMPORTED_MODULE_13__["DatasetBuilderService"],
                _factories_dataset_factory_service__WEBPACK_IMPORTED_MODULE_14__["DatasetFactoryService"],
                _factories_feature_factory_service__WEBPACK_IMPORTED_MODULE_15__["FeatureFactoryService"],
            ]
        })
    ], JaqpotClientModule);
    return JaqpotClientModule;
}());



/***/ }),

/***/ "./src/app/jaqpot-client/model/bibTeX.ts":
/*!***********************************************!*\
  !*** ./src/app/jaqpot-client/model/bibTeX.ts ***!
  \***********************************************/
/*! exports provided: BibTeX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibTeX", function() { return BibTeX; });
/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var BibTeX;
(function (BibTeX) {
    var BibTypeEnum;
    (function (BibTypeEnum) {
        BibTypeEnum[BibTypeEnum["Article"] = 'Article'] = "Article";
        BibTypeEnum[BibTypeEnum["Book"] = 'Book'] = "Book";
        BibTypeEnum[BibTypeEnum["Conference"] = 'Conference'] = "Conference";
        BibTypeEnum[BibTypeEnum["Phdthesis"] = 'Phdthesis'] = "Phdthesis";
        BibTypeEnum[BibTypeEnum["Booklet"] = 'Booklet'] = "Booklet";
        BibTypeEnum[BibTypeEnum["Inbook"] = 'Inbook'] = "Inbook";
        BibTypeEnum[BibTypeEnum["Incollection"] = 'Incollection'] = "Incollection";
        BibTypeEnum[BibTypeEnum["Inproceedings"] = 'Inproceedings'] = "Inproceedings";
        BibTypeEnum[BibTypeEnum["Manual"] = 'Manual'] = "Manual";
        BibTypeEnum[BibTypeEnum["Mastersthesis"] = 'Mastersthesis'] = "Mastersthesis";
        BibTypeEnum[BibTypeEnum["Misc"] = 'Misc'] = "Misc";
        BibTypeEnum[BibTypeEnum["Proceedings"] = 'Proceedings'] = "Proceedings";
        BibTypeEnum[BibTypeEnum["TechReport"] = 'TechReport'] = "TechReport";
        BibTypeEnum[BibTypeEnum["Unpublished"] = 'Unpublished'] = "Unpublished";
        BibTypeEnum[BibTypeEnum["Entry"] = 'Entry'] = "Entry";
    })(BibTypeEnum = BibTeX.BibTypeEnum || (BibTeX.BibTypeEnum = {}));
})(BibTeX || (BibTeX = {}));


/***/ }),

/***/ "./src/app/jaqpot-client/model/dataset.ts":
/*!************************************************!*\
  !*** ./src/app/jaqpot-client/model/dataset.ts ***!
  \************************************************/
/*! exports provided: Dataset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataset", function() { return Dataset; });
/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Dataset;
(function (Dataset) {
    var DescriptorsEnum;
    (function (DescriptorsEnum) {
        DescriptorsEnum[DescriptorsEnum["EXPERIMENTAL"] = 'EXPERIMENTAL'] = "EXPERIMENTAL";
        DescriptorsEnum[DescriptorsEnum["IMAGE"] = 'IMAGE'] = "IMAGE";
        DescriptorsEnum[DescriptorsEnum["GO"] = 'GO'] = "GO";
        DescriptorsEnum[DescriptorsEnum["MOPAC"] = 'MOPAC'] = "MOPAC";
        DescriptorsEnum[DescriptorsEnum["CDK"] = 'CDK'] = "CDK";
        DescriptorsEnum[DescriptorsEnum["PREDICTED"] = 'PREDICTED'] = "PREDICTED";
    })(DescriptorsEnum = Dataset.DescriptorsEnum || (Dataset.DescriptorsEnum = {}));
})(Dataset || (Dataset = {}));
(function (Dataset) {
    var ExistenceEnum;
    (function (ExistenceEnum) {
        ExistenceEnum[ExistenceEnum["EXPERIMENTAL"] = 'EXPERIMENTAL'] = "EXPERIMENTAL";
        ExistenceEnum[ExistenceEnum["UPLOADED"] = 'UPLOADED'] = "UPLOADED";
        ExistenceEnum[ExistenceEnum["CREATED"] = 'CREATED'] = "CREATED";
        ExistenceEnum[ExistenceEnum["TRANFORMED"] = "TRANSFORMED"] = "TRANFORMED";
        ExistenceEnum[ExistenceEnum["PREDICTED"] = "PREDICTED"] = "PREDICTED";
        ExistenceEnum[ExistenceEnum["DESCRIPTORSADDED"] = "DESCRIPTORSADDED"] = "DESCRIPTORSADDED";
    })(ExistenceEnum = Dataset.ExistenceEnum || (Dataset.ExistenceEnum = {}));
})(Dataset || (Dataset = {}));


/***/ }),

/***/ "./src/app/jaqpot-client/model/featureInfo.ts":
/*!****************************************************!*\
  !*** ./src/app/jaqpot-client/model/featureInfo.ts ***!
  \****************************************************/
/*! exports provided: FeatureInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureInfo", function() { return FeatureInfo; });
/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var FeatureInfo;
(function (FeatureInfo) {
    var CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["EXPERIMENTAL"] = 'EXPERIMENTAL'] = "EXPERIMENTAL";
        CategoryEnum[CategoryEnum["IMAGE"] = 'IMAGE'] = "IMAGE";
        CategoryEnum[CategoryEnum["GO"] = 'GO'] = "GO";
        CategoryEnum[CategoryEnum["MOPAC"] = 'MOPAC'] = "MOPAC";
        CategoryEnum[CategoryEnum["CDK"] = 'CDK'] = "CDK";
        CategoryEnum[CategoryEnum["PREDICTED"] = 'PREDICTED'] = "PREDICTED";
    })(CategoryEnum = FeatureInfo.CategoryEnum || (FeatureInfo.CategoryEnum = {}));
})(FeatureInfo || (FeatureInfo = {}));


/***/ }),

/***/ "./src/app/jaqpot-client/model/models.ts":
/*!***********************************************!*\
  !*** ./src/app/jaqpot-client/model/models.ts ***!
  \***********************************************/
/*! exports provided: Dataset, BibTeX, FeatureInfo, Parameter, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bibTeX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bibTeX */ "./src/app/jaqpot-client/model/bibTeX.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BibTeX", function() { return _bibTeX__WEBPACK_IMPORTED_MODULE_0__["BibTeX"]; });

/* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset */ "./src/app/jaqpot-client/model/dataset.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dataset", function() { return _dataset__WEBPACK_IMPORTED_MODULE_1__["Dataset"]; });

/* harmony import */ var _featureInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featureInfo */ "./src/app/jaqpot-client/model/featureInfo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureInfo", function() { return _featureInfo__WEBPACK_IMPORTED_MODULE_2__["FeatureInfo"]; });

/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameter */ "./src/app/jaqpot-client/model/parameter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return _parameter__WEBPACK_IMPORTED_MODULE_3__["Parameter"]; });

/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/app/jaqpot-client/model/task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _task__WEBPACK_IMPORTED_MODULE_4__["Task"]; });








/***/ }),

/***/ "./src/app/jaqpot-client/model/notification.ts":
/*!*****************************************************!*\
  !*** ./src/app/jaqpot-client/model/notification.ts ***!
  \*****************************************************/
/*! exports provided: TYPE, ANSWER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANSWER", function() { return ANSWER; });
var TYPE;
(function (TYPE) {
    TYPE["SIMPLE"] = "SIMPLE";
    TYPE["INVITATION"] = "INVITATION";
    TYPE["FYI"] = "FYI";
    TYPE["SHAREMODEL"] = "SHAREMODEL";
    TYPE["SHAREDATASET"] = "SHAREDATASET";
})(TYPE || (TYPE = {}));
var ANSWER;
(function (ANSWER) {
    ANSWER["ACEEPT"] = "ACCEPT";
    ANSWER["DECLINE"] = "DECLINE";
})(ANSWER || (ANSWER = {}));


/***/ }),

/***/ "./src/app/jaqpot-client/model/parameter.ts":
/*!**************************************************!*\
  !*** ./src/app/jaqpot-client/model/parameter.ts ***!
  \**************************************************/
/*! exports provided: Parameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return Parameter; });
/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Parameter;
(function (Parameter) {
    var ScopeEnum;
    (function (ScopeEnum) {
        ScopeEnum[ScopeEnum["OPTIONAL"] = 'OPTIONAL'] = "OPTIONAL";
        ScopeEnum[ScopeEnum["MANDATORY"] = 'MANDATORY'] = "MANDATORY";
    })(ScopeEnum = Parameter.ScopeEnum || (Parameter.ScopeEnum = {}));
})(Parameter || (Parameter = {}));


/***/ }),

/***/ "./src/app/jaqpot-client/model/task.ts":
/*!*********************************************!*\
  !*** ./src/app/jaqpot-client/model/task.ts ***!
  \*********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Task;
(function (Task) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["TRAINING"] = 'TRAINING'] = "TRAINING";
        TypeEnum[TypeEnum["PREDICTION"] = 'PREDICTION'] = "PREDICTION";
        TypeEnum[TypeEnum["PREPARATION"] = 'PREPARATION'] = "PREPARATION";
        TypeEnum[TypeEnum["VALIDATION"] = 'VALIDATION'] = "VALIDATION";
    })(TypeEnum = Task.TypeEnum || (Task.TypeEnum = {}));
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["RUNNING"] = 'RUNNING'] = "RUNNING";
        StatusEnum[StatusEnum["COMPLETED"] = 'COMPLETED'] = "COMPLETED";
        StatusEnum[StatusEnum["CANCELLED"] = 'CANCELLED'] = "CANCELLED";
        StatusEnum[StatusEnum["ERROR"] = 'ERROR'] = "ERROR";
        StatusEnum[StatusEnum["REJECTED"] = 'REJECTED'] = "REJECTED";
        StatusEnum[StatusEnum["QUEUED"] = 'QUEUED'] = "QUEUED";
    })(StatusEnum = Task.StatusEnum || (Task.StatusEnum = {}));
})(Task || (Task = {}));


/***/ }),

/***/ "./src/app/jaqpot-client/rxjs-operators.ts":
/*!*************************************************!*\
  !*** ./src/app/jaqpot-client/rxjs-operators.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// RxJS imports according to https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
// Operators


/***/ }),

/***/ "./src/app/jaqpot-client/variables.ts":
/*!********************************************!*\
  !*** ./src/app/jaqpot-client/variables.ts ***!
  \********************************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|',
};


/***/ }),

/***/ "./src/app/models/models-module.module.ts":
/*!************************************************!*\
  !*** ./src/app/models/models-module.module.ts ***!
  \************************************************/
/*! exports provided: ModelsModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsModuleModule", function() { return ModelsModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelsModuleModule = /** @class */ (function () {
    function ModelsModuleModule() {
    }
    ModelsModuleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], ModelsModuleModule);
    return ModelsModuleModule;
}());



/***/ }),

/***/ "./src/app/models/models.component.css":
/*!*********************************************!*\
  !*** ./src/app/models/models.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".models{\n    min-width: 100%;\n    min-height: 100%;\n    height: 600px;\n    /* width: 100%; */\n    width: 600px;\n}"

/***/ }),

/***/ "./src/app/models/models.component.html":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"models\">\n  models works!\n</p>\n"

/***/ }),

/***/ "./src/app/models/models.component.ts":
/*!********************************************!*\
  !*** ./src/app/models/models.component.ts ***!
  \********************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelsComponent = /** @class */ (function () {
    function ModelsComponent() {
    }
    ModelsComponent.prototype.ngOnInit = function () {
    };
    ModelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-models',
            template: __webpack_require__(/*! ./models.component.html */ "./src/app/models/models.component.html"),
            styles: [__webpack_require__(/*! ./models.component.css */ "./src/app/models/models.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization-base/organization-base.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/organization/organization-base/organization-base.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".org-photo{\n  height: 8em;\n}\n\n.orgcard {\n  width: 60%;\n  margin-left: 18%;\n  margin-top: 5%;\n  margin-bottom: 4em;\n}\n\n.orgphotoall {\n  margin-top: -4em;\n  float: left;\n  width: 100%;\n  padding-bottom: 3em;\n}\n\n.orgim {\n  float: left;\n  border-radius: 15%;\n  border: 2px solid lightgrey;\n}\n\n.orgiddiv {\n  height: 100%;\n  margin-left: 10em;\n  margin-top: 2em;\n  bottom: 0%;\n  position: absolute;\n}\n\n.contemail {\n  width: 1.5em;\n  float: left;\n  margin-top: 0.5em;\n  /* margin-left: 1em; */\n}\n\n.orgweb {\n  margin-top: 1em;\n  width: 40%;\n  position: absolute;\n}\n\n.edit-website{\n  margin-left: 1em;\n  margin-top: -1em;\n}\n\n.website{\n  width:90%;\n}\n\n.orgcontact {\n  width: 90%;\n  float: left;\n  position: absolute;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n\n.socialpng {\n  width: 2em;\n  float: left;\n  margin-top: -0.4em;\n}\n\n.base-div{\n  width: 80%;\n}\n\n/* .base-div{\n  margin-left: 5%;\n  width: 80%;\n} */\n\n.orgsite {\n  text-decoration: none;\n  margin-left: 1em;\n  float:left;\n}\n\n.orgbase {\n  position: relative;\n  padding-top: 1em;\n  margin-left: 1em;\n  width: 100%;\n}\n\n.orgweb {\n  width: 30%;\n  float: left;\n}\n\n.about {\n  width: 40%;\n  margin-top: 8em;\n  margin-left: 1em;\n}\n\n.abouttitle{\n  margin-top: 12em;\n}\n\n.org-not-pic {\n  width: 6em;\n  height: 6em;\n}\n\n.edit-about-form{\n  margin-top: 2em;\n  width: 60%;\n}\n\n.edit-about-unput{\n  margin-top: 2em;\n  width: 40%;\n  margin-left: 1em;\n}\n\n.about-text{\n  height: 120px;\n}\n\n.org-users{\n  float: right;\n  margin-right: 5%;\n  margin-top: 2%;\n  width:50%;\n}\n\n.edit {\n  display: inline-block;\n  position: fixed;\n  bottom: 100px;\n  right: 20px;\n  transition: all .2s ease-in-out;\n  color: lightseagreen;\n  opacity: 0.4;\n}\n\n.edit:hover {\n  transition: all .2s ease-in-out;\n  opacity: 1;\n}\n\n.delete{\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  transition: all .2s ease-in-out;\n  color: lightseagreen;\n  opacity: 0.4;\n}\n\n.delete:hover {\n  transition: all .2s ease-in-out;\n  opacity: 1;\n}\n\n.save_b {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  color: lightseagreen;\n}\n\n.edit-country{\n  margin-left: 2em;\n}\n"

/***/ }),

/***/ "./src/app/organization/organization-base/organization-base.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/organization/organization-base/organization-base.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"orgcard\">\n  <mat-card-header>\n\n    <div class=\"orgphotoall\">\n      <div class=\"org-photo\" *ngIf=\"photo_unavail else photo_avail\">\n        <button mat-fab color=\"warn\" class=\"org-not-pic\" matTooltip=\"Add photo\" matTooltipPosition=\"below\" (click)=\"addOrgPicDialog()\">\n          <mat-icon>add_a_photo</mat-icon>\n        </button>\n      </div>\n      <ng-template #photo_avail>\n        <div class=\"org-photo\">\n          <a matTooltip=\"Update photo\" matTooltipPosition=\"below\" (click)=\"addOrgPicDialog()\">\n            <img class=\"orgim\" [src]=\"organization.meta.picture\" />\n          </a>\n        </div>\n      </ng-template>\n\n      <div class=\"orgiddiv\">\n        <h2 class=\"orgid\">{{organization?._id}}</h2>\n        <div class=\"editlocation\" *ngIf=\"!edit_l else editlocation\">\n          <div *ngIf=\"organization?.city\">\n            <p class=\"orgwhere\">{{organization?.city}}, {{organization?.country}}</p>\n          </div>\n        </div>\n\n        <ng-template #editlocation>\n          <div *ngIf=\"organization\">\n            <mat-form-field class=\"edit-city\">\n              <textarea matInput placeholder=\"Edit City\" [(ngModel)]=\"organization.city\"></textarea>\n            </mat-form-field>\n            <mat-form-field class=\"edit-country\">\n              <textarea matInput placeholder=\"Edit Country\" [(ngModel)]=\"organization.country\"></textarea>\n            </mat-form-field>\n          </div>\n\n        </ng-template>\n      </div>\n\n    </div>\n\n  </mat-card-header>\n  <mat-card-content>\n\n    <mat-divider style=\"width: 94%; margin-left: 3%;\"></mat-divider>\n\n    <div class=\"orgbase\">\n\n\n      <div class=\"orgweb\">\n\n        <div class=\"edidsite\" *ngIf=\"!edit_w else editwebsite\">\n          <div class=\"website\" *ngIf=\"organization?.website\">\n            <img class=\"socialpng\" src=\"assets/internet.png\">\n            <a class=\"orgsite\" href=\"organization?.website\">{{organization?.website}}</a>\n          </div>\n        </div>\n\n        <ng-template #editwebsite>\n          <img class=\"socialpng\" src=\"assets/internet.png\">\n          <div *ngIf=\"organization\">\n            <mat-form-field class=\"edit-website\">\n              <textarea matInput placeholder=\"Website\" [(ngModel)]=\"organization.website\"></textarea>\n            </mat-form-field>\n          </div>\n        </ng-template>\n\n\n        <div class=\"editcontact\" *ngIf=\"!edit_c else editcontact\">\n\n          <div class=\"orgcontact\">\n            <mat-icon class=\"contemail\">alternate_email</mat-icon>\n            <p class=\"contact\"> {{organization?.contact}}</p>\n          </div>\n\n        </div>\n        <ng-template #editcontact>\n          <div *ngIf=\"organization\">\n            <mat-icon class=\"contemail\">alternate_email</mat-icon>\n            <mat-form-field class=\"edit-contact\">\n              <textarea matInput placeholder=\"Contact\" [(ngModel)]=\"organization.contact\"></textarea>\n            </mat-form-field>\n          </div>\n        </ng-template>\n\n      </div>\n\n    </div>\n\n\n    <div *ngIf=\"organization\">\n      <app-organization-users class=\"org-users\" [organization]=\"organization\"></app-organization-users>\n    </div>\n\n\n    <div *ngIf=\"editabout else editaboutinp\">\n      <div class=\"about\">\n        <h3 class=\"abouttitle\">About {{organization?._id}}</h3>\n      </div>\n      <mat-form-field class=\"edit-about-unput\">\n        <textarea class=\"about-text\" matInput placeholder=\"Edit About\" [(ngModel)]=\"organization.about\"></textarea>\n      </mat-form-field>\n    </div>\n\n    <ng-template #editaboutinp>\n      <div class=\"about\">\n        <h3>About {{organization?._id}}</h3>\n        {{organization?.about}}\n      </div>\n    </ng-template>\n\n    <div *ngIf=\"organization\">\n      <app-organization-details [editFromP]=\"editFromP\" [organization]=\"organization\"></app-organization-details>\n    </div>\n\n  </mat-card-content>\n</mat-card>\n\n<span class=\"app-action\">\n  <div *ngIf=\"edit else save_b\">\n\n    <div *ngIf=\"canedit\">\n      <button class=\"edit\" matTooltip=\"Edit\" matTooltipPosition=\"after\" (click)=\"editForm()\" mat-fab>\n        <mat-icon>edit</mat-icon>\n      </button>\n    </div>\n\n    <button class=\"delete\" matTooltip=\"Delete\" matTooltipPosition=\"after\" (click)=\"deleteOrg()\" mat-fab>\n      <mat-icon>delete</mat-icon>\n    </button>\n  </div>\n  <ng-template #save_b>\n\n    <div *ngIf=\"canedit\">\n      <button class=\"save_b\" matTooltip=\"Save\" matTooltipPosition=\"after\" (click)=\"saveForm()\" mat-fab>\n        <mat-icon>save</mat-icon>\n      </button>\n    </div>\n  </ng-template>\n</span>\n"

/***/ }),

/***/ "./src/app/organization/organization-base/organization-base.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/organization/organization-base/organization-base.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrganizationBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationBaseComponent", function() { return OrganizationBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jaqpot-client/api/organization.service */ "./src/app/jaqpot-client/api/organization.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/profilepic-dialog/profilepic-dialog.component */ "./src/app/dialogs/profilepic-dialog/profilepic-dialog.component.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrganizationBaseComponent = /** @class */ (function () {
    function OrganizationBaseComponent(dialog, route, organizationService, dialogService, router) {
        this.dialog = dialog;
        this.route = route;
        this.organizationService = organizationService;
        this.dialogService = dialogService;
        this.router = router;
        this.editFromP = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.edit = false;
        this.canedit = false;
        this.photo_unavail = true;
        this.edit_l = false;
        this.edit_w = false;
        this.edit_c = false;
        this.editabout = false;
    }
    OrganizationBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.organizationService.getWithIdSecured(id).subscribe(function (orgGot) {
            _this.organization = orgGot;
            var userData = JSON.parse(sessionStorage.getItem('userData'));
            if (userData.groups.includes('/Administrator') && _this.organization._id === 'Jaqpot') {
                _this.edit = true;
                _this.canedit = true;
            }
            if (_this.organization.meta
                && _this.organization.meta.creators
                && _this.organization.meta.creators.includes(userData.sub)) {
                _this.edit = true;
                _this.canedit = true;
            }
            if (_this.organization.meta.picture == null) {
                _this.photo_unavail = true;
            }
            else {
                _this.photo_unavail = false;
            }
        });
    };
    OrganizationBaseComponent.prototype.ngAfterViewInit = function () {
    };
    OrganizationBaseComponent.prototype.addOrgPicDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_profilepic_dialog_profilepic_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ProfilepicDialogComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            _this.organization.meta.picture = result;
            _this.organizationService.putWithIdSecured(_this.organization._id, _this.organization)
                .subscribe(function (orgGot) {
                _this.organization = orgGot;
                if (_this.organization.meta.picture == null) {
                    _this.photo_unavail = true;
                }
                else {
                    _this.photo_unavail = false;
                }
            });
        });
    };
    OrganizationBaseComponent.prototype.editForm = function () {
        this.editFromP.next(true);
        this.edit = false;
        this.edit_l = true;
        this.edit_w = true;
        this.edit_c = true;
        this.editabout = true;
    };
    OrganizationBaseComponent.prototype.saveForm = function () {
        var _this = this;
        this.editFromP.next(false);
        this.edit = true;
        this.editabout = false;
        this.edit_l = false;
        this.edit_w = false;
        this.edit_c = false;
        this.organizationService.putWithIdSecured(this.organization._id, this.organization)
            .subscribe(function (orgGot) {
            _this.organization = orgGot;
            if (_this.organization.meta.picture == null) {
                _this.photo_unavail = true;
            }
            else {
                _this.photo_unavail = false;
            }
        });
    };
    OrganizationBaseComponent.prototype.deleteOrg = function () {
        var _this = this;
        this.dialogService.confirmDeletion().subscribe(function (result) {
            _this.confirmationResult = result;
            if (result === true) {
                _this.organizationService.deleteEntity(_this.organization._id)
                    .subscribe(function (resp) {
                    _this.router.navigate(["account"]);
                });
            }
        });
    };
    OrganizationBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-base',
            template: __webpack_require__(/*! ./organization-base.component.html */ "./src/app/organization/organization-base/organization-base.component.html"),
            styles: [__webpack_require__(/*! ./organization-base.component.css */ "./src/app/organization/organization-base/organization-base.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _jaqpot_client_api_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrganizationBaseComponent);
    return OrganizationBaseComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization-details/organization-details.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/organization/organization-details/organization-details.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    margin-top: 2em;\n}\n\n.orgmeta{\n    width:60%;\n    margin-top: 2em;\n    margin-left: 1em;\n}\n\n/* .add-description{\n    width: 75%;\n}\n\n.add-subject{\n    width: 75%;\n}\n\n.add-audience{\n    width: 75%;\n} */\n\n.audience{\n    width: 40%;\n    float:left;\n}\n\n.discription{\n    width: 40%;\n    float:left;\n}\n\n.subject{\n    width: 40%;\n    float:left;\n}\n\n.edit-description{\n    width: 75%;\n}\n\n.delete-description-b{\n    margin-left: 2em;;\n}\n\n.edit-subject{\n    width: 75%;\n}\n\n.delete-subject-b{\n    margin-left: 2em;;\n}\n\n.edit-audience{\n    width: 75%;\n}\n\n.delete-audience-b{\n    margin-left: 2em;;\n}\n\n"

/***/ }),

/***/ "./src/app/organization/organization-details/organization-details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/organization/organization-details/organization-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orgmeta\">\n  <div *ngIf=\"edit else noEdit\">\n    <h3>Descriptions</h3>\n    <div class=\"add-description\">\n      <div class=\"edit-description\" *ngFor=\"let dis of descriptions; let in=index; trackBy:trackByFn\">\n        <mat-form-field class=\"edit-description\">\n          <textarea matInput placeholder=\"description\" [(ngModel)]=\"descriptions[in]\">{{dis}}</textarea>\n        </mat-form-field>\n        <button class=\"delete-description-b\" mat-mini-fab color=\"primary\" (click)=\"deleteDescription(descriptions[in])\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n\n      <button class=\"add-description-b\" mat-mini-fab color=\"primary\" (click)=\"addDescription()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n  <ng-template #noEdit>\n    <div *ngIf=\"descriptions\"></div>\n    <h3>Descriptions</h3>\n    <ul>\n      <li *ngFor=\"let dis of descriptions\">{{dis}}</li>\n    </ul>\n  </ng-template>\n\n\n\n  <div *ngIf=\"edit else sub\">\n    <h3>Subjects</h3>\n    <div class=\"add-subject\">\n      <div class=\"edit-subject\" *ngFor=\"let subj of subjects; let in=index; trackBy:trackByFn\">\n        <mat-form-field class=\"edit-subject\">\n          <textarea matInput placeholder=\"subject\" [(ngModel)]=\"subjects[in]\">{{subj}}</textarea>\n        </mat-form-field>\n        <button class=\"delete-subject-b\" mat-mini-fab color=\"primary\" (click)=\"deleteSubject(subjects[in])\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n\n      <button class=\"add-subject-b\" mat-mini-fab color=\"primary\" (click)=\"addSubject()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n  <ng-template #sub>\n    <div *ngIf=\"subjects\">\n      <h3>Subjects</h3>\n      <ul>\n        <li *ngFor=\"let subj of subjects\">{{subj}}</li>\n      </ul>\n    </div>\n  </ng-template>\n\n\n  <div *ngIf=\"edit else aud\">\n    <h3>Audiences</h3>\n    <div class=\"add-audience\">\n      <div class=\"edit-audience\" *ngFor=\"let aud of audiences; let in=index; trackBy:trackByFn\">\n        <mat-form-field class=\"edit-audience\">\n          <textarea matInput placeholder=\"audience\" [(ngModel)]=\"audiences[in]\">{{aud}}</textarea>\n        </mat-form-field>\n        <button class=\"delete-audience-b\" mat-mini-fab color=\"primary\" (click)=\"deleteAudience(audiences[in])\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n\n      <button class=\"add-audience-b\" mat-mini-fab color=\"primary\" (click)=\"addAudience()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n  <ng-template #aud>\n    <div *ngIf=\"audiences\">\n      <h3>Audiences</h3>\n      <ul>\n        <li *ngFor=\"let aud of audiences\">{{aud}}</li>\n      </ul>\n    </div>\n  </ng-template>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/organization/organization-details/organization-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organization/organization-details/organization-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganizationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDetailsComponent", function() { return OrganizationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganizationDetailsComponent = /** @class */ (function () {
    function OrganizationDetailsComponent() {
        this.edit = false;
    }
    OrganizationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.descriptions = new Array();
        this.subjects = new Array();
        this.audiences = new Array();
        this.editFromP.subscribe(function (value) {
            _this.edit = value;
        });
        if (this.organization.meta != null) {
            if (this.organization.meta.descriptions != null) {
                this.descriptions = this.organization.meta.descriptions;
            }
        }
        if (this.organization.meta != null) {
            if (this.organization.meta.subjects != null) {
                this.subjects = this.organization.meta.subjects;
            }
        }
        if (this.organization.meta != null) {
            if (this.organization.meta.audiences != null) {
                this.audiences = this.organization.meta.audiences;
            }
        }
    };
    OrganizationDetailsComponent.prototype.ngOnDestroy = function () {
        this.editFromP.unsubscribe();
    };
    OrganizationDetailsComponent.prototype.addDescription = function () {
        this.descriptions.push("");
    };
    OrganizationDetailsComponent.prototype.deleteDescription = function (description) {
        var index = this.descriptions.indexOf(description);
        this.descriptions.splice(index, 1);
    };
    OrganizationDetailsComponent.prototype.addSubject = function () {
        this.subjects.push("");
    };
    OrganizationDetailsComponent.prototype.deleteSubject = function (subject) {
        var index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
    };
    OrganizationDetailsComponent.prototype.addAudience = function () {
        this.audiences.push("");
    };
    OrganizationDetailsComponent.prototype.deleteAudience = function (audience) {
        var index = this.audiences.indexOf(audience);
        this.audiences.splice(index, 1);
    };
    OrganizationDetailsComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], OrganizationDetailsComponent.prototype, "editFromP", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrganizationDetailsComponent.prototype, "organization", void 0);
    OrganizationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-details',
            template: __webpack_require__(/*! ./organization-details.component.html */ "./src/app/organization/organization-details/organization-details.component.html"),
            styles: [__webpack_require__(/*! ./organization-details.component.css */ "./src/app/organization/organization-details/organization-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrganizationDetailsComponent);
    return OrganizationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization-users/organization-users.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/organization/organization-users/organization-users.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users{\n    border: 1px solid lightgray;\n    border-radius: 20px;\n}\n\n.userhead{\n    width: 100%;\n    position: relative;\n    height: 3em;\n}\n\n.users-header{\n    margin-top: 1em;\n    margin-left: 5%;\n    width:50%;\n    float: left;\n}\n\n.userim{\n    border-radius: 50%;\n    width: 4em;\n}\n\n.user-grid{\n    padding-bottom: 2em;\n}\n\n.invite{\n   /* width: 20%; */\n   float: right;\n   margin-right: 1em;\n   margin-bottom: 4em;\n   margin-top: 0.5em;\n\n}"

/***/ }),

/***/ "./src/app/organization/organization-users/organization-users.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/organization/organization-users/organization-users.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users\">\n\n  <div class=\"userhead\">\n    <h3 class=\"users-header\">\n      Organization Members\n    </h3>\n    <div class=\"invite\" *ngIf=\"caninvite\">\n      <button matTooltip=\"Invite user to join\" mat-mini-fab color=\"primary\" (click)=\"openInviteDialog()\">\n        <mat-icon>send</mat-icon>\n      </button>\n    </div>\n  </div>\n\n  <mat-divider style=\"width:90%; margin-left: 5%; position: relative; margin-top: 1em; margin-bottom: 1em;\"></mat-divider>\n  <mat-grid-list class=\"user-grid\" cols=\"3\" rowHeight=\"60px\">\n    <mat-grid-tile *ngFor=\"let user of users\">\n      <div class=\"userphoto\" *ngIf=\"user.meta?.picture; else nopic\">\n        <a matTooltip=\"{{user.name}}\" matTooltipPosition=\"below\" (click)=\"openUserDialog()\">\n          <img class=\"userim\" [src]=\"user.meta.picture\" />\n        </a>\n      </div>\n      <ng-template #nopic>\n        <a matTooltip=\"{{user.name}}\" matTooltipPosition=\"below\" (click)=\"openUserDialog()\">\n          <button *ngIf=\"user.name\" mat-fab color=\"primary\">{{user.name.charAt(0)}}</button>\n        </a>\n      </ng-template>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/organization/organization-users/organization-users.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/organization/organization-users/organization-users.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrganizationUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationUsersComponent", function() { return OrganizationUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jaqpot-client/api/user.service */ "./src/app/jaqpot-client/api/user.service.ts");
/* harmony import */ var _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var _jaqpot_client_factories_notification_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jaqpot-client/factories/notification-factory.service */ "./src/app/jaqpot-client/factories/notification-factory.service.ts");
/* harmony import */ var _jaqpot_client_api_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jaqpot-client/api/notification.service */ "./src/app/jaqpot-client/api/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrganizationUsersComponent = /** @class */ (function () {
    function OrganizationUsersComponent(userService, notifFactory, notificationService, dialogsService, oidcService) {
        this.userService = userService;
        this.notifFactory = notifFactory;
        this.notificationService = notificationService;
        this.dialogsService = dialogsService;
        this.oidcService = oidcService;
        this.users = new Array();
        this.userIds = new Array();
        this.caninvite = false;
    }
    OrganizationUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.organization._id != "Jaqpot") {
            var userData = JSON.parse(sessionStorage.getItem('userData'));
            if (this.organization.meta.creators.includes(userData.sub)) {
                this.caninvite = true;
            }
            this.userIds = this.organization.userIds;
            var user_1 = {};
            this.userIds.forEach(function (id) {
                var userFormed = {};
                var metaInfo = {};
                userFormed._id = id;
                userFormed.meta = metaInfo;
                _this.userService.getPropertyWithIdSecured(id, "picture")
                    .subscribe(function (userGot) {
                    user_1 = userGot;
                    if (user_1.meta != null && user_1.meta.picture != null) {
                        userFormed.meta.picture = user_1.meta.picture;
                    }
                });
                _this.userService.getPropertyWithIdSecured(id, "occupation")
                    .subscribe(function (userGot) {
                    user_1 = userGot;
                    userFormed.occupation = user_1.occupation;
                });
                _this.userService.getPropertyWithIdSecured(id, "occupationat")
                    .subscribe(function (userGot) {
                    user_1 = userGot;
                    userFormed.occupationAt = user_1.occupationAt;
                });
                _this.userService.getPropertyWithIdSecured(id, "name")
                    .subscribe(function (userGot) {
                    user_1 = userGot;
                    userFormed.name = user_1.name;
                });
                _this.users.push(userFormed);
            });
        }
    };
    OrganizationUsersComponent.prototype.openInviteDialog = function () {
        this.dialogsService.inviteToOrganization(this.userService, this.notifFactory, this.organization, this.notificationService);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrganizationUsersComponent.prototype, "organization", void 0);
    OrganizationUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-users',
            template: __webpack_require__(/*! ./organization-users.component.html */ "./src/app/organization/organization-users/organization-users.component.html"),
            styles: [__webpack_require__(/*! ./organization-users.component.css */ "./src/app/organization/organization-users/organization-users.component.css")]
        }),
        __metadata("design:paramtypes", [_jaqpot_client_api_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _jaqpot_client_factories_notification_factory_service__WEBPACK_IMPORTED_MODULE_4__["NotificationFactoryService"],
            _jaqpot_client_api_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_3__["DialogsService"],
            _node_modules_angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_2__["OidcSecurityService"]])
    ], OrganizationUsersComponent);
    return OrganizationUsersComponent;
}());



/***/ }),

/***/ "./src/app/services/dataset-to-viewdata.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/dataset-to-viewdata.service.ts ***!
  \*********************************************************/
/*! exports provided: DatasetToViewdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetToViewdataService", function() { return DatasetToViewdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatasetToViewdataService = /** @class */ (function () {
    function DatasetToViewdataService() {
        this.data = [];
    }
    DatasetToViewdataService.prototype.createViewData = function (dataset, rows) {
        var _data_entry = dataset.dataEntry;
        var _featureInfo = dataset.features;
        var uri_name_map = {};
        var uris = [];
        _featureInfo.forEach(function (f) {
            uri_name_map[f.uri] = f.name;
            uris.push(f.uri);
        });
        var data_rows = [];
        _data_entry.forEach(function (de) {
            var data_row = {};
            // let data_row:Map<string,any> = new Map()
            var entryid = de.entryId;
            data_row['Id'] = entryid.name;
            var values = de.values;
            uris.forEach(function (uri) {
                var feature_name = uri_name_map[uri];
                data_row[feature_name] = values[uri];
            });
            data_rows.push(data_row);
        });
        return data_rows;
    };
    DatasetToViewdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatasetToViewdataService);
    return DatasetToViewdataService;
}());



/***/ }),

/***/ "./src/app/session/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/session/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/session/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(oidcSecurityService, router, sessionService) {
        this.oidcSecurityService = oidcSecurityService;
        this.router = router;
        this.sessionService = sessionService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        // console.log(route + '' + state);
        // console.log('AuthorizationGuard, canActivate');
        var _this = this;
        return this.oidcSecurityService.getIsAuthorized().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuthorized) {
            if (isAuthorized) {
                return true;
            }
            _this.router.navigate(['']);
            return false;
        }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__["OidcSecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/session/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ComponentService } from './component.service';
var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [],
            exports: [],
            entryComponents: [],
            providers: [
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]
                // SessionService,
                // ComponentService
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/session/session.service.ts":
/*!********************************************!*\
  !*** ./src/app/session/session.service.ts ***!
  \********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionService = /** @class */ (function () {
    function SessionService() {
        this.subjectId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.accessToken = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.token);
        this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //private loggedIn = new Subject<any>();
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.algorithm$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.algo);
        this.modelingAlgorithm$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.modelingAlgorithm);
        this.modelingDataset = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.datasetForDisplay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SessionService.prototype.getSubjectId = function () {
        return this.subjectId.asObservable();
    };
    // getLoggedIn(): Observable<any>{
    //    return this.loggedIn.asObservable();
    //  }
    SessionService.prototype.getUserId = function () {
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        this.userid = userData.sub;
        return this.userid;
    };
    SessionService.prototype.getUserName = function () {
        return this.userName.asObservable();
    };
    SessionService.prototype.getTheme = function () {
        return this.theme.asObservable();
    };
    SessionService.prototype.getAlgorithm = function () {
        return this.algorithm$.asObservable();
    };
    SessionService.prototype.clearAlgorithm = function () {
        this.algorithm$.next();
    };
    SessionService.prototype.setAlgorithm = function (algorithm) {
        this.algorithm$.next(algorithm);
    };
    SessionService.prototype.getDataset = function () {
        return this.dataset;
    };
    SessionService.prototype.clearDataset = function () {
        this.dataset = null;
    };
    SessionService.prototype.setDataset = function (dataset) {
        this.dataset = dataset;
    };
    SessionService.prototype.clearModelingAlgorithm = function () {
        this.modelingAlgorithm$.next();
    };
    SessionService.prototype.setModelingAlgorithm = function (algorithm) {
        this.modelingAlgorithm$.next(algorithm);
    };
    SessionService.prototype.getModelingAlgorithm = function () {
        return this.modelingAlgorithm$.asObservable();
    };
    SessionService.prototype.clearModelingDataset = function () {
        this.modelingDataset.next();
    };
    SessionService.prototype.setModelingDataset = function (dataset) {
        this.modelingDataset.next(dataset);
    };
    SessionService.prototype.getModelingDataset = function () {
        return this.modelingDataset.asObservable();
    };
    SessionService.prototype.setAccessToken = function (key, value) {
        console.log(value);
        localStorage.setItem(key, value);
    };
    // getAccessToken(){
    //     return this.accessToken.asObservable();
    // }
    SessionService.prototype.get = function (key) {
        return sessionStorage.getItem(key);
    };
    SessionService.prototype.remove = function (key) {
        switch (key) {
            case 'subjectId': {
                this.subjectId.next();
                break;
            }
            //case 'loggedIn':{
            //     var fal = "false";
            //     this.loggedIn.next({ fal });
            //      break;
            //   }
            case 'userName': {
                this.userName.next();
                break;
            }
        }
        return sessionStorage.removeItem(key);
    };
    SessionService.prototype.clear = function () {
        var nul = "null";
        this.subjectId.next({ nul: nul });
        //   this.loggedIn.next({ nul });
        this.userName.next({ nul: nul });
        return sessionStorage.clear();
    };
    SessionService.prototype.clearUsername = function () {
        this.userName.next();
        return sessionStorage.clear();
    };
    SessionService.prototype.clearSubject = function () {
        var nul = "null";
        this.subjectId.next({ nul: nul });
    };
    SessionService.prototype.set = function (key, data) {
        switch (key) {
            case 'subjectId': {
                this.subjectId.next({ data: data });
                break;
            }
            case 'userName': {
                this.userName.next({ data: data });
                break;
            }
            case 'theme': {
                this.theme.next({ data: data });
                break;
            }
        }
        return sessionStorage.setItem(key, data);
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/ui-models/credentials.ts":
/*!******************************************!*\
  !*** ./src/app/ui-models/credentials.ts ***!
  \******************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
var Credentials = /** @class */ (function () {
    function Credentials() {
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/app/ui-models/ui-models.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ui-models/ui-models.module.ts ***!
  \***********************************************/
/*! exports provided: UiModelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModelsModule", function() { return UiModelsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiModelsModule = /** @class */ (function () {
    function UiModelsModule() {
    }
    UiModelsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [],
            exports: [],
            entryComponents: [],
            providers: []
        })
    ], UiModelsModule);
    return UiModelsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/pantelispanka/Jaqpot/jaqpot/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/pantelispanka/Jaqpot/jaqpot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map