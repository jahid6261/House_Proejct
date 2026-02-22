import axios from "axios";

export default axios.create({
  baseURL: "https://house-rent-project-one.vercel.app/api/v1",
});