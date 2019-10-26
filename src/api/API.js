import axios from "axios";

export default axios.create({
  baseURL: "http://statsapi.web.nhl.com/api/v1",
  responseType: "json"
});