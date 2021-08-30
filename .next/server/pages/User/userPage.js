"use strict";
(() => {
var exports = {};
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var _voteing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(664);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);









const User = ({
  registrationStatus,
  voteStatus,
  allcandidates
}) => {
  const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [votercardNum, setVotercardNum] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [adharcardNum, setadharcardNum] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [walletaddress, setAddress] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [vload, setVload] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [verror, setVerror] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [vsuccess, setVSuccess] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);

  const handelSubmit = async e => {
    e.preventDefault();
    setLoad(true);
    setError(false);
    setSuccess(false);

    try {
      const account = await _web3__WEBPACK_IMPORTED_MODULE_2__/* .default.eth.getAccounts */ .Z.eth.getAccounts();
      await _voteing__WEBPACK_IMPORTED_MODULE_3__/* .default.methods.Register */ .Z.methods.Register(votercardNum, adharcardNum, walletaddress).send({
        from: account[0]
      });
      setLoad(false);
      setSuccess('Your registration submitted for review ');
      setVotercardNum('');
      setadharcardNum('');
      setAddress('');
    } catch (err) {
      setError(err.message);
      setLoad(false);
    }
  };

  const voteFun = async index => {
    setVload(true);
    setVerror(false);
    setVSuccess(false);

    try {
      const account = await _web3__WEBPACK_IMPORTED_MODULE_2__/* .default.eth.getAccounts */ .Z.eth.getAccounts();
      await _voteing__WEBPACK_IMPORTED_MODULE_3__/* .default.methods.vote */ .Z.methods.vote(index).send({
        from: account[0]
      });
      setVload(false);
      setVSuccess('Your vote is complete');
    } catch (err) {
      setVload(false);
      setVerror(err.message);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    style: {
      color: 'white',
      backgroundColor: '#3CB3FB',
      height: '100vh'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
        style: {
          paddingTop: '20px'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          children: "Voting Page"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
          style: {
            marginTop: '80px'
          },
          primary: true,
          children: "Back to HOME"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
        style: {
          paddingTop: '50px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.GridRow, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.GridColumn, {
            width: 8,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                children: "Registration"
              })
            }), !registrationStatus ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
              negative: true,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                children: "Registration status: stop"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "registration will start from 10a.m."
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
              onSubmit: handelSubmit,
              error: error,
              success: success,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
                label: "Voter Card Number",
                placeholder: "Enter voter card number",
                value: votercardNum,
                onChange: e => setVotercardNum(e.target.value)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
                label: "Adhar Card Number",
                placeholder: "Enter adhar card number",
                value: adharcardNum,
                onChange: e => setadharcardNum(e.target.value)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
                label: "Valid wallet address",
                placeholder: "Enter valid wallet address",
                value: walletaddress,
                onChange: e => setAddress(e.target.value)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                loading: load,
                primary: true,
                children: "Submit"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
                error: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                  children: "Opps!!"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  children: error
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
                success: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                  children: "Success!!"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  children: success
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.GridColumn, {
            width: 8,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Vote"
              })
            }), !voteStatus ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
              negative: true,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                children: "Voting status: stop"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "voting will start after registration"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [verror && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
                negative: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                  children: "Opps!!"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  children: verror
                })]
              }), vsuccess && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
                success: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                  children: "Success!!"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  children: vsuccess
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table, {
                celled: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Header, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {
                      children: "Candidate Name"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {
                      children: "Party Name"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {
                      children: "Vote"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Body, {
                  children: allcandidates.map((candidate, index) => {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {
                        children: candidate[0]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {
                        children: candidate[1]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                          loading: vload,
                          positive: true,
                          onClick: () => voteFun(index),
                          children: "Vote"
                        })
                      })]
                    }, index);
                  })
                })]
              })]
            })]
          })]
        })
      })]
    })
  });
};

User.getInitialProps = async () => {
  const registrationStatus = await _voteing__WEBPACK_IMPORTED_MODULE_3__/* .default.methods.registerStart */ .Z.methods.registerStart().call();
  const voteStatus = await _voteing__WEBPACK_IMPORTED_MODULE_3__/* .default.methods.voteStart */ .Z.methods.voteStart().call();
  const allcandidates = await _voteing__WEBPACK_IMPORTED_MODULE_3__/* .default.methods.getAllcandidates */ .Z.methods.getAllcandidates().call();
  return {
    registrationStatus: registrationStatus,
    voteStatus: voteStatus,
    allcandidates: allcandidates
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,60], () => (__webpack_exec__(254)));
module.exports = __webpack_exports__;

})();