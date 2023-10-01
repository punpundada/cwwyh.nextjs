import { ILoginProp } from "@/types/ILogin";
import { IResponce } from "@/types/IResponce";
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export class LoginService{
    static login = async (data:ILoginProp):Promise<IResponce>=>{
        const result = await axios.post(
            `${baseUrl}/user/login`,
            data
        );
       return result.data;
    };   
}