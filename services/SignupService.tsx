import { IResponce } from "@/types/IResponce";
import { ISignup } from "@/types/ISignup";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export class SignupService{
    static signup = async (data:ISignup):Promise<IResponce>=>{
        console.log(baseUrl)
        const result = await axios.post(
            `${baseUrl}/user/signup`,
            data
        );

        return result.data;
    }
}