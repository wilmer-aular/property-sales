import { Property, IProperty } from "@src/models";
import CrudService from "./crud.service";

export class PropertyService extends CrudService<IProperty> {
  constructor() {
    super(Property);
  }
  public async viewStock(): Promise<any> {
    const [houses, apartaments, office] = await Promise.all([super.find({type:'House'}), super.find({type: 'Apartments'}), super.find({type: 'Office'})])

    return [
      {
        id:1, 
        type:'House', 
        stock: houses.length, 
      }
      ,{
        id: 2, 
        type: 'Apartaments', 
        stock: apartaments.length, 
      }
      ,{
        id: 3, 
        type: 'Office', 
        stock: office.length, 
      }
    ];
  } 

}
