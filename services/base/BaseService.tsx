import axios, { AxiosInstance } from "axios";


export const createBaseService = (): AxiosInstance => {
    const token = sessionStorage.getItem('token') || '';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
    // Define headers as an object
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: headers
    });
  
    return axiosInstance; // return the axiosInstance
  };
  