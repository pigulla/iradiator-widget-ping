/*!
 * Compilation date:  2016-04-12T09:43:59.641Z
 * Widget version:    1.0.0
 * Iradiator version: 0.0.1
 * Node.js version:   v5.10.1
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.Settings = undefined;

	var _Settings = __webpack_require__(1);

	var _Settings2 = _interopRequireDefault(_Settings);

	var _Widget = __webpack_require__(3);

	var _Widget2 = _interopRequireDefault(_Widget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Settings = _Settings2.default;
	exports.Widget = _Widget2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Immutable = __webpack_require__(2);

	var Constructor = Immutable.Record({
	    title: null
	});

	var Record = function (_Constructor) {
	    _inherits(Record, _Constructor);

	    function Record() {
	        _classCallCheck(this, Record);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Record).apply(this, arguments));
	    }

	    return Record;
	}(Constructor);

	module.exports.Constructor = Constructor;
	module.exports.Record = Record;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("immutable");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactImmutableProptypes = __webpack_require__(4);

	var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Settings = __webpack_require__(1);

	var _Descriptor = __webpack_require__(6);

	var _Data = __webpack_require__(7);

	var _Data2 = _interopRequireDefault(_Data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PingWidget = function (_React$Component) {
	    _inherits(PingWidget, _React$Component);

	    function PingWidget() {
	        _classCallCheck(this, PingWidget);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PingWidget).apply(this, arguments));
	    }

	    _createClass(PingWidget, [{
	        key: 'renderData',
	        value: function renderData(key) {
	            var up = this.props.data[key].alive;
	            var descriptor = this.props.descriptor.get(key);

	            return _react2.default.createElement(
	                'li',
	                { key: key },
	                descriptor.name,
	                ' is ',
	                up ? 'UP' : 'DOWN'
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h4',
	                    null,
	                    this.props.settings.title
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    Object.keys(this.props.data).map(this.renderData.bind(this))
	                )
	            );
	        }
	    }]);

	    return PingWidget;
	}(_react2.default.Component);

	PingWidget.sourceType = 'single-plugin-multiple-identifiers';
	PingWidget.propTypes = {
	    settings: _react.PropTypes.instanceOf(_Settings.Constructor).isRequired,
	    descriptor: _reactImmutableProptypes2.default.mapOf(_react.PropTypes.instanceOf(_Descriptor.Constructor)).isRequired,
	    data: _react.PropTypes.objectOf(_Data2.default).isRequired
	};
	exports.default = PingWidget;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-immutable-proptypes");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("iradiator-plugin-ping/Descriptor");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("iradiator-plugin-ping/schema/Data");

/***/ }
/******/ ]);