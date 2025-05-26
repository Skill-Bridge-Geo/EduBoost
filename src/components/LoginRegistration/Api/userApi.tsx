import axios from "axios";

const baseUrl = "http://localhost:5000/";

export interface RegisterData {
  //   username: string;
  email: string;
  password: string;
}

export const registrationUser = async (userData: RegisterData) => {
  try {
    console.log("Sending user data:", userData);
    const response = await axios.post(`${baseUrl}register`, userData);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
export const loginUser = async (userData: RegisterData) => {
  try {
    const response = await axios.post(`${baseUrl}login`, userData);
    return response.data.accessToken;
  } catch (error: any) {
    return error;
  }
};
export const userProfile = async (token: string) => {
  try {
    const response = await axios.post(`${baseUrl}profile/getProfile`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response) {
      throw new Error("Could not get data");
    } else {
      return response.data;
    }
  } catch (error: any) {
    return error;
  }
};
