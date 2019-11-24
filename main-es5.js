(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"container p-4\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" routerLink=\"/\">CQM Control Calidad</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav ml-auto\">\n                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/photos\">my Photos</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/photos/new\">New Photo</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<span class=\"border-top-0\"></span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/photo-form/photo-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/photo-form/photo-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 mx-auto\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Upload a Photo\n        </div>\n        <div class=\"card-body\">\n            <form (submit)=\"uploadPhoto(title, description)\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Photo's Title\" #title required>\n                </div>\n                <div class=\"form-group\">\n                    <textarea rows=\"2\" class=\"form-control\" placeholder=\"Photo's Description\" #description required></textarea>\n                </div>\n\n                <input type=\"file\" class=\"d-none\" (change)=\"onPhotoSelected($event)\" #photoInput >\n                <img [src]=\"photoSelected || 'assets/no-image.png'\" class=\"img-fluid\" alt=\"No Image\" (click)=\"photoInput.click()\">\n                <br>\n                <hr>\n                <button class=\"btn btn-primary btn-block\">\n                    SAVE\n                </button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/photo-plist/photo-plist.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/photo-plist/photo-plist.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5 p-4\" *ngFor=\"let photo of photos\">\n        <div class=\"card card-photo \" (click)=\"selectedCard(photo._id)\">\n            <div class=\"card-header\">\n                {{photo.title}}\n            </div>\n            <img [src]=\"'http://localhost:4000/' + photo.imagePath\" class=\"img-card-top w-100\">\n            <div class=\"card-body\">\n                {{photo.description}}\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/photo-preview/photo-preview.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/photo-preview/photo-preview.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!photo; else main_content\">\n    <div class=\"d-flex justify-content-center\">\n        <div class=\"spinner-grow text-primary\" style=\"width: 7rem; height: 7rem;\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</div>\n\n<ng-template #main_content>\n\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <div class=\"card\">\n                <img [src]=\"URI + photo.imagePath\" class=\"img-fluid\">\n            </div>\n        </div>\n\n        <div class=\"col-md-7\">\n            <div class=\"card\">\n                <form class=\"card-body\" (submit)=\"updatePhoto(title, description)\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Photo's Title\" [value]=\"photo.title\"\n                            #title>\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea rows=\"10\" class=\"form-control\" placeholder=\"Photo's Description\"\n                            [value]=\"photo.description\" #description></textarea>\n                    </div>\n\n                    <div style=\"text-align: center;\" class=\"form-group\">\n                        <button class=\"btn btn-primary \">\n                            Update\n                        </button>\n                        &nbsp;\n                        <button class=\"btn btn-danger\"  (click)=\"deletePhoto(photo._id)\">\n                            Delete\n                        </button>\n                    </div>\n\n                </form>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_photo_plist_photo_plist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/photo-plist/photo-plist.component */ "./src/app/components/photo-plist/photo-plist.component.ts");
/* harmony import */ var _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/photo-form/photo-form.component */ "./src/app/components/photo-form/photo-form.component.ts");
/* harmony import */ var _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/photo-preview/photo-preview.component */ "./src/app/components/photo-preview/photo-preview.component.ts");






var routes = [
    {
        path: 'photos',
        component: _components_photo_plist_photo_plist_component__WEBPACK_IMPORTED_MODULE_3__["PhotoPlistComponent"]
    },
    {
        path: 'photos/new',
        component: _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_4__["PhotoFormComponent"]
    },
    {
        path: 'photos/:id',
        component: _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_5__["PhotoPreviewComponent"]
    },
    {
        path: '',
        redirectTo: '/photos',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cqm-frontend-controlcalidad';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/photo-form/photo-form.component */ "./src/app/components/photo-form/photo-form.component.ts");
/* harmony import */ var _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/photo-preview/photo-preview.component */ "./src/app/components/photo-preview/photo-preview.component.ts");
/* harmony import */ var _components_photo_plist_photo_plist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/photo-plist/photo-plist.component */ "./src/app/components/photo-plist/photo-plist.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_7__["PhotoFormComponent"],
                _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_8__["PhotoPreviewComponent"],
                _components_photo_plist_photo_plist_component__WEBPACK_IMPORTED_MODULE_9__["PhotoPlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/photo-form/photo-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/photo-form/photo-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tZm9ybS9waG90by1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/photo-form/photo-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/photo-form/photo-form.component.ts ***!
  \***************************************************************/
/*! exports provided: PhotoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoFormComponent", function() { return PhotoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ "./src/app/services/photo.service.ts");




var PhotoFormComponent = /** @class */ (function () {
    function PhotoFormComponent(photoService, router) {
        this.photoService = photoService;
        this.router = router;
    }
    PhotoFormComponent.prototype.ngOnInit = function () {
    };
    PhotoFormComponent.prototype.onPhotoSelected = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            //image preview
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.photoSelected = reader_1.result; };
            reader_1.readAsDataURL(this.file);
        }
    };
    PhotoFormComponent.prototype.uploadPhoto = function (title, description) {
        var _this = this;
        this.photoService.createPhoto(title.value, description.value, this.file)
            .subscribe(function (res) {
            _this.router.navigate(['/photos']);
        }, function (err) { return console.log(err); });
        return false;
    };
    PhotoFormComponent.ctorParameters = function () { return [
        { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PhotoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-form',
            template: __webpack_require__(/*! raw-loader!./photo-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/photo-form/photo-form.component.html"),
            styles: [__webpack_require__(/*! ./photo-form.component.css */ "./src/app/components/photo-form/photo-form.component.css")]
        })
    ], PhotoFormComponent);
    return PhotoFormComponent;
}());



/***/ }),

/***/ "./src/app/components/photo-plist/photo-plist.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/photo-plist/photo-plist.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-photo {\n    cursor: pointer;\n\n}\n\n.card-photo:hover{\n    border: 1px solid #2196F3 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by1wbGlzdC9waG90by1wbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob3RvLXBsaXN0L3Bob3RvLXBsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1waG90byB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbi5jYXJkLXBob3RvOmhvdmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2RjMgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/photo-plist/photo-plist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/photo-plist/photo-plist.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoPlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPlistComponent", function() { return PhotoPlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ "./src/app/services/photo.service.ts");




var PhotoPlistComponent = /** @class */ (function () {
    function PhotoPlistComponent(photoService, router) {
        this.photoService = photoService;
        this.router = router;
        this.photos = [];
    }
    PhotoPlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoService.getPhotos()
            .subscribe(function (res) {
            _this.photos = res;
        }, function (err) { return console.log(err); });
    };
    PhotoPlistComponent.prototype.selectedCard = function (id) {
        this.router.navigate(['/photos/', id]);
    };
    PhotoPlistComponent.ctorParameters = function () { return [
        { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PhotoPlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-plist',
            template: __webpack_require__(/*! raw-loader!./photo-plist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/photo-plist/photo-plist.component.html"),
            styles: [__webpack_require__(/*! ./photo-plist.component.css */ "./src/app/components/photo-plist/photo-plist.component.css")]
        })
    ], PhotoPlistComponent);
    return PhotoPlistComponent;
}());



/***/ }),

/***/ "./src/app/components/photo-preview/photo-preview.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/photo-preview/photo-preview.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tcHJldmlldy9waG90by1wcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/photo-preview/photo-preview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/photo-preview/photo-preview.component.ts ***!
  \*********************************************************************/
/*! exports provided: PhotoPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPreviewComponent", function() { return PhotoPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ "./src/app/services/photo.service.ts");




var PhotoPreviewComponent = /** @class */ (function () {
    function PhotoPreviewComponent(activeRouter, router, photoService) {
        this.activeRouter = activeRouter;
        this.router = router;
        this.photoService = photoService;
    }
    PhotoPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.photoService.getPhoto(_this.id)
                .subscribe(function (res) {
                _this.photo = res;
                _this.URI = "http://localhost:4000/";
            }, function (err) { return console.log(err); });
        });
    };
    PhotoPreviewComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.photoService.deletePhoto(id)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/photos/']);
        }, function (err) { return console.log(err); });
    };
    PhotoPreviewComponent.prototype.updatePhoto = function (title, description) {
        var _this = this;
        this.photoService.updatePhoto(this.id, title.value, description.value)
            .subscribe(function (res) {
            _this.router.navigate(['/photos/']);
        }, function (err) { return console.log(err); });
        return false;
    };
    PhotoPreviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"] }
    ]; };
    PhotoPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-preview',
            template: __webpack_require__(/*! raw-loader!./photo-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/photo-preview/photo-preview.component.html"),
            styles: [__webpack_require__(/*! ./photo-preview.component.css */ "./src/app/components/photo-preview/photo-preview.component.css")]
        })
    ], PhotoPreviewComponent);
    return PhotoPreviewComponent;
}());



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        this.URI = 'http://localhost:4000/api/photos/';
    }
    PhotoService.prototype.createPhoto = function (title, description, photo) {
        var fd = new FormData();
        fd.append('title', title);
        fd.append('description', description);
        fd.append('image', photo);
        return this.http.post(this.URI, fd);
    };
    PhotoService.prototype.getPhotos = function () {
        return this.http.get(this.URI);
    };
    PhotoService.prototype.getPhoto = function (id) {
        return this.http.get(this.URI + id);
    };
    PhotoService.prototype.deletePhoto = function (id) {
        return this.http.delete(this.URI + id);
    };
    PhotoService.prototype.updatePhoto = function (id, title, description) {
        return this.http.put(this.URI + id, { title: title, description: description });
    };
    PhotoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jmvillatei/Documentos/CQM/www/cqm-modulo-controlcalidad/cqm-frontend-controlcalidad/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map