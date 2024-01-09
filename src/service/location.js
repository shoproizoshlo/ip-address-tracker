import axios from "axios";

const baseUrl =
  "https://geo.ipify.org/api/v2/country?apiKey=at_IJAJNzQ38wdGCtGTCldCG4UTdwnLM";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

export default { getAll };
