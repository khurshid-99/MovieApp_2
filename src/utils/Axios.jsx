import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2E0MTIzZTA4NjQ4NGE1NjFiMTVlODY1OTFjNmM1OCIsIm5iZiI6MTczMDg3NjI2NS41MTAwMDAyLCJzdWIiOiI2NzJiMTM2OTQyNWJkY2QyYWNlMzRlNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nxCfBgHqvU1poLESq6SjB9A07_WElc79V3fF5AvOBv0",
  },
});

export default instance;
