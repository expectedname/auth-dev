"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var global_module_1 = require("./../../../global/global.module");
var LoginService = (function () {
    function LoginService(_http, config) {
        this._http = _http;
        this.config = config;
    }
    LoginService.prototype.login = function (username, password) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.config.api_base_url + this.config.login_url, '{"username":"' + username + '","password":"' + password + '"}', options)
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem(this.config.nerve_token_key);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [http_1.Http,
        global_module_1.AppConfig])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map