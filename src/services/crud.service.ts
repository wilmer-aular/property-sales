import { Model, Document } from "mongoose";
import { UploadedFile } from "express-fileupload";
import { saveImage, IFileResponse } from "./file.service";



class CrudService<T extends Document> {
  constructor(readonly model: Model<T>) {}

  async all(): Promise<T[]> {
    return await this.model.find({});
  }

  async byId(id: String): Promise<T> {
    const data = await this.model.findById(id);
    return withId(data);
  }
  async create(body: any): Promise<T> {
    const modelInstance = await new this.model(body);
    return modelInstance.save();
  }
  async remove(id: string): Promise<any> {
    await this.model.findByIdAndDelete(id);
    return { success: true };
  }
  async update(id: string, body: any): Promise<any> {
    return await this.model.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
  async find(filters: any, field: string = 'price'): Promise<any> {
    const query = { ...filters };
    if (filters) {
      if (filters.priceFrom || filters.PriceTo) {
        delete query.priceFrom;
        delete query.priceTo;
        const { priceFrom: start, priceTo: end } = filters;
        query[field] =  {$gte: Number(start), $lte: Number(end)};
      }
    
      const keysLike = Object.keys(filters).filter(k => k.includes('like_'));
      if (keysLike.length) {
        keysLike.forEach(k => {
          query[k.replace('like_', '')] = {
            $regex: '.*' + filters[k] + '.*',
          };
          delete query[k];
        });
      }
    }
    return this.model
      .find(query)
      .sort({ createdDate: -1 })
      .exec();
  }
  async findOne(query: any): Promise<T> {
    const data = await this.model.findOne(query).exec();
    return withId(data);
  }
  async bulkCreate(data: any[]): Promise<any> {
    return await this.model.collection.insertMany(data);
  }
  async upload(
    model: string,
    image: UploadedFile,
    imageName?: string
  ): Promise<IFileResponse> {
    return await saveImage(model, image, imageName);
  }
}
const withId = (model: any) => {
  if (model) {
    const newModel = { ...model["_doc"] };
    newModel.id = newModel["_id"];
    return newModel;
  }
  return model;
};
export default CrudService;
