/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const ADD_SCENE = 'ADD_SCENE';
/* harmony export (immutable) */ __webpack_exports__["ADD_SCENE"] = ADD_SCENE;

const addScene = (path, component, initial, props = {}) => ({
    type: ADD_SCENE,
    data: { path, component, initial, props }
});
/* harmony export (immutable) */ __webpack_exports__["addScene"] = addScene;


const PUSH_SCENE = 'PUSH_SCENE';
/* harmony export (immutable) */ __webpack_exports__["PUSH_SCENE"] = PUSH_SCENE;

const push = (path, props = {}) => ({
    type: PUSH_SCENE,
    data: { path, props }
});
/* harmony export (immutable) */ __webpack_exports__["push"] = push;


const POP_SCENE = 'POP_SCENE';
/* harmony export (immutable) */ __webpack_exports__["POP_SCENE"] = POP_SCENE;

const pop = () => ({
    type: POP_SCENE,
    data: null
});
/* harmony export (immutable) */ __webpack_exports__["pop"] = pop;


const POP_AND_PUSH_SCENE = 'POP_AND_PUSH_SCENE';
/* harmony export (immutable) */ __webpack_exports__["POP_AND_PUSH_SCENE"] = POP_AND_PUSH_SCENE;

const popAndPush = (path, props = {}) => ({
    type: POP_AND_PUSH_SCENE,
    data: { path, props }
});
/* harmony export (immutable) */ __webpack_exports__["popAndPush"] = popAndPush;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
throw new Error("Cannot find module \"react-native\"");



/**
 * A route nests scenes and other routes into a hierarchy.
 */
class Route extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.getPath = () => {
            return this.props.parentPath + '/' + (this.props.path || '');
        }, _temp;
    }

    componentWillMount() {

        if (!this.props.path) {
            console.error('Route must have a path');
            return;
        }

        if (this.props.component) {
            const initial = this.props.initial || false;
            const path = this.getPath();
            this.props.addScene(path, this.props.component, initial, this.props.props || {});
        }
    }

    render() {
        const has_children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.count(this.props.children) > 0;
        return !has_children ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_native__["View"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                addScene: this.props.addScene,
                parentPath: this.getPath()
            }))
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Route;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Route__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_1__components_Route__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return __WEBPACK_IMPORTED_MODULE_2__actions__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "routerReducer", function() { return __WEBPACK_IMPORTED_MODULE_3__reducers__["a"]; });







/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
throw new Error("Cannot find module \"react-native\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Route__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







class Router extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    componentWillMount() {
        if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.count(this.props.children) === 0) {
            console.error('Router must have at least one child!');
            return;
        }
    }

    render() {
        const { routing: { path, scenes } } = this.props;
        if (typeof scenes[path] === 'undefined') {
            // allow the children to mount and register themselves since they
            // render null.
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_native__["View"],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                    addScene: this.props.addScene,
                    parentPath: ''
                }))
            );
        }
        // the scenes are registered so render the chosen component
        const { component, props } = scenes[path];
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, _extends({}, props, {
            routing: {
                pop: this.props.pop,
                push: this.props.push,
                popAndPush: this.props.popAndPush
            }
        }));
    }
}

const mapStateToProps = ({ routing }) => ({ routing });
const mapDispatchToProps = dispatch => ({
    addScene: (p, c, i, ps = {}) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["addScene"])(p, c, i, ps)),
    push: (a, b = {}) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["push"])(a, b)),
    pop: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["pop"])()),
    popAndPush: (a, b = {}) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["popAndPush"])(a, b))
});

const router = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Router);



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const initialState = {
    path: '/',
    history: [],
    scenes: {} // path -> { component / props }
};

const addScene = (state, { path, component, initial, props }) => {
    let newState = _extends({}, state);
    newState.scenes[path] = { component, props };
    if (initial) {
        newState.path = path;
    }
    return newState;
};

const pushScene = (state, { path, props }) => {
    let newState = _extends({}, state);
    newState.scenes[path].props = _extends({}, newState.scenes[path].props, props);
    newState.history.push(state.path);
    newState.path = path;
    return newState;
};

const popScene = state => {
    let newState = _extends({}, state);
    const path = newState.history.pop() || '/';
    newState.path = path;
    return newState;
};

const popAndPushScene = (state, { path, props }) => {
    let newState = _extends({}, state);
    newState.scenes[path].props = props;
    newState.history.pop();
    newState.path = path;
    return newState;
};

const routerReducer = (state = initialState, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["ADD_SCENE"]:
            return addScene(state, action.data);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["PUSH_SCENE"]:
            return pushScene(state, action.data);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["POP_SCENE"]:
            return popScene(state);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["POP_AND_PUSH_SCENE"]:
            return popAndPushScene(state, action.data);
        default:
            return state;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = routerReducer;


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map