import { UploadedFile } from "express-fileupload";
import fs from "fs";
import { format } from "date-fns";
import hash from "object-hash";
import config from "../environment";

export interface IFileResponse {
  success: boolean;
  path: string;
  imageName: string;
}

export const saveImage = async (
  model: string,
  image: UploadedFile,
  imageName?: string
) => {
  try {
    const currentDate = format(new Date(), "yyyy-MM-dd-HH:mm:ss");
    const ext = image.name.split(".")[1];
    if (!imageName) {
      const name = image.md5;
      const hashName = hash({ name, currentDate });
      imageName = `${hashName}.${ext}`;
    } else {
      imageName = `${imageName}.${ext}`;
    }
    const folder = config.files.folder;
    const pathImages = `${folder}${config.files.images}`;
    const hasFolder = await fs.existsSync(`${pathImages}/${model}`);
    if (!hasFolder) {
      fs.mkdirSync(`${pathImages}/${model}`, { recursive: true });
    }
    await fs.writeFileSync(`${pathImages}/${model}/${imageName}`, image.data);
    return {
      success: true,
      path: `${config.files.images}/${model}`,
      imageName,
    };
  } catch (error: any) {
    throw new Error(`Error at load image: ${error.message}`);
  }
};
