/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/coffee-brain-caffeine-neuroscincces.jpg.webp */ "./src/coffee-brain-caffeine-neuroscincces.jpg.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/latte-3.webp */ "./src/latte-3.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/espresso.webp */ "./src/espresso.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/americano.jpeg */ "./src/americano.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/cappuccino.jpeg */ "./src/cappuccino.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/mocha.png */ "./src/mocha.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/cold-brew.jpeg */ "./src/cold-brew.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/location.png */ "./src/location.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

/* Header */
header {
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
}

header h1 {
  color: white;
  font-weight: 500;
}

header ul {
  display: flex;
}

header li {
  list-style: none;
  cursor: pointer;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  position: relative;
  font-size: 1.2rem;
}
header li::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: burlywood;
  transition: width 0.3s ease, left 0.3s ease;
}

header li:hover {
  color: burlywood;
}
header li:hover::after {
  width: 100%;
  left: 0;
}

header li.active {
  color: burlywood; /* Change color for active state */
}

header li.active::after {
  width: 100%;
  left: 0;
}

/* Content Section */
#content {
  margin: 0px auto;
  width: 80%;
  min-height: 80vh;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Home tab */

#home-page-picture {
  border-radius: 200px;
  width: 200px;
  height: 200px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center
    no-repeat;
  background-size: 300px 200px;
}

#home-tab-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home-tab-h1 {
  text-align: center;
  max-width: 350px;
  line-height: 50px;
  margin: 20px;
}

#home-tab-h2 {
  margin: 20px;
}

/* Menu tab */

#menu-container {
  width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
}

#latte {
  width: 100px;
  height: 100px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) bottom;
  background-size: 110px 110px;
  border-radius: 100px;
  margin: 10px;
}

#espresso {
  width: 100px;
  height: 100px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) right;
  background-size: 150px 100px;
  border-radius: 100px;
  margin: 10px;
}

#americano {
  width: 100px;
  height: 100px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: 100px 100px;
  border-radius: 100px;
  margin: 10px;
}
#cappuccino {
  width: 100px;
  height: 100px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) right;
  background-size: 130px 100px;
  border-radius: 100px;
  margin: 10px;
}
#mocha {
  width: 100px;
  height: 100px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-size: 100px 100px;
  border-radius: 100px;
  margin: 10px;
}
#cold-brew {
  width: 100px;
  height: 100px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) center no-repeat;
  background-size: 100px;
  border-radius: 100px;
  margin: 10px;
}
.card {
  margin: 10px;
  max-width: 250px;
  height: 300px;
  /* border: 1px solid grey; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  transition: background-color 0.3s ease;
}

.card:hover {
  background-color: burlywood;
}

.card h1 {
  font-size: 1.2rem;
  margin: 5px;
}

.card p {
  font-style: italic;
  font-size: 1rem;
  line-height: 20px;
}

/* Contact tab */

#contact-tab-container {
  text-align: center;
  margin: 20px;
}

#contact-tab-container h2 {
  font-size: 1.8rem;
  font-weight: 400;
  margin: 10px;
}

#location-img {
  margin: 10px;
  width: 500px;
  height: 500px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) center;
  background-size: 800px 500px;
}

/* Utility */
/* .active {
  border-bottom: black 2px solid;
} */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA,WAAW;AACX;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,oDAAoD;EACpD,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,SAAS;EACT,SAAS;EACT,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,OAAO;AACT;;AAEA;EACE,gBAAgB,EAAE,kCAAkC;AACtD;;AAEA;EACE,WAAW;EACX,OAAO;AACT;;AAEA,oBAAoB;AACpB;EACE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB;0CACwC;EACxC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,aAAa;;AAEb;EACE,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb;aACW;EACX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA,aAAa;;AAEb;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,0DAA2C;EAC3C,4BAA4B;EAC5B,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yDAA2C;EAC3C,4BAA4B;EAC5B,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mDAAsC;EACtC,4BAA4B;EAC5B,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,yDAA6C;EAC7C,4BAA4B;EAC5B,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mDAAiC;EACjC,4BAA4B;EAC5B,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,oEAAuD;EACvD,sBAAsB;EACtB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,+CAA+C;EAC/C,sCAAsC;AACxC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA,gBAAgB;;AAEhB;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,0DAA2C;EAC3C,4BAA4B;AAC9B;;AAEA,YAAY;AACZ;;GAEG","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* Header */\nheader {\n  height: 20vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: grey;\n}\n\nheader h1 {\n  color: white;\n  font-weight: 500;\n}\n\nheader ul {\n  display: flex;\n}\n\nheader li {\n  list-style: none;\n  cursor: pointer;\n  transition: color 0.3s ease, border-bottom 0.3s ease;\n  color: white;\n  text-decoration: none;\n  padding: 10px 20px;\n  margin: 0 10px;\n  position: relative;\n  font-size: 1.2rem;\n}\nheader li::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 50%;\n  background-color: burlywood;\n  transition: width 0.3s ease, left 0.3s ease;\n}\n\nheader li:hover {\n  color: burlywood;\n}\nheader li:hover::after {\n  width: 100%;\n  left: 0;\n}\n\nheader li.active {\n  color: burlywood; /* Change color for active state */\n}\n\nheader li.active::after {\n  width: 100%;\n  left: 0;\n}\n\n/* Content Section */\n#content {\n  margin: 0px auto;\n  width: 80%;\n  min-height: 80vh;\n  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Home tab */\n\n#home-page-picture {\n  border-radius: 200px;\n  width: 200px;\n  height: 200px;\n  background: url(\"../src/coffee-brain-caffeine-neuroscincces.jpg.webp\") center\n    no-repeat;\n  background-size: 300px 200px;\n}\n\n#home-tab-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#home-tab-h1 {\n  text-align: center;\n  max-width: 350px;\n  line-height: 50px;\n  margin: 20px;\n}\n\n#home-tab-h2 {\n  margin: 20px;\n}\n\n/* Menu tab */\n\n#menu-container {\n  width: 500px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n\n#latte {\n  width: 100px;\n  height: 100px;\n  background: url(\"/src/latte-3.webp\") bottom;\n  background-size: 110px 110px;\n  border-radius: 100px;\n  margin: 10px;\n}\n\n#espresso {\n  width: 100px;\n  height: 100px;\n  background: url(\"/src/espresso.webp\") right;\n  background-size: 150px 100px;\n  border-radius: 100px;\n  margin: 10px;\n}\n\n#americano {\n  width: 100px;\n  height: 100px;\n  background: url(\"/src/americano.jpeg\");\n  background-size: 100px 100px;\n  border-radius: 100px;\n  margin: 10px;\n}\n#cappuccino {\n  width: 100px;\n  height: 100px;\n  background: url(\"/src/cappuccino.jpeg\") right;\n  background-size: 130px 100px;\n  border-radius: 100px;\n  margin: 10px;\n}\n#mocha {\n  width: 100px;\n  height: 100px;\n  background: url(\"/src/mocha.png\");\n  background-size: 100px 100px;\n  border-radius: 100px;\n  margin: 10px;\n}\n#cold-brew {\n  width: 100px;\n  height: 100px;\n  background: url(\"/src/cold-brew.jpeg\") center no-repeat;\n  background-size: 100px;\n  border-radius: 100px;\n  margin: 10px;\n}\n.card {\n  margin: 10px;\n  max-width: 250px;\n  height: 300px;\n  /* border: 1px solid grey; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  transition: background-color 0.3s ease;\n}\n\n.card:hover {\n  background-color: burlywood;\n}\n\n.card h1 {\n  font-size: 1.2rem;\n  margin: 5px;\n}\n\n.card p {\n  font-style: italic;\n  font-size: 1rem;\n  line-height: 20px;\n}\n\n/* Contact tab */\n\n#contact-tab-container {\n  text-align: center;\n  margin: 20px;\n}\n\n#contact-tab-container h2 {\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 10px;\n}\n\n#location-img {\n  margin: 10px;\n  width: 500px;\n  height: 500px;\n  background: url(\"/src/location.png\") center;\n  background-size: 800px 500px;\n}\n\n/* Utility */\n/* .active {\n  border-bottom: black 2px solid;\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContactTabContent: () => (/* binding */ loadContactTabContent)
/* harmony export */ });
function loadContactTabContent(element) {
  const div = document.createElement("div");
  const phone = document.createElement("h2");
  const address = document.createElement("h2");
  const imgHolder = document.createElement("div");

  phone.textContent = "Phone: 123-456-789";
  address.textContent = "Address: AAAAAAAAA,AA,AA";
  imgHolder.setAttribute("id", "location-img");

  div.append(phone, address, imgHolder);
  div.setAttribute("id", "contact-tab-container");
  element.appendChild(div);
}




/***/ }),

/***/ "./src/header-load.js":
/*!****************************!*\
  !*** ./src/header-load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerLoad: () => (/* binding */ headerLoad)
/* harmony export */ });
function headerLoad(body, node) {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  h1.textContent = "Coffee Lover";
  li1.textContent = "Home";
  li2.textContent = "Menu";
  li3.textContent = "Contact";

  li1.setAttribute("id", "home");
  li2.setAttribute("id", "menu");
  li3.setAttribute("id", "contact");

  ul.append(li1, li2, li3);
  header.append(h1, ul);

  body.insertBefore(header, node);
}




/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHomeTabContent: () => (/* binding */ loadHomeTabContent)
/* harmony export */ });
function loadHomeTabContent(element) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const imgHolder = document.createElement("div");
  const h2 = document.createElement("h2");

  h1.textContent = "We serve fresh Coffee with passion and love";
  h2.textContent = "Order online or visit us";
  imgHolder.setAttribute("id", "home-page-picture");
  h1.setAttribute("id", "home-tab-h1");
  h2.setAttribute("id", "home-tab-h2");
  div.setAttribute("id", "home-tab-container");
  div.append(h1, imgHolder, h2);
  element.appendChild(div);
}



/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenuContent: () => (/* binding */ loadMenuContent)
/* harmony export */ });
function loadMenuContent(element) {
  const div = document.createElement("div");
  const latteContent =
      " Indulge in our Latte—a harmonious blend of rich espresso and steamed milk, delivering a velvety and comforting coffee experience.",
    espressoContent =
      "Experience the essence of coffee with our Espresso—a pure and intense shot of finely brewed coffee for a bold and satisfying flavor.",
    americanoContent =
      "Savor the bold simplicity of our Americano—pure and invigorating espresso carefully diluted with hot water for a clean and robust coffee experience.",
    cappuccinoContent =
      "Savor the classic charm of our Cappuccino—a perfect blend of espresso, steamed milk, and a generous layer of froth, delivering a rich and velvety coffee experience.",
    mochaContent =
      "Indulge in the decadence of our Mocha—a luscious fusion of rich espresso, velvety steamed milk, and luxurious chocolate for a delightfully sweet and satisfying treat.",
    coldBrewContent =
      "Revitalize your senses with our Cold Brew—a refreshing and smooth coffee brewed slowly for a chilled, subtly nuanced, and invigorating taste.";
  const latteCard = createCardWithElements("Latte", latteContent, "latte");
  const espressoCard = createCardWithElements(
    "Espresso",
    espressoContent,
    "espresso"
  );
  const americanoCard = createCardWithElements(
    "Americano",
    americanoContent,
    "americano"
  );
  const cappuccinoCard = createCardWithElements(
    "Cappuccino",
    cappuccinoContent,
    "cappuccino"
  );
  const mochaCard = createCardWithElements("Mocha", mochaContent, "mocha");
  const coldBrewCard = createCardWithElements(
    "Cold Brew",
    coldBrewContent,
    "cold-brew"
  );

  div.append(
    espressoCard,
    americanoCard,
    latteCard,
    cappuccinoCard,
    mochaCard,
    coldBrewCard
  );
  div.setAttribute("id", "menu-container");
  element.appendChild(div);
}

function createCardWithElements(name, content, id) {
  const card = document.createElement("div");
  const imgHolder = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = name;
  p.textContent = content;
  imgHolder.setAttribute("id", id);

  card.append(imgHolder, h1, p);
  card.classList.add("card");
  return card;
}




/***/ }),

/***/ "./src/americano.jpeg":
/*!****************************!*\
  !*** ./src/americano.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3328565a21cb28eee368.jpeg";

/***/ }),

/***/ "./src/cappuccino.jpeg":
/*!*****************************!*\
  !*** ./src/cappuccino.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/82c38a48a53ad665cd95.jpeg";

/***/ }),

/***/ "./src/coffee-brain-caffeine-neuroscincces.jpg.webp":
/*!**********************************************************!*\
  !*** ./src/coffee-brain-caffeine-neuroscincces.jpg.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/89a9a8c203cb6b70aea4.webp";

/***/ }),

/***/ "./src/cold-brew.jpeg":
/*!****************************!*\
  !*** ./src/cold-brew.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/71b64915a68c1c587536.jpeg";

/***/ }),

/***/ "./src/espresso.webp":
/*!***************************!*\
  !*** ./src/espresso.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/37f9af31eb9062cdec78.webp";

/***/ }),

/***/ "./src/latte-3.webp":
/*!**************************!*\
  !*** ./src/latte-3.webp ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/64f12ce5a635749b8a30.webp";

/***/ }),

/***/ "./src/location.png":
/*!**************************!*\
  !*** ./src/location.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/67f0065e2700a9f4a95a.png";

/***/ }),

/***/ "./src/mocha.png":
/*!***********************!*\
  !*** ./src/mocha.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c21605aa3cc2486044a6.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-load */ "./src/header-load.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-tab */ "./src/home-tab.js");
/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-tab */ "./src/menu-tab.js");
/* harmony import */ var _contact_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-tab */ "./src/contact-tab.js");






const body = document.querySelector("body");
const content = document.querySelector("#content");
(0,_header_load__WEBPACK_IMPORTED_MODULE_0__.headerLoad)(body, content);
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");
window.addEventListener("load", () => {
  (0,_home_tab__WEBPACK_IMPORTED_MODULE_2__.loadHomeTabContent)(content);
  home.classList.add("active");
});
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  home.classList.remove("active");
  menu.classList.remove("active");
  contact.classList.remove("active");

  switch (e.target.id) {
    case "home":
      content.textContent = "";
      home.classList.add("active");
      (0,_home_tab__WEBPACK_IMPORTED_MODULE_2__.loadHomeTabContent)(content);
      break;
    case "menu":
      content.textContent = "";
      menu.classList.add("active");
      (0,_menu_tab__WEBPACK_IMPORTED_MODULE_3__.loadMenuContent)(content);
      break;
    case "contact":
      content.textContent = "";
      contact.classList.add("active");
      (0,_contact_tab__WEBPACK_IMPORTED_MODULE_4__.loadContactTabContent)(content);
      break;
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDdEI7QUFDMkI7QUFDSDtBQUNTOztBQUV0RDtBQUNBO0FBQ0Esd0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWtCO0FBQ3BCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQWU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFxQjtBQUMzQjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtdGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2NvZmZlZS1icmFpbi1jYWZmZWluZS1uZXVyb3NjaW5jY2VzLmpwZy53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9sYXR0ZS0zLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2VzcHJlc3NvLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2FtZXJpY2Fuby5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9jYXBwdWNjaW5vLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIvc3JjL21vY2hhLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi9zcmMvY29sZC1icmV3LmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIvc3JjL2xvY2F0aW9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBIZWFkZXIgKi9cbmhlYWRlciB7XG4gIGhlaWdodDogMjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbmhlYWRlciBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaGVhZGVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaGVhZGVyIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIGJvcmRlci1ib3R0b20gMC4zcyBlYXNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmhlYWRlciBsaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLCBsZWZ0IDAuM3MgZWFzZTtcbn1cblxuaGVhZGVyIGxpOmhvdmVyIHtcbiAgY29sb3I6IGJ1cmx5d29vZDtcbn1cbmhlYWRlciBsaTpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbn1cblxuaGVhZGVyIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiBidXJseXdvb2Q7IC8qIENoYW5nZSBjb2xvciBmb3IgYWN0aXZlIHN0YXRlICovXG59XG5cbmhlYWRlciBsaS5hY3RpdmU6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIENvbnRlbnQgU2VjdGlvbiAqL1xuI2NvbnRlbnQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICB3aWR0aDogODAlO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDBweCAxcHggM3B4IDBweCxcbiAgICByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpIDBweCAwcHggMHB4IDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEhvbWUgdGFiICovXG5cbiNob21lLXBhZ2UtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXJcbiAgICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwcHggMjAwcHg7XG59XG5cbiNob21lLXRhYi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2hvbWUtdGFiLWgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4jaG9tZS10YWItaDIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi8qIE1lbnUgdGFiICovXG5cbiNtZW51LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbGF0dGUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogMTEwcHggMTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNlc3ByZXNzbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4jYW1lcmljYW5vIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4jY2FwcHVjY2lubyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuI21vY2hhIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4jY29sZC1icmV3IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSkgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHggMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG59XG5cbi5jYXJkIGgxIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY2FyZCBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKiBDb250YWN0IHRhYiAqL1xuXG4jY29udGFjdC10YWItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbiNjb250YWN0LXRhYi1jb250YWluZXIgaDIge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4jbG9jYXRpb24taW1nIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggNTAwcHg7XG59XG5cbi8qIFV0aWxpdHkgKi9cbi8qIC5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiBibGFjayAycHggc29saWQ7XG59ICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUEsV0FBVztBQUNYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvREFBb0Q7RUFDcEQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtFQUMzQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSxrQ0FBa0M7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCOzBDQUN3QztFQUN4QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2I7YUFDVztFQUNYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxhQUFhOztBQUViO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMERBQTJDO0VBQzNDLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5REFBMkM7RUFDM0MsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1EQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5REFBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbURBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9FQUF1RDtFQUN2RCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsMERBQTJDO0VBQzNDLDRCQUE0QjtBQUM5Qjs7QUFFQSxZQUFZO0FBQ1o7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMjB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWJvdHRvbSAwLjNzIGVhc2U7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5oZWFkZXIgbGk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSwgbGVmdCAwLjNzIGVhc2U7XFxufVxcblxcbmhlYWRlciBsaTpob3ZlciB7XFxuICBjb2xvcjogYnVybHl3b29kO1xcbn1cXG5oZWFkZXIgbGk6aG92ZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuaGVhZGVyIGxpLmFjdGl2ZSB7XFxuICBjb2xvcjogYnVybHl3b29kOyAvKiBDaGFuZ2UgY29sb3IgZm9yIGFjdGl2ZSBzdGF0ZSAqL1xcbn1cXG5cXG5oZWFkZXIgbGkuYWN0aXZlOjphZnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi8qIENvbnRlbnQgU2VjdGlvbiAqL1xcbiNjb250ZW50IHtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMikgMHB4IDFweCAzcHggMHB4LFxcbiAgICByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpIDBweCAwcHggMHB4IDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEhvbWUgdGFiICovXFxuXFxuI2hvbWUtcGFnZS1waWN0dXJlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vc3JjL2NvZmZlZS1icmFpbi1jYWZmZWluZS1uZXVyb3NjaW5jY2VzLmpwZy53ZWJwXFxcIikgY2VudGVyXFxuICAgIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwcHggMjAwcHg7XFxufVxcblxcbiNob21lLXRhYi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNob21lLXRhYi1oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbiNob21lLXRhYi1oMiB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi8qIE1lbnUgdGFiICovXFxuXFxuI21lbnUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xhdHRlIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi9zcmMvbGF0dGUtMy53ZWJwXFxcIikgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMTBweCAxMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jZXNwcmVzc28ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9lc3ByZXNzby53ZWJwXFxcIikgcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNhbWVyaWNhbm8ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9hbWVyaWNhbm8uanBlZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jY2FwcHVjY2lubyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIvc3JjL2NhcHB1Y2Npbm8uanBlZ1xcXCIpIHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMzBweCAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jbW9jaGEge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9tb2NoYS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuI2NvbGQtYnJldyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIvc3JjL2NvbGQtYnJldy5qcGVnXFxcIikgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLmNhcmQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHggMHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLmNhcmQgaDEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmNhcmQgcCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogQ29udGFjdCB0YWIgKi9cXG5cXG4jY29udGFjdC10YWItY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuI2NvbnRhY3QtdGFiLWNvbnRhaW5lciBoMiB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNsb2NhdGlvbi1pbWcge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9sb2NhdGlvbi5wbmdcXFwiKSBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDUwMHB4O1xcbn1cXG5cXG4vKiBVdGlsaXR5ICovXFxuLyogLmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiBibGFjayAycHggc29saWQ7XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbG9hZENvbnRhY3RUYWJDb250ZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGltZ0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiAxMjMtNDU2LTc4OVwiO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiBBQUFBQUFBQUEsQUEsQUFcIjtcbiAgaW1nSG9sZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9jYXRpb24taW1nXCIpO1xuXG4gIGRpdi5hcHBlbmQocGhvbmUsIGFkZHJlc3MsIGltZ0hvbGRlcik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtdGFiLWNvbnRhaW5lclwiKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5leHBvcnQgeyBsb2FkQ29udGFjdFRhYkNvbnRlbnQgfTtcbiIsImZ1bmN0aW9uIGhlYWRlckxvYWQoYm9keSwgbm9kZSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgaDEudGV4dENvbnRlbnQgPSBcIkNvZmZlZSBMb3ZlclwiO1xuICBsaTEudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbGkyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGxpMy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIGxpMS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gIGxpMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gIGxpMy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG5cbiAgdWwuYXBwZW5kKGxpMSwgbGkyLCBsaTMpO1xuICBoZWFkZXIuYXBwZW5kKGgxLCB1bCk7XG5cbiAgYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBub2RlKTtcbn1cblxuZXhwb3J0IHsgaGVhZGVyTG9hZCB9O1xuIiwiZnVuY3Rpb24gbG9hZEhvbWVUYWJDb250ZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGltZ0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIGgxLnRleHRDb250ZW50ID0gXCJXZSBzZXJ2ZSBmcmVzaCBDb2ZmZWUgd2l0aCBwYXNzaW9uIGFuZCBsb3ZlXCI7XG4gIGgyLnRleHRDb250ZW50ID0gXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXNcIjtcbiAgaW1nSG9sZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS1wYWdlLXBpY3R1cmVcIik7XG4gIGgxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS10YWItaDFcIik7XG4gIGgyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS10YWItaDJcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtdGFiLWNvbnRhaW5lclwiKTtcbiAgZGl2LmFwcGVuZChoMSwgaW1nSG9sZGVyLCBoMik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cbmV4cG9ydCB7IGxvYWRIb21lVGFiQ29udGVudCB9O1xuIiwiZnVuY3Rpb24gbG9hZE1lbnVDb250ZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGF0dGVDb250ZW50ID1cbiAgICAgIFwiIEluZHVsZ2UgaW4gb3VyIExhdHRl4oCUYSBoYXJtb25pb3VzIGJsZW5kIG9mIHJpY2ggZXNwcmVzc28gYW5kIHN0ZWFtZWQgbWlsaywgZGVsaXZlcmluZyBhIHZlbHZldHkgYW5kIGNvbWZvcnRpbmcgY29mZmVlIGV4cGVyaWVuY2UuXCIsXG4gICAgZXNwcmVzc29Db250ZW50ID1cbiAgICAgIFwiRXhwZXJpZW5jZSB0aGUgZXNzZW5jZSBvZiBjb2ZmZWUgd2l0aCBvdXIgRXNwcmVzc2/igJRhIHB1cmUgYW5kIGludGVuc2Ugc2hvdCBvZiBmaW5lbHkgYnJld2VkIGNvZmZlZSBmb3IgYSBib2xkIGFuZCBzYXRpc2Z5aW5nIGZsYXZvci5cIixcbiAgICBhbWVyaWNhbm9Db250ZW50ID1cbiAgICAgIFwiU2F2b3IgdGhlIGJvbGQgc2ltcGxpY2l0eSBvZiBvdXIgQW1lcmljYW5v4oCUcHVyZSBhbmQgaW52aWdvcmF0aW5nIGVzcHJlc3NvIGNhcmVmdWxseSBkaWx1dGVkIHdpdGggaG90IHdhdGVyIGZvciBhIGNsZWFuIGFuZCByb2J1c3QgY29mZmVlIGV4cGVyaWVuY2UuXCIsXG4gICAgY2FwcHVjY2lub0NvbnRlbnQgPVxuICAgICAgXCJTYXZvciB0aGUgY2xhc3NpYyBjaGFybSBvZiBvdXIgQ2FwcHVjY2lub+KAlGEgcGVyZmVjdCBibGVuZCBvZiBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBhbmQgYSBnZW5lcm91cyBsYXllciBvZiBmcm90aCwgZGVsaXZlcmluZyBhIHJpY2ggYW5kIHZlbHZldHkgY29mZmVlIGV4cGVyaWVuY2UuXCIsXG4gICAgbW9jaGFDb250ZW50ID1cbiAgICAgIFwiSW5kdWxnZSBpbiB0aGUgZGVjYWRlbmNlIG9mIG91ciBNb2NoYeKAlGEgbHVzY2lvdXMgZnVzaW9uIG9mIHJpY2ggZXNwcmVzc28sIHZlbHZldHkgc3RlYW1lZCBtaWxrLCBhbmQgbHV4dXJpb3VzIGNob2NvbGF0ZSBmb3IgYSBkZWxpZ2h0ZnVsbHkgc3dlZXQgYW5kIHNhdGlzZnlpbmcgdHJlYXQuXCIsXG4gICAgY29sZEJyZXdDb250ZW50ID1cbiAgICAgIFwiUmV2aXRhbGl6ZSB5b3VyIHNlbnNlcyB3aXRoIG91ciBDb2xkIEJyZXfigJRhIHJlZnJlc2hpbmcgYW5kIHNtb290aCBjb2ZmZWUgYnJld2VkIHNsb3dseSBmb3IgYSBjaGlsbGVkLCBzdWJ0bHkgbnVhbmNlZCwgYW5kIGludmlnb3JhdGluZyB0YXN0ZS5cIjtcbiAgY29uc3QgbGF0dGVDYXJkID0gY3JlYXRlQ2FyZFdpdGhFbGVtZW50cyhcIkxhdHRlXCIsIGxhdHRlQ29udGVudCwgXCJsYXR0ZVwiKTtcbiAgY29uc3QgZXNwcmVzc29DYXJkID0gY3JlYXRlQ2FyZFdpdGhFbGVtZW50cyhcbiAgICBcIkVzcHJlc3NvXCIsXG4gICAgZXNwcmVzc29Db250ZW50LFxuICAgIFwiZXNwcmVzc29cIlxuICApO1xuICBjb25zdCBhbWVyaWNhbm9DYXJkID0gY3JlYXRlQ2FyZFdpdGhFbGVtZW50cyhcbiAgICBcIkFtZXJpY2Fub1wiLFxuICAgIGFtZXJpY2Fub0NvbnRlbnQsXG4gICAgXCJhbWVyaWNhbm9cIlxuICApO1xuICBjb25zdCBjYXBwdWNjaW5vQ2FyZCA9IGNyZWF0ZUNhcmRXaXRoRWxlbWVudHMoXG4gICAgXCJDYXBwdWNjaW5vXCIsXG4gICAgY2FwcHVjY2lub0NvbnRlbnQsXG4gICAgXCJjYXBwdWNjaW5vXCJcbiAgKTtcbiAgY29uc3QgbW9jaGFDYXJkID0gY3JlYXRlQ2FyZFdpdGhFbGVtZW50cyhcIk1vY2hhXCIsIG1vY2hhQ29udGVudCwgXCJtb2NoYVwiKTtcbiAgY29uc3QgY29sZEJyZXdDYXJkID0gY3JlYXRlQ2FyZFdpdGhFbGVtZW50cyhcbiAgICBcIkNvbGQgQnJld1wiLFxuICAgIGNvbGRCcmV3Q29udGVudCxcbiAgICBcImNvbGQtYnJld1wiXG4gICk7XG5cbiAgZGl2LmFwcGVuZChcbiAgICBlc3ByZXNzb0NhcmQsXG4gICAgYW1lcmljYW5vQ2FyZCxcbiAgICBsYXR0ZUNhcmQsXG4gICAgY2FwcHVjY2lub0NhcmQsXG4gICAgbW9jaGFDYXJkLFxuICAgIGNvbGRCcmV3Q2FyZFxuICApO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkV2l0aEVsZW1lbnRzKG5hbWUsIGNvbnRlbnQsIGlkKSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWdIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGgxLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIGltZ0hvbGRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cbiAgY2FyZC5hcHBlbmQoaW1nSG9sZGVyLCBoMSwgcCk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIHJldHVybiBjYXJkO1xufVxuXG5leHBvcnQgeyBsb2FkTWVudUNvbnRlbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaGVhZGVyTG9hZCB9IGZyb20gXCIuL2hlYWRlci1sb2FkXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbG9hZEhvbWVUYWJDb250ZW50IH0gZnJvbSBcIi4vaG9tZS10YWJcIjtcbmltcG9ydCB7IGxvYWRNZW51Q29udGVudCB9IGZyb20gXCIuL21lbnUtdGFiXCI7XG5pbXBvcnQgeyBsb2FkQ29udGFjdFRhYkNvbnRlbnQgfSBmcm9tIFwiLi9jb250YWN0LXRhYlwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuaGVhZGVyTG9hZChib2R5LCBjb250ZW50KTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGxvYWRIb21lVGFiQ29udGVudChjb250ZW50KTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbnVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBsb2FkSG9tZVRhYkNvbnRlbnQoY29udGVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVudVwiOlxuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBsb2FkTWVudUNvbnRlbnQoY29udGVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBsb2FkQ29udGFjdFRhYkNvbnRlbnQoY29udGVudCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=