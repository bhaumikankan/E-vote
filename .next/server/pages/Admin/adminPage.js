"use strict";
(() => {
var exports = {};
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ adminPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./web3.js
var web3 = __webpack_require__(187);
// EXTERNAL MODULE: ./voteing.js + 1 modules
var voteing = __webpack_require__(77);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./pages/Admin/adminPage.js











const Admin = ({
  allcandidates,
  registrationStatus,
  voteStatus,
  allApplicants,
  totalApprovers
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  const [name, setName] = external_react_default().useState('');
  const [partyName, setPartyName] = external_react_default().useState('');
  const [load, setLoad] = external_react_default().useState(false);
  const [rload, setRload] = external_react_default().useState(false);
  const [vload, setVload] = external_react_default().useState(false);
  const [error, setError] = external_react_default().useState(false);
  const [aload, setAload] = external_react_default().useState(false);

  const handelSubmit = async e => {
    e.preventDefault();
    setLoad(true);
    const account = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
    await voteing/* default.methods.addCandidate */.Z.methods.addCandidate(name, partyName).send({
      from: account[0]
    });
    setLoad(false);
    setName('');
    setPartyName('');
    router.push('/Admin/adminPage');
  };

  const handelStartRegistration = async () => {
    setRload(true);
    const account = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
    await voteing/* default.methods.startRegistration */.Z.methods.startRegistration().send({
      from: account[0]
    });
    setRload(false);
    router.push('/Admin/adminPage');
  };

  const handelStartvote = async () => {
    setVload(true);
    const account = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
    await voteing/* default.methods.startVoteing */.Z.methods.startVoteing().send({
      from: account[0]
    });
    setVload(false);
    router.push('/Admin/adminPage');
  };

  const hadelStopRegistration = async () => {
    setRload(true);
    const account = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
    await voteing/* default.methods.stopRegistration */.Z.methods.stopRegistration().send({
      from: account[0]
    });
    setRload(false);
    router.push('/Admin/adminPage');
  };

  const hadelStopVote = async () => {
    setVload(true);
    const account = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
    await voteing/* default.methods.stopVoteing */.Z.methods.stopVoteing().send({
      from: account[0]
    });
    setVload(false);
    router.push('/Admin/adminPage');
  };

  const approve = async index => {
    setAload(true);
    const account = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
    await voteing/* default.methods.approveApplication */.Z.methods.approveApplication(index).send({
      from: account[0]
    });
    setAload(false);
    router.push('/Admin/adminPage');
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      color: 'white',
      backgroundColor: '#3CB3FB'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("center", {
        style: {
          paddingTop: '20px'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Admin"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          primary: true,
          children: "Back to HOME"
        })
      }), registrationStatus ? /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
        color: 'red',
        loading: rload,
        onClick: hadelStopRegistration,
        size: "large",
        style: {
          marginTop: '80px'
        },
        children: "Stop Registration"
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
        loading: rload,
        onClick: handelStartRegistration,
        style: {
          marginTop: '80px'
        },
        positive: true,
        size: "large",
        children: "start Registration"
      }), voteStatus ? /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
        size: "large",
        color: 'red',
        loading: vload,
        onClick: hadelStopVote,
        children: "Stop Voting"
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
        style: {
          marginTop: '80px'
        },
        positive: true,
        size: "large",
        loading: vload,
        onClick: handelStartvote,
        children: "start voting"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
        style: {
          paddingTop: '50px'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.GridRow, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.GridColumn, {
            width: 8,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: /*#__PURE__*/jsx_runtime_.jsx("center", {
                children: "Add Candidate"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
              onSubmit: handelSubmit,
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                label: "Name",
                value: name,
                onChange: e => setName(e.target.value),
                placeholder: "Enter candidate name"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                label: "Party name",
                value: partyName,
                onChange: e => setPartyName(e.target.value),
                placeholder: "Enter party name"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                primary: true,
                loading: load,
                children: "Submit"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.GridColumn, {
            width: 8,
            children: [/*#__PURE__*/jsx_runtime_.jsx("center", {
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "Vote Result"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
              celled: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Header, {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table.Row, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                    children: "Candidate Name"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                    children: "Party Name"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                    children: "Vote Count"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Body, {
                children: allcandidates.map((candidate, index) => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table.Row, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Cell, {
                      children: candidate[0]
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Cell, {
                      children: candidate[1]
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Cell, {
                      children: candidate[2]
                    })]
                  }, index);
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Applications"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Total approve voter = ", totalApprovers]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
        celled: true,
        style: {
          paddingBottom: '90px'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Header, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table.Row, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
              children: "Voter Card Number"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
              children: "Adhar Card Number"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
              children: "Address"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.HeaderCell, {
              children: "Approve"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Body, {
          children: allApplicants.map((application, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table.Row, {
              disabled: application[3],
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Cell, {
                children: application[0]
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Cell, {
                children: application[1]
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Cell, {
                children: application[2]
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Table.Cell, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                  loading: aload,
                  disabled: application[3],
                  onClick: () => approve(index),
                  positive: true,
                  children: "Approve"
                })
              })]
            }, index);
          })
        })]
      })]
    })
  });
};

Admin.getInitialProps = async () => {
  const allcandidates = await voteing/* default.methods.getAllcandidates */.Z.methods.getAllcandidates().call();
  const registrationStatus = await voteing/* default.methods.registerStart */.Z.methods.registerStart().call();
  const voteStatus = await voteing/* default.methods.voteStart */.Z.methods.voteStart().call();
  const allApplicants = await voteing/* default.methods.getAllapplications */.Z.methods.getAllapplications().call();
  const totalApprovers = await voteing/* default.methods.totalApprovers */.Z.methods.totalApprovers().call();
  console.log(totalApprovers);
  return {
    allcandidates: allcandidates,
    registrationStatus: registrationStatus,
    voteStatus: voteStatus,
    allApplicants: allApplicants,
    totalApprovers: totalApprovers
  };
};

/* harmony default export */ const adminPage = (Admin);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,60], () => (__webpack_exec__(559)));
module.exports = __webpack_exports__;

})();