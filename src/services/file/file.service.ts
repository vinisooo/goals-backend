import { Injectable } from '@nestjs/common';
import cloudinary from 'src/utils/cloudinary';

@Injectable()
export class FileService {

    async uploadImage(file: string, folderName: string) {
        const result = await cloudinary.uploader.upload(file, {
            folder: folderName
        })

        const {public_id, secure_url} = result
        return {public_id, secure_url}
    }
}
