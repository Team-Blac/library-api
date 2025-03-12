import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";
import "dotenv/config";


export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVESFILESORG_API_KEY,
        relativePath: '/library-api/*'
    })
})