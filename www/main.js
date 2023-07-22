"use strict";
(self["webpackChunkblockly_angular_sample"] = self["webpackChunkblockly_angular_sample"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'blockly-angular-sample';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["*[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaHRtbCwgYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _phaser_phaser_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phaser/phaser.component */ 4177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _phaser_phaser_component__WEBPACK_IMPORTED_MODULE_1__.PhaserComponent },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _phaser_phaser_component__WEBPACK_IMPORTED_MODULE_1__.PhaserComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_phaser_phaser_component__WEBPACK_IMPORTED_MODULE_1__.PhaserComponent] }); })();


/***/ }),

/***/ 5154:
/*!********************************************!*\
  !*** ./src/app/phaser/components/break.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Break)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7527);


class Break extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects.Mesh) {
    constructor(scene, conf) {
        super(scene, conf.x, conf.y, 'break');
        this.pedalSpeed = 500;
        phaser__WEBPACK_IMPORTED_MODULE_0___default().Geom.Mesh.GenerateGridVerts({
            texture: 'break',
            mesh: this,
            widthSegments: 6,
        });
        this.scene.add.existing(this);
        this.scaleToGameW(this, conf.w);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setPos)(scene, this, conf.x, conf.y);
        this.zone = this.scene.add.zone(this.x, this.y, this.displayWidth, this.displayHeight).setOrigin(0)
            .setInteractive();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.scaleToGameZone)(scene, this.zone, conf.zw, conf.zh);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setPos)(scene, this.zone, conf.zx, conf.zy);
        this.initialVal = this.modelRotation.x;
        this.zone.on('pointerdown', this.handlePointerDown, this);
    }
    handlePointerDown(e) {
        this.ptrId = e.id;
        this.scene.input.on('pointermove', this.handlePointerMove, this);
        this.scene.input.on('pointerup', this.handlePointerUp, this);
    }
    handlePointerMove(e) {
        if (this.ptrId == e.id) {
            const rotateRate = 1, xuplim = 1, xlowlim = 0;
            console.log(this.modelRotation.x);
            let val = e.velocity.y * (rotateRate / 600);
            let ldiff = xlowlim - this.modelRotation.x;
            let udiff = xuplim - this.modelRotation.x;
            if (ldiff < val && udiff > val) {
                this.modelRotation.x += val;
            }
        }
    }
    handlePointerUp(e) {
        if (this.ptrId == e.id) {
            this.scene.input.off('pointermove');
            this.scene.input.off('pointerup');
            this.ptrId == null;
            this.pedalTwin = this.scene.tweens.addCounter({
                from: this.modelRotation.x,
                to: this.initialVal,
                duration: Math.abs(this.modelRotation.x * this.pedalSpeed),
                repeat: 0,
                ease: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Easing.Quadratic.Out),
                onUpdate: (tween) => {
                    let val = tween.getValue();
                    this.modelRotation.x = val;
                },
            });
        }
    }
    scaleToGameW(obj, per) {
        obj.displayWidth = Number(this.scene.sys.game.config.width) * per;
        obj.scaleY = obj.scaleX;
        var q = 2.5 * Number(this.scene.sys.game.config.width) / 915;
        obj.panZ(q);
    }
}


/***/ }),

/***/ 3051:
/*!*******************************************!*\
  !*** ./src/app/phaser/components/dial.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dial": () => (/* binding */ Dial)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 7527);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


class Dial extends phaser__WEBPACK_IMPORTED_MODULE_1__.GameObjects.Container {
    constructor(scene, config) {
        super(scene, 0, 0);
        this.radius = 55;
        this.startAngle = 180;
        this.endAngle = 360;
        this.noOfTicks = 6;
        this.smallTick = {
            w: 10,
            h: 6,
        };
        this.ang = this.startAngle;
        this.selected = 0;
        this.angleInterval = (this.endAngle - this.startAngle) / (this.noOfTicks - 1);
        this.getPointOnArc = (container, obj, angle) => {
            const radians = phaser__WEBPACK_IMPORTED_MODULE_1__.Math.DegToRad(angle);
            const scale = container.scaleX;
            const x = obj.x * scale + Math.cos(radians) * obj.radius * scale;
            const y = obj.y * scale + Math.sin(radians) * obj.radius * scale;
            return new phaser__WEBPACK_IMPORTED_MODULE_1__.Math.Vector2(x, y);
        };
        this.onPointerDown = (e) => {
            let x = this.sprite.getCenter().x;
            let y = this.sprite.getCenter().y;
            let a = this.getLocalPoint(e.worldX, e.worldY);
            this.prevRad = phaser__WEBPACK_IMPORTED_MODULE_1__.Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_1__.Math.Angle.Between(a.x, a.y, x, y));
            this.steerPtr = e.id;
            this.scene.input.on("pointermove", this.onPointerMove, this.sprite);
            this.scene.input.on("pointerup", this.onPointerUp, this.sprite);
        };
        this.onPointerMove = (e) => {
            if (this.steerPtr == e.id) {
                let x = this.sprite.getCenter().x;
                let y = this.sprite.getCenter().y;
                let a = this.getLocalPoint(e.worldX, e.worldY);
                this.rad = phaser__WEBPACK_IMPORTED_MODULE_1__.Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_1__.Math.Angle.Between(a.x, a.y, x, y));
                //This factor allows for slow rotation of the dial for large movement of gesture
                let factor = 0.3;
                if (this.prevRad < 0 && this.rad > 0) {
                    this.ang -=
                        Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad)) * factor;
                }
                else if (this.prevRad > 0 && this.rad < 0) {
                    this.ang +=
                        Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad)) * factor;
                }
                else {
                    this.ang += (this.rad - this.prevRad) * factor;
                }
                if (this.ang < this.startAngle) {
                    this.ang += 1;
                }
                else if (this.ang > this.endAngle) {
                    this.ang -= 1;
                }
                else {
                    if (this.ang >
                        this.startAngle +
                            this.selected * this.angleInterval +
                            this.angleInterval / 2) {
                        this.selected++;
                        let prev = this.ang;
                        this.ang = this.startAngle + this.selected * this.angleInterval;
                    }
                    else if (this.ang <
                        this.startAngle +
                            this.selected * this.angleInterval -
                            this.angleInterval / 2) {
                        this.selected--;
                        let prev = this.ang;
                        this.ang = this.startAngle + this.selected * this.angleInterval;
                    }
                    this.sprite.angle = this.ang;
                }
                this.prevRad = this.rad;
            }
        };
        this.onPointerUp = (e) => {
            if (this.steerPtr == e.id) {
                this.scene.input.off("pointermove");
                this.scene.input.off("pointerup");
                this.ang = this.startAngle + this.selected * this.angleInterval;
                this.sprite.angle = this.ang;
                this.steerPtr = null;
            }
        };
        this.sprite = new phaser__WEBPACK_IMPORTED_MODULE_1__.GameObjects.Sprite(scene, 0, 0, "dial")
            .setOrigin(0.5, 0.48)
            .setInteractive()
            .setAngle(this.ang)
            .setScale(0.7)
            .on("pointerdown", this.onPointerDown);
        this.externalArc = new phaser__WEBPACK_IMPORTED_MODULE_1__.GameObjects.Arc(scene, 0, 0, this.radius, this.startAngle, this.endAngle, false);
        this.drawTicks();
        _utils__WEBPACK_IMPORTED_MODULE_0__.scaleToGameContainer(scene, this, this.sprite, config);
        this.add([this.sprite, this.externalArc]);
        scene.add.existing(this);
    }
    setCustomScale(factor) {
        this.setScale(this.scale * factor);
    }
    drawTicks() {
        for (let i = this.startAngle; i <= this.endAngle; i += this.angleInterval) {
            const point = this.getPointOnArc(this, this.externalArc, i);
            let rect = this.scene.add.rectangle(point.x, point.y, this.smallTick.w, this.smallTick.h, 0xc9c9c9);
            rect.setOrigin(0.5, 0.5);
            rect.setAngle(i);
            rect.depth = 1;
            this.add(rect);
        }
    }
    createTwin() {
        this.tween = this.scene.add.tween({
            targets: this.sprite,
            angle: this.startAngle,
            duration: 2000,
            paused: true,
            repeat: 0,
            yoyo: false,
            ease: phaser__WEBPACK_IMPORTED_MODULE_1__.Math.Easing.Linear,
            onUpdate: (val) => {
                console.log("he");
                // this.ang = val.getValue();
                // this.sprite.setAngle(this.ang);
            },
        });
        // this.tween.resume();
    }
}


/***/ }),

/***/ 9710:
/*!********************************************!*\
  !*** ./src/app/phaser/components/gears.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gears": () => (/* binding */ Gears)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7527);

// import { gears as config }  from '../constants';

class Gears extends phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Container {
    constructor(scene, config) {
        super(scene, config.x, config.y);
        const gearWidth = 46, gearHeight = 295, gearCount = 3, gearDistance = 35, width = gearCount * (gearWidth + gearDistance) - gearDistance, height = gearHeight, xPos = 120, yPos = 80;
        const scaleFactor = Number(scene.sys.game.config.width) * 0.135 / width;
        let ptrid = 0;
        const bgImage = new phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Image(scene, 0, 0, 'gearSet')
            .setOrigin(0)
            .setScale(1.5);
        this.knob = new phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Sprite(scene, xPos + width / 2, yPos + height / 2, 'gearKnob')
            .setInteractive()
            .setOrigin(0.5)
            .setScale(0.4)
            .on('pointerdown', (e) => {
            this.getAll().map((obj) => {
                obj.setInteractive();
            });
            this.knob.disableInteractive();
            ptrid = e.id;
            scene.input.on('pointerup', (e) => {
                if (e.id == ptrid) {
                    this.getAll().map((obj) => {
                        obj.disableInteractive();
                    });
                    this.knob.setInteractive();
                    if (this.gear === "") {
                        this.knob.setPosition(xPos + width * 0.5, yPos + height * 0.5);
                    }
                }
            });
        });
        const handlePointerMove = (e, localX, localY, obj) => {
            let a = obj.getLocalPoint(e.worldX, e.worldY);
            if (localY < obj.height * 0.25) {
                this.knob.setPosition(obj.x + obj.width * 0.5, obj.y + obj.height * 0.125);
                this.gear = obj.name + '1';
            }
            else if (localY > obj.height * 0.75) {
                this.knob.setPosition(obj.x + obj.width * 0.5, obj.y + obj.height * 0.875);
                this.gear = obj.name + '2';
            }
            else {
                this.knob.setPosition(obj.x + a.x, obj.y + a.y);
                this.gear = "";
            }
        };
        const first = new phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Zone(scene, xPos, yPos, gearWidth, gearHeight)
            .setOrigin(0).setName("1")
            .on('pointermove', (pointer, localX, localY) => { handlePointerMove(pointer, localX, localY, first); });
        const second = new phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Zone(scene, first.x + gearWidth + gearDistance, yPos, gearWidth, gearHeight)
            .setOrigin(0).setName("2")
            .on('pointermove', (pointer, localX, localY) => { handlePointerMove(pointer, localX, localY, second); });
        const third = new phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Zone(scene, second.x + gearWidth + gearDistance, yPos, gearWidth, gearHeight)
            .setOrigin(0).setName("3")
            .on('pointermove', (pointer, localX, localY) => { handlePointerMove(pointer, localX, localY, third); });
        console.log((gearHeight * 0.5 - gearWidth * 0.5));
        const middle = new phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Zone(scene, xPos, yPos + (gearHeight * 0.5 - gearWidth * 0.5), width, gearWidth)
            .setOrigin(0)
            .on('pointermove', (e, localX, localY) => {
            let a = middle.getLocalPoint(e.worldX, e.worldY);
            this.gear = "";
            if (a.x > (middle.width * 0.5 - middle.height * 0.5) && a.x < (middle.width * 0.5 + middle.height * 0.5)) {
                this.knob.setPosition(xPos + width * 0.5, yPos + height * 0.5);
            }
            else {
                this.knob.setPosition(middle.x + a.x, middle.y + a.y);
            }
        });
        this.add([bgImage, first, second, third, middle, this.knob]);
        scene.add.existing(this);
        _utils__WEBPACK_IMPORTED_MODULE_1__.setPos(scene, this, config.x, config.y);
        this.setScale(scaleFactor * config.scale);
    }
}


/***/ }),

/***/ 1222:
/*!**************************************************!*\
  !*** ./src/app/phaser/components/speedometer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Speedometer": () => (/* binding */ Speedometer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ 7527);

class Speedometer extends Phaser.GameObjects.Container {
    constructor(scene, config) {
        super(scene, 0, 0);
        this.interval = 20;
        this.subInterval = 2;
        this.maxSpeed = 200;
        this.startAngle = 135;
        this.endAngle = 360 + 45;
        this.angleInterval = ((this.endAngle - this.startAngle) * this.interval) / this.maxSpeed;
        this.angleInterval1 = ((this.endAngle - this.startAngle) * this.subInterval) / this.maxSpeed;
        this.speed = 0;
        this.radius = 400;
        this.smallTick = {
            w: 10,
            h: 3,
        };
        this.largeTick = {
            w: 20,
            h: 6,
        };
        this.graphics = scene.add.graphics();
        this.graphics1 = scene.add.graphics();
        this.ticksCircle = new Phaser.GameObjects.Arc(scene, 0, 0, this.radius, this.startAngle, this.endAngle, false);
        this.numberCircle = new Phaser.GameObjects.Arc(scene, 0, 0, this.radius - 90, this.startAngle, this.endAngle, false);
        this.externalArc = new Phaser.GameObjects.Arc(scene, 0, 0, this.radius + 40, this.startAngle, this.endAngle, false);
        this.smallInternalArc = new Phaser.GameObjects.Arc(scene, 0, 0, this.radius - 190, this.startAngle + 30, this.endAngle - 30, false);
        this.speedText = new Phaser.GameObjects.Text(scene, -20, 0, "136", {
            fontFamily: "Segoe UI",
            fontSize: "124px",
            color: "#e9e9e9",
            fontStyle: "bold",
        });
        this.speedText1 = new Phaser.GameObjects.Text(scene, 135, 20, "kmh", {
            fontFamily: "Arial",
            fontSize: "34px",
            color: "#ff9401",
            fontStyle: "bold",
        });
        this.speedText.setOrigin(0.5);
        this.speedText1.setOrigin(0.5);
        this.graphics1.lineStyle(7, 0xa2a2a2, 1);
        this.graphics1.beginPath();
        this.graphics1.arc(0, 0, this.radius - 190, Phaser.Math.DegToRad(this.startAngle + 30), Phaser.Math.DegToRad(this.endAngle - 30), false);
        this.graphics1.strokePath();
        //Draw the small circle on the end of external arc
        this.endCircle = new Phaser.GameObjects.Arc(scene, 0, 0, 20, 0, 360, false, 0xffffff);
        this.add([
            this.ticksCircle,
            this.numberCircle,
            // this.endCircle,
            this.externalArc,
            this.smallInternalArc,
            this.speedText,
            this.speedText1,
            this.graphics,
            this.graphics1,
        ]);
        _utils__WEBPACK_IMPORTED_MODULE_0__.scaleToGameContainer(scene, this, this.externalArc, config);
        this.smallInternalArc.setStrokeStyle(7, 0xa2a2a2, 1);
        //Draw numbers and ticks
        let angle = this.startAngle;
        for (let i = 0; i <= this.maxSpeed; i += this.interval) {
            let point = this.getPointOnArc(this.numberCircle, angle);
            let text = this.scene.add.text(point.x, point.y, i.toString(), {
                fontSize: "20px",
                color: "#ffffff",
            });
            text.setOrigin(0.5);
            let point2 = this.getPointOnArc(this.ticksCircle, angle);
            let rect = this.scene.add.rectangle(point2.x, point2.y, this.largeTick.w, this.largeTick.h, 0xffffff);
            rect.setOrigin(0.5, 0.5);
            rect.setAngle(angle);
            rect.depth = 2;
            angle += this.angleInterval;
        }
        //Draw small ticks
        angle = this.startAngle;
        for (let i = 0; i <= this.maxSpeed; i += this.subInterval) {
            let point2 = this.getPointOnArc(this.ticksCircle, angle);
            let rect = this.scene.add.rectangle(point2.x, point2.y, this.smallTick.w, this.smallTick.h, 0xdd7f00);
            rect.setOrigin(0.5, 0.5);
            rect.setAngle(angle);
            rect.depth = 1;
            angle += this.angleInterval1;
            // this.endCircle.setPosition(point2.x, point2.y);
        }
        var tween = this.scene.tweens.addCounter({
            from: 0,
            to: this.maxSpeed,
            duration: 3000,
            paused: true,
            yoyo: true,
            repeat: -1,
            ease: Phaser.Math.Easing.Linear,
            onUpdate: (val) => {
                this.speed = val.getValue();
                let endAngle = this.startAngle +
                    ((this.endAngle - this.startAngle) * this.speed) / this.maxSpeed;
                // this.speedText.setText(Math.round(this.speed).toString());
                this.graphics.clear();
                this.graphics.lineStyle(15, 0xff9401, 1);
                this.graphics.beginPath();
                this.graphics.arc(this.externalArc.x, this.externalArc.y, this.externalArc.radius, Phaser.Math.DegToRad(this.externalArc.startAngle), Phaser.Math.DegToRad(endAngle), false);
                this.graphics.strokePath();
                let point = this.getPointOnArc(this.externalArc, endAngle);
                // console.log(point.x, point.y)
                // this.endCircle.setPosition(point.x - this.x, point.y - this.y);
            },
        });
        tween.resume();
        scene.add.existing(this);
    }
    getPointOnArc(obj, angle) {
        const radians = Phaser.Math.DegToRad(angle);
        const scale = this.scaleX;
        const x = this.x + obj.x * scale + Math.cos(radians) * obj.radius * scale;
        const y = this.y + obj.y * scale + Math.sin(radians) * obj.radius * scale;
        return new Phaser.Math.Vector2(x, y);
    }
    // Override preUpdate method
    preUpdate(time, delta) {
        super.update(time, delta);
        this.update();
    }
    update() { }
}


/***/ }),

/***/ 9830:
/*!********************************************!*\
  !*** ./src/app/phaser/components/steer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Steer)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 7527);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 8670);



class Steer extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects.Sprite) {
    constructor(scene, texture) {
        super(scene, 0, 0, texture);
        this.steerSpeed = 10;
        this.ang = 0;
        this.setOrigin(0.5, 0.5)
            .setInteractive()
            .on('pointerdown', this.onPointerDown)
            .scene.add.existing(this);
        _utils__WEBPACK_IMPORTED_MODULE_1__.scaleToGameW(scene, this, _constants__WEBPACK_IMPORTED_MODULE_2__.steer.w);
        _utils__WEBPACK_IMPORTED_MODULE_1__.setPos(scene, this, _constants__WEBPACK_IMPORTED_MODULE_2__.steer.x, _constants__WEBPACK_IMPORTED_MODULE_2__.steer.y);
    }
    onPointerDown(e) {
        if (this.steerTwin != undefined) {
            this.steerTwin.stop();
        }
        let x = this.getCenter().x;
        let y = this.getCenter().y;
        this.prevRad = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Angle.Between(e.x, e.y, x, y));
        this.steerPtr = e.id;
        this.scene.input.on('pointermove', this.onPointerMove, this);
        this.scene.input.on('pointerup', this.onPointerUp, this);
    }
    onPointerMove(e) {
        if (this.steerPtr == e.id) {
            let x = this.getCenter().x;
            let y = this.getCenter().y;
            this.rad = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.RadToDeg(phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Angle.Between(e.x, e.y, x, y));
            if (this.prevRad < 0 && this.rad > 0) {
                this.ang -= Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
            }
            else if (this.prevRad > 0 && this.rad < 0) {
                this.ang += Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
            }
            else {
                this.ang += this.rad - this.prevRad;
            }
            this.angle = this.ang;
            this.prevRad = this.rad;
        }
    }
    onPointerUp(e) {
        if (this.steerPtr == e.id) {
            this.scene.input.off('pointermove');
            this.scene.input.off('pointerup');
            this.steerPtr = null;
            this.steerTwin = this.scene.tweens.addCounter({
                from: this.ang,
                to: 0,
                duration: Math.abs(this.ang * this.steerSpeed),
                repeat: 0,
                ease: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Easing.Quadratic.Out),
                onUpdate: (tween) => {
                    this.ang = tween.getValue();
                    this.setAngle(tween.getValue());
                },
            });
        }
    }
}


/***/ }),

/***/ 8670:
/*!*************************************!*\
  !*** ./src/app/phaser/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakConf": () => (/* binding */ breakConf),
/* harmony export */   "dialConf": () => (/* binding */ dialConf),
/* harmony export */   "gasConf": () => (/* binding */ gasConf),
/* harmony export */   "gearsConf": () => (/* binding */ gearsConf),
/* harmony export */   "speedometerConf": () => (/* binding */ speedometerConf),
/* harmony export */   "steer": () => (/* binding */ steer)
/* harmony export */ });
const gearsConf = {
    x: 0.42,
    y: 0.08,
    scale: 0.5
};
const breakConf = {
    x: 0.1,
    y: 0.7,
    w: 0.15,
    zx: 0.105,
    zy: 0.5,
    zw: 0.1,
    zh: 0.45
};
const gasConf = {
    x: 0.2,
    y: 0.7,
    w: 0.15,
    zx: 0.205,
    zy: 0.5,
    zw: 0.1,
    zh: 0.45
};
const steer = {
    x: 0.8,
    y: 0.7,
    w: 0.3
};
const dialConf = {
    x: 0.2,
    y: 0.3,
    w: 0.08
};
const speedometerConf = {
    x: 0.5,
    y: 0.7,
    w: 0.25
};


/***/ }),

/***/ 2475:
/*!**************************************!*\
  !*** ./src/app/phaser/game.scene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameScene": () => (/* binding */ GameScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ 6642);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/break */ 5154);
/* harmony import */ var _components_steer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/steer */ 9830);
/* harmony import */ var _components_gears__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gears */ 9710);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ 8670);
/* harmony import */ var _components_speedometer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/speedometer */ 1222);
/* harmony import */ var _components_dial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dial */ 3051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








class GameScene extends phaser__WEBPACK_IMPORTED_MODULE_0__.Scene {
    constructor() {
        super({ key: "GameScene" });
    }
    preload() {
        this.load.svg("steeringWheel", "https://upload.wikimedia.org/wikipedia/commons/7/7b/Steering-wheel.svg", { width: 300, height: 300 });
        this.load.svg("break", "assets/break.svg", { width: 300, height: 300 });
        this.load.svg("gas", "assets/gas.svg", { width: 300, height: 300 });
        this.load.svg("gearSet", "assets/gear.svg", { width: 300, height: 300 });
        this.load.image("dial", "assets/dial.png");
        this.load.svg("gearKnob", "assets/gear_knob.svg", {
            width: 300,
            height: 300,
        });
        this.load.obj("skull", "assets/breakObj2.obj");
    }
    create() {
        const canva = document.getElementsByTagName("canvas")[0];
        canva.style.background = 'linear-gradient(120deg, rgb(51 50 104) 0%, rgb(110, 165, 183) 100%)';
        this.steer = new _components_steer__WEBPACK_IMPORTED_MODULE_2__["default"](this, 'steeringWheel');
        this.gas = new _components_break__WEBPACK_IMPORTED_MODULE_1__["default"](this, _constants__WEBPACK_IMPORTED_MODULE_4__.gasConf);
        this.break = new _components_break__WEBPACK_IMPORTED_MODULE_1__["default"](this, _constants__WEBPACK_IMPORTED_MODULE_4__.breakConf);
        this.gears = new _components_gears__WEBPACK_IMPORTED_MODULE_3__.Gears(this, _constants__WEBPACK_IMPORTED_MODULE_4__.gearsConf);
        this.speedometer = new _components_speedometer__WEBPACK_IMPORTED_MODULE_5__.Speedometer(this, _constants__WEBPACK_IMPORTED_MODULE_4__.speedometerConf);
        this.ledKnob = new _components_dial__WEBPACK_IMPORTED_MODULE_6__.Dial(this, _constants__WEBPACK_IMPORTED_MODULE_4__.dialConf);
    }
}
GameScene.ɵfac = function GameScene_Factory(t) { return new (t || GameScene)(); };
GameScene.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: GameScene, factory: GameScene.ɵfac });


/***/ }),

/***/ 4177:
/*!********************************************!*\
  !*** ./src/app/phaser/phaser.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhaserComponent": () => (/* binding */ PhaserComponent)
/* harmony export */ });
/* harmony import */ var _game_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.scene */ 2475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class PhaserComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.game = new Phaser.Game({
            type: Phaser.AUTO,
            parent: 'game',
            // width: 1200,
            // height: 600,
            transparent: true,
            scene: _game_scene__WEBPACK_IMPORTED_MODULE_0__.GameScene,
            backgroundColor: "#0000FF",
            scale: {
                mode: Phaser.Scale.FIT,
                parent: 'game',
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: window.innerWidth,
                height: window.innerHeight
            },
            input: {
                activePointers: 2,
            },
            physics: {
                default: 'matter'
            }
        });
        this.game.input.addPointer(3);
        window.onresize = () => {
            this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
            this.game.scale.refresh();
        };
    }
}
PhaserComponent.ɵfac = function PhaserComponent_Factory(t) { return new (t || PhaserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PhaserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PhaserComponent, selectors: [["app-game"]], decls: 2, vars: 0, consts: [["game", ""]], template: function PhaserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaGFzZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7527:
/*!*********************************!*\
  !*** ./src/app/phaser/utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPointOnArc": () => (/* binding */ getPointOnArc),
/* harmony export */   "scaleToGameContainer": () => (/* binding */ scaleToGameContainer),
/* harmony export */   "scaleToGameR": () => (/* binding */ scaleToGameR),
/* harmony export */   "scaleToGameW": () => (/* binding */ scaleToGameW),
/* harmony export */   "scaleToGameZone": () => (/* binding */ scaleToGameZone),
/* harmony export */   "setPos": () => (/* binding */ setPos)
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
const scaleToGameZone = (scene, obj, perW, perH) => {
    obj.displayWidth = Number(scene.sys.game.config.width) * perW;
    obj.displayHeight = Number(scene.sys.game.config.height) * perH;
};
const getPointOnArc = (container, obj, angle) => {
    const radians = Phaser.Math.DegToRad(angle);
    const scale = container.scaleX;
    const x = container.x + obj.x * scale + Math.cos(radians) * obj.radius * scale;
    const y = container.y + obj.y * scale + Math.sin(radians) * obj.radius * scale;
    return new Phaser.Math.Vector2(x, y);
};
const scaleToGameContainer = (scene, obj, refObj, config) => {
    setPos(scene, obj, config.x, config.y);
    let prev = refObj.scale;
    scaleToGameW(scene, refObj, config.w);
    let after = refObj.scale;
    refObj.setScale(prev);
    obj.setScale(after / prev);
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map