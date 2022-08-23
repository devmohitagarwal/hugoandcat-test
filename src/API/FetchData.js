import axios from "axios";

const queryParams = new URLSearchParams(window.location.search);
const location = queryParams.get("location") || "London";
const apiid = "0037a205884c254c3fe1eb531093170a";

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiid}&units=metric`;

const FetchWeather = () => {
  return new Promise((resolve) =>
    axios({
      method: "post",
      url: URL,
    })
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      return err;
    })
  );
};

export default FetchWeather;
