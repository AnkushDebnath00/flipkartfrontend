import axios from "axios";

const URL = "https://flipkart-api-hpmr.onrender.com";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup API", error.message);
  }
};
export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login API", error.message);
    return error.message;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
