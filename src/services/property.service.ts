import { Property, IProperty } from "@src/models";
import CrudService from "./crud.service";

export class PropertyService extends CrudService<IProperty> {
  constructor() {
    super(Property);
  }

  public async viewStock(): Promise<any> {
    const [houses, apartaments] = await Promise.all([super.find({type:'House'}), super.find({type: 'Apartments'})])
    return [
      {
        id:1, 
        type:'House', 
        stock: houses.length, 
        assessment: `$ ${houses?.reduce((a:IProperty, b: IProperty)=> a.price + b.price)}`
      }
      ,{
        id: 2, 
        type: 'Apartaments', 
        stock: apartaments.length, 
        assessment: `$ ${apartaments?.reduce((a:IProperty, b: IProperty)=> a.price + b.price)}`
      }
    ];
  } 

}
