"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/FAQ/page",{

/***/ "(app-pages-browser)/./components/FAQPage.js":
/*!*******************************!*\
  !*** ./components/FAQPage.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FAQPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-up.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/FAQpage.module.css */ \"(app-pages-browser)/./styles/FAQpage.module.css\");\n/* harmony import */ var _styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction FAQPage(param) {\n    let { faqs, lng } = param;\n    _s();\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(lng);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [selectedContent, setSelectedContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [openDropdowns, setOpenDropdowns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [highlightedItem, setHighlightedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Memoize filtered FAQs with translations\n    const filteredFaqs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"FAQPage.useMemo[filteredFaqs]\": ()=>{\n            const searchLower = searchTerm.toLowerCase();\n            return faqs.filter({\n                \"FAQPage.useMemo[filteredFaqs]\": (faq)=>{\n                    const questionMatch = t(faq.question).toLowerCase().includes(searchLower);\n                    const answerMatch = t(faq.answer).toLowerCase().includes(searchLower);\n                    const subItemMatch = faq.subItems.some({\n                        \"FAQPage.useMemo[filteredFaqs].subItemMatch\": (item)=>t(item.label).toLowerCase().includes(searchLower) || t(item.content).toLowerCase().includes(searchLower)\n                    }[\"FAQPage.useMemo[filteredFaqs].subItemMatch\"]);\n                    return questionMatch || answerMatch || subItemMatch;\n                }\n            }[\"FAQPage.useMemo[filteredFaqs]\"]);\n        }\n    }[\"FAQPage.useMemo[filteredFaqs]\"], [\n        faqs,\n        searchTerm,\n        t\n    ]);\n    // Handle search term changes\n    const handleSearchChange = (newSearchTerm)=>{\n        setSearchTerm(newSearchTerm);\n        if (!newSearchTerm) {\n            setOpenDropdowns({});\n            setSelectedContent(null);\n            setHighlightedItem(null);\n            return;\n        }\n        const newOpenDropdowns = {};\n        let foundMatch = false;\n        let newSelectedContent = null;\n        let newHighlightedItem = null;\n        for (const faq of filteredFaqs){\n            if (t(faq.question).toLowerCase().includes(newSearchTerm.toLowerCase()) || t(faq.answer).toLowerCase().includes(newSearchTerm.toLowerCase())) {\n                newOpenDropdowns[faq.id] = true;\n                newSelectedContent = {\n                    question: faq.question,\n                    content: faq.answer\n                };\n                newHighlightedItem = null;\n                foundMatch = true;\n                break;\n            }\n            const matchingSubItem = faq.subItems.find((item)=>t(item.label).toLowerCase().includes(newSearchTerm.toLowerCase()) || t(item.content).toLowerCase().includes(newSearchTerm.toLowerCase()));\n            if (matchingSubItem) {\n                newOpenDropdowns[faq.id] = true;\n                newSelectedContent = {\n                    question: faq.question,\n                    content: matchingSubItem.content\n                };\n                newHighlightedItem = matchingSubItem.id;\n                foundMatch = true;\n                break;\n            }\n        }\n        if (foundMatch) {\n            setOpenDropdowns(newOpenDropdowns);\n            setSelectedContent(newSelectedContent);\n            setHighlightedItem(newHighlightedItem);\n        }\n    };\n    const handleDropdownToggle = (id)=>{\n        setOpenDropdowns((prev)=>({\n                ...prev,\n                [id]: !prev[id]\n            }));\n    };\n    const handleContentSelect = function(question, content) {\n        let itemId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;\n        setSelectedContent({\n            question,\n            content\n        });\n        setHighlightedItem(itemId);\n        setIsMobileMenuOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqPage),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobileMenuToggle), \" \").concat(isMobileMenuOpen ? (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobileMenuToggleActive) : ''),\n                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                children: isMobileMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                    lineNumber: 96,\n                    columnNumber: 29\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                    lineNumber: 96,\n                    columnNumber: 37\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"\".concat((_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqSidebar), \" \").concat(isMobileMenuOpen ? (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqSidebarOpen) : ''),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: t('searchFAQs'),\n                        value: searchTerm,\n                        onChange: (e)=>handleSearchChange(e.target.value),\n                        className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqSearch)\n                    }, void 0, false, {\n                        fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqNav),\n                        children: filteredFaqs.map((faq)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqNavItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\".concat((_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqNavButton), \" \").concat(openDropdowns[faq.id] ? (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqNavButtonActive) : ''),\n                                        onClick: ()=>handleDropdownToggle(faq.id),\n                                        children: [\n                                            t(faq.question),\n                                            openDropdowns[faq.id] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqChevron)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                                                lineNumber: 115,\n                                                columnNumber: 19\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqChevron)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, this),\n                                    openDropdowns[faq.id] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqDropdown),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"\".concat((_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqDropdownItem), \" \").concat(highlightedItem === null && (selectedContent === null || selectedContent === void 0 ? void 0 : selectedContent.question) === faq.question ? (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqDropdownItemHighlighted) : ''),\n                                                onClick: ()=>handleContentSelect(faq.question, faq.answer),\n                                                children: t('overview')\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                                                lineNumber: 122,\n                                                columnNumber: 19\n                                            }, this),\n                                            faq.subItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"\".concat((_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqDropdownItem), \" \").concat(highlightedItem === item.id ? (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqDropdownItemHighlighted) : ''),\n                                                    onClick: ()=>handleContentSelect(faq.question, item.content, item.id),\n                                                    children: t(item.label)\n                                                }, item.id, false, {\n                                                    fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 21\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, faq.id, true, {\n                                fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqContent),\n                children: selectedContent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqDetail),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: t(selectedContent.question)\n                        }, void 0, false, {\n                            fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: t(selectedContent.content)\n                        }, void 0, false, {\n                            fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                    lineNumber: 145,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FAQpage_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqPlaceholder),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: t('selectQuestion')\n                    }, void 0, false, {\n                        fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                        lineNumber: 151,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                    lineNumber: 150,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dingdong/Desktop/react-nc/components/FAQPage.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(FAQPage, \"8FUL7I+5oEBNvvTPhG0d7fxfNrU=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation\n    ];\n});\n_c = FAQPage;\nvar _c;\n$RefreshReg$(_c, \"FAQPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRkFRUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXFEO0FBQ1U7QUFDaEI7QUFDRztBQUVuQyxTQUFTUyxRQUFRLEtBQWE7UUFBYixFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFiOztJQUM5QixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHTCw2REFBY0EsQ0FBQ0k7SUFDN0IsTUFBTSxDQUFDRSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2UsaUJBQWlCQyxtQkFBbUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ2lCLGVBQWVDLGlCQUFpQixHQUFHbEIsK0NBQVFBLENBQUMsQ0FBQztJQUNwRCxNQUFNLENBQUNtQixpQkFBaUJDLG1CQUFtQixHQUFHcEIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDcUIsa0JBQWtCQyxvQkFBb0IsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRXpELDBDQUEwQztJQUMxQyxNQUFNdUIsZUFBZXJCLDhDQUFPQTt5Q0FBQztZQUMzQixNQUFNc0IsY0FBY1gsV0FBV1ksV0FBVztZQUMxQyxPQUFPZixLQUFLZ0IsTUFBTTtpREFBQ0MsQ0FBQUE7b0JBQ2pCLE1BQU1DLGdCQUFnQmhCLEVBQUVlLElBQUlFLFFBQVEsRUFBRUosV0FBVyxHQUFHSyxRQUFRLENBQUNOO29CQUM3RCxNQUFNTyxjQUFjbkIsRUFBRWUsSUFBSUssTUFBTSxFQUFFUCxXQUFXLEdBQUdLLFFBQVEsQ0FBQ047b0JBQ3pELE1BQU1TLGVBQWVOLElBQUlPLFFBQVEsQ0FBQ0MsSUFBSTtzRUFBQ0MsQ0FBQUEsT0FDckN4QixFQUFFd0IsS0FBS0MsS0FBSyxFQUFFWixXQUFXLEdBQUdLLFFBQVEsQ0FBQ04sZ0JBQ3JDWixFQUFFd0IsS0FBS0UsT0FBTyxFQUFFYixXQUFXLEdBQUdLLFFBQVEsQ0FBQ047O29CQUV6QyxPQUFPSSxp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O21EQUpSRCxLQUFLUyxFQUFFOzs7Ozs7Ozs7Ozs7K0JBdEJabEIsSUFBSWtCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBbUN0Qiw4REFBQ087Z0JBQUlDLFdBQVc3Qyw4RUFBaUI7MEJBQzlCTyxnQ0FDQyw4REFBQ3FDO29CQUFJQyxXQUFXN0MsNkVBQWdCOztzQ0FDOUIsOERBQUMwRTtzQ0FBSXRFLEVBQUVHLGdCQUFnQmMsUUFBUTs7Ozs7O3NDQUMvQiw4REFBQ3NEO3NDQUFHdkUsRUFBRUcsZ0JBQWdCdUIsT0FBTzs7Ozs7Ozs7Ozs7eUNBRy9CLDhEQUFDYztvQkFBSUMsV0FBVzdDLGtGQUFxQjs4QkFDbkMsNEVBQUMyRTtrQ0FBR3ZFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEI7R0FySndCSDs7UUFDUkYseURBQWNBOzs7S0FETkUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW5nZG9uZy9EZXNrdG9wL3JlYWN0LW5jL2NvbXBvbmVudHMvRkFRUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGV2cm9uRG93biwgQ2hldnJvblVwLCBNZW51LCBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9GQVFwYWdlLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGQVFQYWdlKHsgZmFxcywgbG5nIH0pIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihsbmcpO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbnRlbnQsIHNldFNlbGVjdGVkQ29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29wZW5Ecm9wZG93bnMsIHNldE9wZW5Ecm9wZG93bnNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaGlnaGxpZ2h0ZWRJdGVtLCBzZXRIaWdobGlnaHRlZEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc01vYmlsZU1lbnVPcGVuLCBzZXRJc01vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBNZW1vaXplIGZpbHRlcmVkIEZBUXMgd2l0aCB0cmFuc2xhdGlvbnNcbiAgY29uc3QgZmlsdGVyZWRGYXFzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoTG93ZXIgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGZhcXMuZmlsdGVyKGZhcSA9PiB7XG4gICAgICBjb25zdCBxdWVzdGlvbk1hdGNoID0gdChmYXEucXVlc3Rpb24pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoTG93ZXIpO1xuICAgICAgY29uc3QgYW5zd2VyTWF0Y2ggPSB0KGZhcS5hbnN3ZXIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoTG93ZXIpO1xuICAgICAgY29uc3Qgc3ViSXRlbU1hdGNoID0gZmFxLnN1Ykl0ZW1zLnNvbWUoaXRlbSA9PlxuICAgICAgICB0KGl0ZW0ubGFiZWwpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoTG93ZXIpIHx8XG4gICAgICAgIHQoaXRlbS5jb250ZW50KS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaExvd2VyKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBxdWVzdGlvbk1hdGNoIHx8IGFuc3dlck1hdGNoIHx8IHN1Ykl0ZW1NYXRjaDtcbiAgICB9KTtcbiAgfSwgW2ZhcXMsIHNlYXJjaFRlcm0sIHRdKTtcblxuICAvLyBIYW5kbGUgc2VhcmNoIHRlcm0gY2hhbmdlc1xuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAobmV3U2VhcmNoVGVybSkgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0obmV3U2VhcmNoVGVybSk7XG4gICAgXG4gICAgaWYgKCFuZXdTZWFyY2hUZXJtKSB7XG4gICAgICBzZXRPcGVuRHJvcGRvd25zKHt9KTtcbiAgICAgIHNldFNlbGVjdGVkQ29udGVudChudWxsKTtcbiAgICAgIHNldEhpZ2hsaWdodGVkSXRlbShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdPcGVuRHJvcGRvd25zID0ge307XG4gICAgbGV0IGZvdW5kTWF0Y2ggPSBmYWxzZTtcbiAgICBsZXQgbmV3U2VsZWN0ZWRDb250ZW50ID0gbnVsbDtcbiAgICBsZXQgbmV3SGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcblxuICAgIGZvciAoY29uc3QgZmFxIG9mIGZpbHRlcmVkRmFxcykge1xuICAgICAgaWYgKHQoZmFxLnF1ZXN0aW9uKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5ld1NlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICB0KGZhcS5hbnN3ZXIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmV3U2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBuZXdPcGVuRHJvcGRvd25zW2ZhcS5pZF0gPSB0cnVlO1xuICAgICAgICBuZXdTZWxlY3RlZENvbnRlbnQgPSB7IHF1ZXN0aW9uOiBmYXEucXVlc3Rpb24sIGNvbnRlbnQ6IGZhcS5hbnN3ZXIgfTtcbiAgICAgICAgbmV3SGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcbiAgICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXRjaGluZ1N1Ykl0ZW0gPSBmYXEuc3ViSXRlbXMuZmluZChpdGVtID0+XG4gICAgICAgIHQoaXRlbS5sYWJlbCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuZXdTZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgIHQoaXRlbS5jb250ZW50KS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5ld1NlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG5cbiAgICAgIGlmIChtYXRjaGluZ1N1Ykl0ZW0pIHtcbiAgICAgICAgbmV3T3BlbkRyb3Bkb3duc1tmYXEuaWRdID0gdHJ1ZTtcbiAgICAgICAgbmV3U2VsZWN0ZWRDb250ZW50ID0geyBxdWVzdGlvbjogZmFxLnF1ZXN0aW9uLCBjb250ZW50OiBtYXRjaGluZ1N1Ykl0ZW0uY29udGVudCB9O1xuICAgICAgICBuZXdIaWdobGlnaHRlZEl0ZW0gPSBtYXRjaGluZ1N1Ykl0ZW0uaWQ7XG4gICAgICAgIGZvdW5kTWF0Y2ggPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZm91bmRNYXRjaCkge1xuICAgICAgc2V0T3BlbkRyb3Bkb3ducyhuZXdPcGVuRHJvcGRvd25zKTtcbiAgICAgIHNldFNlbGVjdGVkQ29udGVudChuZXdTZWxlY3RlZENvbnRlbnQpO1xuICAgICAgc2V0SGlnaGxpZ2h0ZWRJdGVtKG5ld0hpZ2hsaWdodGVkSXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyb3Bkb3duVG9nZ2xlID0gKGlkKSA9PiB7XG4gICAgc2V0T3BlbkRyb3Bkb3ducyhwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2lkXTogIXByZXZbaWRdXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbnRlbnRTZWxlY3QgPSAocXVlc3Rpb24sIGNvbnRlbnQsIGl0ZW1JZCA9IG51bGwpID0+IHtcbiAgICBzZXRTZWxlY3RlZENvbnRlbnQoeyBxdWVzdGlvbiwgY29udGVudCB9KTtcbiAgICBzZXRIaWdobGlnaHRlZEl0ZW0oaXRlbUlkKTtcbiAgICBzZXRJc01vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxUGFnZX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vYmlsZU1lbnVUb2dnbGV9ICR7aXNNb2JpbGVNZW51T3BlbiA/IHN0eWxlcy5tb2JpbGVNZW51VG9nZ2xlQWN0aXZlIDogJyd9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbighaXNNb2JpbGVNZW51T3Blbil9XG4gICAgICA+XG4gICAgICAgIHtpc01vYmlsZU1lbnVPcGVuID8gPFggLz4gOiA8TWVudSAvPn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT17YCR7c3R5bGVzLmZhcVNpZGViYXJ9ICR7aXNNb2JpbGVNZW51T3BlbiA/IHN0eWxlcy5mYXFTaWRlYmFyT3BlbiA6ICcnfWB9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3NlYXJjaEZBUXMnKX1cbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmFxU2VhcmNofVxuICAgICAgICAvPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmZhcU5hdn0+XG4gICAgICAgICAge2ZpbHRlcmVkRmFxcy5tYXAoKGZhcSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2ZhcS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZmFxTmF2SXRlbX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5mYXFOYXZCdXR0b259ICR7b3BlbkRyb3Bkb3duc1tmYXEuaWRdID8gc3R5bGVzLmZhcU5hdkJ1dHRvbkFjdGl2ZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRHJvcGRvd25Ub2dnbGUoZmFxLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KGZhcS5xdWVzdGlvbil9XG4gICAgICAgICAgICAgICAge29wZW5Ecm9wZG93bnNbZmFxLmlkXSA/IChcbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uVXAgY2xhc3NOYW1lPXtzdHlsZXMuZmFxQ2hldnJvbn0gLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT17c3R5bGVzLmZhcUNoZXZyb259IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHtvcGVuRHJvcGRvd25zW2ZhcS5pZF0gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxRHJvcGRvd259PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5mYXFEcm9wZG93bkl0ZW19ICR7aGlnaGxpZ2h0ZWRJdGVtID09PSBudWxsICYmIHNlbGVjdGVkQ29udGVudD8ucXVlc3Rpb24gPT09IGZhcS5xdWVzdGlvbiA/IHN0eWxlcy5mYXFEcm9wZG93bkl0ZW1IaWdobGlnaHRlZCA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbnRlbnRTZWxlY3QoZmFxLnF1ZXN0aW9uLCBmYXEuYW5zd2VyKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QoJ292ZXJ2aWV3Jyl9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHtmYXEuc3ViSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZmFxRHJvcGRvd25JdGVtfSAke2hpZ2hsaWdodGVkSXRlbSA9PT0gaXRlbS5pZCA/IHN0eWxlcy5mYXFEcm9wZG93bkl0ZW1IaWdobGlnaHRlZCA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29udGVudFNlbGVjdChmYXEucXVlc3Rpb24sIGl0ZW0uY29udGVudCwgaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dChpdGVtLmxhYmVsKX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhcUNvbnRlbnR9PlxuICAgICAgICB7c2VsZWN0ZWRDb250ZW50ID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxRGV0YWlsfT5cbiAgICAgICAgICAgIDxoMj57dChzZWxlY3RlZENvbnRlbnQucXVlc3Rpb24pfTwvaDI+XG4gICAgICAgICAgICA8cD57dChzZWxlY3RlZENvbnRlbnQuY29udGVudCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxUGxhY2Vob2xkZXJ9PlxuICAgICAgICAgICAgPHA+e3QoJ3NlbGVjdFF1ZXN0aW9uJyl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIkNoZXZyb25Eb3duIiwiQ2hldnJvblVwIiwiTWVudSIsIlgiLCJ1c2VUcmFuc2xhdGlvbiIsInN0eWxlcyIsIkZBUVBhZ2UiLCJmYXFzIiwibG5nIiwidCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VsZWN0ZWRDb250ZW50Iiwic2V0U2VsZWN0ZWRDb250ZW50Iiwib3BlbkRyb3Bkb3ducyIsInNldE9wZW5Ecm9wZG93bnMiLCJoaWdobGlnaHRlZEl0ZW0iLCJzZXRIaWdobGlnaHRlZEl0ZW0iLCJpc01vYmlsZU1lbnVPcGVuIiwic2V0SXNNb2JpbGVNZW51T3BlbiIsImZpbHRlcmVkRmFxcyIsInNlYXJjaExvd2VyIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJmYXEiLCJxdWVzdGlvbk1hdGNoIiwicXVlc3Rpb24iLCJpbmNsdWRlcyIsImFuc3dlck1hdGNoIiwiYW5zd2VyIiwic3ViSXRlbU1hdGNoIiwic3ViSXRlbXMiLCJzb21lIiwiaXRlbSIsImxhYmVsIiwiY29udGVudCIsImhhbmRsZVNlYXJjaENoYW5nZSIsIm5ld1NlYXJjaFRlcm0iLCJuZXdPcGVuRHJvcGRvd25zIiwiZm91bmRNYXRjaCIsIm5ld1NlbGVjdGVkQ29udGVudCIsIm5ld0hpZ2hsaWdodGVkSXRlbSIsImlkIiwibWF0Y2hpbmdTdWJJdGVtIiwiZmluZCIsImhhbmRsZURyb3Bkb3duVG9nZ2xlIiwicHJldiIsImhhbmRsZUNvbnRlbnRTZWxlY3QiLCJpdGVtSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJmYXFQYWdlIiwiYnV0dG9uIiwibW9iaWxlTWVudVRvZ2dsZSIsIm1vYmlsZU1lbnVUb2dnbGVBY3RpdmUiLCJvbkNsaWNrIiwiYXNpZGUiLCJmYXFTaWRlYmFyIiwiZmFxU2lkZWJhck9wZW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmFxU2VhcmNoIiwibmF2IiwiZmFxTmF2IiwibWFwIiwiZmFxTmF2SXRlbSIsImZhcU5hdkJ1dHRvbiIsImZhcU5hdkJ1dHRvbkFjdGl2ZSIsImZhcUNoZXZyb24iLCJmYXFEcm9wZG93biIsImZhcURyb3Bkb3duSXRlbSIsImZhcURyb3Bkb3duSXRlbUhpZ2hsaWdodGVkIiwiZmFxQ29udGVudCIsImZhcURldGFpbCIsImgyIiwicCIsImZhcVBsYWNlaG9sZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FAQPage.js\n"));

/***/ })

});