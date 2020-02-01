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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./components/modal-control */ "./src/js/components/modal-control.js");

__webpack_require__(/*! ./includes/video-control */ "./src/js/includes/video-control.js");

__webpack_require__(/*! ./includes/accordion-control */ "./src/js/includes/accordion-control.js");

/***/ }),

/***/ "./src/js/components/modal-control.js":
/*!********************************************!*\
  !*** ./src/js/components/modal-control.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addToElementClassListIfNotContains = __webpack_require__(/*! ../helpers/addToElementClassListIfNotContains */ "./src/js/helpers/addToElementClassListIfNotContains.js");

var removeClassFromElementIfContains = __webpack_require__(/*! ../helpers/removeClassFromElementIfContains */ "./src/js/helpers/removeClassFromElementIfContains.js");

var modalsOverlays = document.getElementsByClassName('component-modal');

var scrollbarWidth = __webpack_require__(/*! ../services/scrollbar/getScrollbarWidth */ "./src/js/services/scrollbar/getScrollbarWidth.js")();

var wasExitPopupShown = false;
controlModalJustifyContent();
addEventListener('resize', controlModalJustifyContent);

function controlModalJustifyContent() {
  for (var i = 0; i < modalsOverlays.length; i++) {
    // 40 pixels of .modal-component padding
    if (modalsOverlays[i].firstElementChild.getBoundingClientRect().height < innerHeight - 40) {
      addToElementClassListIfNotContains(modalsOverlays[i], 'align-items-center');
    } else {
      removeClassFromElementIfContains(modalsOverlays[i], 'align-items-center');
    }
  }
}

document.addEventListener('mouseleave', function () {
  if (wasExitPopupShown) {
    return;
  }

  wasExitPopupShown = true; // TODO: ENABLE IT WHEN MODAL DONE
  // openModal('popup-exit');
});

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = scrollbarWidth + 'px';
  modal.style.visibility = 'unset';
  modal.style.opacity = 1;
}

window.closeModal = function (modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.add('fade-out');
  document.body.style.marginRight = '0';
  document.body.style.overflow = 'unset';
  setTimeout(function () {
    modal.style.visibility = 'hidden';
    modal.classList.remove('fade-out');
  }, 300);
}; // control closing modals when clicking in overlay


var _loop = function _loop(i) {
  modalsOverlays[i].onclick = function (e) {
    if (e.target === modalsOverlays[i]) {
      closeModal(e.target.id);
    }
  };
};

for (var i = 0; i < modalsOverlays.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/js/helpers/addToElementClassListIfNotContains.js":
/*!**************************************************************!*\
  !*** ./src/js/helpers/addToElementClassListIfNotContains.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
};

/***/ }),

/***/ "./src/js/helpers/removeClassFromElementIfContains.js":
/*!************************************************************!*\
  !*** ./src/js/helpers/removeClassFromElementIfContains.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
};

/***/ }),

/***/ "./src/js/includes/accordion-control.js":
/*!**********************************************!*\
  !*** ./src/js/includes/accordion-control.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var collapse = document.getElementById('collapse');
var togglers = collapse.getElementsByClassName('toggler');

for (var i = 0; i < togglers.length; i++) {
  togglers[i].addEventListener('click', function (e) {
    accordionClick(e);
  });
}

var accordionClick = function accordionClick(e) {
  var targetClicked = e.target;
  var classClicked = targetClicked.classList;

  while (classClicked[0] !== "toggler") {
    targetClicked = targetClicked.parentElement;
    classClicked = targetClicked.classList;
  }

  var content = targetClicked.nextElementSibling;
  var toggler = targetClicked.children[0];

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    toggler.classList.remove('active');
    content.classList.remove('active');
  } else {
    var contents = collapse.getElementsByClassName('content');

    for (var _i = 0; _i < contents.length; _i++) {
      if (contents[_i].style.maxHeight) {
        contents[_i].style.maxHeight = null;

        contents[_i].classList.remove('active');

        contents[_i].previousElementSibling.firstElementChild.classList.remove('active');
      }
    }

    content.style.maxHeight = content.scrollHeight + "px";
    toggler.classList.add('active');
    content.classList.add('active');
  }
};

/***/ }),

/***/ "./src/js/includes/video-control.js":
/*!******************************************!*\
  !*** ./src/js/includes/video-control.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var register = document.getElementById('register');
var videoWrapper = document.getElementById('video-wrapper');
var videoOverlay = document.getElementById('video-overlay');
var video = document.getElementById('video');
controlVideoHeight();
addEventListener('resize', controlVideoHeight);

function controlVideoHeight() {
  videoWrapper.style.height = videoWrapper.offsetWidth * 0.56 + 'px';
}

videoOverlay.onclick = function () {
  videoOverlay.style.display = 'none';
  video.play();
};

/***/ }),

/***/ "./src/js/services/scrollbar/getScrollbarWidth.js":
/*!********************************************************!*\
  !*** ./src/js/services/scrollbar/getScrollbarWidth.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var scrollbarWidth;

module.exports = function () {
  if (scrollbarWidth) {
    return scrollbarWidth;
  }

  var outer = document.createElement('div');
  var outerStyle = outer.style;
  outerStyle.visibility = "hidden";
  outerStyle.width = "100px";
  outerStyle.msOverflowStyle = "scrollbar";
  outerStyle.overflow = "scroll";
  var inner = document.createElement('div');
  inner.style.width = '100%';
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth;
  document.body.removeChild(outer);
  scrollbarWidth = widthNoScroll - widthWithScroll;
  return scrollbarWidth;
};

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/piotrzdziarski/projects/fireads/trading-landing-website-bitcoin-2/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /home/piotrzdziarski/projects/fireads/trading-landing-website-bitcoin-2/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });