webpackHotUpdate(0,{

/***/ 458:
/*!*****************************************************!*\
  !*** ./src/main/js/browser/react/containers/App.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nexports.__esModule = true;\n\nvar _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ 5);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ 6);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(/*! react */ 1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ 7);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 123);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 116);\n\nvar _Nav = __webpack_require__(/*! ../components/Nav */ 556);\n\nvar _Nav2 = _interopRequireDefault(_Nav);\n\nvar _cashProjectionAction = __webpack_require__(/*! ../action-creators/cashProjectionAction */ 247);\n\nvar _ContentContainer = __webpack_require__(/*! ./ContentContainer */ 590);\n\nvar _ContentContainer2 = _interopRequireDefault(_ContentContainer);\n\nvar _store = __webpack_require__(/*! ../store */ 220);\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _reactDataGrid = __webpack_require__(/*! ../packages/react-data-grid */ 14);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _reactDataGridAddons = __webpack_require__(/*! ../packages/react-data-grid-addons */ 272);\n\nvar _reactDataGridAddons2 = _interopRequireDefault(_reactDataGridAddons);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n\tApp: {\n\t\tdisplayName: 'App'\n\t}\n};\n\nvar _CUsersAleksGitReactSpringNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6['default'])({\n\tfilename: 'C:/Users/Aleks/git/ReactSpring/src/main/js/browser/react/containers/App.js',\n\tcomponents: _components,\n\tlocals: [module],\n\timports: [_react3['default']]\n});\n\nvar _CUsersAleksGitReactSpringNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4['default'])({\n\tfilename: 'C:/Users/Aleks/git/ReactSpring/src/main/js/browser/react/containers/App.js',\n\tcomponents: _components,\n\tlocals: [],\n\timports: [_react3['default'], _index2['default']]\n});\n\nfunction _wrapComponent(id) {\n\treturn function (Component) {\n\t\treturn _CUsersAleksGitReactSpringNode_modulesReactTransformHmrLibIndexJs2(_CUsersAleksGitReactSpringNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n\t};\n}\n\nvar ReactDOM = __webpack_require__(/*! react-dom */ 12);\n\nvar Promise = __webpack_require__(/*! es6-promise-promise */ 775);\n\nvar App = _wrapComponent('App')(function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, _Component.call(this, props));\n\t}\n\n\tApp.prototype.componentDidMount = function componentDidMount() {\n\t\tconsole.log('.....in App.js......');\n\t\t_store2['default'].dispatch((0, _cashProjectionAction.loadCashProjection)());\n\t};\n\n\tApp.prototype.render = function render() {\n\n\t\treturn _react3['default'].createElement(\n\t\t\t'div',\n\t\t\t{ className: 'container-fluid' },\n\t\t\t_react3['default'].createElement(_Nav2['default'], null),\n\t\t\t_react3['default'].createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: { marginTop: '70px' } },\n\t\t\t\t_react3['default'].createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'row' },\n\t\t\t\t\t_react3['default'].createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'col-sm-10' },\n\t\t\t\t\t\t_react3['default'].createElement(_ContentContainer2['default'], null)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t};\n\n\treturn App;\n}(_react2.Component));\n\nexports['default'] = App;\n\n//\n//class ProjectedCashList extends React.Component{\n//\t\n//\trender() {\n//\t\tconsole.log('this.props.........', this.props)\n//\t\tvar projectedCashes = this.props.projectedCashes.map(projectedCash =>\n//\t\t\t<ProjectedCash key={projectedCash._links.self.href} projectedCash={projectedCash}/>\n//\t\t);\n//\t\treturn (\n//\t\t\t<table>\n//\t\t\t\t<tbody>\n//\t\t\t\t\t<tr>\n//\t\t\t\t\t\t<th>Date</th>\n//\t\t\t\t\t\t<th>Desc 1</th>\n//\t\t\t\t\t\t<th>Desc 2</th>\n//\t\t\t\t\t\t<th>LASDTF</th>\n//\t\t\t\t\t\t<th>LATFINSI</th>\n//\t\t\t\t\t\t<th>LATFHY</th>\n//\t\t\t\t\t\t<th>LASDHYM</th>\n//\t\t\t\t\t\t<th>NTL</th>\n//\t\t\t\t\t\t<th>LAAMTTF</th>\n//\t\t\t\t\t\t<th>CA</th>\n//\t\t\t\t\t\t<th>NY</th>\n//\t\t\t\t\t\t<th>NJ</th>\n//\t\t\t\t\t</tr>\n//\t\t\t\t\t{projectedCashes}\n//\t\t\t\t</tbody>\n//\t\t\t</table>\n//\t\t)\n//\t}\n//}\n//\n//class ProjectedCash extends React.Component{\n//\trender() {\n//\t\treturn (\n//\t\t\t<tr>\n//\t\t\t\t<td>{this.props.projectedCash.date}</td>\n//\t\t\t\t<td>{this.props.projectedCash.desc1}</td>\n//\t\t\t\t<td>{this.props.projectedCash.desc2}</td>\n//\t\t\t\t<td>{this.props.projectedCash.lasdtf}</td>\n//\t\t\t\t<td>{this.props.projectedCash.latfinsi}</td>\n//\t\t\t\t<td>{this.props.projectedCash.latfhy}</td>\n//\t\t\t\t<td>{this.props.projectedCash.lasdhym}</td>\n//\t\t\t\t<td>{this.props.projectedCash.ntl}</td>\n//\t\t\t\t<td>{this.props.projectedCash.laamttf}</td>\n//\t\t\t\t<td>{this.props.projectedCash.ca}</td>\n//\t\t\t\t<td>{this.props.projectedCash.ny}</td>\n//\t\t\t\t<td>{this.props.projectedCash.nj}</td>\n//\t\t\t</tr>\n//\t\t)\n//\t}\n//}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ 4)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9tYWluL2pzL2Jyb3dzZXIvcmVhY3QvY29udGFpbmVycy9BcHAuanM/ZTA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgeyBsb2FkQ2FzaFByb2plY3Rpb24gfSBmcm9tICcuLi9hY3Rpb24tY3JlYXRvcnMvY2FzaFByb2plY3Rpb25BY3Rpb24nO1xyXG5pbXBvcnQgQ29udGVudENvbnRhaW5lciBmcm9tICcuL0NvbnRlbnRDb250YWluZXInO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgcmVhY3REYXRhR3JpZCBmcm9tICcuLi9wYWNrYWdlcy9yZWFjdC1kYXRhLWdyaWQnO1xyXG5pbXBvcnQgcmVhY3REYXRhR3JpZEFkZG9ucyBmcm9tICcuLi9wYWNrYWdlcy9yZWFjdC1kYXRhLWdyaWQtYWRkb25zJztcclxuXHJcblxyXG5jb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG5cclxuY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlLXByb21pc2UnKTtcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IoIHByb3BzICl7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJy4uLi4uaW4gQXBwLmpzLi4uLi4uJyk7XHJcblx0XHRzdG9yZS5kaXNwYXRjaCggbG9hZENhc2hQcm9qZWN0aW9uKCkgKTtcclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCl7XHJcbiAgICAgXHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcblx0XHRcdFx0PE5hdiAvPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9eyB7IG1hcmdpblRvcDogJzcwcHgnIH19PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Q29udGVudENvbnRhaW5lci8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9cclxuLy9jbGFzcyBQcm9qZWN0ZWRDYXNoTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuLy9cdFxyXG4vL1x0cmVuZGVyKCkge1xyXG4vL1x0XHRjb25zb2xlLmxvZygndGhpcy5wcm9wcy4uLi4uLi4uLicsIHRoaXMucHJvcHMpXHJcbi8vXHRcdHZhciBwcm9qZWN0ZWRDYXNoZXMgPSB0aGlzLnByb3BzLnByb2plY3RlZENhc2hlcy5tYXAocHJvamVjdGVkQ2FzaCA9PlxyXG4vL1x0XHRcdDxQcm9qZWN0ZWRDYXNoIGtleT17cHJvamVjdGVkQ2FzaC5fbGlua3Muc2VsZi5ocmVmfSBwcm9qZWN0ZWRDYXNoPXtwcm9qZWN0ZWRDYXNofS8+XHJcbi8vXHRcdCk7XHJcbi8vXHRcdHJldHVybiAoXHJcbi8vXHRcdFx0PHRhYmxlPlxyXG4vL1x0XHRcdFx0PHRib2R5PlxyXG4vL1x0XHRcdFx0XHQ8dHI+XHJcbi8vXHRcdFx0XHRcdFx0PHRoPkRhdGU8L3RoPlxyXG4vL1x0XHRcdFx0XHRcdDx0aD5EZXNjIDE8L3RoPlxyXG4vL1x0XHRcdFx0XHRcdDx0aD5EZXNjIDI8L3RoPlxyXG4vL1x0XHRcdFx0XHRcdDx0aD5MQVNEVEY8L3RoPlxyXG4vL1x0XHRcdFx0XHRcdDx0aD5MQVRGSU5TSTwvdGg+XHJcbi8vXHRcdFx0XHRcdFx0PHRoPkxBVEZIWTwvdGg+XHJcbi8vXHRcdFx0XHRcdFx0PHRoPkxBU0RIWU08L3RoPlxyXG4vL1x0XHRcdFx0XHRcdDx0aD5OVEw8L3RoPlxyXG4vL1x0XHRcdFx0XHRcdDx0aD5MQUFNVFRGPC90aD5cclxuLy9cdFx0XHRcdFx0XHQ8dGg+Q0E8L3RoPlxyXG4vL1x0XHRcdFx0XHRcdDx0aD5OWTwvdGg+XHJcbi8vXHRcdFx0XHRcdFx0PHRoPk5KPC90aD5cclxuLy9cdFx0XHRcdFx0PC90cj5cclxuLy9cdFx0XHRcdFx0e3Byb2plY3RlZENhc2hlc31cclxuLy9cdFx0XHRcdDwvdGJvZHk+XHJcbi8vXHRcdFx0PC90YWJsZT5cclxuLy9cdFx0KVxyXG4vL1x0fVxyXG4vL31cclxuLy9cclxuLy9jbGFzcyBQcm9qZWN0ZWRDYXNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4vL1x0cmVuZGVyKCkge1xyXG4vL1x0XHRyZXR1cm4gKFxyXG4vL1x0XHRcdDx0cj5cclxuLy9cdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5wcm9qZWN0ZWRDYXNoLmRhdGV9PC90ZD5cclxuLy9cdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5wcm9qZWN0ZWRDYXNoLmRlc2MxfTwvdGQ+XHJcbi8vXHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucHJvamVjdGVkQ2FzaC5kZXNjMn08L3RkPlxyXG4vL1x0XHRcdFx0PHRkPnt0aGlzLnByb3BzLnByb2plY3RlZENhc2gubGFzZHRmfTwvdGQ+XHJcbi8vXHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucHJvamVjdGVkQ2FzaC5sYXRmaW5zaX08L3RkPlxyXG4vL1x0XHRcdFx0PHRkPnt0aGlzLnByb3BzLnByb2plY3RlZENhc2gubGF0Zmh5fTwvdGQ+XHJcbi8vXHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucHJvamVjdGVkQ2FzaC5sYXNkaHltfTwvdGQ+XHJcbi8vXHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucHJvamVjdGVkQ2FzaC5udGx9PC90ZD5cclxuLy9cdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5wcm9qZWN0ZWRDYXNoLmxhYW10dGZ9PC90ZD5cclxuLy9cdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5wcm9qZWN0ZWRDYXNoLmNhfTwvdGQ+XHJcbi8vXHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucHJvamVjdGVkQ2FzaC5ueX08L3RkPlxyXG4vL1x0XHRcdFx0PHRkPnt0aGlzLnByb3BzLnByb2plY3RlZENhc2gubmp9PC90ZD5cclxuLy9cdFx0XHQ8L3RyPlxyXG4vL1x0XHQpXHJcbi8vXHR9XHJcbi8vfVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFpbi9qcy9icm93c2VyL3JlYWN0L2NvbnRhaW5lcnMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQUZBO0FBV0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///458\n");

/***/ })

})