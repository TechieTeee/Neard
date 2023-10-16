"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Index = ()=>{\n    _s();\n    const [etlMessage, setEtlMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRunETL = async ()=>{\n        try {\n            // Simulate a successful ETL run with a random run time\n            // Have to work on Flask server more for next steps\n            const runTime = Math.floor(Math.random() * 10) + 1; // Random run time between 1 and 10 minutes\n            const successMessage = \"ETL process completed successfully. Run time: \".concat(runTime, \" minutes.\");\n            setEtlMessage(successMessage);\n        } catch (error) {\n            console.error(\"Error triggering ETL:\", error);\n            setEtlMessage(\"Error triggering ETL process\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    backgroundColor: \"teal\",\n                    padding: \"10px\",\n                    textAlign: \"center\",\n                    fontFamily: \"Roboto, sans-serif\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#home\",\n                        style: {\n                            color: \"white\",\n                            marginRight: \"20px\",\n                            textDecoration: \"none\"\n                        },\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#about\",\n                        style: {\n                            color: \"white\",\n                            marginRight: \"20px\",\n                            textDecoration: \"none\"\n                        },\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#contact\",\n                        style: {\n                            color: \"white\",\n                            textDecoration: \"none\"\n                        },\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"50px\",\n                    backgroundColor: \"teal\",\n                    height: \"100vh\",\n                    color: \"white\",\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://www.pngarts.com/files/1/Nerd-Glasses-Free-PNG-Image-420x243.png\",\n                        alt: \"Neard Logo\",\n                        style: {\n                            width: \"300px\",\n                            height: \"300px\",\n                            marginBottom: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: \"3rem\",\n                            margin: \"0\",\n                            fontFamily: \"Roboto, sans-serif\"\n                        },\n                        children: \"Neard\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"1.5rem\",\n                            margin: \"10px 0\",\n                            fontFamily: \"Roboto, sans-serif\"\n                        },\n                        children: \"Your Near Protocol ETL Tool\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        style: {\n                            padding: \"10px\",\n                            fontSize: \"1rem\",\n                            margin: \"10px 0\",\n                            borderRadius: \"4px\",\n                            cursor: \"pointer\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"sharding\",\n                                children: \"Sharding\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"partitioning\",\n                                children: \"Partitioning\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"trend-analysis\",\n                                children: \"Trend Analysis\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            marginTop: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    padding: \"10px 20px\",\n                                    fontSize: \"1rem\",\n                                    backgroundColor: \"#4CAF50\",\n                                    color: \"white\",\n                                    border: \"none\",\n                                    borderRadius: \"4px\",\n                                    marginRight: \"10px\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Toggle Sharding\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    padding: \"10px 20px\",\n                                    fontSize: \"1rem\",\n                                    backgroundColor: \"#4CAF50\",\n                                    color: \"white\",\n                                    border: \"none\",\n                                    borderRadius: \"4px\",\n                                    marginRight: \"10px\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Toggle Partitioning\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    padding: \"10px 20px\",\n                                    fontSize: \"1rem\",\n                                    backgroundColor: \"#4CAF50\",\n                                    color: \"white\",\n                                    border: \"none\",\n                                    borderRadius: \"4px\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Analyze Trends\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            padding: \"10px 20px\",\n                            fontSize: \"1.5rem\",\n                            backgroundColor: \"#4CAF50\",\n                            color: \"white\",\n                            border: \"none\",\n                            borderRadius: \"4px\",\n                            cursor: \"pointer\",\n                            marginTop: \"20px\"\n                        },\n                        onClick: handleRunETL,\n                        children: \"Run ETL Process\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined),\n                    etlMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"#4CAF50\",\n                            marginTop: \"20px\"\n                        },\n                        children: etlMessage\n                    }, void 0, false, {\n                        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                        lineNumber: 144,\n                        columnNumber: 24\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Neard/frontend/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Neard/frontend/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"MD3o+mQJTSqEdJhEXfBqnQqUrGQ=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7Z0NBQ1Y7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ0c7Z0NBQ0M3QixPQUFPO29DQUNMRSxTQUFTO29DQUNUbUIsVUFBVTtvQ0FDVnBCLGlCQUFpQjtvQ0FDakJLLE9BQU87b0NBQ1B3QixRQUFRO29DQUNSTCxjQUFjO29DQUNkQyxRQUFRO2dDQUNWOzBDQUNEOzs7Ozs7Ozs7Ozs7a0NBTUgsOERBQUNHO3dCQUNDN0IsT0FBTzs0QkFDTEUsU0FBUzs0QkFDVG1CLFVBQVU7NEJBQ1ZwQixpQkFBaUI7NEJBQ2pCSyxPQUFPOzRCQUNQd0IsUUFBUTs0QkFDUkwsY0FBYzs0QkFDZEMsUUFBUTs0QkFDUmpCLFdBQVc7d0JBQ2I7d0JBQ0FzQixTQUFTNUM7a0NBQ1Y7Ozs7OztvQkFLQUYsNEJBQWMsOERBQUNzQzt3QkFBRXZCLE9BQU87NEJBQUVNLE9BQU87NEJBQVdHLFdBQVc7d0JBQU87a0NBQUl4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNFO0dBL0lNRDtLQUFBQTtBQWlKTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbZXRsTWVzc2FnZSwgc2V0RXRsTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlUnVuRVRMID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBTaW11bGF0ZSBhIHN1Y2Nlc3NmdWwgRVRMIHJ1biB3aXRoIGEgcmFuZG9tIHJ1biB0aW1lXG4gICAgICAvLyBIYXZlIHRvIHdvcmsgb24gRmxhc2sgc2VydmVyIG1vcmUgZm9yIG5leHQgc3RlcHNcbiAgICAgIGNvbnN0IHJ1blRpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxOyAvLyBSYW5kb20gcnVuIHRpbWUgYmV0d2VlbiAxIGFuZCAxMCBtaW51dGVzXG4gICAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGBFVEwgcHJvY2VzcyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LiBSdW4gdGltZTogJHtydW5UaW1lfSBtaW51dGVzLmA7XG5cbiAgICAgIHNldEV0bE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB0cmlnZ2VyaW5nIEVUTDonLCBlcnJvcik7XG4gICAgICBzZXRFdGxNZXNzYWdlKCdFcnJvciB0cmlnZ2VyaW5nIEVUTCBwcm9jZXNzJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxuYXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAndGVhbCcsIHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udEZhbWlseTogJ1JvYm90bywgc2Fucy1zZXJpZicgfX0+XG4gICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5SaWdodDogJzIwcHgnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpblJpZ2h0OiAnMjBweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICBDb250YWN0XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZWFsJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnBuZ2FydHMuY29tL2ZpbGVzLzEvTmVyZC1HbGFzc2VzLUZyZWUtUE5HLUltYWdlLTQyMHgyNDMucG5nXCJcbiAgICAgICAgICBhbHQ9XCJOZWFyZCBMb2dvXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgaGVpZ2h0OiAnMzAwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fVxuICAgICAgICAvPlxuICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdSb2JvdG8sIHNhbnMtc2VyaWYnIH19Pk5lYXJkPC9oMT5cbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nLCBtYXJnaW46ICcxMHB4IDAnLCBmb250RmFtaWx5OiAnUm9ib3RvLCBzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICBZb3VyIE5lYXIgUHJvdG9jb2wgRVRMIFRvb2xcbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHsvKiBEcm9wZG93biBmb3IgZGlmZmVyZW50IG9wdGlvbnMgKi99XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaGFyZGluZ1wiPlNoYXJkaW5nPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhcnRpdGlvbmluZ1wiPlBhcnRpdGlvbmluZzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cmVuZC1hbmFseXNpc1wiPlRyZW5kIEFuYWx5c2lzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgIHsvKiBBZGRpdGlvbmFsIG9wdGlvbnMgYXMgYnV0dG9ucyAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLFxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUb2dnbGUgU2hhcmRpbmdcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzRDQUY1MCcsXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRvZ2dsZSBQYXJ0aXRpb25pbmdcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzRDQUY1MCcsXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFuYWx5emUgVHJlbmRzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSdW4gRVRMIEJ1dHRvbiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMS41cmVtJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUnVuRVRMfVxuICAgICAgICA+XG4gICAgICAgICAgUnVuIEVUTCBQcm9jZXNzXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHsvKiBFVEwgTWVzc2FnZSAqL31cbiAgICAgICAge2V0bE1lc3NhZ2UgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICcjNENBRjUwJywgbWFyZ2luVG9wOiAnMjBweCcgfX0+e2V0bE1lc3NhZ2V9PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiSW5kZXgiLCJldGxNZXNzYWdlIiwic2V0RXRsTWVzc2FnZSIsImhhbmRsZVJ1bkVUTCIsInJ1blRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdWNjZXNzTWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImxpbmsiLCJocmVmIiwicmVsIiwibmF2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsImEiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwidGV4dERlY29yYXRpb24iLCJtYXJnaW5Ub3AiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwiaDEiLCJmb250U2l6ZSIsIm1hcmdpbiIsInAiLCJzZWxlY3QiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJvcHRpb24iLCJ2YWx1ZSIsImJ1dHRvbiIsImJvcmRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});