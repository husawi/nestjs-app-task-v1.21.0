import { StoreImgTestService } from './storeImgTest.service';
import { FileUpload } from 'graphql-upload';
export declare class StoreImgTestResolver {
    private storeImgTestService;
    constructor(storeImgTestService: StoreImgTestService);
    getaddImg(): void;
    addImg(id: string, file: FileUpload): Promise<Boolean>;
}
