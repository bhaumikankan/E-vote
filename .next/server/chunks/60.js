exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ voteing)
});

;// CONCATENATED MODULE: ./Etherium/build/Voteing.json
const Voteing_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"v","type":"string"},{"internalType":"string","name":"a","type":"string"},{"internalType":"address","name":"g","type":"address"}],"name":"Register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"n","type":"string"},{"internalType":"string","name":"pn","type":"string"}],"name":"addCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"applications","outputs":[{"internalType":"string","name":"votercardNumber","type":"string"},{"internalType":"string","name":"AdarcardNumber","type":"string"},{"internalType":"address","name":"govtRegisterAddress","type":"address"},{"internalType":"bool","name":"isApproved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"approveApplication","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"partyName","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"completeVoters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllapplications","outputs":[{"components":[{"internalType":"string","name":"votercardNumber","type":"string"},{"internalType":"string","name":"AdarcardNumber","type":"string"},{"internalType":"address","name":"govtRegisterAddress","type":"address"},{"internalType":"bool","name":"isApproved","type":"bool"}],"internalType":"struct Voteing.Application[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllcandidates","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"partyName","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"internalType":"struct Voteing.Candidate[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registerStart","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registerVoter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startRegistration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVoteing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopRegistration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopVoteing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalApprovers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"voteStart","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]}');
// EXTERNAL MODULE: ./web3.js
var web3 = __webpack_require__(187);
;// CONCATENATED MODULE: ./voteing.js

const address = '0xa34bAd4d93b793D149eAa8d5B3568C0EC655590c';

/* harmony default export */ const voteing = (new web3/* default.eth.Contract */.Z.eth.Contract(Voteing_namespaceObject.Mt, address));

/***/ }),

/***/ 187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(409);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('https://rinkeby.infura.io/v3/c418d4eba8b84ff092648af21a3e7e6f');
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;