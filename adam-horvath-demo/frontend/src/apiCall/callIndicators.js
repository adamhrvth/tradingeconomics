import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:3500";

const getData = async ({ countryName, indicatorName, startDate, endDate }) => {
  try {
    const response = await axios.get(API_URL + "/api/indicators", {
      params: {
        countryName,
        indicatorName,
        startDate,
        endDate
      }
    });

    return response;
  }
  catch (error) {
    alert("Something went wrong: " + error.response.data.message);
  }
}

export default getData;