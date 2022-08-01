"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuwq1HulMchJDkh9SPs6rhaPyrA4iTXf1Rw&usqp=CAU) no-repeat;\r\n  background-size: cover;\r\n  padding: 2% 10%;\r\n  min-height: 100vh;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 3%;\r\n}\r\n\r\n.head-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 1rem;\r\n  border-radius: 5px;\r\n  background-color: #b8c6db;\r\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n}\r\n\r\n.nav-text {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 1rem;\r\n  font-weight: bolder;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.navbar-nav {\r\n  gap: 5%;\r\n}\r\n\r\n.spot-nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3px;\r\n}\r\n\r\n.spotlight {\r\n  display: flex;\r\n  background-color: #ffcb05;\r\n  border-radius: 50%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-height: 25px;\r\n  font-size: 1rem;\r\n}\r\n\r\n#home {\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  background-color: #b8c6db;\r\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n  max-height: 700px;\r\n  min-height: 700px;\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  gap: 10px;\r\n}\r\n\r\nselect {\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\nselect:focus,\r\nselect:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n}\r\n\r\n#row {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(240px, 350px));\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n.single-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 2%;\r\n  box-shadow: #89d4cf 0 0 20px;\r\n  border-radius: 10px;\r\n  padding: 15px;\r\n  min-width: 248px;\r\n  max-width: 318px;\r\n}\r\n\r\n.col img {\r\n  width: 15rem;\r\n  height: 8rem;\r\n}\r\n\r\n.img-card {\r\n  height: 10rem;\r\n  width: 100%;\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.img-card:hover {\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n  transform-origin: bottom;\r\n  cursor: pointer;\r\n}\r\n\r\n.bounce-3 {\r\n  animation-name: bounce-3;\r\n  animation-timing-function: ease;\r\n}\r\n\r\n.bounce-4 {\r\n  animation-name: bounce-3;\r\n  animation-timing-function: ease;\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n  transform-origin: bottom;\r\n}\r\n\r\n@keyframes bounce-3 {\r\n  0% { transform: translateY(0); }\r\n  30% { transform: translateY(-60px); }\r\n  50% { transform: translateY(0); }\r\n  100% { transform: translateY(0); }\r\n}\r\n\r\n.description {\r\n  padding-top: 2rem;\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.description .pokemon-name {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.poke-action {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 10%;\r\n}\r\n\r\n.modal-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  -webkit-backdrop-filter: blur(10px); /* Use for Safari 9+, Edge 17+ (not a mistake) and iOS Safari 9.2+ */\r\n  backdrop-filter: blur(10px); /* Supported in Chrome 76 */\r\n}\r\n\r\n.modal {\r\n  padding: 20px 0;\r\n  background-color: #d5fefd;\r\n  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);\r\n  border-radius: 10%;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80%;\r\n  height: max-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  animation: modalAnimation 1s;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n.modal.comments {\r\n  padding: 3%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  animation: none;\r\n}\r\n\r\n.modal * {\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n\r\n.modal-information {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.modal-information * {\r\n  width: 80%;\r\n  margin: 0;\r\n  text-align: start;\r\n}\r\n\r\n.comments form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: start;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-ul {\r\n  height: 250px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-ul li {\r\n  width: 100%;\r\n  padding: 8px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  column-gap: 10px;\r\n  border-bottom: 2px solid #000;\r\n}\r\n\r\n.modal-ul li * {\r\n  text-align: start;\r\n  width: 45%;\r\n  height: max-content;\r\n  margin: 0;\r\n}\r\n\r\n.ul-date {\r\n  width: 100%;\r\n}\r\n\r\n.form-p {\r\n  font-size: 1.2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.form-textarea {\r\n  height: 100px;\r\n  background: inherit;\r\n  border: none;\r\n  border-bottom: 2px solid rgb(208, 22, 22);\r\n}\r\n\r\n.form-input {\r\n  width: 50%;\r\n  background: inherit;\r\n  border: none;\r\n  border-bottom: 2px solid rgb(208, 22, 22);\r\n}\r\n\r\n.form-submit {\r\n  width: min-content;\r\n  background-color: #52a7c1;\r\n  background-image: linear-gradient(315deg, #52a7c1 0%, #b3f6d8 74%);\r\n  border: none;\r\n  border-radius: 10px;\r\n  font-weight: 900;\r\n  padding: 0.3rem 1.5rem;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.notDisplay {\r\n  display: none;\r\n}\r\n\r\n@keyframes modalAnimation {\r\n  0% {\r\n    transform: translate(-50%, -50%) scale(0) rotate3d(0, 2, 0, 60deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -50%) scale(1) rotate3d(0, 2, 0, 360deg);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  0% { transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { transform: translate(-3px, 0) rotate(1deg); }\r\n  30% { transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .col {\r\n    min-width: calc(100% / 4);\r\n    max-width: 318px;\r\n  }\r\n\r\n  .modal-img {\r\n    max-width: 350px;\r\n    transform: scale(1.2);\r\n    animation: shake 0.5s;\r\n    animation-iteration-count: 4;\r\n  }\r\n\r\n  .modal {\r\n    max-width: 30%;\r\n    min-height: 60%;\r\n  }\r\n\r\n  .on-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .on-desktop {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 10px;\r\n    gap: 10%;\r\n  }\r\n\r\n  .on-desktop a {\r\n    width: 30%;\r\n  }\r\n\r\n  .nav-list {\r\n    width: 80%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    align-self: center;\r\n    text-align: center;\r\n    gap: 15px;\r\n    margin: 0;\r\n  }\r\n\r\n  .desktop-a {\r\n    color: #555;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .on-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .on-mobile {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    gap: 10%;\r\n  }\r\n\r\n  .default {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    padding: 1% 2% 1% 2%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 5px;\r\n    background-color: #b8c6db;\r\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n  }\r\n\r\n  .popup-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: #b8c6db;\r\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    align-items: center;\r\n    padding: 20% 5% 5% 5%;\r\n    gap: 5%;\r\n  }\r\n\r\n  .hamburger {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .close {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: end;\r\n  }\r\n\r\n  .nav-text {\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile-a {\r\n    width: 100%;\r\n    color: #555;\r\n    font-size: 2em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n}\r\n\r\n/* class active */\r\n.active {\r\n  display: flex;\r\n}\r\n\r\n.non-active {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuwq1HulMchJDkh9SPs6rhaPyrA4iTXf1Rw&usqp=CAU) no-repeat;\r\n  background-size: cover;\r\n  padding: 2% 10%;\r\n  min-height: 100vh;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 3%;\r\n}\r\n\r\n.head-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 1rem;\r\n  border-radius: 5px;\r\n  background-color: #b8c6db;\r\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n}\r\n\r\n.nav-text {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 1rem;\r\n  font-weight: bolder;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.navbar-nav {\r\n  gap: 5%;\r\n}\r\n\r\n.spot-nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3px;\r\n}\r\n\r\n.spotlight {\r\n  display: flex;\r\n  background-color: #ffcb05;\r\n  border-radius: 50%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-height: 25px;\r\n  font-size: 1rem;\r\n}\r\n\r\n#home {\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  background-color: #b8c6db;\r\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n  max-height: 700px;\r\n  min-height: 700px;\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  gap: 10px;\r\n}\r\n\r\nselect {\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\nselect:focus,\r\nselect:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n}\r\n\r\n#row {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(240px, 350px));\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n.single-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 2%;\r\n  box-shadow: #89d4cf 0 0 20px;\r\n  border-radius: 10px;\r\n  padding: 15px;\r\n  min-width: 248px;\r\n  max-width: 318px;\r\n}\r\n\r\n.col img {\r\n  width: 15rem;\r\n  height: 8rem;\r\n}\r\n\r\n.img-card {\r\n  height: 10rem;\r\n  width: 100%;\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.img-card:hover {\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n  transform-origin: bottom;\r\n  cursor: pointer;\r\n}\r\n\r\n.bounce-3 {\r\n  animation-name: bounce-3;\r\n  animation-timing-function: ease;\r\n}\r\n\r\n.bounce-4 {\r\n  animation-name: bounce-3;\r\n  animation-timing-function: ease;\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n  transform-origin: bottom;\r\n}\r\n\r\n@keyframes bounce-3 {\r\n  0% { transform: translateY(0); }\r\n  30% { transform: translateY(-60px); }\r\n  50% { transform: translateY(0); }\r\n  100% { transform: translateY(0); }\r\n}\r\n\r\n.description {\r\n  padding-top: 2rem;\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.description .pokemon-name {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.poke-action {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 10%;\r\n}\r\n\r\n.modal-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  -webkit-backdrop-filter: blur(10px); /* Use for Safari 9+, Edge 17+ (not a mistake) and iOS Safari 9.2+ */\r\n  backdrop-filter: blur(10px); /* Supported in Chrome 76 */\r\n}\r\n\r\n.modal {\r\n  padding: 20px 0;\r\n  background-color: #d5fefd;\r\n  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);\r\n  border-radius: 10%;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80%;\r\n  height: max-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  animation: modalAnimation 1s;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n.modal.comments {\r\n  padding: 3%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  animation: none;\r\n}\r\n\r\n.modal * {\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n\r\n.modal-information {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.modal-information * {\r\n  width: 80%;\r\n  margin: 0;\r\n  text-align: start;\r\n}\r\n\r\n.comments form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: start;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-ul {\r\n  height: 250px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-ul li {\r\n  width: 100%;\r\n  padding: 8px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  column-gap: 10px;\r\n  border-bottom: 2px solid #000;\r\n}\r\n\r\n.modal-ul li * {\r\n  text-align: start;\r\n  width: 45%;\r\n  height: max-content;\r\n  margin: 0;\r\n}\r\n\r\n.ul-date {\r\n  width: 100%;\r\n}\r\n\r\n.form-p {\r\n  font-size: 1.2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.form-textarea {\r\n  height: 100px;\r\n  background: inherit;\r\n  border: none;\r\n  border-bottom: 2px solid rgb(208, 22, 22);\r\n}\r\n\r\n.form-input {\r\n  width: 50%;\r\n  background: inherit;\r\n  border: none;\r\n  border-bottom: 2px solid rgb(208, 22, 22);\r\n}\r\n\r\n.form-submit {\r\n  width: min-content;\r\n  background-color: #52a7c1;\r\n  background-image: linear-gradient(315deg, #52a7c1 0%, #b3f6d8 74%);\r\n  border: none;\r\n  border-radius: 10px;\r\n  font-weight: 900;\r\n  padding: 0.3rem 1.5rem;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.notDisplay {\r\n  display: none;\r\n}\r\n\r\n@keyframes modalAnimation {\r\n  0% {\r\n    transform: translate(-50%, -50%) scale(0) rotate3d(0, 2, 0, 60deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -50%) scale(1) rotate3d(0, 2, 0, 360deg);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  0% { transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { transform: translate(-3px, 0) rotate(1deg); }\r\n  30% { transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .col {\r\n    min-width: calc(100% / 4);\r\n    max-width: 318px;\r\n  }\r\n\r\n  .modal-img {\r\n    max-width: 350px;\r\n    transform: scale(1.2);\r\n    animation: shake 0.5s;\r\n    animation-iteration-count: 4;\r\n  }\r\n\r\n  .modal {\r\n    max-width: 30%;\r\n    min-height: 60%;\r\n  }\r\n\r\n  .on-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .on-desktop {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 10px;\r\n    gap: 10%;\r\n  }\r\n\r\n  .on-desktop a {\r\n    width: 30%;\r\n  }\r\n\r\n  .nav-list {\r\n    width: 80%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    align-self: center;\r\n    text-align: center;\r\n    gap: 15px;\r\n    margin: 0;\r\n  }\r\n\r\n  .desktop-a {\r\n    color: #555;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .on-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .on-mobile {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    gap: 10%;\r\n  }\r\n\r\n  .default {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    padding: 1% 2% 1% 2%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 5px;\r\n    background-color: #b8c6db;\r\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n  }\r\n\r\n  .popup-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: #b8c6db;\r\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    align-items: center;\r\n    padding: 20% 5% 5% 5%;\r\n    gap: 5%;\r\n  }\r\n\r\n  .hamburger {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .close {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: end;\r\n  }\r\n\r\n  .nav-text {\r\n    width: 100%;\r\n  }\r\n\r\n  .mobile-a {\r\n    width: 100%;\r\n    color: #555;\r\n    font-size: 2em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n}\r\n\r\n/* class active */\r\n.active {\r\n  display: flex;\r\n}\r\n\r\n.non-active {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_create_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-card.js */ "./src/modules/create-card.js");
/* harmony import */ var _modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pokemon-api.js */ "./src/modules/pokemon-api.js");




const spotlight = document.querySelector('.spotlight');
const row = document.getElementById('row');
const selection = document.querySelector('#type-selection');

document.addEventListener('DOMContentLoaded', async () => {
  const res = await (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.fetchApi)(selection.value);
  const pokemonResult = res.pokemon;
  const lessPokemon = [];
  for (let i = 0; i < _modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.end; i += 1) {
    lessPokemon.push(pokemonResult[i]);
  }
  lessPokemon.forEach(async (pokemon) => {
    const { url } = pokemon.pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    (0,_modules_create_card_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokemonJson);
    spotlight.innerText = (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.calculateNumberOfItems)(row.childElementCount, _modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.end);
  });
});

selection.addEventListener('change', async () => {
  document.querySelector('#row').innerHTML = '';
  const res = await (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.fetchApi)(selection.value);
  const pokemonResult = res.pokemon;
  const lessPokemon = [];
  const end = (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.randomNumber)();
  for (let i = 0; i < end; i += 1) {
    lessPokemon.push(pokemonResult[i]);
  }
  lessPokemon.forEach(async (pokemon) => {
    const { url } = pokemon.pokemon;
    const pokemonData = await fetch(url);
    const pokemonJson = await pokemonData.json();
    (0,_modules_create_card_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokemonJson);
    spotlight.innerText = (0,_modules_pokemon_api_js__WEBPACK_IMPORTED_MODULE_2__.calculateNumberOfItems)(row.childElementCount, end);
  });
});

const menu = document.querySelector('.menu');
const popMenu = document.querySelector('.popup-menu');

menu.addEventListener('click', () => {
  popMenu.classList.remove('non-active');
  popMenu.classList.add('active');
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  popMenu.classList.remove('active');
  popMenu.classList.add('non-active');
});

/***/ }),

/***/ "./src/modules/card-style.js":
/*!***********************************!*\
  !*** ./src/modules/card-style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const chooseStyle = (type, modal) => {
  switch (type) {
    case 'fighting':
      modal.style.background = '#7B3C1388';
      break;
    case 'flying':
      modal.style.background = '#F1F1F188';
      break;
    case 'poison':
      modal.style.background = '#AC62C388';
      break;
    case 'ground':
      modal.style.background = '#DC6C3388';
      break;
    case 'rock':
      modal.style.background = '#BEAD7F88';
      break;
    case 'ghost':
      modal.style.background = '#4865A988';
      break;
    case 'bug':
      modal.style.background = '#7CB90088';
      break;
    case 'steel':
      modal.style.background = '#55879A88';
      break;
    case 'fire':
      modal.style.background = '#F28F3E88';
      break;
    case 'water':
      modal.style.background = '#338BD188';
      break;
    case 'grass':
      modal.style.background = '#35B54788';
      break;
    case 'electric':
      modal.style.background = '#EEC60088';
      break;
    case 'psychic':
      modal.style.background = '#F2616F88';
      break;
    case 'ice':
      modal.style.background = '#48C6B688';
      break;
    case 'dragon':
      modal.style.background = '#0069BF88';
      break;
    case 'dark':
      modal.style.background = '#62695F88';
      break;
    case 'fairy':
      modal.style.background = '#EE82DF88';
      break;

    default:
      modal.style.background = '#8A929A88';
      break;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseStyle);

/***/ }),

/***/ "./src/modules/comment-popup.js":
/*!**************************************!*\
  !*** ./src/modules/comment-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateUl": () => (/* binding */ updateUl)
/* harmony export */ });
/* harmony import */ var _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involment-comment.js */ "./src/modules/involment-comment.js");


const updateUl = (data, ul, h3) => {
  ul.innerHTML = '';
  if (data.length > 0) {
    data.forEach((child) => {
      const commentLi = document.createElement('li');
      commentLi.classList.add('comment-li');

      const usernameP = document.createElement('p');
      usernameP.textContent = `user: ${child.username}`;

      const commentP = document.createElement('p');
      commentP.textContent = `coment: ${child.comment}`;

      const dateP = document.createElement('p');
      dateP.classList.add('ul-date');
      dateP.textContent = `${child.creation_date}`;

      commentLi.appendChild(usernameP);
      commentLi.appendChild(commentP);
      commentLi.appendChild(dateP);
      ul.appendChild(commentLi);
    });
  }
  h3.textContent = `coments (${data.length})`;
};

const createCommentPopup = async (pokemon) => {
  const commentWrapper = document.querySelector('.modal-wrapper');
  commentWrapper.style.zIndex = 99;

  const commentModal = document.createElement('div');
  commentModal.classList.add('modal', 'comments');

  const h3 = document.createElement('h3');
  h3.classList.add('modal-h3');
  h3.textContent = 'coments';

  const commentsData = await _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComment(pokemon.id);
  const commentUl = document.createElement('ul');
  commentUl.classList.add('modal-ul');
  if (commentsData.error) {
    h3.textContent = 'coments (0)';
  } else {
    updateUl(commentsData, commentUl, h3);
  }
  // create comments

  // create form
  const form = document.createElement('form');
  const p = document.createElement('p');
  p.textContent = 'Add your comment';
  p.classList.add('form-p');
  form.appendChild(p);

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.placeholder = 'Your name';
  inputName.classList.add('form-input');
  form.appendChild(inputName);

  const inputComments = document.createElement('textArea');
  inputComments.placeholder = 'Your comment of the pokemon';
  inputComments.classList.add('form-textarea');
  form.appendChild(inputComments);

  const inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.value = 'Submit';
  inputSubmit.classList.add('form-submit');
  form.appendChild(inputSubmit);

  inputSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (inputName.value.trim() === '') {
      inputName.placeholder = 'please enter your name';
    } else if (inputComments.value.trim() === '') {
      inputComments.placeholder = 'please enter your descripion or comment';
    } else {
      await _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].postComment({
        item_id: pokemon.id,
        username: inputName.value,
        comment: inputComments.value,
      });
      const newData = await _involment_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComment(pokemon.id);
      updateUl(newData, commentUl, h3);

      inputComments.value = '';
      inputName.value = '';
    }
  });

  // delete the modal
  window.addEventListener('click', (e) => {
    if (e.target === commentWrapper) {
      commentWrapper.style.zIndex = -1;
      commentModal.remove();
    }
  });

  // appending the childs in order

  commentModal.appendChild(h3);
  commentModal.appendChild(commentUl);
  commentModal.appendChild(form);
  commentWrapper.appendChild(commentModal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCommentPopup);

/***/ }),

/***/ "./src/modules/create-card.js":
/*!************************************!*\
  !*** ./src/modules/create-card.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _involvement_post_likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement-post-likes.js */ "./src/modules/involvement-post-likes.js");
/* harmony import */ var _involvement_fetch_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement-fetch-likes.js */ "./src/modules/involvement-fetch-likes.js");
/* harmony import */ var _get_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-values.js */ "./src/modules/get-values.js");
/* harmony import */ var _popup_creator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-creator.js */ "./src/modules/popup-creator.js");
/* harmony import */ var _comment_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-popup.js */ "./src/modules/comment-popup.js");
/* eslint-disable no-console, radix */






const creatCard = (pokemon) => {
  const row = document.getElementById('row');
  const col = document.createElement('div');
  col.classList.add('single-card');

  const cardImg = document.createElement('div');
  cardImg.style.backgroundImage = `url(${pokemon.sprites.other['official-artwork'].front_default})`;
  cardImg.classList.add('img-card', 'bounce-3');
  col.appendChild(cardImg);

  const description = document.createElement('div');
  description.classList.add('description');

  const cardName = document.createElement('h2');
  cardName.classList.add('pokemon-name');
  cardName.innerText = pokemon.forms[0].name;
  description.appendChild(cardName);

  const like = document.createElement('div');
  like.classList.add('like');

  const aTag = document.createElement('a');
  aTag.href = '#';

  const iTag = document.createElement('i');
  iTag.classList.add('fa-solid', 'fa-heart');
  iTag.id = pokemon.id;

  aTag.appendChild(iTag);
  like.appendChild(aTag);

  col.appendChild(description);

  const likeCount = document.createElement('p');
  likeCount.classList.add('like-count');
  likeCount.innerText = '0 likes';

  like.appendChild(likeCount);
  description.appendChild(like);

  const pokeAction = document.createElement('div');
  pokeAction.classList.add('poke-action');

  const pokeActionBtnInfo = document.createElement('button');
  pokeActionBtnInfo.attributes.type = 'button';
  pokeActionBtnInfo.innerText = 'Information';
  pokeActionBtnInfo.classList.add('btn', 'btn-outline-dark');
  pokeAction.appendChild(pokeActionBtnInfo);

  const pokeActionBtnComments = document.createElement('button');
  pokeActionBtnComments.attributes.type = 'button';
  pokeActionBtnComments.innerText = 'Comments';
  pokeActionBtnComments.classList.add('btn', 'btn-outline-dark');
  pokeAction.appendChild(pokeActionBtnComments);

  // * create infoPopup
  pokeActionBtnInfo.addEventListener('click', () => {
    (0,_popup_creator_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_get_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pokemon));
  });

  // * create commentPopup
  pokeActionBtnComments.addEventListener('click', () => {
    (0,_comment_popup_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_get_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pokemon));
  });

  col.appendChild(description);
  col.appendChild(pokeAction);

  row.appendChild(col);

  setTimeout(() => (0,_involvement_fetch_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokemon.id.toString(), likeCount), 1000);

  iTag.addEventListener('click', (e) => {
    const likes = parseInt(likeCount.innerText.split(' ')[0]);
    likeCount.innerText = `${likes + 1} likes`;
    (0,_involvement_post_likes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, likeCount.innerText.split(' ')[0]);
    (0,_involvement_fetch_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.id, likeCount);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (creatCard);

/***/ }),

/***/ "./src/modules/get-values.js":
/*!***********************************!*\
  !*** ./src/modules/get-values.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getValues = (pokemon) => {
  const heldItems = [];
  if (pokemon.held_items.length === 0) {
    heldItems.push('cannot drop any items');
  } else {
    for (let index = 0; index < 1; index += 1) {
      heldItems.push(`${pokemon.held_items[index].item.name}`);
    }
  }

  const types = [];
  pokemon.types.forEach((element) => types.push(`${element.type.name}`));

  const games = [];
  if (pokemon.game_indices.length === 0) {
    games.push('has not appear yet or is on new games');
  } else {
    for (let index = 0; index < 2; index += 1) {
      games.push(`${pokemon.game_indices[index].version.name}`);
    }
  }

  const arr = {
    img: pokemon.sprites.other['official-artwork'].front_default,
    name: pokemon.name,
    items: heldItems.join(', '),
    type: types.join(', '),
    games: games.join(', '),
    exp: pokemon.base_experience,
    id: pokemon.id,
  };
  return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValues);


/***/ }),

/***/ "./src/modules/involment-comment.js":
/*!******************************************!*\
  !*** ./src/modules/involment-comment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const key = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments/`;

const involvementPostComments = (data) => fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

const involvementFetchLikes = async (id) => {
  try {
    return await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments/?item_id=${id}`)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    return error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  postComment: involvementPostComments,
  getComment: involvementFetchLikes,
});

/***/ }),

/***/ "./src/modules/involvement-fetch-likes.js":
/*!************************************************!*\
  !*** ./src/modules/involvement-fetch-likes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getAppKey = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${getAppKey}/likes/`;

const involvementFetchLikes = (pokemonId, likeCount) => fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((pokemon) => {
      if (pokemon.item_id === pokemonId) {
        likeCount.innerText = `${pokemon.likes} likes`;
      }
    });
  });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementFetchLikes);

/***/ }),

/***/ "./src/modules/involvement-post-likes.js":
/*!***********************************************!*\
  !*** ./src/modules/involvement-post-likes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-console, consistent-return */
const getAppKey = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${getAppKey}/likes/`;

const involvementPostLikes = async (e, likes) => {
  try {
    return await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: e.target.id,
        likes,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementPostLikes);

/***/ }),

/***/ "./src/modules/pokemon-api.js":
/*!************************************!*\
  !*** ./src/modules/pokemon-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateNumberOfItems": () => (/* binding */ calculateNumberOfItems),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "fetchApi": () => (/* binding */ fetchApi),
/* harmony export */   "randomNumber": () => (/* binding */ randomNumber),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* eslint-disable no-console */
// generate random number betweenn 20 and 50
const randomNumber = () => Math.floor(Math.random() * (50 - 20 + 1)) + 20;

const start = randomNumber();
const end = randomNumber();

// a promise function to make a fetch request to the API
const fetchApi = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
  return response.json();
};

const calculateNumberOfItems = (count, end) => {
  if (count === end) {
    return count;
  }
  return 0;
};


/***/ }),

/***/ "./src/modules/popup-creator.js":
/*!**************************************!*\
  !*** ./src/modules/popup-creator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-style.js */ "./src/modules/card-style.js");


const createPopup = (item) => {
  // get modal wrapper and create modal individually
  const modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapper.style.zIndex = 99;
  const modal = document.createElement('div');
  modal.classList.add('modal');
  (0,_card_style_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item.type.split(',')[0], modal);
  // create img
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', item.img);
  img.setAttribute('alt', `img of ${item.name}`);
  img.classList.add('modal-img');
  divImg.appendChild(img);

  // create title
  const title = document.createElement('h2');
  title.textContent = item.name;
  // create info div
  const divInfo = document.createElement('div');
  divInfo.classList.add('modal-information');
  // create info p
  const infoItem = document.createElement('p');
  infoItem.classList.add('information-item');
  infoItem.innerHTML = `<b>items:</b> ${item.items}`;
  divInfo.appendChild(infoItem);

  const infoType = document.createElement('p');
  infoType.classList.add('information-games');
  infoType.innerHTML = `<b>type: </b>${item.type}`;
  divInfo.appendChild(infoType);

  const infoBasicExp = document.createElement('p');
  infoBasicExp.classList.add('information-games');
  infoBasicExp.innerHTML = `<b>base exp:</b> ${item.exp}`;
  divInfo.appendChild(infoBasicExp);

  const infoGames = document.createElement('p');
  infoGames.classList.add('information-games');
  infoGames.innerHTML = `<b>games:</b> ${item.games}`;
  divInfo.appendChild(infoGames);

  modal.appendChild(divImg);
  modal.appendChild(title);
  modal.appendChild(divInfo);
  modalWrapper.appendChild(modal);

  window.addEventListener('click', (e) => {
    if (e.target === modalWrapper) {
      modalWrapper.style.zIndex = -1;
      modal.remove();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFX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QUFDQSxFQUFFLDBEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVTtBQUNqRDs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVM7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY2FyZC1zdHlsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY29tbWVudC1wb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2dldC12YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2ludm9sbWVudC1jb21tZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9pbnZvbHZlbWVudC1mZXRjaC1saWtlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnQtcG9zdC1saWtlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvcG9rZW1vbi1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL3BvcHVwLWNyZWF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUQXV3cTFIdWxNY2hKRGtoOVNQczZyaGFQeXJBNGlUWGYxUncmdXNxcD1DQVUpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBwYWRkaW5nOiAyJSAxMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdGV4dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiB7XFxyXFxuICBnYXA6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BvdC1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwb3RsaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1heC1oZWlnaHQ6IDI1cHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNob21lIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzZkYjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXHJcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcclxcbiAgbWluLWhlaWdodDogNzAwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6Zm9jdXMsXFxyXFxuc2VsZWN0OmZvY3VzLXZpc2libGUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMzUwcHgpKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG4gIGJveC1zaGFkb3c6ICM4OWQ0Y2YgMCAwIDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIG1pbi13aWR0aDogMjQ4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDMxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sIGltZyB7XFxyXFxuICB3aWR0aDogMTVyZW07XFxyXFxuICBoZWlnaHQ6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWctY2FyZCB7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNhcmQ6aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNlLTMge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZS0zO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jZS00IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2UtMztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYm91bmNlLTMge1xcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXHJcXG4gIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCk7IH1cXHJcXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gLnBva2Vtb24tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1hY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBVc2UgZm9yIFNhZmFyaSA5KywgRWRnZSAxNysgKG5vdCBhIG1pc3Rha2UpIGFuZCBpT1MgU2FmYXJpIDkuMisgKi9cXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogU3VwcG9ydGVkIGluIENocm9tZSA3NiAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogbW9kYWxBbmltYXRpb24gMXM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmNvbW1lbnRzIHtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbmltYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCAqIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbmZvcm1hdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbmZvcm1hdGlvbiAqIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIGZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLXVsIHtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtdWwgbGkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC11bCBsaSAqIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi51bC1kYXRlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc3VibWl0IHtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3YzE7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNTJhN2MxIDAlLCAjYjNmNmQ4IDc0JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5ub3REaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW9kYWxBbmltYXRpb24ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSByb3RhdGUzZCgwLCAyLCAwLCA2MGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgcm90YXRlM2QoMCwgMiwgMCwgMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXHJcXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDApIHJvdGF0ZSgxZGVnKTsgfVxcclxcbiAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXHJcXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTsgfVxcclxcbiAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XFxyXFxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXHJcXG4gIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb2wge1xcclxcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xcclxcbiAgICBtYXgtd2lkdGg6IDMxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vbi1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm9uLWRlc2t0b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm9uLWRlc2t0b3AgYSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRlc2t0b3AtYSB7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5vbi1kZXNrdG9wIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vbi1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRlZmF1bHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhjNmRiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMCUgNSUgNSUgNSU7XFxyXFxuICAgIGdhcDogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXRleHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2JpbGUtYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogY2xhc3MgYWN0aXZlICovXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm9uLWFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw4SEFBOEg7RUFDOUgsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFt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RUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUQXV3cTFIdWxNY2hKRGtoOVNQczZyaGFQeXJBNGlUWGYxUncmdXNxcD1DQVUpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBwYWRkaW5nOiAyJSAxMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdGV4dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiB7XFxyXFxuICBnYXA6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BvdC1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwb3RsaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1heC1oZWlnaHQ6IDI1cHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNob21lIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzZkYjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXHJcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcclxcbiAgbWluLWhlaWdodDogNzAwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6Zm9jdXMsXFxyXFxuc2VsZWN0OmZvY3VzLXZpc2libGUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMzUwcHgpKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG4gIGJveC1zaGFkb3c6ICM4OWQ0Y2YgMCAwIDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIG1pbi13aWR0aDogMjQ4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDMxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sIGltZyB7XFxyXFxuICB3aWR0aDogMTVyZW07XFxyXFxuICBoZWlnaHQ6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWctY2FyZCB7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNhcmQ6aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNlLTMge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZS0zO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jZS00IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2UtMztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYm91bmNlLTMge1xcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXHJcXG4gIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCk7IH1cXHJcXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gLnBva2Vtb24tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1hY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBVc2UgZm9yIFNhZmFyaSA5KywgRWRnZSAxNysgKG5vdCBhIG1pc3Rha2UpIGFuZCBpT1MgU2FmYXJpIDkuMisgKi9cXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogU3VwcG9ydGVkIGluIENocm9tZSA3NiAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZmVmZDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkNWZlZmQgMCUsICNmZmZjZmYgNzQlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogbW9kYWxBbmltYXRpb24gMXM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmNvbW1lbnRzIHtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbmltYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCAqIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbmZvcm1hdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbmZvcm1hdGlvbiAqIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIGZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLXVsIHtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtdWwgbGkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC11bCBsaSAqIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi51bC1kYXRlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjIsIDIyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc3VibWl0IHtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3YzE7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNTJhN2MxIDAlLCAjYjNmNmQ4IDc0JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5ub3REaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW9kYWxBbmltYXRpb24ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSByb3RhdGUzZCgwLCAyLCAwLCA2MGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgcm90YXRlM2QoMCwgMiwgMCwgMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXHJcXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDApIHJvdGF0ZSgxZGVnKTsgfVxcclxcbiAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXHJcXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTsgfVxcclxcbiAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XFxyXFxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXHJcXG4gIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb2wge1xcclxcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xcclxcbiAgICBtYXgtd2lkdGg6IDMxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vbi1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm9uLWRlc2t0b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm9uLWRlc2t0b3AgYSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRlc2t0b3AtYSB7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5vbi1kZXNrdG9wIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vbi1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRlZmF1bHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhjNmRiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjYjhjNmRiIDAlLCAjZjVmN2ZhIDc0JSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGM2ZGI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMCUgNSUgNSUgNSU7XFxyXFxuICAgIGdhcDogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXRleHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2JpbGUtYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogY2xhc3MgYWN0aXZlICovXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm9uLWFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0Q2FyZCBmcm9tICcuL21vZHVsZXMvY3JlYXRlLWNhcmQuanMnO1xuaW1wb3J0IHtcbiAgZmV0Y2hBcGksIGNhbGN1bGF0ZU51bWJlck9mSXRlbXMsIHJhbmRvbU51bWJlciwgZW5kLFxufSBmcm9tICcuL21vZHVsZXMvcG9rZW1vbi1hcGkuanMnO1xuXG5jb25zdCBzcG90bGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BvdGxpZ2h0Jyk7XG5jb25zdCByb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm93Jyk7XG5jb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3Rpb24nKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hBcGkoc2VsZWN0aW9uLnZhbHVlKTtcbiAgY29uc3QgcG9rZW1vblJlc3VsdCA9IHJlcy5wb2tlbW9uO1xuICBjb25zdCBsZXNzUG9rZW1vbiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZDsgaSArPSAxKSB7XG4gICAgbGVzc1Bva2Vtb24ucHVzaChwb2tlbW9uUmVzdWx0W2ldKTtcbiAgfVxuICBsZXNzUG9rZW1vbi5mb3JFYWNoKGFzeW5jIChwb2tlbW9uKSA9PiB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHBva2Vtb24ucG9rZW1vbjtcbiAgICBjb25zdCBwb2tlbW9uRGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgcG9rZW1vbkpzb24gPSBhd2FpdCBwb2tlbW9uRGF0YS5qc29uKCk7XG4gICAgY3JlYXRDYXJkKHBva2Vtb25Kc29uKTtcbiAgICBzcG90bGlnaHQuaW5uZXJUZXh0ID0gY2FsY3VsYXRlTnVtYmVyT2ZJdGVtcyhyb3cuY2hpbGRFbGVtZW50Q291bnQsIGVuZCk7XG4gIH0pO1xufSk7XG5cbnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3cnKS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hBcGkoc2VsZWN0aW9uLnZhbHVlKTtcbiAgY29uc3QgcG9rZW1vblJlc3VsdCA9IHJlcy5wb2tlbW9uO1xuICBjb25zdCBsZXNzUG9rZW1vbiA9IFtdO1xuICBjb25zdCBlbmQgPSByYW5kb21OdW1iZXIoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmQ7IGkgKz0gMSkge1xuICAgIGxlc3NQb2tlbW9uLnB1c2gocG9rZW1vblJlc3VsdFtpXSk7XG4gIH1cbiAgbGVzc1Bva2Vtb24uZm9yRWFjaChhc3luYyAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IHsgdXJsIH0gPSBwb2tlbW9uLnBva2Vtb247XG4gICAgY29uc3QgcG9rZW1vbkRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHBva2Vtb25Kc29uID0gYXdhaXQgcG9rZW1vbkRhdGEuanNvbigpO1xuICAgIGNyZWF0Q2FyZChwb2tlbW9uSnNvbik7XG4gICAgc3BvdGxpZ2h0LmlubmVyVGV4dCA9IGNhbGN1bGF0ZU51bWJlck9mSXRlbXMocm93LmNoaWxkRWxlbWVudENvdW50LCBlbmQpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IHBvcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtbWVudScpO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3BNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1hY3RpdmUnKTtcbiAgcG9wTWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIHBvcE1lbnUuY2xhc3NMaXN0LmFkZCgnbm9uLWFjdGl2ZScpO1xufSk7IiwiY29uc3QgY2hvb3NlU3R5bGUgPSAodHlwZSwgbW9kYWwpID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZmlnaHRpbmcnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjN0IzQzEzODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmx5aW5nJzpcbiAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSAnI0YxRjFGMTg4JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BvaXNvbic6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBQzYyQzM4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncm91bmQnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjREM2QzMzODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncm9jayc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNCRUFEN0Y4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdnaG9zdCc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM0ODY1QTk4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdidWcnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjN0NCOTAwODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3RlZWwnOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjNTU4NzlBODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmlyZSc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGMjhGM0U4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3YXRlcic6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzMzhCRDE4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncmFzcyc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNUI1NDc4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlbGVjdHJpYyc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNFRUM2MDA4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwc3ljaGljJzpcbiAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSAnI0YyNjE2Rjg4JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ljZSc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM0OEM2QjY4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkcmFnb24nOlxuICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDA2OUJGODgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGFyayc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM2MjY5NUY4OCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmYWlyeSc6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNFRTgyREY4OCc7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM4QTkyOUE4OCc7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlU3R5bGU7IiwiaW1wb3J0IGNvbW1lbnRBUEkgZnJvbSAnLi9pbnZvbG1lbnQtY29tbWVudC5qcyc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVbCA9IChkYXRhLCB1bCwgaDMpID0+IHtcbiAgdWwuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBkYXRhLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29tbWVudExpLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtbGknKTtcblxuICAgICAgY29uc3QgdXNlcm5hbWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdXNlcm5hbWVQLnRleHRDb250ZW50ID0gYHVzZXI6ICR7Y2hpbGQudXNlcm5hbWV9YDtcblxuICAgICAgY29uc3QgY29tbWVudFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb21tZW50UC50ZXh0Q29udGVudCA9IGBjb21lbnQ6ICR7Y2hpbGQuY29tbWVudH1gO1xuXG4gICAgICBjb25zdCBkYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRhdGVQLmNsYXNzTGlzdC5hZGQoJ3VsLWRhdGUnKTtcbiAgICAgIGRhdGVQLnRleHRDb250ZW50ID0gYCR7Y2hpbGQuY3JlYXRpb25fZGF0ZX1gO1xuXG4gICAgICBjb21tZW50TGkuYXBwZW5kQ2hpbGQodXNlcm5hbWVQKTtcbiAgICAgIGNvbW1lbnRMaS5hcHBlbmRDaGlsZChjb21tZW50UCk7XG4gICAgICBjb21tZW50TGkuYXBwZW5kQ2hpbGQoZGF0ZVApO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQoY29tbWVudExpKTtcbiAgICB9KTtcbiAgfVxuICBoMy50ZXh0Q29udGVudCA9IGBjb21lbnRzICgke2RhdGEubGVuZ3RofSlgO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudFBvcHVwID0gYXN5bmMgKHBva2Vtb24pID0+IHtcbiAgY29uc3QgY29tbWVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xuICBjb21tZW50V3JhcHBlci5zdHlsZS56SW5kZXggPSA5OTtcblxuICBjb25zdCBjb21tZW50TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2NvbW1lbnRzJyk7XG5cbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oMycpO1xuICBoMy50ZXh0Q29udGVudCA9ICdjb21lbnRzJztcblxuICBjb25zdCBjb21tZW50c0RhdGEgPSBhd2FpdCBjb21tZW50QVBJLmdldENvbW1lbnQocG9rZW1vbi5pZCk7XG4gIGNvbnN0IGNvbW1lbnRVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbW1lbnRVbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC11bCcpO1xuICBpZiAoY29tbWVudHNEYXRhLmVycm9yKSB7XG4gICAgaDMudGV4dENvbnRlbnQgPSAnY29tZW50cyAoMCknO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZVVsKGNvbW1lbnRzRGF0YSwgY29tbWVudFVsLCBoMyk7XG4gIH1cbiAgLy8gY3JlYXRlIGNvbW1lbnRzXG5cbiAgLy8gY3JlYXRlIGZvcm1cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdBZGQgeW91ciBjb21tZW50JztcbiAgcC5jbGFzc0xpc3QuYWRkKCdmb3JtLXAnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgaW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gIGlucHV0TmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICBjb25zdCBpbnB1dENvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dEFyZWEnKTtcbiAgaW5wdXRDb21tZW50cy5wbGFjZWhvbGRlciA9ICdZb3VyIGNvbW1lbnQgb2YgdGhlIHBva2Vtb24nO1xuICBpbnB1dENvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dGFyZWEnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dENvbW1lbnRzKTtcblxuICBjb25zdCBpbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgaW5wdXRTdWJtaXQudmFsdWUgPSAnU3VibWl0JztcbiAgaW5wdXRTdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zdWJtaXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFN1Ym1pdCk7XG5cbiAgaW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaW5wdXROYW1lLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9ICdwbGVhc2UgZW50ZXIgeW91ciBuYW1lJztcbiAgICB9IGVsc2UgaWYgKGlucHV0Q29tbWVudHMudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgaW5wdXRDb21tZW50cy5wbGFjZWhvbGRlciA9ICdwbGVhc2UgZW50ZXIgeW91ciBkZXNjcmlwaW9uIG9yIGNvbW1lbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBjb21tZW50QVBJLnBvc3RDb21tZW50KHtcbiAgICAgICAgaXRlbV9pZDogcG9rZW1vbi5pZCxcbiAgICAgICAgdXNlcm5hbWU6IGlucHV0TmFtZS52YWx1ZSxcbiAgICAgICAgY29tbWVudDogaW5wdXRDb21tZW50cy52YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IGNvbW1lbnRBUEkuZ2V0Q29tbWVudChwb2tlbW9uLmlkKTtcbiAgICAgIHVwZGF0ZVVsKG5ld0RhdGEsIGNvbW1lbnRVbCwgaDMpO1xuXG4gICAgICBpbnB1dENvbW1lbnRzLnZhbHVlID0gJyc7XG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSAnJztcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGRlbGV0ZSB0aGUgbW9kYWxcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGNvbW1lbnRXcmFwcGVyKSB7XG4gICAgICBjb21tZW50V3JhcHBlci5zdHlsZS56SW5kZXggPSAtMTtcbiAgICAgIGNvbW1lbnRNb2RhbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGFwcGVuZGluZyB0aGUgY2hpbGRzIGluIG9yZGVyXG5cbiAgY29tbWVudE1vZGFsLmFwcGVuZENoaWxkKGgzKTtcbiAgY29tbWVudE1vZGFsLmFwcGVuZENoaWxkKGNvbW1lbnRVbCk7XG4gIGNvbW1lbnRNb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29tbWVudE1vZGFsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbW1lbnRQb3B1cDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCByYWRpeCAqL1xuaW1wb3J0IGludm9sdmVtZW50UG9zdExpa2VzIGZyb20gJy4vaW52b2x2ZW1lbnQtcG9zdC1saWtlcy5qcyc7XG5pbXBvcnQgaW52b2x2ZW1lbnRGZXRjaExpa2VzIGZyb20gJy4vaW52b2x2ZW1lbnQtZmV0Y2gtbGlrZXMuanMnO1xuaW1wb3J0IGdldFZhbHVlcyBmcm9tICcuL2dldC12YWx1ZXMuanMnO1xuaW1wb3J0IGNyZWF0ZVBvcHVwIGZyb20gJy4vcG9wdXAtY3JlYXRvci5qcyc7XG5pbXBvcnQgY3JlYXRlQ29tbWVudFBvcHVwIGZyb20gJy4vY29tbWVudC1wb3B1cC5qcyc7XG5cbmNvbnN0IGNyZWF0Q2FyZCA9IChwb2tlbW9uKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3cnKTtcbiAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbC5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtY2FyZCcpO1xuXG4gIGNvbnN0IGNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZEltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cG9rZW1vbi5zcHJpdGVzLm90aGVyWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdH0pYDtcbiAgY2FyZEltZy5jbGFzc0xpc3QuYWRkKCdpbWctY2FyZCcsICdib3VuY2UtMycpO1xuICBjb2wuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNhcmROYW1lLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24tbmFtZScpO1xuICBjYXJkTmFtZS5pbm5lclRleHQgPSBwb2tlbW9uLmZvcm1zWzBdLm5hbWU7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNhcmROYW1lKTtcblxuICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpa2UuY2xhc3NMaXN0LmFkZCgnbGlrZScpO1xuXG4gIGNvbnN0IGFUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFUYWcuaHJlZiA9ICcjJztcblxuICBjb25zdCBpVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpVGFnLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWhlYXJ0Jyk7XG4gIGlUYWcuaWQgPSBwb2tlbW9uLmlkO1xuXG4gIGFUYWcuYXBwZW5kQ2hpbGQoaVRhZyk7XG4gIGxpa2UuYXBwZW5kQ2hpbGQoYVRhZyk7XG5cbiAgY29sLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxpa2VDb3VudC5jbGFzc0xpc3QuYWRkKCdsaWtlLWNvdW50Jyk7XG4gIGxpa2VDb3VudC5pbm5lclRleHQgPSAnMCBsaWtlcyc7XG5cbiAgbGlrZS5hcHBlbmRDaGlsZChsaWtlQ291bnQpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChsaWtlKTtcblxuICBjb25zdCBwb2tlQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBva2VBY3Rpb24uY2xhc3NMaXN0LmFkZCgncG9rZS1hY3Rpb24nKTtcblxuICBjb25zdCBwb2tlQWN0aW9uQnRuSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwb2tlQWN0aW9uQnRuSW5mby5hdHRyaWJ1dGVzLnR5cGUgPSAnYnV0dG9uJztcbiAgcG9rZUFjdGlvbkJ0bkluZm8uaW5uZXJUZXh0ID0gJ0luZm9ybWF0aW9uJztcbiAgcG9rZUFjdGlvbkJ0bkluZm8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1vdXRsaW5lLWRhcmsnKTtcbiAgcG9rZUFjdGlvbi5hcHBlbmRDaGlsZChwb2tlQWN0aW9uQnRuSW5mbyk7XG5cbiAgY29uc3QgcG9rZUFjdGlvbkJ0bkNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHBva2VBY3Rpb25CdG5Db21tZW50cy5hdHRyaWJ1dGVzLnR5cGUgPSAnYnV0dG9uJztcbiAgcG9rZUFjdGlvbkJ0bkNvbW1lbnRzLmlubmVyVGV4dCA9ICdDb21tZW50cyc7XG4gIHBva2VBY3Rpb25CdG5Db21tZW50cy5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLW91dGxpbmUtZGFyaycpO1xuICBwb2tlQWN0aW9uLmFwcGVuZENoaWxkKHBva2VBY3Rpb25CdG5Db21tZW50cyk7XG5cbiAgLy8gKiBjcmVhdGUgaW5mb1BvcHVwXG4gIHBva2VBY3Rpb25CdG5JbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZVBvcHVwKGdldFZhbHVlcyhwb2tlbW9uKSk7XG4gIH0pO1xuXG4gIC8vICogY3JlYXRlIGNvbW1lbnRQb3B1cFxuICBwb2tlQWN0aW9uQnRuQ29tbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlQ29tbWVudFBvcHVwKGdldFZhbHVlcyhwb2tlbW9uKSk7XG4gIH0pO1xuXG4gIGNvbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGNvbC5hcHBlbmRDaGlsZChwb2tlQWN0aW9uKTtcblxuICByb3cuYXBwZW5kQ2hpbGQoY29sKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IGludm9sdmVtZW50RmV0Y2hMaWtlcyhwb2tlbW9uLmlkLnRvU3RyaW5nKCksIGxpa2VDb3VudCksIDEwMDApO1xuXG4gIGlUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGxpa2VzID0gcGFyc2VJbnQobGlrZUNvdW50LmlubmVyVGV4dC5zcGxpdCgnICcpWzBdKTtcbiAgICBsaWtlQ291bnQuaW5uZXJUZXh0ID0gYCR7bGlrZXMgKyAxfSBsaWtlc2A7XG4gICAgaW52b2x2ZW1lbnRQb3N0TGlrZXMoZSwgbGlrZUNvdW50LmlubmVyVGV4dC5zcGxpdCgnICcpWzBdKTtcbiAgICBpbnZvbHZlbWVudEZldGNoTGlrZXMoZS50YXJnZXQuaWQsIGxpa2VDb3VudCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRDYXJkOyIsImNvbnN0IGdldFZhbHVlcyA9IChwb2tlbW9uKSA9PiB7XG4gIGNvbnN0IGhlbGRJdGVtcyA9IFtdO1xuICBpZiAocG9rZW1vbi5oZWxkX2l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIGhlbGRJdGVtcy5wdXNoKCdjYW5ub3QgZHJvcCBhbnkgaXRlbXMnKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTsgaW5kZXggKz0gMSkge1xuICAgICAgaGVsZEl0ZW1zLnB1c2goYCR7cG9rZW1vbi5oZWxkX2l0ZW1zW2luZGV4XS5pdGVtLm5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdHlwZXMgPSBbXTtcbiAgcG9rZW1vbi50eXBlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB0eXBlcy5wdXNoKGAke2VsZW1lbnQudHlwZS5uYW1lfWApKTtcblxuICBjb25zdCBnYW1lcyA9IFtdO1xuICBpZiAocG9rZW1vbi5nYW1lX2luZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgZ2FtZXMucHVzaCgnaGFzIG5vdCBhcHBlYXIgeWV0IG9yIGlzIG9uIG5ldyBnYW1lcycpO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyOyBpbmRleCArPSAxKSB7XG4gICAgICBnYW1lcy5wdXNoKGAke3Bva2Vtb24uZ2FtZV9pbmRpY2VzW2luZGV4XS52ZXJzaW9uLm5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXJyID0ge1xuICAgIGltZzogcG9rZW1vbi5zcHJpdGVzLm90aGVyWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdCxcbiAgICBuYW1lOiBwb2tlbW9uLm5hbWUsXG4gICAgaXRlbXM6IGhlbGRJdGVtcy5qb2luKCcsICcpLFxuICAgIHR5cGU6IHR5cGVzLmpvaW4oJywgJyksXG4gICAgZ2FtZXM6IGdhbWVzLmpvaW4oJywgJyksXG4gICAgZXhwOiBwb2tlbW9uLmJhc2VfZXhwZXJpZW5jZSxcbiAgICBpZDogcG9rZW1vbi5pZCxcbiAgfTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlcztcbiIsImNvbnN0IGtleSA9ICcwcnVjQk54WVhZMTd0akhOMDZ6eSc7XG5jb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtrZXl9L2NvbW1lbnRzL2A7XG5cbmNvbnN0IGludm9sdmVtZW50UG9zdENvbW1lbnRzID0gKGRhdGEpID0+IGZldGNoKGFwaVVybCwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxufSk7XG5cbmNvbnN0IGludm9sdmVtZW50RmV0Y2hMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtrZXl9L2NvbW1lbnRzLz9pdGVtX2lkPSR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwb3N0Q29tbWVudDogaW52b2x2ZW1lbnRQb3N0Q29tbWVudHMsXG4gIGdldENvbW1lbnQ6IGludm9sdmVtZW50RmV0Y2hMaWtlcyxcbn07IiwiY29uc3QgZ2V0QXBwS2V5ID0gJzBydWNCTnhZWFkxN3RqSE4wNnp5JztcbmNvbnN0IGFwaVVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2dldEFwcEtleX0vbGlrZXMvYDtcblxuY29uc3QgaW52b2x2ZW1lbnRGZXRjaExpa2VzID0gKHBva2Vtb25JZCwgbGlrZUNvdW50KSA9PiBmZXRjaChhcGlVcmwpXG4gIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChwb2tlbW9uKSA9PiB7XG4gICAgICBpZiAocG9rZW1vbi5pdGVtX2lkID09PSBwb2tlbW9uSWQpIHtcbiAgICAgICAgbGlrZUNvdW50LmlubmVyVGV4dCA9IGAke3Bva2Vtb24ubGlrZXN9IGxpa2VzYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGludm9sdmVtZW50RmV0Y2hMaWtlczsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCBjb25zaXN0ZW50LXJldHVybiAqL1xuY29uc3QgZ2V0QXBwS2V5ID0gJzBydWNCTnhZWFkxN3RqSE4wNnp5JztcbmNvbnN0IGFwaVVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2dldEFwcEtleX0vbGlrZXMvYDtcblxuY29uc3QgaW52b2x2ZW1lbnRQb3N0TGlrZXMgPSBhc3luYyAoZSwgbGlrZXMpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGUudGFyZ2V0LmlkLFxuICAgICAgICBsaWtlcyxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW52b2x2ZW1lbnRQb3N0TGlrZXM7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLy8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlciBiZXR3ZWVubiAyMCBhbmQgNTBcbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTAgLSAyMCArIDEpKSArIDIwO1xuXG5leHBvcnQgY29uc3Qgc3RhcnQgPSByYW5kb21OdW1iZXIoKTtcbmV4cG9ydCBjb25zdCBlbmQgPSByYW5kb21OdW1iZXIoKTtcblxuLy8gYSBwcm9taXNlIGZ1bmN0aW9uIHRvIG1ha2UgYSBmZXRjaCByZXF1ZXN0IHRvIHRoZSBBUElcbmV4cG9ydCBjb25zdCBmZXRjaEFwaSA9IGFzeW5jICh0eXBlKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvdHlwZS8ke3R5cGV9L2ApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU51bWJlck9mSXRlbXMgPSAoY291bnQsIGVuZCkgPT4ge1xuICBpZiAoY291bnQgPT09IGVuZCkge1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgY2hvb3NlU3R5bGUgZnJvbSAnLi9jYXJkLXN0eWxlLmpzJztcblxuY29uc3QgY3JlYXRlUG9wdXAgPSAoaXRlbSkgPT4ge1xuICAvLyBnZXQgbW9kYWwgd3JhcHBlciBhbmQgY3JlYXRlIG1vZGFsIGluZGl2aWR1YWxseVxuICBjb25zdCBtb2RhbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xuICBtb2RhbFdyYXBwZXIuc3R5bGUuekluZGV4ID0gOTk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIGNob29zZVN0eWxlKGl0ZW0udHlwZS5zcGxpdCgnLCcpWzBdLCBtb2RhbCk7XG4gIC8vIGNyZWF0ZSBpbWdcbiAgY29uc3QgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLmltZyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGBpbWcgb2YgJHtpdGVtLm5hbWV9YCk7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pbWcnKTtcbiAgZGl2SW1nLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgLy8gY3JlYXRlIHRpdGxlXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gIC8vIGNyZWF0ZSBpbmZvIGRpdlxuICBjb25zdCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkluZm8uY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW5mb3JtYXRpb24nKTtcbiAgLy8gY3JlYXRlIGluZm8gcFxuICBjb25zdCBpbmZvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaW5mb0l0ZW0uY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24taXRlbScpO1xuICBpbmZvSXRlbS5pbm5lckhUTUwgPSBgPGI+aXRlbXM6PC9iPiAke2l0ZW0uaXRlbXN9YDtcbiAgZGl2SW5mby5hcHBlbmRDaGlsZChpbmZvSXRlbSk7XG5cbiAgY29uc3QgaW5mb1R5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm9UeXBlLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uLWdhbWVzJyk7XG4gIGluZm9UeXBlLmlubmVySFRNTCA9IGA8Yj50eXBlOiA8L2I+JHtpdGVtLnR5cGV9YDtcbiAgZGl2SW5mby5hcHBlbmRDaGlsZChpbmZvVHlwZSk7XG5cbiAgY29uc3QgaW5mb0Jhc2ljRXhwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvQmFzaWNFeHAuY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24tZ2FtZXMnKTtcbiAgaW5mb0Jhc2ljRXhwLmlubmVySFRNTCA9IGA8Yj5iYXNlIGV4cDo8L2I+ICR7aXRlbS5leHB9YDtcbiAgZGl2SW5mby5hcHBlbmRDaGlsZChpbmZvQmFzaWNFeHApO1xuXG4gIGNvbnN0IGluZm9HYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaW5mb0dhbWVzLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uLWdhbWVzJyk7XG4gIGluZm9HYW1lcy5pbm5lckhUTUwgPSBgPGI+Z2FtZXM6PC9iPiAke2l0ZW0uZ2FtZXN9YDtcbiAgZGl2SW5mby5hcHBlbmRDaGlsZChpbmZvR2FtZXMpO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKGRpdkltZyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZGl2SW5mbyk7XG4gIG1vZGFsV3JhcHBlci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsV3JhcHBlcikge1xuICAgICAgbW9kYWxXcmFwcGVyLnN0eWxlLnpJbmRleCA9IC0xO1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBvcHVwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==