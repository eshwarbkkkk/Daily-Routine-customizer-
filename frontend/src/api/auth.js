import axios from "axios";

const backendUrl = "http://localhost:5000";

export const loginUser = async (data) => {
  try {
    // console.log(data);
    const response = await axios.post(`${backendUrl}/api/user/login`, data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signupUser = async (data) => {
  try {
    // console.log(data);
    const response = await axios.post(`${backendUrl}/api/user/signup`, data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
