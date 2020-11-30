import './App.css';
import React, {Component} from 'react';
import './Components/Navbar'
import Navbar from "./Components/Navbar";
import Users from "./Components/Users"
import Search from "./Components/Search";
import GithubApiInstance from "./Repository/AxiosInstanceTemplate/GithubApiInstance";


class App extends Component {
    //const githubApiInstance = new GithubApiInstance();
    state = {
        users: [],
        loading: false,
        githubApiInstance : new GithubApiInstance()
    }

    componentDidMount() {
        this.setState({loading: true});
        this.defaultSearchResults();
    }
    defaultSearchResults = async () => {
        const allUsers = await this.state.githubApiInstance.baseUrlLink().get().then(({data}) => data);

        if (allUsers.length) {
            this.setState({users: allUsers, loading: false});
            console.log("Worked");
        }
    }

    searchUser = async (userParam) =>{
        this.setState({loading: true});
        let user = await this.state.githubApiInstance.searchUser(userParam).get().then(({data}) => data.items);
        this.setState({users: user, loading: false});
    }

    resetSearchResults = () =>{
        this.defaultSearchResults();
    }

    render() {
        return (
            <div className="App">
                <h1><Navbar/></h1>
                <div>
                    <Search searchUser={this.searchUser} resetSearchResults={this.resetSearchResults} /></div>
                <div className={"container"}>
                    <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
