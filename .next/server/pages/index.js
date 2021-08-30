"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: ./voteing.js + 1 modules
var voteing = __webpack_require__(77);
// EXTERNAL MODULE: ./web3.js
var web3 = __webpack_require__(187);
;// CONCATENATED MODULE: ./pages/index.js










const Home = ({
  registrationStatus,
  voteStatus
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      color: 'white',
      backgroundColor: '#3CB3FB'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Tourney:wght@100&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap",
          rel: "stylesheet"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
        size: "large",
        floated: "right",
        style: {
          paddingTop: '15px'
        },
        src: "https://cdn.dribbble.com/users/1738394/screenshots/14505745/media/d75337c26e02c6b8bc39dcc3d7e87b38.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        style: {
          fontFamily: 'Tourney',
          fontSize: "170px"
        },
        children: "E-VOTE"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        style: {
          fontFamily: 'Abril Fatface',
          fontSize: "150px",
          letterSpacing: "10px"
        },
        children: "2021"
      }), registrationStatus ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Registration process state :- start"
      }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Registration process state :- stop"
      }), voteStatus ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Voting process state :- start"
      }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Voting process state :- stop"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/Admin/adminPage",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          size: "huge",
          primary: true,
          children: "Admin"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/User/userPage",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          size: "huge",
          style: {
            marginBottom: '24vh'
          },
          primary: true,
          children: "Voter"
        })
      })]
    })
  });
};

Home.getInitialProps = async () => {
  //const accounts= await web3.eth.getAccounts();
  const registrationStatus = await voteing/* default.methods.registerStart */.Z.methods.registerStart().call();
  const voteStatus = await voteing/* default.methods.voteStart */.Z.methods.voteStart().call();
  return {
    registrationStatus: registrationStatus,
    voteStatus: voteStatus
  };
};

/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 347:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 409:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,60], () => (__webpack_exec__(740)));
module.exports = __webpack_exports__;

})();