(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),Calculator=function(_React$Component){function Calculator(){var _getPrototypeOf2,_this;Object(_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,(_getPrototypeOf2=Object(_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={count:[],keys:[{input:"clear",buttonType:"clearBtn"},{input:"/",buttonType:"operatorBtn"},{input:"7",buttonType:"numberBtn"},{input:"8",buttonType:"numberBtn"},{input:"9",buttonType:"numberBtn"},{input:"*",buttonType:"operatorBtn"},{input:"4",buttonType:"numberBtn"},{input:"5",buttonType:"numberBtn"},{input:"6",buttonType:"numberBtn"},{input:"-",buttonType:"operatorBtn"},{input:"1",buttonType:"numberBtn"},{input:"2",buttonType:"numberBtn"},{input:"3",buttonType:"numberBtn"},{input:"+",buttonType:"operatorBtn"},{input:"0",buttonType:"numberBtn"},{input:"=",buttonType:"eqBtn"}]},_this.number=function(calcInput){"clear"===calcInput?_this.setState({count:[]}):"="===calcInput?_this.setState(function(prevState){return{count:[eval(prevState.count.join(""))]}}):_this.setState(function(_){return{count:[].concat(Object(_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_.count),[calcInput])}})},_this}return Object(_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_React$Component),Object(_Users_codenation_Documents_codeNation_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"calc"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null," ",this.state.count," ")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"buttonsWrapper"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"buttons"},this.state.keys.map(function(e){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{className:e.buttonType,onClick:function(){return _.number(e.input)}},e.input)}))))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=Calculator},,,,,,,function(_,e,t){_.exports=t(17)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),a=t(2),r=t.n(a),c=(t(15),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.504ddd1e.chunk.js.map