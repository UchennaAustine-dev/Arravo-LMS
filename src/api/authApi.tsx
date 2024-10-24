import axios, { AxiosResponse } from "axios";

const url: string = "http://localhost:2345/buyer"; // Your url from your api goes here

export const loginAccount = async (data: any) => {
  try {
    // Feel free to configure this so it matches what you have at your server side bruv
    return await axios.post(`${url}/login` , data).then((res: AxiosResponse) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const registerAccount = async (data: any) => {
    // Also this one
  try {
    return await axios.post(`${url}`, data).then((res: AxiosResponse) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
