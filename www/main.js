"use strict";
(self["webpackChunkblockly_angular_sample"] = self["webpackChunkblockly_angular_sample"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




var AppComponent = /*#__PURE__*/(0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppComponent() {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppComponent);

  this.title = 'blockly-angular-sample';
});

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  styles: ["*[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaHRtbCwgYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _phaser_phaser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phaser/phaser.component */ 4177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









var routes = [{
  path: '',
  component: _phaser_phaser_component__WEBPACK_IMPORTED_MODULE_3__.PhaserComponent
}];
var AppModule = /*#__PURE__*/(0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _phaser_phaser_component__WEBPACK_IMPORTED_MODULE_3__.PhaserComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_phaser_phaser_component__WEBPACK_IMPORTED_MODULE_3__.PhaserComponent]
  });
})();

/***/ }),

/***/ 5154:
/*!********************************************!*\
  !*** ./src/app/phaser/components/break.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Break; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ 5488);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ 7527);








var Break = /*#__PURE__*/function (_Phaser$GameObjects$M) {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Break, _Phaser$GameObjects$M);

  var _super = (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Break);

  function Break(scene, conf) {
    var _this;

    (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Break);

    _this = _super.call(this, scene, conf.x, conf.y, 'break');
    phaser__WEBPACK_IMPORTED_MODULE_5___default().Geom.Mesh.GenerateGridVerts({
      texture: 'break',
      mesh: (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
      widthSegments: 6
    });

    _this.scene.add.existing((0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));

    _this.scaleToGameW((0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), conf.w);

    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.setPos)(scene, (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), conf.x, conf.y);
    _this.zone = _this.scene.add.zone(_this.x, _this.y, _this.displayWidth, _this.displayHeight).setOrigin(0).setInteractive();
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.scaleToGameZone)(scene, _this.zone, conf.zw, conf.zh);
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.setPos)(scene, _this.zone, conf.zx, conf.zy);

    _this.zone.on('pointerdown', _this.handlePointerDown, (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));

    return _this;
  }

  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Break, [{
    key: "handlePointerDown",
    value: function handlePointerDown(e) {
      this.ptrId = e.id;
      this.scene.input.on('pointermove', this.handlePointerMove, this);
      this.scene.input.on('pointerup', this.handlePointerUp, this);
      console.log("hello");
    }
  }, {
    key: "handlePointerMove",
    value: function handlePointerMove(e) {
      if (this.ptrId == e.id) {
        console.log("there");
        var rotateRate = 1,
            xuplim = 1,
            xlowlim = 0;
        var val = e.velocity.y * (rotateRate / 600);
        var ldiff = xlowlim - this.modelRotation.x;
        var udiff = xuplim - this.modelRotation.x;

        if (ldiff < val && udiff > val) {
          this.modelRotation.x += val;
        }
      }
    }
  }, {
    key: "handlePointerUp",
    value: function handlePointerUp(e) {
      if (this.ptrId == e.id) {
        this.scene.input.off('pointermove');
        this.scene.input.off('pointerup');
        this.ptrId == null;
      }
    }
  }, {
    key: "scaleToGameW",
    value: function scaleToGameW(obj, per) {
      obj.displayWidth = Number(this.scene.sys.game.config.width) * per;
      obj.scaleY = obj.scaleX;
      var q = 2.5 * Number(this.scene.sys.game.config.width) / 915;
      obj.panZ(q);
    }
  }]);

  return Break;
}((phaser__WEBPACK_IMPORTED_MODULE_5___default().GameObjects.Mesh));



/***/ }),

/***/ 3051:
/*!*******************************************!*\
  !*** ./src/app/phaser/components/dial.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dial": function() { return /* binding */ Dial; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ 5488);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ 7527);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_6__);







var Dial = /*#__PURE__*/function (_Phaser$GameObjects$C) {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Dial, _Phaser$GameObjects$C);

  var _super = (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Dial);

  function Dial(scene, config) {
    var _this;

    (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dial);

    _this = _super.call(this, scene, 0, 0);
    _this.radius = 55;
    _this.startAngle = 180;
    _this.endAngle = 360;
    _this.noOfTicks = 6;
    _this.smallTick = {
      w: 10,
      h: 6
    };
    _this.ang = _this.startAngle;
    _this.selected = 0;
    _this.angleInterval = (_this.endAngle - _this.startAngle) / (_this.noOfTicks - 1);

    _this.getPointOnArc = function (container, obj, angle) {
      var radians = phaser__WEBPACK_IMPORTED_MODULE_6__.Math.DegToRad(angle);
      var scale = container.scaleX;
      var x = obj.x * scale + Math.cos(radians) * obj.radius * scale;
      var y = obj.y * scale + Math.sin(radians) * obj.radius * scale;
      return new phaser__WEBPACK_IMPORTED_MODULE_6__.Math.Vector2(x, y);
    };

    _this.onPointerDown = function (e) {
      var x = _this.sprite.getCenter().x;

      var y = _this.sprite.getCenter().y;

      var a = _this.getLocalPoint(e.worldX, e.worldY);

      _this.prevRad = phaser__WEBPACK_IMPORTED_MODULE_6__.Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_6__.Math.Angle.Between(a.x, a.y, x, y));
      _this.steerPtr = e.id;

      _this.scene.input.on("pointermove", _this.onPointerMove, _this.sprite);

      _this.scene.input.on("pointerup", _this.onPointerUp, _this.sprite);
    };

    _this.onPointerMove = function (e) {
      if (_this.steerPtr == e.id) {
        var x = _this.sprite.getCenter().x;

        var y = _this.sprite.getCenter().y;

        var a = _this.getLocalPoint(e.worldX, e.worldY);

        _this.rad = phaser__WEBPACK_IMPORTED_MODULE_6__.Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_6__.Math.Angle.Between(a.x, a.y, x, y)); //This factor allows for slow rotation of the dial for large movement of gesture

        var factor = 0.3;

        if (_this.prevRad < 0 && _this.rad > 0) {
          _this.ang -= Math.abs(Math.abs(_this.rad) - Math.abs(_this.prevRad)) * factor;
        } else if (_this.prevRad > 0 && _this.rad < 0) {
          _this.ang += Math.abs(Math.abs(_this.rad) - Math.abs(_this.prevRad)) * factor;
        } else {
          _this.ang += (_this.rad - _this.prevRad) * factor;
        }

        if (_this.ang < _this.startAngle) {
          _this.ang += 1;
        } else if (_this.ang > _this.endAngle) {
          _this.ang -= 1;
        } else {
          if (_this.ang > _this.startAngle + _this.selected * _this.angleInterval + _this.angleInterval / 2) {
            _this.selected++;
            var prev = _this.ang;
            _this.ang = _this.startAngle + _this.selected * _this.angleInterval;
          } else if (_this.ang < _this.startAngle + _this.selected * _this.angleInterval - _this.angleInterval / 2) {
            _this.selected--;
            var _prev = _this.ang;
            _this.ang = _this.startAngle + _this.selected * _this.angleInterval;
          }

          _this.sprite.angle = _this.ang;
        }

        _this.prevRad = _this.rad;
      }
    };

    _this.onPointerUp = function (e) {
      if (_this.steerPtr == e.id) {
        _this.scene.input.off("pointermove");

        _this.scene.input.off("pointerup");

        _this.ang = _this.startAngle + _this.selected * _this.angleInterval;
        _this.sprite.angle = _this.ang;
        _this.steerPtr = null;
      }
    };

    _this.sprite = new phaser__WEBPACK_IMPORTED_MODULE_6__.GameObjects.Sprite(scene, 0, 0, "dial").setOrigin(0.5, 0.48).setInteractive().setAngle(_this.ang).setScale(0.7).on("pointerdown", _this.onPointerDown);
    _this.externalArc = new phaser__WEBPACK_IMPORTED_MODULE_6__.GameObjects.Arc(scene, 0, 0, _this.radius, _this.startAngle, _this.endAngle, false);

    _this.drawTicks();

    _utils__WEBPACK_IMPORTED_MODULE_5__.scaleToGameContainer(scene, (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _this.sprite, config);

    _this.add([_this.sprite, _this.externalArc]);

    scene.add.existing((0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Dial, [{
    key: "setCustomScale",
    value: function setCustomScale(factor) {
      this.setScale(this.scale * factor);
    }
  }, {
    key: "drawTicks",
    value: function drawTicks() {
      for (var i = this.startAngle; i <= this.endAngle; i += this.angleInterval) {
        var point = this.getPointOnArc(this, this.externalArc, i);
        var rect = this.scene.add.rectangle(point.x, point.y, this.smallTick.w, this.smallTick.h, 0xc9c9c9);
        rect.setOrigin(0.5, 0.5);
        rect.setAngle(i);
        rect.depth = 1;
        this.add(rect);
      }
    }
  }, {
    key: "createTwin",
    value: function createTwin() {
      this.tween = this.scene.add.tween({
        targets: this.sprite,
        angle: this.startAngle,
        duration: 2000,
        paused: true,
        repeat: 0,
        yoyo: false,
        ease: phaser__WEBPACK_IMPORTED_MODULE_6__.Math.Easing.Linear,
        onUpdate: function onUpdate(val) {
          console.log("he"); // this.ang = val.getValue();
          // this.sprite.setAngle(this.ang);
        }
      }); // this.tween.resume();
    }
  }]);

  return Dial;
}(phaser__WEBPACK_IMPORTED_MODULE_6__.GameObjects.Container);

/***/ }),

/***/ 9710:
/*!********************************************!*\
  !*** ./src/app/phaser/components/gears.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gears": function() { return /* binding */ Gears; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ 5488);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ 7527);





 // import { gears as config }  from '../constants';


var Gears = /*#__PURE__*/function (_Phaser$GameObjects$C) {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Gears, _Phaser$GameObjects$C);

  var _super = (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Gears);

  function Gears(scene, config) {
    var _this;

    (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Gears);

    _this = _super.call(this, scene, config.x, config.y);
    var gearWidth = 46,
        gearHeight = 295,
        gearCount = 3,
        gearDistance = 35,
        width = gearCount * (gearWidth + gearDistance) - gearDistance,
        height = gearHeight,
        xPos = 120,
        yPos = 80;
    var scaleFactor = Number(scene.sys.game.config.width) * 0.135 / width;
    var ptrid = 0;
    var bgImage = new phaser__WEBPACK_IMPORTED_MODULE_5__.GameObjects.Image(scene, 0, 0, 'gearSet').setOrigin(0).setScale(1.5);
    _this.knob = new phaser__WEBPACK_IMPORTED_MODULE_5__.GameObjects.Sprite(scene, xPos + width / 2, yPos + height / 2, 'gearKnob').setInteractive().setOrigin(0.5).setScale(0.4).on('pointerdown', function (e) {
      _this.getAll().map(function (obj) {
        obj.setInteractive();
      });

      _this.knob.disableInteractive();

      ptrid = e.id;
      scene.input.on('pointerup', function (e) {
        if (e.id == ptrid) {
          _this.getAll().map(function (obj) {
            obj.disableInteractive();
          });

          _this.knob.setInteractive();

          if (_this.gear === "") {
            _this.knob.setPosition(xPos + width * 0.5, yPos + height * 0.5);
          }
        }
      });
    });

    var handlePointerMove = function handlePointerMove(e, localX, localY, obj) {
      var a = obj.getLocalPoint(e.worldX, e.worldY);

      if (localY < obj.height * 0.25) {
        _this.knob.setPosition(obj.x + obj.width * 0.5, obj.y + obj.height * 0.125);

        _this.gear = obj.name + '1';
      } else if (localY > obj.height * 0.75) {
        _this.knob.setPosition(obj.x + obj.width * 0.5, obj.y + obj.height * 0.875);

        _this.gear = obj.name + '2';
      } else {
        _this.knob.setPosition(obj.x + a.x, obj.y + a.y);

        _this.gear = "";
      }
    };

    var first = new phaser__WEBPACK_IMPORTED_MODULE_5__.GameObjects.Zone(scene, xPos, yPos, gearWidth, gearHeight).setOrigin(0).setName("1").on('pointermove', function (pointer, localX, localY) {
      handlePointerMove(pointer, localX, localY, first);
    });
    var second = new phaser__WEBPACK_IMPORTED_MODULE_5__.GameObjects.Zone(scene, first.x + gearWidth + gearDistance, yPos, gearWidth, gearHeight).setOrigin(0).setName("2").on('pointermove', function (pointer, localX, localY) {
      handlePointerMove(pointer, localX, localY, second);
    });
    var third = new phaser__WEBPACK_IMPORTED_MODULE_5__.GameObjects.Zone(scene, second.x + gearWidth + gearDistance, yPos, gearWidth, gearHeight).setOrigin(0).setName("3").on('pointermove', function (pointer, localX, localY) {
      handlePointerMove(pointer, localX, localY, third);
    });
    console.log(gearHeight * 0.5 - gearWidth * 0.5);
    var middle = new phaser__WEBPACK_IMPORTED_MODULE_5__.GameObjects.Zone(scene, xPos, yPos + (gearHeight * 0.5 - gearWidth * 0.5), width, gearWidth).setOrigin(0).on('pointermove', function (e, localX, localY) {
      var a = middle.getLocalPoint(e.worldX, e.worldY);
      _this.gear = "";

      if (a.x > middle.width * 0.5 - middle.height * 0.5 && a.x < middle.width * 0.5 + middle.height * 0.5) {
        _this.knob.setPosition(xPos + width * 0.5, yPos + height * 0.5);
      } else {
        _this.knob.setPosition(middle.x + a.x, middle.y + a.y);
      }
    });

    _this.add([bgImage, first, second, third, middle, _this.knob]);

    scene.add.existing((0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _utils__WEBPACK_IMPORTED_MODULE_6__.setPos(scene, (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), config.x, config.y);

    _this.setScale(scaleFactor * config.scale);

    return _this;
  }

  return (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Gears);
}(phaser__WEBPACK_IMPORTED_MODULE_5__.GameObjects.Container);

/***/ }),

/***/ 1222:
/*!**************************************************!*\
  !*** ./src/app/phaser/components/speedometer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Speedometer": function() { return /* binding */ Speedometer; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ 5488);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get.js */ 4756);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js */ 265);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../utils */ 7527);








var Speedometer = /*#__PURE__*/function (_Phaser$GameObjects$C) {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Speedometer, _Phaser$GameObjects$C);

  var _super = (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Speedometer);

  function Speedometer(scene, config) {
    var _this;

    (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Speedometer);

    _this = _super.call(this, scene, 0, 0);
    _this.interval = 20;
    _this.subInterval = 2;
    _this.maxSpeed = 200;
    _this.startAngle = 135;
    _this.endAngle = 360 + 45;
    _this.angleInterval = (_this.endAngle - _this.startAngle) * _this.interval / _this.maxSpeed;
    _this.angleInterval1 = (_this.endAngle - _this.startAngle) * _this.subInterval / _this.maxSpeed;
    _this.speed = 0;
    _this.radius = 400;
    _this.smallTick = {
      w: 10,
      h: 3
    };
    _this.largeTick = {
      w: 20,
      h: 6
    };
    _this.graphics = scene.add.graphics();
    _this.graphics1 = scene.add.graphics();
    _this.ticksCircle = new Phaser.GameObjects.Arc(scene, 0, 0, _this.radius, _this.startAngle, _this.endAngle, false);
    _this.numberCircle = new Phaser.GameObjects.Arc(scene, 0, 0, _this.radius - 90, _this.startAngle, _this.endAngle, false);
    _this.externalArc = new Phaser.GameObjects.Arc(scene, 0, 0, _this.radius + 40, _this.startAngle, _this.endAngle, false);
    _this.smallInternalArc = new Phaser.GameObjects.Arc(scene, 0, 0, _this.radius - 190, _this.startAngle + 30, _this.endAngle - 30, false);
    _this.speedText = new Phaser.GameObjects.Text(scene, -20, 0, "136", {
      fontFamily: "Segoe UI",
      fontSize: "124px",
      color: "#e9e9e9",
      fontStyle: "bold"
    });
    _this.speedText1 = new Phaser.GameObjects.Text(scene, 135, 20, "kmh", {
      fontFamily: "Arial",
      fontSize: "34px",
      color: "#ff9401",
      fontStyle: "bold"
    });

    _this.speedText.setOrigin(0.5);

    _this.speedText1.setOrigin(0.5);

    _this.graphics1.lineStyle(7, 0xa2a2a2, 1);

    _this.graphics1.beginPath();

    _this.graphics1.arc(0, 0, _this.radius - 190, Phaser.Math.DegToRad(_this.startAngle + 30), Phaser.Math.DegToRad(_this.endAngle - 30), false);

    _this.graphics1.strokePath(); //Draw the small circle on the end of external arc


    _this.endCircle = new Phaser.GameObjects.Arc(scene, 0, 0, 20, 0, 360, false, 0xffffff);

    _this.add([_this.ticksCircle, _this.numberCircle, // this.endCircle,
    _this.externalArc, _this.smallInternalArc, _this.speedText, _this.speedText1, _this.graphics, _this.graphics1]);

    _utils__WEBPACK_IMPORTED_MODULE_7__.scaleToGameContainer(scene, (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _this.externalArc, config);

    _this.smallInternalArc.setStrokeStyle(7, 0xa2a2a2, 1); //Draw numbers and ticks


    var angle = _this.startAngle;

    for (var i = 0; i <= _this.maxSpeed; i += _this.interval) {
      var point = _this.getPointOnArc(_this.numberCircle, angle);

      var text = _this.scene.add.text(point.x, point.y, i.toString(), {
        fontSize: "20px",
        color: "#ffffff"
      });

      text.setOrigin(0.5);

      var point2 = _this.getPointOnArc(_this.ticksCircle, angle);

      var rect = _this.scene.add.rectangle(point2.x, point2.y, _this.largeTick.w, _this.largeTick.h, 0xffffff);

      rect.setOrigin(0.5, 0.5);
      rect.setAngle(angle);
      rect.depth = 2;
      angle += _this.angleInterval;
    } //Draw small ticks


    angle = _this.startAngle;

    for (var _i = 0; _i <= _this.maxSpeed; _i += _this.subInterval) {
      var _point = _this.getPointOnArc(_this.ticksCircle, angle);

      var _rect = _this.scene.add.rectangle(_point.x, _point.y, _this.smallTick.w, _this.smallTick.h, 0xdd7f00);

      _rect.setOrigin(0.5, 0.5);

      _rect.setAngle(angle);

      _rect.depth = 1;
      angle += _this.angleInterval1; // this.endCircle.setPosition(point2.x, point2.y);
    }

    var tween = _this.scene.tweens.addCounter({
      from: 0,
      to: _this.maxSpeed,
      duration: 3000,
      paused: true,
      yoyo: true,
      repeat: -1,
      ease: Phaser.Math.Easing.Linear,
      onUpdate: function onUpdate(val) {
        _this.speed = val.getValue();
        var endAngle = _this.startAngle + (_this.endAngle - _this.startAngle) * _this.speed / _this.maxSpeed; // this.speedText.setText(Math.round(this.speed).toString());

        _this.graphics.clear();

        _this.graphics.lineStyle(15, 0xff9401, 1);

        _this.graphics.beginPath();

        _this.graphics.arc(_this.externalArc.x, _this.externalArc.y, _this.externalArc.radius, Phaser.Math.DegToRad(_this.externalArc.startAngle), Phaser.Math.DegToRad(endAngle), false);

        _this.graphics.strokePath();

        var point = _this.getPointOnArc(_this.externalArc, endAngle); // console.log(point.x, point.y)
        // this.endCircle.setPosition(point.x - this.x, point.y - this.y);

      }
    });

    tween.resume();
    scene.add.existing((0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Speedometer, [{
    key: "getPointOnArc",
    value: function getPointOnArc(obj, angle) {
      var radians = Phaser.Math.DegToRad(angle);
      var scale = this.scaleX;
      var x = this.x + obj.x * scale + Math.cos(radians) * obj.radius * scale;
      var y = this.y + obj.y * scale + Math.sin(radians) * obj.radius * scale;
      return new Phaser.Math.Vector2(x, y);
    } // Override preUpdate method

  }, {
    key: "preUpdate",
    value: function preUpdate(time, delta) {
      (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Speedometer.prototype), "update", this).call(this, time, delta);

      this.update();
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return Speedometer;
}(Phaser.GameObjects.Container);

/***/ }),

/***/ 9830:
/*!********************************************!*\
  !*** ./src/app/phaser/components/steer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Steer; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ 5488);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ 7527);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ 8670);









var Steer = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Steer, _Phaser$GameObjects$S);

  var _super = (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Steer);

  function Steer(scene, texture) {
    var _this;

    (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Steer);

    _this = _super.call(this, scene, 0, 0, texture);
    _this.steerSpeed = 10;
    _this.ang = 0;

    _this.setOrigin(0.5, 0.5).setInteractive().on('pointerdown', _this.onPointerDown).scene.add.existing((0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));

    _utils__WEBPACK_IMPORTED_MODULE_6__.scaleToGameW(scene, (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _constants__WEBPACK_IMPORTED_MODULE_7__.steer.w);
    _utils__WEBPACK_IMPORTED_MODULE_6__.setPos(scene, (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _constants__WEBPACK_IMPORTED_MODULE_7__.steer.x, _constants__WEBPACK_IMPORTED_MODULE_7__.steer.y);
    return _this;
  }

  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Steer, [{
    key: "onPointerDown",
    value: function onPointerDown(e) {
      if (this.steerTwin != undefined) {
        this.steerTwin.stop();
      }

      var x = this.getCenter().x;
      var y = this.getCenter().y;
      this.prevRad = phaser__WEBPACK_IMPORTED_MODULE_5___default().Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_5___default().Math.Angle.Between(e.x, e.y, x, y));
      this.steerPtr = e.id;
      this.scene.input.on('pointermove', this.onPointerMove, this);
      this.scene.input.on('pointerup', this.onPointerUp, this);
    }
  }, {
    key: "onPointerMove",
    value: function onPointerMove(e) {
      if (this.steerPtr == e.id) {
        var x = this.getCenter().x;
        var y = this.getCenter().y;
        this.rad = phaser__WEBPACK_IMPORTED_MODULE_5___default().Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_5___default().Math.Angle.Between(e.x, e.y, x, y));

        if (this.prevRad < 0 && this.rad > 0) {
          this.ang -= Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
        } else if (this.prevRad > 0 && this.rad < 0) {
          this.ang += Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
        } else {
          this.ang += this.rad - this.prevRad;
        }

        this.angle = this.ang;
        this.prevRad = this.rad;
      }
    }
  }, {
    key: "onPointerUp",
    value: function onPointerUp(e) {
      var _this2 = this;

      if (this.steerPtr == e.id) {
        this.scene.input.off('pointermove');
        this.scene.input.off('pointerup');
        this.steerPtr = null;
        this.steerTwin = this.scene.tweens.addCounter({
          from: this.ang,
          to: 0,
          duration: Math.abs(this.ang * this.steerSpeed),
          repeat: 0,
          ease: (phaser__WEBPACK_IMPORTED_MODULE_5___default().Math.Easing.Quadratic.Out),
          onUpdate: function onUpdate(tween) {
            _this2.ang = tween.getValue();

            _this2.setAngle(tween.getValue());
          }
        });
      }
    }
  }]);

  return Steer;
}((phaser__WEBPACK_IMPORTED_MODULE_5___default().GameObjects.Sprite));



/***/ }),

/***/ 8670:
/*!*************************************!*\
  !*** ./src/app/phaser/constants.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakConf": function() { return /* binding */ breakConf; },
/* harmony export */   "dialConf": function() { return /* binding */ dialConf; },
/* harmony export */   "gasConf": function() { return /* binding */ gasConf; },
/* harmony export */   "gearsConf": function() { return /* binding */ gearsConf; },
/* harmony export */   "speedometerConf": function() { return /* binding */ speedometerConf; },
/* harmony export */   "steer": function() { return /* binding */ steer; }
/* harmony export */ });
var gearsConf = {
  x: 0.42,
  y: 0.08,
  scale: 0.5
};
var breakConf = {
  x: 0.1,
  y: 0.7,
  w: 0.15,
  zx: 0.105,
  zy: 0.5,
  zw: 0.1,
  zh: 0.45
};
var gasConf = {
  x: 0.2,
  y: 0.7,
  w: 0.15,
  zx: 0.205,
  zy: 0.5,
  zw: 0.1,
  zh: 0.45
};
var steer = {
  x: 0.8,
  y: 0.7,
  w: 0.3
};
var dialConf = {
  x: 0.2,
  y: 0.3,
  w: 0.08
};
var speedometerConf = {
  x: 0.5,
  y: 0.7,
  w: 0.25
};

/***/ }),

/***/ 2475:
/*!**************************************!*\
  !*** ./src/app/phaser/game.scene.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameScene": function() { return /* binding */ GameScene; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_break__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/break */ 5154);
/* harmony import */ var _components_steer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/steer */ 9830);
/* harmony import */ var _components_gears__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/gears */ 9710);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ 8670);
/* harmony import */ var _components_speedometer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/speedometer */ 1222);
/* harmony import */ var _components_dial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dial */ 3051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);












var GameScene = /*#__PURE__*/function (_Phaser$Scene) {
  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(GameScene, _Phaser$Scene);

  var _super = (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(GameScene);

  function GameScene() {
    (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameScene);

    return _super.call(this, {
      key: "GameScene"
    });
  }

  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GameScene, [{
    key: "preload",
    value: function preload() {
      this.load.svg("steeringWheel", "https://upload.wikimedia.org/wikipedia/commons/7/7b/Steering-wheel.svg", {
        width: 300,
        height: 300
      });
      this.load.svg("break", "assets/break.svg", {
        width: 300,
        height: 300
      });
      this.load.svg("gas", "assets/gas.svg", {
        width: 300,
        height: 300
      });
      this.load.svg("gearSet", "assets/gear.svg", {
        width: 300,
        height: 300
      });
      this.load.image("dial", "assets/dial.png");
      this.load.svg("gearKnob", "assets/gear_knob.svg", {
        width: 300,
        height: 300
      });
      this.load.obj("skull", "assets/breakObj2.obj");
    }
  }, {
    key: "create",
    value: function create() {
      this.steer = new _components_steer__WEBPACK_IMPORTED_MODULE_6__["default"](this, 'steeringWheel');
      this.gas = new _components_break__WEBPACK_IMPORTED_MODULE_5__["default"](this, _constants__WEBPACK_IMPORTED_MODULE_8__.gasConf);
      this.break = new _components_break__WEBPACK_IMPORTED_MODULE_5__["default"](this, _constants__WEBPACK_IMPORTED_MODULE_8__.breakConf);
      this.gears = new _components_gears__WEBPACK_IMPORTED_MODULE_7__.Gears(this, _constants__WEBPACK_IMPORTED_MODULE_8__.gearsConf);
      this.speedometer = new _components_speedometer__WEBPACK_IMPORTED_MODULE_9__.Speedometer(this, _constants__WEBPACK_IMPORTED_MODULE_8__.speedometerConf);
      this.ledKnob = new _components_dial__WEBPACK_IMPORTED_MODULE_10__.Dial(this, _constants__WEBPACK_IMPORTED_MODULE_8__.dialConf);
    }
  }]);

  return GameScene;
}(phaser__WEBPACK_IMPORTED_MODULE_4__.Scene);

GameScene.ɵfac = function GameScene_Factory(t) {
  return new (t || GameScene)();
};

GameScene.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: GameScene,
  factory: GameScene.ɵfac
});

/***/ }),

/***/ 4177:
/*!********************************************!*\
  !*** ./src/app/phaser/phaser.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhaserComponent": function() { return /* binding */ PhaserComponent; }
/* harmony export */ });
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _game_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.scene */ 2475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);





var PhaserComponent = /*#__PURE__*/function () {
  function PhaserComponent(http) {
    (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhaserComponent);

    this.http = http;
  }

  (0,E_Embed_Enterprises_UI_Codes_combinedApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PhaserComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'game',
        // width: 1200,
        // height: 600,
        scene: _game_scene__WEBPACK_IMPORTED_MODULE_2__.GameScene,
        backgroundColor: "#0000FF",
        scale: {
          mode: Phaser.Scale.FIT,
          parent: 'game',
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: window.innerWidth,
          height: window.innerHeight
        },
        input: {
          activePointers: 2
        },
        physics: {
          default: 'matter'
        }
      });
      this.game.input.addPointer(3);

      window.onresize = function () {
        _this.game.scale.setGameSize(window.innerWidth, window.innerHeight);

        _this.game.scale.refresh();
      };
    }
  }]);

  return PhaserComponent;
}();

PhaserComponent.ɵfac = function PhaserComponent_Factory(t) {
  return new (t || PhaserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

PhaserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PhaserComponent,
  selectors: [["app-game"]],
  decls: 2,
  vars: 0,
  consts: [["game", ""]],
  template: function PhaserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", null, 0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaGFzZXIuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 7527:
/*!*********************************!*\
  !*** ./src/app/phaser/utils.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPointOnArc": function() { return /* binding */ getPointOnArc; },
/* harmony export */   "scaleToGameContainer": function() { return /* binding */ scaleToGameContainer; },
/* harmony export */   "scaleToGameR": function() { return /* binding */ scaleToGameR; },
/* harmony export */   "scaleToGameW": function() { return /* binding */ scaleToGameW; },
/* harmony export */   "scaleToGameZone": function() { return /* binding */ scaleToGameZone; },
/* harmony export */   "setPos": function() { return /* binding */ setPos; }
/* harmony export */ });
function scaleToGameW(scene, obj, per) {
  obj.displayWidth = Number(scene.sys.game.config.width) * per;
  obj.scaleY = obj.scaleX;
}
function scaleToGameR(scene, obj, per) {
  obj.radius = Number(scene.sys.game.config.width) * per;
  obj.scaleY = obj.scaleX;
}
function setPos(scene, obj, x, y) {
  obj.setPosition(Number(scene.sys.game.config.width) * x, Number(scene.sys.game.config.height) * y);
}
var scaleToGameZone = function scaleToGameZone(scene, obj, perW, perH) {
  obj.displayWidth = Number(scene.sys.game.config.width) * perW;
  obj.displayHeight = Number(scene.sys.game.config.height) * perH;
};
var getPointOnArc = function getPointOnArc(container, obj, angle) {
  var radians = Phaser.Math.DegToRad(angle);
  var scale = container.scaleX;
  var x = container.x + obj.x * scale + Math.cos(radians) * obj.radius * scale;
  var y = container.y + obj.y * scale + Math.sin(radians) * obj.radius * scale;
  return new Phaser.Math.Vector2(x, y);
};
var scaleToGameContainer = function scaleToGameContainer(scene, obj, refObj, config) {
  setPos(scene, obj, config.x, config.y);
  var prev = refObj.scale;
  scaleToGameW(scene, refObj, config.w);
  var after = refObj.scale;
  refObj.setScale(prev);
  obj.setScale(after / prev);
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map