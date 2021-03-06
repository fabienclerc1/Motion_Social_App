import axios from "axios";

const baseURL = "https://<your subdomain>.propulsion-learn.ch/backend/api/";

const Axios = axios.create({
    baseURL: baseURL,
});

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.patch["Content-Type"] = "application/json";

export default Axios;
