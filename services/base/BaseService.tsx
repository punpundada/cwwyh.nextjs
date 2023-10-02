import axios, { AxiosInstance } from "axios";
import TokenProvider from "../TokenProvider";

export const createBaseService = (): AxiosInstance => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    let token = TokenProvider();
    // Define headers as an object
    const headers = {
      'Authorization': `Bearer ${token}`
    };
  
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: headers
    });
  
    return axiosInstance; // return the axiosInstance
  };
  