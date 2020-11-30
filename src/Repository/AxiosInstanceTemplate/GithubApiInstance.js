import axios from "axios";


class GithubApiInstance {

    baseUrlLink = () => {
        const GitHubInstance = axios.create({
            // format for url with arguments is "https://url?queryparams"
            baseURL: `https://api.github.com/users?client_id=
            ${process.env.REACT_APP_CLIENT_ID}&client_secret=
            ${process.env.REACT_APP_CLIENT_SECRET}`,
            method: "get",
            responseType: "json"
        });
        return GitHubInstance;
    }

    searchUser(param) {
        const getUser = axios.create({
            baseURL: `https://api.github.com/search/users?q=${param}&
            client_id=${process.env.REACT_APP_CLIENT_ID}&
            client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
            method: "get",
            responseType: "json"
        });

        return getUser;
    }
}

export default GithubApiInstance;
