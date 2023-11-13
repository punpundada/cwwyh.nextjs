import { ILoginProp } from "@/types/ILogin";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";

interface ILoginResponce{
    isSuccess:boolean,
    data:{
        accessToken:string,
        message:string
    },
}

const fetchUserLogin = (data:ILoginProp) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return axios.post<ILoginResponce>(`${baseUrl}/user/login`, data);
};

// export const UseLoginData = (data:(ILoginProp | null)) =>{
//     return useQuery(['user-login'],()=> fetchUserLogin(data) , {
//         onSuccess : (data)=>{
//             sessionStorage.setItem('token',data.data.data.accessToken);
//             toast.success('Login Succesfully')
//         },
//         onError:(err:any)=>{
//             toast.error('Something Went Wrong Try Again')
//         },
//         enabled:false
//     } )
// }


export const useLoginData = ()=>{
    return useMutation(fetchUserLogin,{
        onSuccess:(data)=>{
            sessionStorage.setItem('token',data.data.data.accessToken);
            toast.success(data.data.data.message)
        },
        onError:(err:any)=>{
            console.log(err.message)
            toast.error('Something Went Wrong')
        }
    });
}