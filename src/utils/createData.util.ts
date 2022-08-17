import { AuthService } from "@src/services/auth.service";
import { User } from "@src/models/mongo/user.model";
import CrudService from "@src/services//crud.service";

import { PropertyService } from "@src/services/property.service";
import { user, listProperties} from "./dataCreate.util"

const createData = async () => {
    const userService = new CrudService(User);
    const outhService = new AuthService();
    const propertyService = new PropertyService();

    let userDb = await userService.findOne({email: user.email});
    if(!userDb){
        userDb = await outhService.signUp(user);
    }
    
    const properties = await propertyService.all();
    if(!properties.length){
        await propertyService.bulkCreate(listProperties);
    }
}

export default createData;