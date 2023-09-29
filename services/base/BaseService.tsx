import axios, { AxiosInstance } from "axios";
import useToken from "../useToken";


export const createBaseService = (): AxiosInstance => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
    // Define headers as an object
    const headers = {
      'Authorization': `Bearer ${useToken}`
    };
  
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: headers
    });
  
    return axiosInstance; // return the axiosInstance
  };
  