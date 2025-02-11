import {instance} from '../config';
import { IUser } from '../interfaces/user';

export const GetAllProducts = async (): Promise<IUser[]>=> {
 
    const response = await instance.get(`/all`);
    const data = response.data as IUser[];
    return data;
}