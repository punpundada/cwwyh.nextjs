import { ISignup } from "@/types/ISignup"
import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

interface ISignupResponce{
    isSuccess:boolean,
    data:{
        email:string,
        userId:string,
        message:string,
    }
}

const fetchUserSignup = (data:ISignup)=>{
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return axios.post<ISignupResponce>(`${baseUrl}/user/signup`,data);
}

export const useSignupData =() =>{
    return useMutation(fetchUserSignup , {
        onSuccess:(data)=>{
            toast.success(data.data.data.message)
        },
        onError:(err:any,data)=>{
            console.log(err.message)
            toast.error('Something Went Wrong')
        }
    })
}