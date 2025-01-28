"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsModule = void 0;
const common_1 = require("@nestjs/common");
const storeImgTest_service_1 = require("./storeImgTest.service");
const storeImgTest_resolver_1 = require("./storeImgTest.resolver");
let BrandsModule = class BrandsModule {
};
exports.BrandsModule = BrandsModule;
exports.BrandsModule = BrandsModule = __decorate([
    (0, common_1.Module)({
        providers: [storeImgTest_service_1.StoreImgTestService, storeImgTest_resolver_1.StoreImgTestResolver]
    })
], BrandsModule);
//# sourceMappingURL=storeImgTest.module.js.map