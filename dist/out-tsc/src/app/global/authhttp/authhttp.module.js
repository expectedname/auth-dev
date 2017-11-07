"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var angular2_jwt_1 = require("angular2-jwt");
function authHttpServiceFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        headerName: 'Authorization',
        headerPrefix: '',
        noJwtError: true,
        noTokenScheme: true,
        tokenGetter: (function () {
            var item = JSON.parse(localStorage.getItem('h3u_nerve_usertoken'));
            return 'Bearer ' + item.token;
        }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
exports.authHttpServiceFactory = authHttpServiceFactory;
var AuthhttpModule = (function () {
    function AuthhttpModule() {
    }
    return AuthhttpModule;
}());
AuthhttpModule = __decorate([
    core_1.NgModule({
        providers: [
            {
                provide: angular2_jwt_1.AuthHttp,
                useFactory: authHttpServiceFactory,
                deps: [http_1.Http, http_1.RequestOptions]
            }
        ]
    })
], AuthhttpModule);
exports.AuthhttpModule = AuthhttpModule;
//# sourceMappingURL=authhttp.module.js.map