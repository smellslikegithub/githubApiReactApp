import axios from "axios";

const GitHubInstance = axios.create({
    // format for url with arguments is "https://url?queryparams"
    baseURL: `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
    method: "get",
    responseType: "json"
});

export default GitHubInstance;
