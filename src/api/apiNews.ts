import axios from "axios";

const BASE_URL = "https://api.currentsapi.services/v1/";
const API_KEY = "W1aZUn6v1H-Azn3VeRo_HWkGsk-eRvPfCZtpO_3LVJA6QpTa";
export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news?`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      withCredentials: false,

      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
