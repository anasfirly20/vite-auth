import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-ashen-seven-22.vercel.app",
});

export default instance;
