import axios from "axios";

const GitHubInstance = axios.create({
    baseURL: "https://api.github.com/users",
    method: "get",
    responseType: "json"
});

export default GitHubInstance;
