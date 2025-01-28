"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreImgTestService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let StoreImgTestService = class StoreImgTestService {
    async addImg(id, file) {
        const { createReadStream, filename, mimetype, encoding } = await file;
        const filePath = path.join(__dirname, '../../src/', 'uploads', `${filename}.${mimetype}`);
        const stream = createReadStream();
        await new Promise((resolve, reject) => {
            const writeStream = fs.createWriteStream(filePath);
            stream.pipe(writeStream);
            stream.on("end", resolve);
            stream.on("error", reject);
        });
        return true;
    }
};
exports.StoreImgTestService = StoreImgTestService;
exports.StoreImgTestService = StoreImgTestService = __decorate([
    (0, common_1.Injectable)()
], StoreImgTestService);
//# sourceMappingURL=storeImgTest.service.js.map