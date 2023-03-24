import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyA9GCBeTKZ9dfeiFMNBRoLIw8p1LNR97d8",
  },
});

export default request;
