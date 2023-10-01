import axios, { AxiosInstance } from "axios";
import UseToken from "@/hooks/UseToken";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const createBaseService = (): AxiosInstance => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Define headers as an object
    const headers = {
      'Authorization': `Bearer ${UseToken()}`
    };
  
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: headers
    });
  
    return axiosInstance; // return the axiosInstance
  };
  