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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreImgTestResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const storeImgTest_service_1 = require("./storeImgTest.service");
const graphql_upload_1 = require("graphql-upload");
let StoreImgTestResolver = class StoreImgTestResolver {
    constructor(storeImgTestService) {
        this.storeImgTestService = storeImgTestService;
    }
    getaddImg() { }
    addImg(id, file) {
        return this.storeImgTestService.addImg(id, file);
    }
};
exports.StoreImgTestResolver = StoreImgTestResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreImgTestResolver.prototype, "getaddImg", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)({ name: 'file', type: () => graphql_upload_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof graphql_upload_1.FileUpload !== "undefined" && graphql_upload_1.FileUpload) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], StoreImgTestResolver.prototype, "addImg", null);
exports.StoreImgTestResolver = StoreImgTestResolver = __decorate([
    (0, graphql_1.Resolver)(() => Boolean),
    __metadata("design:paramtypes", [storeImgTest_service_1.StoreImgTestService])
], StoreImgTestResolver);
//# sourceMappingURL=storeImgTest.resolver.js.map